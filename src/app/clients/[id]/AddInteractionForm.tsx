'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/browser';

const FIELDS = [
  { key: 'destination_package', label: 'Destination / Package they asked about', placeholder: 'e.g. Char Dham 2026' },
  { key: 'budget_mentioned',    label: 'Budget mentioned',                       placeholder: 'e.g. ₹25,000 / person' },
  { key: 'travel_dates',        label: 'Travel dates in mind',                   placeholder: 'e.g. May 1–10' },
  { key: 'group_size',          label: 'Group size',                              placeholder: 'e.g. 6 family members, pilgrims' },
  { key: 'last_objection',      label: 'Last objection raised',                  placeholder: 'e.g. too expensive, dates don’t work' },
  { key: 'what_was_promised',   label: 'What was promised',                       placeholder: 'e.g. Send updated quote by Friday' },
  { key: 'special_needs',       label: 'Special needs in the group',              placeholder: 'e.g. elderly father, knee issue' },
] as const;

type FieldKey = typeof FIELDS[number]['key'];

export default function AddInteractionForm({ clientId }: { clientId: string }) {
  const router = useRouter();
  const [values, setValues] = useState<Record<FieldKey, string>>(() =>
    Object.fromEntries(FIELDS.map(f => [f.key, ''])) as Record<FieldKey, string>
  );
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const anyFilled = Object.values(values).some(v => v.trim());
    if (!anyFilled) { setError('Fill at least one field.'); return; }
    setBusy(true);
    setError(null);
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { setError('Not signed in'); setBusy(false); return; }

    const payload: Record<string, string | null> = { client_id: clientId, agent_id: user.id };
    for (const f of FIELDS) {
      const v = values[f.key].trim();
      payload[f.key] = v || null;
    }

    const { error } = await supabase.from('interactions').insert(payload);
    if (error) { setError(error.message); setBusy(false); return; }

    setValues(Object.fromEntries(FIELDS.map(f => [f.key, ''])) as Record<FieldKey, string>);
    setBusy(false);
    router.refresh();
  };

  return (
    <form onSubmit={onSubmit} style={{ background: 'var(--bg-surface)', border: '1px solid var(--bg-border)', borderRadius: '10px', padding: '16px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px', marginBottom: '14px' }}>
        {FIELDS.map(f => (
          <div key={f.key}>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>{f.label}</label>
            <input
              value={values[f.key]}
              onChange={e => setValues(v => ({ ...v, [f.key]: e.target.value }))}
              placeholder={f.placeholder}
              style={{
                width: '100%', padding: '8px 10px', fontSize: '13px',
                background: 'var(--bg-input)', border: '1px solid var(--bg-border)',
                color: 'var(--text-primary)', borderRadius: '6px', outline: 'none',
              }}
            />
          </div>
        ))}
      </div>

      {error && (
        <div style={{ fontSize: '12px', color: '#e74c3c', marginBottom: '10px' }}>{error}</div>
      )}

      <button type="submit" disabled={busy} style={{
        background: 'var(--saffron)', color: 'white', fontWeight: '600', fontSize: '13px',
        padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: busy ? 'wait' : 'pointer', opacity: busy ? 0.7 : 1,
      }}>
        {busy ? 'Saving…' : 'Log Interaction'}
      </button>
    </form>
  );
}
