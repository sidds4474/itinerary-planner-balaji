import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import ClientsSearch from './ClientsSearch';

export const dynamic = 'force-dynamic';

interface ClientRow {
  id: string;
  phone: string;
  name: string;
  email: string | null;
  owner_agent_id: string;
  created_at: string;
  updated_at: string;
}

export default async function ClientsPage() {
  const supabase = await createClient();
  const { data: clients } = await supabase
    .from('clients')
    .select('*')
    .order('updated_at', { ascending: false });

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '24px 20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>Clients</h1>
        <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
          {clients?.length ?? 0} total
        </span>
        <div style={{ flex: 1 }} />
        <Link
          href="/clients/new"
          style={{
            background: 'var(--saffron)', color: 'white', fontWeight: '600', fontSize: '13px',
            padding: '8px 14px', borderRadius: '8px', textDecoration: 'none',
          }}
        >
          + Add Client
        </Link>
      </div>

      <ClientsSearch clients={(clients ?? []) as ClientRow[]} />
    </div>
  );
}
