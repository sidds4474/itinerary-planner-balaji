'use client';

import { QuoteFormData } from '@/types/quote';

interface Props {
  form: QuoteFormData;
  update: (patch: Partial<QuoteFormData>) => void;
}

const inputStyle = {
  background: 'var(--bg-input)',
  border: '1px solid var(--bg-border)',
  color: 'var(--text-primary)',
  borderRadius: '8px',
  padding: '8px 12px',
  fontSize: '13px',
  width: '100%',
  outline: 'none',
};

function ListEditor({ items, onChange, addLabel, accentColor }: {
  items: string[];
  onChange: (items: string[]) => void;
  addLabel: string;
  accentColor: string;
}) {
  const update = (i: number, val: string) => onChange(items.map((item, idx) => idx === i ? val : item));
  const remove = (i: number) => onChange(items.filter((_, idx) => idx !== i));
  const add = () => onChange([...items, '']);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span style={{ color: accentColor, fontSize: '13px', flexShrink: 0, width: '16px' }}>Ø</span>
          <input
            style={inputStyle}
            value={item}
            onChange={e => update(i, e.target.value)}
            onFocus={e => e.target.style.borderColor = 'var(--saffron)'}
            onBlur={e => e.target.style.borderColor = 'var(--bg-border)'}
          />
          <button
            onClick={() => remove(i)}
            style={{ color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', lineHeight: 1, flexShrink: 0 }}
          >×</button>
        </div>
      ))}
      <button
        onClick={add}
        style={{ fontSize: '12px', color: accentColor, background: 'none', border: 'none', cursor: 'pointer', fontWeight: '500', textAlign: 'left', marginTop: '4px' }}
      >
        + {addLabel}
      </button>
    </div>
  );
}

export default function InclusionsSection({ form, update }: Props) {
  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-primary)' }}>Inclusions & Exclusions</h2>
        <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>Pre-filled with standard boilerplate. Edit as needed for this quote.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--bg-border)', borderRadius: '12px', overflow: 'hidden' }}>
          <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--bg-border)', background: 'rgba(45, 80, 22, 0.2)' }}>
            <span style={{ fontSize: '12px', fontWeight: '700', color: '#6BBF45' }}>✓ Inclusions</span>
          </div>
          <div style={{ padding: '16px' }}>
            <ListEditor
              items={form.inclusions}
              onChange={inclusions => update({ inclusions })}
              addLabel="Add inclusion"
              accentColor="#6BBF45"
            />
          </div>
        </div>

        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--bg-border)', borderRadius: '12px', overflow: 'hidden' }}>
          <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--bg-border)', background: 'rgba(180, 40, 40, 0.15)' }}>
            <span style={{ fontSize: '12px', fontWeight: '700', color: '#E06060' }}>✕ Exclusions</span>
          </div>
          <div style={{ padding: '16px' }}>
            <ListEditor
              items={form.exclusions}
              onChange={exclusions => update({ exclusions })}
              addLabel="Add exclusion"
              accentColor="#E06060"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
