'use client';

import { QuoteFormData } from '@/types/quote';

interface Props {
  form: QuoteFormData;
  update: (patch: Partial<QuoteFormData>) => void;
}

const inputClass = "w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white";

function ListEditor({ items, onChange, addLabel }: { items: string[]; onChange: (items: string[]) => void; addLabel: string }) {
  const update = (i: number, val: string) => onChange(items.map((item, idx) => idx === i ? val : item));
  const remove = (i: number) => onChange(items.filter((_, idx) => idx !== i));
  const add = () => onChange([...items, '']);

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="flex gap-2 items-start">
          <span className="text-gray-400 mt-2.5 text-sm">Ø</span>
          <input
            className={inputClass}
            value={item}
            onChange={e => update(i, e.target.value)}
          />
          <button onClick={() => remove(i)} className="mt-2 text-gray-300 hover:text-red-400 text-lg leading-none flex-shrink-0">×</button>
        </div>
      ))}
      <button onClick={add} className="text-xs font-medium mt-1" style={{ color: 'var(--saffron)' }}>+ {addLabel}</button>
    </div>
  );
}

export default function InclusionsSection({ form, update }: Props) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-base font-bold text-gray-800 mb-1">Inclusions & Exclusions</h2>
        <p className="text-xs text-gray-500">Pre-filled with standard text. Edit as needed for this quote.</p>
      </div>

      <div>
        <h3 className="text-sm font-bold text-green-800 mb-3 flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xs">✓</span>
          Inclusions
        </h3>
        <ListEditor
          items={form.inclusions}
          onChange={inclusions => update({ inclusions })}
          addLabel="Add inclusion"
        />
      </div>

      <div>
        <h3 className="text-sm font-bold text-red-800 mb-3 flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-700 text-xs">✕</span>
          Exclusions
        </h3>
        <ListEditor
          items={form.exclusions}
          onChange={exclusions => update({ exclusions })}
          addLabel="Add exclusion"
        />
      </div>
    </div>
  );
}
