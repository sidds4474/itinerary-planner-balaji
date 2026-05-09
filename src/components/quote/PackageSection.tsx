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
  padding: '10px 12px',
  fontSize: '13px',
  width: '100%',
  outline: 'none',
};

const labelStyle = {
  display: 'block',
  fontSize: '11px',
  fontWeight: '600',
  color: 'var(--text-muted)',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.05em',
  marginBottom: '6px',
};

const sectionStyle = {
  background: 'var(--bg-surface)',
  border: '1px solid var(--bg-border)',
  borderRadius: '12px',
  padding: '20px',
  marginBottom: '16px',
};

const sectionHeadingStyle = {
  fontSize: '13px',
  fontWeight: '700',
  color: 'var(--text-primary)',
  marginBottom: '16px',
  paddingBottom: '10px',
  borderBottom: '1px solid var(--bg-border)',
};

const VEHICLES = ['Dzire', 'Innova', 'Innova Crysta', 'Tempo Traveller (12 Seater)', 'Tempo Traveller (17 Seater)', 'Bus', 'Other'];
const MEAL_PLANS = ['Breakfast & Dinner', 'Breakfast Only', 'All Meals', 'No Meals'];

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  );
}

function Input({ value, onChange, placeholder, type = 'text' }: {
  value: string | number;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      style={inputStyle}
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
      onFocus={e => { e.target.style.borderColor = 'var(--saffron)'; e.target.style.boxShadow = '0 0 0 2px rgba(255,107,0,0.15)'; }}
      onBlur={e => { e.target.style.borderColor = 'var(--bg-border)'; e.target.style.boxShadow = 'none'; }}
    />
  );
}

function Select({ value, onChange, options, placeholder }: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
}) {
  return (
    <select
      style={{ ...inputStyle, cursor: 'pointer' }}
      value={value}
      onChange={e => onChange(e.target.value)}
      onFocus={e => { e.target.style.borderColor = 'var(--saffron)'; }}
      onBlur={e => { e.target.style.borderColor = 'var(--bg-border)'; }}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map(o => <option key={o} value={o} style={{ background: 'var(--bg-elevated)' }}>{o}</option>)}
    </select>
  );
}

export default function PackageSection({ form, update }: Props) {
  return (
    <div>
      {/* Client Info */}
      <div style={sectionStyle}>
        <div style={sectionHeadingStyle}>Client Information</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Field label="Client Name *">
            <Input value={form.clientName} onChange={v => update({ clientName: v })} placeholder="e.g. Sharma Ji" />
          </Field>
          <Field label="Phone Number *">
            <Input value={form.clientPhone} onChange={v => update({ clientPhone: v })} placeholder="+91 98765 43210" />
          </Field>
          <Field label="Email">
            <Input value={form.clientEmail} onChange={v => update({ clientEmail: v })} placeholder="client@email.com" type="email" />
          </Field>
        </div>
      </div>

      {/* Package Details */}
      <div style={sectionStyle}>
        <div style={sectionHeadingStyle}>Package Details</div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Package Name *">
              <Input value={form.packageName} onChange={v => update({ packageName: v })} placeholder="e.g. Chardham Yatra 2026" />
            </Field>
            <Field label="Vehicle *">
              <Select value={form.vehicle} onChange={v => update({ vehicle: v })} options={VEHICLES} placeholder="Select vehicle" />
            </Field>
          </div>
          <Field label="Full Route / Destination *">
            <Input
              value={form.destination}
              onChange={v => update({ destination: v })}
              placeholder="e.g. Haridwar – Barkot – Yamunotri – Uttarkashi – Gangotri – Guptkashi – Kedarnath – Badrinath – Haridwar"
            />
          </Field>
        </div>
      </div>

      {/* Group Composition */}
      <div style={sectionStyle}>
        <div style={sectionHeadingStyle}>Group Composition</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Field label="Adults *">
            <Input type="number" value={form.numAdults} onChange={v => update({ numAdults: parseInt(v) || 1 })} />
          </Field>
          <div>
            <Field label="Children (5+ yrs)">
              <Input type="number" value={form.numChildren} onChange={v => update({ numChildren: parseInt(v) || 0 })} />
            </Field>
            <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>Food charges only</p>
          </div>
          <div>
            <Field label="Infants (&lt;5 yrs)">
              <Input type="number" value={form.numInfants} onChange={v => update({ numInfants: parseInt(v) || 0 })} />
            </Field>
            <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>Complimentary</p>
          </div>
          <Field label="Room Config *">
            <Input value={form.roomConfig} onChange={v => update({ roomConfig: v })} placeholder="01 Room Triple Sharing" />
          </Field>
        </div>
      </div>

      {/* Travel Details */}
      <div style={sectionStyle}>
        <div style={sectionHeadingStyle}>Travel Details</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Field label="Travel Date *">
            <Input type="date" value={form.travelDate} onChange={v => update({ travelDate: v })} />
          </Field>
          <Field label="Nights">
            <Input type="number" value={form.durationNights} onChange={v => { const n = parseInt(v) || 1; update({ durationNights: n, durationDays: n + 1 }); }} />
          </Field>
          <Field label="Days">
            <Input type="number" value={form.durationDays} onChange={v => update({ durationDays: parseInt(v) || 1 })} />
          </Field>
          <Field label="Meal Plan">
            <Select value={form.mealPlan} onChange={v => update({ mealPlan: v })} options={MEAL_PLANS} />
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Field label="Pickup Point *">
            <Input value={form.pickupPoint} onChange={v => update({ pickupPoint: v })} placeholder="e.g. Haridwar Station" />
          </Field>
          <Field label="Dropping Point *">
            <Input value={form.droppingPoint} onChange={v => update({ droppingPoint: v })} placeholder="e.g. Haridwar Station" />
          </Field>
        </div>
      </div>

      {/* Agent & Payment */}
      <div style={sectionStyle}>
        <div style={sectionHeadingStyle}>Agent & Payment Details</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="Your Name">
            <Input value={form.agentName} onChange={v => update({ agentName: v })} placeholder="Agent name" />
          </Field>
          <Field label="Your Title">
            <Input value={form.agentTitle} onChange={v => update({ agentTitle: v })} placeholder="e.g. Travel Consultant" />
          </Field>
          <Field label="Your Phone">
            <Input value={form.agentPhone} onChange={v => update({ agentPhone: v })} placeholder="+91 xxxxx xxxxx" />
          </Field>
          <Field label="Your Email">
            <Input value={form.agentEmail} onChange={v => update({ agentEmail: v })} placeholder="you@balajitravels.site" type="email" />
          </Field>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <Field label="Account Name">
            <Input value={form.bankName} onChange={v => update({ bankName: v })} />
          </Field>
          <Field label="Account Number">
            <Input value={form.accountNumber} onChange={v => update({ accountNumber: v })} />
          </Field>
          <Field label="IFSC Code">
            <Input value={form.ifscCode} onChange={v => update({ ifscCode: v })} />
          </Field>
          <Field label="UPI ID">
            <Input value={form.upiId} onChange={v => update({ upiId: v })} />
          </Field>
        </div>
      </div>
    </div>
  );
}
