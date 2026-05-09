'use client';

import { QuoteFormData, DayItinerary } from '@/types/quote';

interface Props {
  form: QuoteFormData;
  update: (patch: Partial<QuoteFormData>) => void;
}

const inputStyle = {
  background: 'var(--bg-input)',
  border: '1px solid var(--bg-border)',
  color: 'var(--text-primary)',
  borderRadius: '8px',
  padding: '10px 12px',
  fontSize: '13px',
  width: '100%',
  outline: 'none',
};

export default function ItinerarySection({ form, update }: Props) {
  const days = form.dayItinerary;
  const setDays = (d: DayItinerary[]) => update({ dayItinerary: d });

  const addDay = () => {
    const n = days.length + 1;
    setDays([...days, { dayLabel: `Day ${String(n).padStart(2, '0')} :: `, description: '' }]);
  };

  const removeDay = (i: number) => setDays(days.filter((_, idx) => idx !== i));

  const updateDay = (i: number, patch: Partial<DayItinerary>) =>
    setDays(days.map((d, idx) => idx === i ? { ...d, ...patch } : d));

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div>
          <h2 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-primary)' }}>Day-wise Itinerary</h2>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
            Heading format: <span style={{ fontFamily: 'monospace', background: 'var(--bg-elevated)', padding: '2px 6px', borderRadius: '4px', fontSize: '11px', color: 'var(--saffron)' }}>Day 01 :: Haridwar – Barkot (180 Kms, 5-6 Hrs)</span>
          </p>
        </div>
        <button
          onClick={addDay}
          style={{ background: 'var(--saffron)', color: 'white', border: 'none', borderRadius: '8px', padding: '8px 16px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', flexShrink: 0, marginLeft: '16px' }}
        >
          + Add Day
        </button>
      </div>

      {days.map((day, i) => (
        <div key={i} style={{ background: 'var(--bg-surface)', border: '1px solid var(--bg-border)', borderRadius: '12px', overflow: 'hidden', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', background: 'var(--bg-elevated)', borderBottom: '1px solid var(--bg-border)' }}>
            <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--saffron)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Day {i + 1}</span>
            {days.length > 1 && (
              <button onClick={() => removeDay(i)} style={{ fontSize: '12px', color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer' }}>Remove</button>
            )}
          </div>
          <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Day Heading</label>
              <input
                style={inputStyle}
                placeholder={`Day ${String(i + 1).padStart(2, '0')} :: From – To (Distance, approx time)`}
                value={day.dayLabel}
                onChange={e => updateDay(i, { dayLabel: e.target.value })}
                onFocus={e => e.target.style.borderColor = 'var(--saffron)'}
                onBlur={e => e.target.style.borderColor = 'var(--bg-border)'}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Description</label>
              <textarea
                style={{ ...inputStyle, resize: 'vertical', lineHeight: '1.6', minHeight: '120px' }}
                rows={5}
                placeholder="Describe the day's activities, sightseeing, darshan timings, meals, and overnight stay..."
                value={day.description}
                onChange={e => updateDay(i, { description: e.target.value })}
                onFocus={e => e.target.style.borderColor = 'var(--saffron)'}
                onBlur={e => e.target.style.borderColor = 'var(--bg-border)'}
              />
            </div>
          </div>
        </div>
      ))}

      {days.length === 0 && (
        <div style={{ textAlign: 'center', padding: '48px', border: '2px dashed var(--bg-border)', borderRadius: '12px', color: 'var(--text-muted)' }}>
          <p style={{ fontSize: '14px' }}>No days added yet.</p>
          <button onClick={addDay} style={{ marginTop: '8px', fontSize: '13px', color: 'var(--saffron)', background: 'none', border: 'none', cursor: 'pointer', fontWeight: '500' }}>
            Add first day →
          </button>
        </div>
      )}
    </div>
  );
}
