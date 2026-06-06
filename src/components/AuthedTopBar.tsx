import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import SignOutButton from '@/components/SignOutButton';

export default async function AuthedTopBar() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data: profile } = await supabase
    .from('profiles')
    .select('full_name, email, role')
    .eq('id', user.id)
    .single();

  const displayName = profile?.full_name || profile?.email || user.email;
  const role = profile?.role || 'agent';

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'var(--bg-surface)', borderBottom: '1px solid var(--bg-border)',
    }} className="px-3 sm:px-5 py-2.5 flex items-center gap-3 sm:gap-5">
      <div style={{ fontWeight: '700', fontSize: '14px', color: 'var(--saffron)', whiteSpace: 'nowrap' }}>
        Balaji Travels
      </div>
      <nav style={{ display: 'flex', gap: '4px' }}>
        <Link href="/quote/new" style={navLink}>Quote</Link>
        <Link href="/clients" style={navLink}>Clients</Link>
      </nav>
      <div style={{ flex: 1 }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', minWidth: 0 }}>
        <span className="hidden sm:inline truncate max-w-[140px]" style={{ color: 'var(--text-secondary)' }}>{displayName}</span>
        <span className="hidden sm:inline" style={{
          fontSize: '10px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em',
          color: role === 'admin' ? 'var(--saffron)' : 'var(--text-muted)',
          background: role === 'admin' ? 'rgba(255,107,0,0.12)' : 'var(--bg-elevated)',
          border: `1px solid ${role === 'admin' ? 'var(--saffron)' : 'var(--bg-border)'}`,
          borderRadius: '4px', padding: '2px 6px', whiteSpace: 'nowrap',
        }}>{role}</span>
        <SignOutButton />
      </div>
    </header>
  );
}

const navLink: React.CSSProperties = {
  fontSize: '13px', fontWeight: '500', color: 'var(--text-secondary)',
  textDecoration: 'none', padding: '6px 10px', borderRadius: '6px',
};
