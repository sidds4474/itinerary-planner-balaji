'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/browser';

interface Agent { id: string; full_name: string | null; email: string | null; }

interface Props {
  clientId: string;
  clientName: string;
  isAdmin: boolean;
  currentOwnerId: string;
  agents: Agent[];
}

export default function ClientActions({ clientId, clientName, isAdmin, currentOwnerId, agents }: Props) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [reassigning, setReassigning] = useState(false);
  const [newOwner, setNewOwner] = useState(currentOwnerId);

  const handleDelete = async () => {
    if (!confirm(`Delete "${clientName}"? This also removes all interactions for this client. Cannot be undone.`)) return;
    setBusy(true);
    const supabase = createClient();
    const { error } = await supabase.from('clients').delete().eq('id', clientId);
    if (error) {
      alert(`Could not delete: ${error.message}`);
      setBusy(false);
      return;
    }
    router.push('/clients');
    router.refresh();
  };

  const handleReassign = async () => {
    if (newOwner === currentOwnerId) { setReassigning(false); return; }
    setBusy(true);
    const supabase = createClient();
    const { error } = await supabase
      .from('clients')
      .update({ owner_agent_id: newOwner, updated_at: new Date().toISOString() })
      .eq('id', clientId);
    if (error) { alert(`Could not reassign: ${error.message}`); setBusy(false); return; }
    setReassigning(false);
    setBusy(false);
    router.refresh();
  };

  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
      {isAdmin && !reassigning && (
        <button
          type="button"
          onClick={() => setReassigning(true)}
          style={btnSecondary}
        >
          Reassign Agent
        </button>
      )}
      {isAdmin && reassigning && (
        <>
          <select
            value={newOwner}
            onChange={e => setNewOwner(e.target.value)}
            style={{ ...btnSecondary, cursor: 'pointer' }}
          >
            {agents.map(a => (
              <option key={a.id} value={a.id}>{a.full_name || a.email || a.id.slice(0, 8)}</option>
            ))}
          </select>
          <button type="button" disabled={busy} onClick={handleReassign} style={btnPrimary}>Save</button>
          <button type="button" onClick={() => { setReassigning(false); setNewOwner(currentOwnerId); }} style={btnSecondary}>Cancel</button>
        </>
      )}
      <button
        type="button"
        disabled={busy}
        onClick={handleDelete}
        style={{ ...btnSecondary, color: '#e74c3c', borderColor: 'rgba(231,76,60,0.4)' }}
      >
        Delete Client
      </button>
    </div>
  );
}

const btnSecondary: React.CSSProperties = {
  fontSize: '12px', fontWeight: '600', color: 'var(--text-secondary)',
  background: 'transparent', border: '1px solid var(--bg-border)',
  borderRadius: '6px', padding: '6px 12px', cursor: 'pointer',
};

const btnPrimary: React.CSSProperties = {
  fontSize: '12px', fontWeight: '600', color: 'white',
  background: 'var(--saffron)', border: 'none',
  borderRadius: '6px', padding: '6px 12px', cursor: 'pointer',
};
