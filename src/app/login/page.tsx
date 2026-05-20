'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/lib/supabase/browser';

export default function LoginPage() {
  const router = useRouter();
  const search = useSearchParams();
  const next = search.get('next') || '/quote/new';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
      setBusy(false);
      return;
    }
    router.push(next);
    router.refresh();
  };

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '20px', background: 'var(--bg-base)',
    }}>
      <form onSubmit={onSubmit} style={{
        width: '100%', maxWidth: '400px', background: 'var(--bg-surface)',
        border: '1px solid var(--bg-border)', borderRadius: '12px', padding: '32px',
      }}>
        <h1 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
          Balaji Travels — Sign in
        </h1>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '6px', marginBottom: '24px' }}>
          Internal quote builder for agents
        </p>

        <label style={{ display: 'block', fontSize: '11px', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Email</label>
        <input
          type="email"
          required
          autoFocus
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--bg-border)', background: 'var(--bg-input)', color: 'var(--text-primary)', fontSize: '14px', marginBottom: '16px', outline: 'none' }}
        />

        <label style={{ display: 'block', fontSize: '11px', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--bg-border)', background: 'var(--bg-input)', color: 'var(--text-primary)', fontSize: '14px', marginBottom: '20px', outline: 'none' }}
        />

        {error && (
          <div style={{ fontSize: '12px', color: '#e74c3c', background: 'rgba(231,76,60,0.08)', border: '1px solid rgba(231,76,60,0.3)', borderRadius: '6px', padding: '8px 10px', marginBottom: '16px' }}>
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={busy}
          style={{
            width: '100%', padding: '12px', borderRadius: '8px',
            background: 'var(--saffron)', color: 'white', fontWeight: '600', fontSize: '14px',
            border: 'none', cursor: busy ? 'wait' : 'pointer', opacity: busy ? 0.7 : 1,
          }}
        >
          {busy ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
    </div>
  );
}
