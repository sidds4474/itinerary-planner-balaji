'use client';

import { useEffect, useMemo, useState } from 'react';
import { QuoteFormData } from '@/types/quote';

interface Props {
  open: boolean;
  onClose: () => void;
  form: QuoteFormData;
}

function buildSubject(form: QuoteFormData): string {
  const parts = [form.packageName, form.clientName ? `for ${form.clientName}` : ''].filter(Boolean);
  return parts.join(' — ') || 'Your Travel Itinerary from Balaji Travels';
}

function buildBody(form: QuoteFormData): string {
  const lines: string[] = [];
  lines.push(`Dear ${form.clientName || 'Guest'},`);
  lines.push('');
  lines.push('🌸 Greetings from Balaji Travels! 🌸');
  lines.push('');
  lines.push(`Thank you for giving us the opportunity to plan your ${form.packageName || 'upcoming yatra'}. Please find the detailed quote and itinerary below.`);
  lines.push('');
  lines.push('═══════════════════════════════════════');
  lines.push('  PACKAGE OVERVIEW');
  lines.push('═══════════════════════════════════════');
  lines.push(`Package        : ${form.packageName || '—'}`);
  lines.push(`Route          : ${form.destination || '—'}`);
  const groupParts = [`${form.numAdults} Adults`];
  if (form.numChildren) groupParts.push(`${form.numChildren} Children`);
  if (form.numInfants) groupParts.push(`${form.numInfants} Infants`);
  lines.push(`Group          : ${groupParts.join(' + ')}`);
  lines.push(`Rooms          : ${form.roomConfig || '—'}`);
  lines.push(`Travel Date    : ${form.travelDate || '—'}`);
  lines.push(`Duration       : ${form.durationNights} Nights / ${form.durationDays} Days`);
  lines.push(`Pickup         : ${form.pickupPoint || '—'}`);
  lines.push(`Drop           : ${form.droppingPoint || '—'}`);
  lines.push(`Vehicle        : ${form.vehicle || '—'}`);
  lines.push(`Meal Plan      : ${form.mealPlan || '—'}`);
  lines.push('');

  if (form.hotelOptions.length > 0) {
    lines.push('═══════════════════════════════════════');
    lines.push('  HOTEL OPTIONS & PRICING');
    lines.push('═══════════════════════════════════════');
    form.hotelOptions.forEach((opt, i) => {
      lines.push('');
      lines.push(`▸ Option ${i + 1} — ${opt.tier}`);
      opt.hotels.forEach(h => {
        lines.push(`   ${h.days.padEnd(14)} ${h.destination} — ${h.hotel}`);
      });
      const pricingLabel = form.pricingMode === 'per_person' ? 'per person' : 'total';
      lines.push(`   💰 ₹${opt.totalCost.toLocaleString('en-IN')}/- ${pricingLabel}`);
    });
    lines.push('');
  }

  if (form.dayItinerary.length > 0) {
    lines.push('═══════════════════════════════════════');
    lines.push('  DAY-WISE ITINERARY');
    lines.push('═══════════════════════════════════════');
    form.dayItinerary.forEach(d => {
      lines.push('');
      lines.push(d.dayLabel);
      lines.push('—'.repeat(Math.min(d.dayLabel.length, 50)));
      lines.push(d.description);
    });
    lines.push('');
  }

  lines.push('═══════════════════════════════════════');
  lines.push('  THE FULL ITINERARY PDF IS ATTACHED');
  lines.push('═══════════════════════════════════════');
  lines.push('');
  lines.push('It includes inclusions, exclusions, payment terms, and important notes.');
  lines.push('');
  lines.push('Please feel free to reach out for any clarifications or customisations.');
  lines.push('');
  lines.push('Looking forward to making your journey memorable.');
  lines.push('');
  lines.push('Thanks & Best Regards,');
  lines.push(form.agentName || 'Balaji Travels Team');
  if (form.agentTitle) lines.push(form.agentTitle);
  if (form.agentPhone) lines.push(`📞 ${form.agentPhone}`);
  if (form.agentEmail) lines.push(`✉️  ${form.agentEmail}`);
  lines.push('Balaji Travels — balajitravels.site');

  return lines.join('\n');
}

