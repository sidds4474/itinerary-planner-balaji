'use client';

export default function SignOutButton() {
  const handleSignOut = async () => {
    await fetch('/auth/signout', { method: 'POST' });
    window.location.replace('/login');
  };

  return (
    <button
      type="button"
      onClick={handleSignOut}
      style={{
        fontSize: '12px', fontWeight: '600', color: 'var(--text-secondary)',
        background: 'transparent', border: '1px solid var(--bg-border)', borderRadius: '6px',
        padding: '4px 10px', cursor: 'pointer', whiteSpace: 'nowrap',
      }}
    >
      Sign out
    </button>
  );
}
