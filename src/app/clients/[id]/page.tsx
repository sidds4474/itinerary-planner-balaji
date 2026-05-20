import Link from 'next/link';
import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import AddInteractionForm from './AddInteractionForm';
import ClientActions from './ClientActions';

export const dynamic = 'force-dynamic';

interface Props { params: Promise<{ id: string }> }

export default async function ClientDetailPage({ params }: Props) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: client } = await supabase
    .from('clients')
    .select('*')
    .eq('id', id)
    .single();

  if (!client) notFound();

  const { data: interactions } = await supabase
    .from('interactions')
    .select('*')
    .eq('client_id', id)
    .order('created_at', { ascending: false });

  const { data: { user } } = await supabase.auth.getUser();
  const { data: me } = await supabase.from('profiles').select('role').eq('id', user!.id).single();
  const isAdmin = me?.role === 'admin';

  // Admin can reassign — fetch agents list. Regular agents don't need it.
  const { data: agents } = isAdmin
    ? await supabase.from('profiles').select('id, full_name, email').order('full_name')
    : { data: [] };
  const ownerProfile = isAdmin
    ? agents?.find(a => a.id === client.owner_agent_id)
    : null;

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '24px 20px' }}>
      <div style={{ marginBottom: '14px' }}>
        <Link href="/clients" style={{ fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none' }}>← Clients</Link>
      </div>

      <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--bg-border)', borderRadius: '12px', padding: '20px', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '22px', fontWeight: '700', color: 'var(--text-primary)', margin: 0, marginBottom: '6px' }}>{client.name}</h1>
        <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
          {client.phone}{client.email ? ` · ${client.email}` : ''}
        </div>
        {client.notes && (
          <div style={{ marginTop: '12px', fontSize: '13px', color: 'var(--text-secondary)', whiteSpace: 'pre-wrap' }}>{client.notes}</div>
        )}
        {isAdmin && ownerProfile && (
          <div style={{ marginTop: '10px', fontSize: '12px', color: 'var(--text-muted)' }}>
            Owner agent: <span style={{ color: 'var(--text-secondary)' }}>{ownerProfile.full_name || ownerProfile.email}</span>
          </div>
        )}
        <div style={{ marginTop: '14px' }}>
          <ClientActions
            clientId={client.id}
            clientName={client.name}
            isAdmin={isAdmin}
            currentOwnerId={client.owner_agent_id}
            agents={agents ?? []}
          />
        </div>
      </div>

      <h2 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-primary)', marginTop: '24px', marginBottom: '12px' }}>
        Add Interaction
      </h2>
      <AddInteractionForm clientId={client.id} />

      <h2 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-primary)', marginTop: '32px', marginBottom: '12px' }}>
        History ({interactions?.length ?? 0})
      </h2>

      {!interactions || interactions.length === 0 ? (
        <div style={{ padding: '24px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '13px', background: 'var(--bg-surface)', border: '1px solid var(--bg-border)', borderRadius: '10px' }}>
          No interactions logged yet.
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {interactions.map(it => <InteractionCard key={it.id} it={it} />)}
        </div>
      )}
    </div>
  );
}

interface InteractionRow {
  id: string;
  destination_package: string | null;
  budget_mentioned: string | null;
  travel_dates: string | null;
  group_size: string | null;
  last_objection: string | null;
  what_was_promised: string | null;
  special_needs: string | null;
  created_at: string;
}

function InteractionCard({ it }: { it: InteractionRow }) {
  const fields: [string, string | null][] = [
    ['Destination / Package', it.destination_package],
    ['Budget', it.budget_mentioned],
    ['Travel Dates', it.travel_dates],
    ['Group Size', it.group_size],
    ['Last Objection', it.last_objection],
    ['What Was Promised', it.what_was_promised],
    ['Special Needs', it.special_needs],
  ];
  const filled = fields.filter(([, v]) => v && v.trim());

  return (
    <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--bg-border)', borderRadius: '10px', padding: '14px 16px' }}>
      <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '10px' }}>
        {new Date(it.created_at).toLocaleString()}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
        {filled.map(([label, value]) => (
          <div key={label}>
            <div style={{ fontSize: '10px', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>{label}</div>
            <div style={{ fontSize: '13px', color: 'var(--text-primary)' }}>{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
