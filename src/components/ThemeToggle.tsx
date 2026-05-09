'use client';

import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggle}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 12px',
        borderRadius: '20px',
        border: '1px solid var(--bg-border)',
        background: 'var(--bg-elevated)',
        cursor: 'pointer',
        transition: 'all 0.2s',
        flexShrink: 0,
      }}
    >
      {/* Track */}
      <div style={{
        width: '32px',
        height: '18px',
        borderRadius: '9px',
        background: isDark ? '#333' : '#DDD',
        position: 'relative',
        transition: 'background 0.2s',
        flexShrink: 0,
      }}>
        {/* Knob */}
        <div style={{
          position: 'absolute',
          top: '2px',
          left: isDark ? '14px' : '2px',
          width: '14px',
          height: '14px',
          borderRadius: '50%',
          background: isDark ? 'var(--saffron)' : '#888',
          transition: 'left 0.2s, background 0.2s',
        }} />
      </div>
      <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '500' }}>
        {isDark ? '🌙 Dark' : '☀️ Light'}
      </span>
    </button>
  );
}
