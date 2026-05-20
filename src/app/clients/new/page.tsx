'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/browser';

interface Agent { id: string; full_name: string | null; email: string | null; }

export default function NewClientPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [isAdmin, setIsAdmin] = useState(false);
  const [agents, setAgents] = useState<Agent[]>([]);
  const [ownerId, setOwnerId] = useState<string>('');

  useEffect(() => {
    (async () => {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      setOwnerId(user.id);
      const { data: me } = await supabase.from('profiles').select('role').eq('id', user.id).single();
      if (me?.role === 'admin') {
        setIsAdmin(true);
        const { data } = await supabase.from('profiles').select('id, full_name, email').order('full_name');
        setAgents((data as Agent[]) || []);
      }
    })();
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { setError('Not signed in'); setBusy(false); return; }

    const { data, error } = await supabase
      .from('clients')
      .insert({
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim() || null,
        notes: notes.trim() || null,
        owner_agent_id: ownerId || user.id,
      })
      .select()
      .single();
    if (error) {
      setError(error.message);
      setBusy(false);
      return;
    }
    router.push(`/clients/${data.id}`);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '24px 20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
        <Link href="/clients" style={{ fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none' }}>← Clients</Link>
      </div>
      <h1 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-primary)', marginTop: 0, marginBottom: '20px' }}>New Client</h1>

      <form onSubmit={onSubmit} style={{ background: 'var(--bg-surface)', border: '1px solid var(--bg-border)', borderRadius: '12px', padding: '24px' }}>
        <Field label="Full Name *">
          <input required value={name} onChange={e => setName(e.target.value)} style={inputStyle} />
        </Field>
        <Field label="Phone Number *">
          <input required value={phone} onChange={e => setPhone(e.target.value)} placeholder="+91 98765 43210" style={inputStyle} />
        </Field>
        <Field label="Email">
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} style={inputStyle} />
        </Field>
        <Field label="Notes">
          <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={3} style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }} />
        </Field>

        {isAdmin && agents.length > 0 && (
          <Field label="Assign To Agent *">
            <select value={ownerId} onChange={e => setOwnerId(e.target.value)} style={{ ...inputStyle, cursor: 'pointer' }}>
              {agents.map(a => (
                <option key={a.id} value={a.id}>{a.full_name || a.email || a.id.slice(0, 8)}</option>
              ))}
            </select>
          </Field>
        )}

        {error && (
          <div style={{ fontSize: '12px', color: '#e74c3c', background: 'rgba(231,76,60,0.08)', border: '1px solid rgba(231,76,60,0.3)', borderRadius: '6px', padding: '8px 10px', marginBottom: '14px' }}>
            {error.includes('duplicate') ? 'A client with this phone number already exists.' : error}
          </div>
        )}

        <button type="submit" disabled={busy} style={{
          background: 'var(--saffron)', color: 'white', fontWeight: '600', fontSize: '14px',
          padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: busy ? 'wait' : 'pointer', opacity: busy ? 0.7 : 1,
        }}>
          {busy ? 'Saving…' : 'Create Client'}
        </button>
      </form>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '10px 12px', fontSize: '14px',
  background: 'var(--bg-input)', border: '1px solid var(--bg-border)',
  color: 'var(--text-primary)', borderRadius: '8px', outline: 'none',
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '14px' }}>
      <label style={{ display: 'block', fontSize: '11px', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>{label}</label>
      {children}
    </div>
  );
}
