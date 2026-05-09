'use client';

import { QuoteFormData, HotelOption, HotelStop, HotelTier } from '@/types/quote';

interface Props {
  form: QuoteFormData;
  update: (patch: Partial<QuoteFormData>) => void;
}

const TIERS: HotelTier[] = ['Standard', 'Deluxe', 'Luxury', 'Super Luxury'];
const inputClass = "border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white";

export default function HotelOptionsSection({ form, update }: Props) {
  const options = form.hotelOptions;

  const setOptions = (opts: HotelOption[]) => update({ hotelOptions: opts });

  const addOption = () => {
    if (options.length >= 3) return;
    const tiers: HotelTier[] = ['Standard', 'Deluxe', 'Luxury'];
    setOptions([...options, {
      tier: tiers[options.length] || 'Luxury',
      hotels: [{ days: 'Day 01', destination: '', hotel: '' }],
      totalCost: 0,
    }]);
  };

  const removeOption = (i: number) => setOptions(options.filter((_, idx) => idx !== i));

  const updateOption = (i: number, patch: Partial<HotelOption>) => {
    setOptions(options.map((o, idx) => idx === i ? { ...o, ...patch } : o));
  };

  const updateStop = (optIdx: number, stopIdx: number, patch: Partial<HotelStop>) => {
    const newStops = options[optIdx].hotels.map((s, i) => i === stopIdx ? { ...s, ...patch } : s);
    updateOption(optIdx, { hotels: newStops });
  };

  const addStop = (optIdx: number) => {
    const stops = options[optIdx].hotels;
    updateOption(optIdx, { hotels: [...stops, { days: '', destination: '', hotel: '' }] });
  };

  const removeStop = (optIdx: number, stopIdx: number) => {
    const stops = options[optIdx].hotels.filter((_, i) => i !== stopIdx);
    updateOption(optIdx, { hotels: stops });
  };

  const copyStopsToAll = (fromIdx: number) => {
    const sourceStops = options[fromIdx].hotels;
    setOptions(options.map((o, i) => i === fromIdx ? o : {
      ...o,
      hotels: sourceStops.map(s => ({ ...s, hotel: '' })),
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold text-gray-800">Hotel Options</h2>
          <p className="text-xs text-gray-500 mt-0.5">Add up to 3 pricing tiers (Standard / Deluxe / Luxury)</p>
        </div>
        {options.length < 3 && (
          <button onClick={addOption} className="px-4 py-2 text-sm font-medium text-white rounded-lg" style={{ background: 'var(--saffron)' }}>
            + Add Option
          </button>
        )}
      </div>

      {/* Pricing mode */}
      <div className="flex gap-4 items-center">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Show price as:</span>
        {(['total', 'per_person'] as const).map(mode => (
          <label key={mode} className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="pricingMode" value={mode} checked={form.pricingMode === mode} onChange={() => update({ pricingMode: mode })} className="accent-orange-500" />
            <span className="text-sm text-gray-700">{mode === 'total' ? 'Total Package Cost' : 'Per Person Cost'}</span>
          </label>
        ))}
      </div>

      {options.map((opt, optIdx) => (
        <div key={optIdx} className="border border-gray-200 rounded-xl overflow-hidden">
          {/* Option header */}
          <div className="flex items-center justify-between px-4 py-3" style={{ background: 'var(--green)', color: 'white' }}>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold">Option {optIdx + 1}</span>
              <select
                className="text-sm rounded px-2 py-1 text-gray-800 bg-white border-0"
                value={opt.tier}
                onChange={e => updateOption(optIdx, { tier: e.target.value as HotelTier })}
              >
                {TIERS.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              <span className="text-xs opacity-70">Hotels</span>
            </div>
            <div className="flex items-center gap-3">
              {optIdx === 0 && options.length > 1 && (
                <button onClick={() => copyStopsToAll(0)} className="text-xs opacity-80 hover:opacity-100 underline">
                  Copy stops to other options
                </button>
              )}
              {options.length > 1 && (
                <button onClick={() => removeOption(optIdx)} className="text-xs opacity-70 hover:opacity-100">✕ Remove</button>
              )}
            </div>
          </div>

          {/* Hotel stops table */}
          <div className="p-4 space-y-2">
            <div className="grid grid-cols-12 gap-2 mb-1">
              <span className="col-span-3 text-xs font-semibold text-gray-400 uppercase">Days</span>
              <span className="col-span-4 text-xs font-semibold text-gray-400 uppercase">Destination</span>
              <span className="col-span-4 text-xs font-semibold text-gray-400 uppercase">Hotel / Accommodation</span>
            </div>
            {opt.hotels.map((stop, stopIdx) => (
              <div key={stopIdx} className="grid grid-cols-12 gap-2 items-center">
                <input
                  className={`${inputClass} col-span-3`}
                  placeholder="Day 01"
                  value={stop.days}
                  onChange={e => updateStop(optIdx, stopIdx, { days: e.target.value })}
                />
                <input
                  className={`${inputClass} col-span-4`}
                  placeholder="e.g. Barkot"
                  value={stop.destination}
                  onChange={e => updateStop(optIdx, stopIdx, { destination: e.target.value })}
                />
                <input
                  className={`${inputClass} col-span-4`}
                  placeholder="e.g. Hotel Trishul"
                  value={stop.hotel}
                  onChange={e => updateStop(optIdx, stopIdx, { hotel: e.target.value })}
                />
                {opt.hotels.length > 1 && (
                  <button onClick={() => removeStop(optIdx, stopIdx)} className="col-span-1 text-gray-400 hover:text-red-500 text-lg leading-none">×</button>
                )}
              </div>
            ))}
            <button onClick={() => addStop(optIdx)} className="text-xs text-orange-600 hover:text-orange-700 font-medium mt-1">
              + Add stop
            </button>
          </div>

          {/* Total cost */}
          <div className="px-4 pb-4 flex items-center gap-3">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide whitespace-nowrap">
              {form.pricingMode === 'total' ? 'Total Package Cost (₹)' : 'Per Person Cost (₹)'}
            </label>
            <div className="flex items-center gap-1">
              <span className="text-gray-500 text-sm">₹</span>
              <input
                type="number"
                className={`${inputClass} w-40`}
                placeholder="0"
                value={opt.totalCost || ''}
                onChange={e => updateOption(optIdx, { totalCost: parseFloat(e.target.value) || 0 })}
              />
            </div>
            {opt.totalCost > 0 && (
              <span className="text-sm font-bold" style={{ color: 'var(--saffron)' }}>
                ₹{opt.totalCost.toLocaleString('en-IN')}/-
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
