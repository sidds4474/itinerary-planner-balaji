'use client';

import { QuoteFormData } from '@/types/quote';

interface Props {
  form: QuoteFormData;
  update: (patch: Partial<QuoteFormData>) => void;
}

const inputClass = "w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white";
const focusColor = "focus:ring-orange-400";
const labelClass = "block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5";

const VEHICLES = ['Dzire', 'Innova', 'Innova Crysta', 'Tempo Traveller (12 Seater)', 'Tempo Traveller (17 Seater)', 'Bus', 'Other'];
const MEAL_PLANS = ['Breakfast & Dinner', 'Breakfast Only', 'All Meals', 'No Meals'];

export default function PackageSection({ form, update }: Props) {
  return (
    <div className="space-y-8">
      {/* Client Info */}
      <div>
        <h2 className="text-base font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">Client Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className={labelClass}>Client Name *</label>
            <input className={`${inputClass} ${focusColor}`} placeholder="e.g. Sharma Ji" value={form.clientName} onChange={e => update({ clientName: e.target.value })} />
          </div>
          <div>
            <label className={labelClass}>Phone Number *</label>
            <input className={`${inputClass} ${focusColor}`} placeholder="+91 98765 43210" value={form.clientPhone} onChange={e => update({ clientPhone: e.target.value })} />
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input className={`${inputClass} ${focusColor}`} placeholder="client@email.com" value={form.clientEmail} onChange={e => update({ clientEmail: e.target.value })} />
          </div>
        </div>
      </div>

      {/* Package Details */}
      <div>
        <h2 className="text-base font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">Package Details</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Package Name *</label>
              <input className={`${inputClass} ${focusColor}`} placeholder="e.g. Chardham Yatra 2026" value={form.packageName} onChange={e => update({ packageName: e.target.value })} />
            </div>
            <div>
              <label className={labelClass}>Vehicle *</label>
              <select className={`${inputClass} ${focusColor}`} value={form.vehicle} onChange={e => update({ vehicle: e.target.value })}>
                <option value="">Select vehicle</option>
                {VEHICLES.map(v => <option key={v} value={v}>{v}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className={labelClass}>Full Route / Destination *</label>
            <input
              className={`${inputClass} ${focusColor}`}
              placeholder="e.g. Haridwar – Barkot – Yamunotri – Uttarkashi – Gangotri – Guptkashi – Kedarnath – Badrinath – Haridwar"
              value={form.destination}
              onChange={e => update({ destination: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* Group Composition */}
      <div>
        <h2 className="text-base font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">Group Composition</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label className={labelClass}>Adults *</label>
            <input type="number" min={1} className={`${inputClass} ${focusColor}`} value={form.numAdults} onChange={e => update({ numAdults: parseInt(e.target.value) || 1 })} />
          </div>
          <div>
            <label className={labelClass}>Children (5+ yrs)</label>
            <input type="number" min={0} className={`${inputClass} ${focusColor}`} value={form.numChildren} onChange={e => update({ numChildren: parseInt(e.target.value) || 0 })} />
            <p className="text-xs text-gray-400 mt-1">Food charges only</p>
          </div>
          <div>
            <label className={labelClass}>Infants (&lt;5 yrs)</label>
            <input type="number" min={0} className={`${inputClass} ${focusColor}`} value={form.numInfants} onChange={e => update({ numInfants: parseInt(e.target.value) || 0 })} />
            <p className="text-xs text-gray-400 mt-1">Complimentary</p>
          </div>
          <div>
            <label className={labelClass}>Room Config *</label>
            <input className={`${inputClass} ${focusColor}`} placeholder="e.g. 01 Room Triple Sharing" value={form.roomConfig} onChange={e => update({ roomConfig: e.target.value })} />
          </div>
        </div>
      </div>

      {/* Travel Details */}
      <div>
        <h2 className="text-base font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">Travel Details</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label className={labelClass}>Travel Date *</label>
            <input type="date" className={`${inputClass} ${focusColor}`} value={form.travelDate} onChange={e => update({ travelDate: e.target.value })} />
          </div>
          <div>
            <label className={labelClass}>Nights</label>
            <input type="number" min={1} className={`${inputClass} ${focusColor}`} value={form.durationNights} onChange={e => { const n = parseInt(e.target.value) || 1; update({ durationNights: n, durationDays: n + 1 }); }} />
          </div>
          <div>
            <label className={labelClass}>Days</label>
            <input type="number" min={1} className={`${inputClass} ${focusColor}`} value={form.durationDays} onChange={e => update({ durationDays: parseInt(e.target.value) || 1 })} />
          </div>
          <div>
            <label className={labelClass}>Meal Plan</label>
            <select className={`${inputClass} ${focusColor}`} value={form.mealPlan} onChange={e => update({ mealPlan: e.target.value })}>
              {MEAL_PLANS.map(m => <option key={m} value={m}>{m}</option>)}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className={labelClass}>Pickup Point *</label>
            <input className={`${inputClass} ${focusColor}`} placeholder="e.g. Haridwar Station" value={form.pickupPoint} onChange={e => update({ pickupPoint: e.target.value })} />
          </div>
          <div>
            <label className={labelClass}>Dropping Point *</label>
            <input className={`${inputClass} ${focusColor}`} placeholder="e.g. Haridwar Station" value={form.droppingPoint} onChange={e => update({ droppingPoint: e.target.value })} />
          </div>
        </div>
      </div>

      {/* Agent Info */}
      <div>
        <h2 className="text-base font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">Agent & Payment Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Your Name</label>
            <input className={`${inputClass} ${focusColor}`} placeholder="Agent name" value={form.agentName} onChange={e => update({ agentName: e.target.value })} />
          </div>
          <div>
            <label className={labelClass}>Your Title</label>
            <input className={`${inputClass} ${focusColor}`} placeholder="e.g. Travel Consultant" value={form.agentTitle} onChange={e => update({ agentTitle: e.target.value })} />
          </div>
          <div>
            <label className={labelClass}>Your Phone</label>
            <input className={`${inputClass} ${focusColor}`} placeholder="+91 xxxxx xxxxx" value={form.agentPhone} onChange={e => update({ agentPhone: e.target.value })} />
          </div>
          <div>
            <label className={labelClass}>Your Email</label>
            <input className={`${inputClass} ${focusColor}`} placeholder="you@balajitravels.site" value={form.agentEmail} onChange={e => update({ agentEmail: e.target.value })} />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div>
            <label className={labelClass}>Account Name</label>
            <input className={`${inputClass} ${focusColor}`} value={form.bankName} onChange={e => update({ bankName: e.target.value })} />
          </div>
          <div>
            <label className={labelClass}>Account Number</label>
            <input className={`${inputClass} ${focusColor}`} value={form.accountNumber} onChange={e => update({ accountNumber: e.target.value })} />
          </div>
          <div>
            <label className={labelClass}>IFSC Code</label>
            <input className={`${inputClass} ${focusColor}`} value={form.ifscCode} onChange={e => update({ ifscCode: e.target.value })} />
          </div>
          <div>
            <label className={labelClass}>UPI ID</label>
            <input className={`${inputClass} ${focusColor}`} value={form.upiId} onChange={e => update({ upiId: e.target.value })} />
          </div>
        </div>
      </div>
    </div>
  );
}
