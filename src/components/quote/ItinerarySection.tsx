'use client';

import { QuoteFormData, DayItinerary } from '@/types/quote';

interface Props {
  form: QuoteFormData;
  update: (patch: Partial<QuoteFormData>) => void;
}

const inputClass = "w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white";

export default function ItinerarySection({ form, update }: Props) {
  const days = form.dayItinerary;

  const setDays = (d: DayItinerary[]) => update({ dayItinerary: d });

  const addDay = () => {
    const n = days.length + 1;
    const pad = String(n).padStart(2, '0');
    setDays([...days, { dayLabel: `Day ${pad} :: `, description: '' }]);
  };

  const removeDay = (i: number) => setDays(days.filter((_, idx) => idx !== i));

  const updateDay = (i: number, patch: Partial<DayItinerary>) => {
    setDays(days.map((d, idx) => idx === i ? { ...d, ...patch } : d));
  };

  const autoFillLabels = () => {
    setDays(days.map((d, i) => ({
      ...d,
      dayLabel: d.dayLabel || `Day ${String(i + 1).padStart(2, '0')} :: `,
    })));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold text-gray-800">Day-wise Itinerary</h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Add each day's heading and description. Heading format: <span className="font-mono bg-gray-100 px-1 rounded">Day 01 :: Haridwar – Barkot (180 Kms, 5-6 Hrs)</span>
          </p>
        </div>
        <div className="flex gap-2">
          <button onClick={autoFillLabels} className="px-3 py-2 text-xs font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">
            Auto-number
          </button>
          <button onClick={addDay} className="px-4 py-2 text-sm font-medium text-white rounded-lg" style={{ background: 'var(--saffron)' }}>
            + Add Day
          </button>
        </div>
      </div>

      {days.map((day, i) => (
        <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2.5 bg-gray-50 border-b border-gray-200">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Day {i + 1}</span>
            {days.length > 1 && (
              <button onClick={() => removeDay(i)} className="text-xs text-gray-400 hover:text-red-500">Remove</button>
            )}
          </div>
          <div className="p-4 space-y-3">
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">Day Heading</label>
              <input
                className={inputClass}
                placeholder={`Day ${String(i + 1).padStart(2, '0')} :: From – To (Distance, approx time)`}
                value={day.dayLabel}
                onChange={e => updateDay(i, { dayLabel: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">Description</label>
              <textarea
                className={inputClass}
                rows={5}
                placeholder="Describe the day's activities, sightseeing, meals, and overnight stay..."
                value={day.description}
                onChange={e => updateDay(i, { description: e.target.value })}
              />
            </div>
          </div>
        </div>
      ))}

      {days.length === 0 && (
        <div className="text-center py-12 text-gray-400 border-2 border-dashed border-gray-200 rounded-xl">
          <p className="text-sm">No days added yet.</p>
          <button onClick={addDay} className="mt-2 text-sm font-medium" style={{ color: 'var(--saffron)' }}>Add first day →</button>
        </div>
      )}
    </div>
  );
}
