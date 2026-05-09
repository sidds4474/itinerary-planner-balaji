'use client';

import { QuoteFormData, HotelOption, HotelStop, HotelTier } from '@/types/quote';

interface Props {
  form: QuoteFormData;
  update: (patch: Partial<QuoteFormData>) => void;
}

const TIERS: HotelTier[] = ['Standard', 'Deluxe', 'Luxury', 'Super Luxury'];

const inputStyle = {
  background: 'var(--bg-input)',
  border: '1px solid var(--bg-border)',
  color: 'var(--text-primary)',
  borderRadius: '8px',
  padding: '8px 10px',
  fontSize: '12px',
  width: '100%',
  outline: 'none',
};

export default function HotelOptionsSection({ form, update }: Props) {
  const options = form.hotelOptions;
  const setOptions = (opts: HotelOption[]) => update({ hotelOptions: opts });

  const addOption = () => {
    if (options.length >= 3) return;
    const tiers: HotelTier[] = ['Standard', 'Deluxe', 'Luxury'];
    setOptions([...options, {
      tier: tiers[options.length] || 'Luxury',
      hotels: options[0]?.hotels.map(s => ({ ...s, hotel: '' })) || [{ days: 'Day 01', destination: '', hotel: '' }],
      totalCost: 0,
    }]);
  };

  const removeOption = (i: number) => setOptions(options.filter((_, idx) => idx !== i));

  const updateOption = (i: number, patch: Partial<HotelOption>) =>
    setOptions(options.map((o, idx) => idx === i ? { ...o, ...patch } : o));

  const updateStop = (optIdx: number, stopIdx: number, patch: Partial<HotelStop>) => {
    const newStops = options[optIdx].hotels.map((s, i) => i === stopIdx ? { ...s, ...patch } : s);
    updateOption(optIdx, { hotels: newStops });
  };

  const addStop = (optIdx: number) => {
    updateOption(optIdx, { hotels: [...options[optIdx].hotels, { days: '', destination: '', hotel: '' }] });
  };

  const removeStop = (optIdx: number, stopIdx: number) => {
    updateOption(optIdx, { hotels: options[optIdx].hotels.filter((_, i) => i !== stopIdx) });
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-primary)' }}>Hotel Options</h2>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>Add up to 3 tiers — each gets its own price in the PDF</p>
        </div>
        {options.length < 3 && (
          <button
            onClick={addOption}
            style={{ background: 'var(--saffron)', color: 'white', border: 'none', borderRadius: '8px', padding: '8px 16px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}
          >
            + Add Option
          </button>
        )}
      </div>

      {/* Pricing mode */}
      <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--bg-border)', borderRadius: '10px', padding: '14px 16px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Price display:</span>
        {(['total', 'per_person'] as const).map(mode => (
          <label key={mode} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <input
              type="radio"
              name="pricingMode"
              value={mode}
              checked={form.pricingMode === mode}
              onChange={() => update({ pricingMode: mode })}
              style={{ accentColor: 'var(--saffron)' }}
            />
            <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
              {mode === 'total' ? 'Total Package Cost' : 'Per Person Cost'}
            </span>
          </label>
        ))}
      </div>

      {/* Options */}
      {options.map((opt, optIdx) => (
        <div key={optIdx} style={{ background: 'var(--bg-surface)', border: '1px solid var(--bg-border)', borderRadius: '12px', overflow: 'hidden', marginBottom: '16px' }}>
          {/* Option header */}
          <div style={{ background: 'var(--bg-elevated)', borderBottom: '1px solid var(--bg-border)', padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--saffron)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Option {optIdx + 1}
              </span>
              <select
                style={{ background: 'var(--bg-input)', border: '1px solid var(--bg-border)', color: 'var(--text-primary)', borderRadius: '6px', padding: '4px 8px', fontSize: '12px', cursor: 'pointer' }}
                value={opt.tier}
                onChange={e => updateOption(optIdx, { tier: e.target.value as HotelTier })}
              >
                {TIERS.map(t => <option key={t} value={t} style={{ background: 'var(--bg-elevated)' }}>{t}</option>)}
              </select>
            </div>
            {options.length > 1 && (
              <button
                onClick={() => removeOption(optIdx)}
                style={{ fontSize: '12px', color: 'var(--text-muted)', cursor: 'pointer', background: 'none', border: 'none' }}
              >
                Remove
              </button>
            )}
          </div>

          {/* Table */}
          <div style={{ padding: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr 1.6fr 24px', gap: '8px', marginBottom: '8px' }}>
              {['Days', 'Destination', 'Hotel / Accommodation', ''].map(h => (
                <span key={h} style={{ fontSize: '10px', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h}</span>
              ))}
            </div>
            {opt.hotels.map((stop, stopIdx) => (
              <div key={stopIdx} style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr 1.6fr 24px', gap: '8px', marginBottom: '8px', alignItems: 'center' }}>
                <input style={inputStyle} placeholder="Day 01" value={stop.days} onChange={e => updateStop(optIdx, stopIdx, { days: e.target.value })} onFocus={e => e.target.style.borderColor = 'var(--saffron)'} onBlur={e => e.target.style.borderColor = 'var(--bg-border)'} />
                <input style={inputStyle} placeholder="e.g. Barkot" value={stop.destination} onChange={e => updateStop(optIdx, stopIdx, { destination: e.target.value })} onFocus={e => e.target.style.borderColor = 'var(--saffron)'} onBlur={e => e.target.style.borderColor = 'var(--bg-border)'} />
                <input style={inputStyle} placeholder="e.g. Hotel Trishul" value={stop.hotel} onChange={e => updateStop(optIdx, stopIdx, { hotel: e.target.value })} onFocus={e => e.target.style.borderColor = 'var(--saffron)'} onBlur={e => e.target.style.borderColor = 'var(--bg-border)'} />
                {opt.hotels.length > 1 ? (
                  <button onClick={() => removeStop(optIdx, stopIdx)} style={{ color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', lineHeight: 1 }}>×</button>
                ) : <span />}
              </div>
            ))}
            <button
              onClick={() => addStop(optIdx)}
              style={{ fontSize: '12px', color: 'var(--saffron)', background: 'none', border: 'none', cursor: 'pointer', fontWeight: '500', padding: '4px 0' }}
            >
              + Add stop
            </button>
          </div>

          {/* Price */}
          <div style={{ padding: '12px 16px', borderTop: '1px solid var(--bg-border)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
              {form.pricingMode === 'total' ? 'Total Cost (₹)' : 'Per Person (₹)'}
            </span>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <span style={{ position: 'absolute', left: '10px', color: 'var(--text-muted)', fontSize: '13px' }}>₹</span>
              <input
                type="number"
                style={{ ...inputStyle, paddingLeft: '24px', width: '160px' }}
                placeholder="0"
                value={opt.totalCost || ''}
                onChange={e => updateOption(optIdx, { totalCost: parseFloat(e.target.value) || 0 })}
                onFocus={e => e.target.style.borderColor = 'var(--saffron)'}
                onBlur={e => e.target.style.borderColor = 'var(--bg-border)'}
              />
            </div>
            {opt.totalCost > 0 && (
              <span style={{ fontSize: '15px', fontWeight: '700', color: 'var(--saffron)' }}>
                ₹{opt.totalCost.toLocaleString('en-IN')}/-
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
