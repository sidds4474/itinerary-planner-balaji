'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

interface ClientRow {
  id: string;
  phone: string;
  name: string;
  email: string | null;
  owner_agent_id: string;
  created_at: string;
  updated_at: string;
}

export default function ClientsSearch({ clients }: { clients: ClientRow[] }) {
  const [q, setQ] = useState('');

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return clients;
    return clients.filter(c =>
      c.name.toLowerCase().includes(needle) ||
      c.phone.toLowerCase().includes(needle) ||
      (c.email || '').toLowerCase().includes(needle)
    );
  }, [q, clients]);

  return (
    <>
      <input
        value={q}
        onChange={e => setQ(e.target.value)}
        placeholder="Search by name, phone, or email…"
        style={{
          width: '100%', padding: '10px 14px', fontSize: '14px',
          background: 'var(--bg-input)', border: '1px solid var(--bg-border)',
          color: 'var(--text-primary)', borderRadius: '8px', outline: 'none', marginBottom: '16px',
        }}
      />

      {filtered.length === 0 ? (
        <div style={{
          padding: '40px 20px', textAlign: 'center', color: 'var(--text-muted)',
          background: 'var(--bg-surface)', border: '1px solid var(--bg-border)', borderRadius: '10px',
        }}>
          {clients.length === 0
            ? 'No clients yet. Click + Add Client to create one.'
            : `No clients match "${q}".`}
        </div>
      ) : (
        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--bg-border)', borderRadius: '10px', overflow: 'hidden' }}>
          {filtered.map((c, i) => (
            <Link
              key={c.id}
              href={`/clients/${c.id}`}
              style={{
                display: 'flex', alignItems: 'center', gap: '16px',
                padding: '14px 18px', textDecoration: 'none',
                borderTop: i === 0 ? 'none' : '1px solid var(--bg-border)',
                color: 'var(--text-primary)',
              }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '2px' }}>{c.name}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  {c.phone}{c.email ? ` · ${c.email}` : ''}
                </div>
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                Updated {new Date(c.updated_at).toLocaleDateString()}
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
