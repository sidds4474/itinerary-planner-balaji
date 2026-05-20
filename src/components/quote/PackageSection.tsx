'use client';

import { useState, useMemo, useEffect } from 'react';
import { QuoteFormData } from '@/types/quote';
import { ROUTE_TEMPLATES, RouteTemplate } from '@/data/routeTemplates';
import { loadCustomRoutes, saveCustomRoute, deleteCustomRoute, CustomRouteTemplate } from '@/data/customRoutes';

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

function applyTemplate(t: RouteTemplate, update: (patch: Partial<QuoteFormData>) => void) {
  update({
    packageName: t.packageName,
    destination: t.destination,
    durationNights: t.durationNights,
    durationDays: t.durationDays,
    pickupPoint: t.pickupPoint,
    droppingPoint: t.droppingPoint,
    hotelOptions: t.hotelOptions.map(o => ({ ...o, hotels: o.hotels.map(h => ({ ...h })) })),
    dayItinerary: t.dayItinerary.map(d => ({ ...d })),
  });
}

function RoutePickerModal({ open, onClose, onPick }: {
  open: boolean;
  onClose: () => void;
  onPick: (t: RouteTemplate) => void;
}) {
  const [query, setQuery] = useState('');
  const [custom, setCustom] = useState<CustomRouteTemplate[]>([]);

  useEffect(() => {
    if (!open) return;
    const refresh = () => { loadCustomRoutes().then(setCustom); };
    refresh();
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    window.addEventListener('bt-custom-routes-changed', refresh);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('bt-custom-routes-changed', refresh);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  const all = useMemo(() => [...custom, ...ROUTE_TEMPLATES], [custom]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return all;
    return all.filter(t =>
      t.label.toLowerCase().includes(q) ||
      t.packageName.toLowerCase().includes(q) ||
      t.destination.toLowerCase().includes(q) ||
      t.pickupPoint.toLowerCase().includes(q)
    );
  }, [query, all]);

  const handleDelete = async (id: string, label: string) => {
    if (confirm(`Delete custom route "${label}"? This cannot be undone.`)) {
      await deleteCustomRoute(id);
    }
  };

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)',
        zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: 'var(--bg-surface)', border: '1px solid var(--bg-border)',
          borderRadius: '14px', width: '100%', maxWidth: '960px', maxHeight: '85vh',
          display: 'flex', flexDirection: 'column', overflow: 'hidden',
        }}
      >
        <div style={{ padding: '18px 20px', borderBottom: '1px solid var(--bg-border)', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-primary)' }}>Pick a Route Template</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
              {filtered.length} of {all.length} routes
              {custom.length > 0 && <span style={{ color: 'var(--saffron)', marginLeft: '8px' }}>· {custom.length} custom</span>}
            </div>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'transparent', border: '1px solid var(--bg-border)', color: 'var(--text-secondary)', borderRadius: '8px', padding: '6px 12px', cursor: 'pointer', fontSize: '13px' }}
          >
            Close (Esc)
          </button>
        </div>

        <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--bg-border)' }}>
          <input
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search by route, destination, pickup point…"
            style={{ ...inputStyle, fontSize: '14px' }}
            onFocus={e => { e.target.style.borderColor = 'var(--saffron)'; e.target.style.boxShadow = '0 0 0 2px rgba(255,107,0,0.15)'; }}
            onBlur={e => { e.target.style.borderColor = 'var(--bg-border)'; e.target.style.boxShadow = 'none'; }}
          />
        </div>

        <div style={{ overflowY: 'auto', padding: '16px 20px', flex: 1 }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '40px 20px' }}>
              No routes match &ldquo;{query}&rdquo;.
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
              {filtered.map(t => {
                const isCustom = (t as CustomRouteTemplate).custom === true;
                const tiers = t.hotelOptions.map(o => o.tier).join(' · ');
                return (
                  <div
                    key={t.id}
                    style={{
                      position: 'relative', background: 'var(--bg-elevated)', border: '1px solid var(--bg-border)',
                      borderRadius: '10px', display: 'flex', flexDirection: 'column',
                      transition: 'border-color 0.12s, transform 0.12s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--saffron)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--bg-border)'; e.currentTarget.style.transform = 'none'; }}
                  >
                    {isCustom && (
                      <button
                        type="button"
                        onClick={e => { e.stopPropagation(); handleDelete(t.id, t.label); }}
                        title="Delete custom route"
                        style={{
                          position: 'absolute', top: '8px', right: '8px',
                          background: 'var(--bg-surface)', border: '1px solid var(--bg-border)',
                          color: 'var(--text-muted)', borderRadius: '6px', cursor: 'pointer',
                          width: '24px', height: '24px', fontSize: '14px', lineHeight: 1, padding: 0,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.color = '#e74c3c'; e.currentTarget.style.borderColor = '#e74c3c'; }}
                        onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--bg-border)'; }}
                      >
                        ×
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => { onPick(t); onClose(); }}
                      style={{
                        textAlign: 'left', background: 'transparent', border: 'none',
                        padding: '14px', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '8px',
                        font: 'inherit', color: 'inherit', width: '100%',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingRight: isCustom ? '28px' : 0 }}>
                        {isCustom && (
                          <span style={{ fontSize: '9px', fontWeight: '700', color: 'var(--saffron)', background: 'rgba(255,107,0,0.12)', border: '1px solid var(--saffron)', borderRadius: '4px', padding: '2px 5px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Custom
                          </span>
                        )}
                        <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--saffron)', lineHeight: 1.3 }}>{t.label}</div>
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                        {t.pickupPoint} → {t.droppingPoint}
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '2px' }}>
                        <span style={{ fontSize: '10px', fontWeight: '600', color: 'var(--text-primary)', background: 'var(--bg-surface)', border: '1px solid var(--bg-border)', borderRadius: '6px', padding: '3px 7px' }}>
                          {t.durationNights}N / {t.durationDays}D
                        </span>
                        {tiers && (
                          <span style={{ fontSize: '10px', fontWeight: '600', color: 'var(--text-muted)', background: 'var(--bg-surface)', border: '1px solid var(--bg-border)', borderRadius: '6px', padding: '3px 7px' }}>
                            {tiers}
                          </span>
                        )}
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function PackageSection({ form, update }: Props) {
  const [pickerOpen, setPickerOpen] = useState(false);

  const handleSaveTemplate = async () => {
    if (!form.packageName.trim()) {
      alert('Add a Package Name before saving as a template.');
      return;
    }
    const defaultLabel = form.durationNights && form.durationDays
      ? `${form.packageName} (${form.durationNights}N / ${form.durationDays}D)`
      : form.packageName;
    const label = prompt('Save current route as a custom template.\n\nLabel for the picker:', defaultLabel);
    if (!label || !label.trim()) return;
    const saved = await saveCustomRoute({
      label: label.trim(),
      packageName: form.packageName,
      destination: form.destination,
      durationNights: form.durationNights,
      durationDays: form.durationDays,
      pickupPoint: form.pickupPoint,
      droppingPoint: form.droppingPoint,
      hotelOptions: form.hotelOptions.map(o => ({ ...o, hotels: o.hotels.map(h => ({ ...h })) })),
      dayItinerary: form.dayItinerary.map(d => ({ ...d })),
    });
    if (saved) {
      alert(`Saved "${label.trim()}" — it will appear in the route picker.`);
    } else {
      alert('Could not save. Make sure you are signed in and try again.');
    }
  };

  return (
    <div>
      <RoutePickerModal open={pickerOpen} onClose={() => setPickerOpen(false)} onPick={t => applyTemplate(t, update)} />
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
          {/* Route Template Picker */}
          <div style={{ background: 'var(--bg-elevated)', border: '1px solid var(--bg-border)', borderRadius: '8px', padding: '12px 14px', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>Quick Fill Route →</span>
            <button
              type="button"
              onClick={() => setPickerOpen(true)}
              style={{
                flex: 1, minWidth: '220px', textAlign: 'left',
                background: 'var(--bg-input)', border: '1px solid var(--bg-border)',
                color: 'var(--saffron)', borderRadius: '8px', padding: '10px 12px',
                fontSize: '13px', fontWeight: '500', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--saffron)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--bg-border)'; }}
            >
              <span>Browse {ROUTE_TEMPLATES.length} routes…</span>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: '400' }}>Search · Click to apply</span>
            </button>
            <button
              type="button"
              onClick={handleSaveTemplate}
              title="Save the current package, hotels & itinerary as a reusable custom route"
              style={{
                background: 'transparent', border: '1px solid var(--bg-border)',
                color: 'var(--text-secondary)', borderRadius: '8px', padding: '10px 14px',
                fontSize: '12px', fontWeight: '600', cursor: 'pointer', whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--saffron)'; e.currentTarget.style.color = 'var(--saffron)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--bg-border)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
            >
              + Save as Template
            </button>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>Hotels & itinerary auto-populated. You can still edit.</span>
          </div>

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