export default function GmailModal({ open, onClose, form }: Props) {
  const [copied, setCopied] = useState(false);

  const subject = useMemo(() => buildSubject(form), [form]);
  const body = useMemo(() => buildBody(form), [form]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleCopyBody = async () => {
    await navigator.clipboard.writeText(body);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopySubject = async () => {
    await navigator.clipboard.writeText(subject);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.65)',
      zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px',
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: 'var(--bg-surface)', border: '1px solid var(--bg-border)',
        borderRadius: '14px', width: '100%', maxWidth: '780px', maxHeight: '88vh',
        display: 'flex', flexDirection: 'column', overflow: 'hidden',
      }}>
        <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--bg-border)', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-primary)' }}>Send via Gmail</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
              Copy the body, open Gmail in a new tab, paste, and attach the PDF.
            </div>
          </div>
          <button onClick={onClose} style={btnSecondary}>Close (Esc)</button>
        </div>

        <div style={{ padding: '14px 20px', overflowY: 'auto', flex: 1 }}>
          <div style={{ marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
              <label style={labelStyle}>Subject</label>
              <button onClick={handleCopySubject} style={miniBtn}>Copy</button>
            </div>
            <div style={readOnlyBox}>{subject}</div>
          </div>

          {form.clientEmail && (
            <div style={{ marginBottom: '14px' }}>
              <label style={labelStyle}>To</label>
              <div style={readOnlyBox}>{form.clientEmail}</div>
            </div>
          )}

          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
              <label style={labelStyle}>Email Body</label>
              <button onClick={handleCopyBody} style={{ ...miniBtn, background: copied ? '#1A3A22' : 'var(--bg-elevated)', color: copied ? '#25D366' : 'var(--text-secondary)', borderColor: copied ? '#25D366' : 'var(--bg-border)' }}>
                {copied ? '✓ Copied' : 'Copy Body'}
              </button>
            </div>
            <textarea
              readOnly
              value={body}
              rows={20}
              style={{
                width: '100%', padding: '12px', fontSize: '12px',
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                background: 'var(--bg-input)', border: '1px solid var(--bg-border)',
                color: 'var(--text-primary)', borderRadius: '8px', resize: 'vertical', outline: 'none', lineHeight: 1.5,
              }}
              onFocus={e => e.target.select()}
            />
          </div>
        </div>

        <div style={{ padding: '12px 20px', borderTop: '1px solid var(--bg-border)' }}>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
            Copy the body, open Gmail, paste into a new email, attach the PDF, and send.
          </span>
        </div>
      </div>
    </div>
  );
}

const btnSecondary: React.CSSProperties = {
  fontSize: '12px', fontWeight: '600', color: 'var(--text-secondary)',
  background: 'transparent', border: '1px solid var(--bg-border)',
  borderRadius: '6px', padding: '6px 12px', cursor: 'pointer',
};

const miniBtn: React.CSSProperties = {
  fontSize: '11px', fontWeight: '600', color: 'var(--text-secondary)',
  background: 'var(--bg-elevated)', border: '1px solid var(--bg-border)',
  borderRadius: '6px', padding: '4px 10px', cursor: 'pointer',
};

const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: '11px', fontWeight: '600', color: 'var(--text-muted)',
  textTransform: 'uppercase', letterSpacing: '0.05em',
};

const readOnlyBox: React.CSSProperties = {
  width: '100%', padding: '10px 12px', fontSize: '13px',
  background: 'var(--bg-input)', border: '1px solid var(--bg-border)',
  color: 'var(--text-primary)', borderRadius: '8px',
};
