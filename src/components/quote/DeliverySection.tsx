'use client';

import { QuoteFormData } from '@/types/quote';

interface Props {
  form: QuoteFormData;
  pdfUrl: string | null;
  generating: boolean;
  onGenerate: () => void;
}

export default function DeliverySection({ form, pdfUrl, generating, onGenerate }: Props) {
  const whatsappMsg = encodeURIComponent(
    `Dear ${form.clientName || 'Guest'},\n\nGreetings from *Balaji Travels*! 🙏\n\nPlease find your *${form.packageName || 'Yatra'}* itinerary and quote attached.\n\nRoute: ${form.destination}\nDuration: ${form.durationNights} Nights & ${form.durationDays} Days\nVehicle: ${form.vehicle}\n\nWe look forward to making your journey memorable!\n\nThanks & Regards,\n${form.agentName || 'Balaji Travels Team'}\n${form.agentPhone || ''}`
  );

  const whatsappUrl = form.clientPhone
    ? `https://wa.me/${form.clientPhone.replace(/\D/g, '')}?text=${whatsappMsg}`
    : `https://wa.me/?text=${whatsappMsg}`;

  const rows = [
    ['Client', form.clientName || '—'],
    ['Package', form.packageName || '—'],
    ['Route', form.destination || '—'],
    ['Group', `${form.numAdults} Adults${form.numChildren ? ` + ${form.numChildren} Children` : ''}${form.numInfants ? ` + ${form.numInfants} Infants` : ''}`],
    ['Duration', `${form.durationNights}N / ${form.durationDays}D`],
    ['Vehicle', form.vehicle || '—'],
    ['Date', form.travelDate || '—'],
  ];

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-primary)' }}>Preview & Send</h2>
        <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>Review summary, generate PDF, then send via WhatsApp or Email.</p>
      </div>

      {/* Summary card */}
      <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--bg-border)', borderRadius: '12px', overflow: 'hidden', marginBottom: '20px' }}>
        <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--bg-border)', background: 'var(--bg-elevated)' }}>
          <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Quote Summary</span>
        </div>
        {rows.map(([label, value]) => (
          <div key={label} style={{ display: 'flex', padding: '10px 16px', borderBottom: '1px solid var(--bg-border)' }}>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)', width: '90px', flexShrink: 0, fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.04em', paddingTop: '1px' }}>{label}</span>
            <span style={{ fontSize: '13px', color: 'var(--text-primary)', flex: 1 }}>{value}</span>
          </div>
        ))}
        {form.hotelOptions.length > 0 && (
          <div style={{ padding: '12px 16px' }}>
            {form.hotelOptions.map((opt, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Option {i + 1}: {opt.tier}</span>
                <span style={{ fontSize: '15px', fontWeight: '700', color: 'var(--saffron)' }}>
                  ₹{opt.totalCost.toLocaleString('en-IN')}/- {form.pricingMode === 'per_person' ? 'pp' : 'total'}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Generate button */}
      <button
        onClick={onGenerate}
        disabled={generating}
        style={{
          width: '100%',
          padding: '14px',
          background: generating ? 'var(--bg-elevated)' : 'var(--saffron)',
          color: generating ? 'var(--text-muted)' : 'white',
          border: 'none',
          borderRadius: '10px',
          fontSize: '14px',
          fontWeight: '700',
          cursor: generating ? 'not-allowed' : 'pointer',
          transition: 'all 0.2s',
          marginBottom: '16px',
          letterSpacing: '0.02em',
        }}
      >
        {generating ? '⏳ Generating PDF...' : '📄 Generate Quote PDF'}
      </button>

      {/* Send buttons */}
      {pdfUrl && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <a
              href={pdfUrl}
              download={`${form.packageName || 'Quote'}_${form.clientName || 'Guest'}.pdf`}
              style={{
                flex: 1,
                padding: '12px',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--bg-border)',
                color: 'var(--text-primary)',
                borderRadius: '10px',
                fontSize: '13px',
                fontWeight: '600',
                textAlign: 'center',
                textDecoration: 'none',
                display: 'block',
              }}
            >
              ⬇️ Download PDF
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                padding: '12px',
                background: '#1A3A22',
                border: '1px solid #25D366',
                color: '#25D366',
                borderRadius: '10px',
                fontSize: '13px',
                fontWeight: '600',
                textAlign: 'center',
                textDecoration: 'none',
                display: 'block',
              }}
            >
              💬 Send on WhatsApp
            </a>
          </div>
          <p style={{ fontSize: '11px', color: 'var(--text-muted)', textAlign: 'center' }}>
            Download the PDF first, then attach it manually on WhatsApp. The button pre-fills the message.
          </p>
        </div>
      )}
    </div>
  );
}
