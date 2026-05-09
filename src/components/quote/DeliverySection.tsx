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

  const summaryRows = [
    ['Client', form.clientName || '—'],
    ['Package', form.packageName || '—'],
    ['Route', form.destination || '—'],
    ['Group', `${form.numAdults} Adults${form.numChildren ? ` + ${form.numChildren} Children` : ''}${form.numInfants ? ` + ${form.numInfants} Infants` : ''}`],
    ['Duration', `${form.durationNights} Nights & ${form.durationDays} Days`],
    ['Vehicle', form.vehicle || '—'],
    ['Travel Date', form.travelDate || '—'],
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-base font-bold text-gray-800 mb-1">Preview & Send</h2>
        <p className="text-xs text-gray-500">Review the summary below, generate PDF, then send via Email or WhatsApp.</p>
      </div>

      {/* Summary */}
      <div className="border border-gray-200 rounded-xl overflow-hidden">
        <div className="px-4 py-3" style={{ background: 'var(--green)', color: 'white' }}>
          <span className="text-sm font-semibold">Quote Summary</span>
        </div>
        <div className="divide-y divide-gray-100">
          {summaryRows.map(([label, value]) => (
            <div key={label} className="flex px-4 py-2.5">
              <span className="text-xs text-gray-400 w-28 flex-shrink-0 font-medium uppercase tracking-wide pt-0.5">{label}</span>
              <span className="text-sm text-gray-800">{value}</span>
            </div>
          ))}
        </div>
        {form.hotelOptions.length > 0 && (
          <div className="px-4 py-3 border-t border-gray-100 space-y-1">
            {form.hotelOptions.map((opt, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Option {i + 1}: {opt.tier}</span>
                <span className="text-sm font-bold" style={{ color: 'var(--saffron)' }}>
                  ₹{opt.totalCost.toLocaleString('en-IN')}/- {form.pricingMode === 'per_person' ? 'per person' : 'total'}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Generate */}
      <div className="flex flex-col items-center gap-4">
        <button
          onClick={onGenerate}
          disabled={generating}
          className="w-full py-3.5 rounded-xl text-white font-semibold text-sm transition-all disabled:opacity-60"
          style={{ background: 'var(--saffron)' }}
        >
          {generating ? '⏳ Generating PDF...' : '📄 Generate Quote PDF'}
        </button>

        {pdfUrl && (
          <div className="w-full space-y-3">
            <div className="flex gap-3">
              <a
                href={pdfUrl}
                download={`${form.packageName || 'Quote'}_${form.clientName || 'Guest'}.pdf`}
                className="flex-1 py-3 rounded-xl text-white font-semibold text-sm text-center transition-all"
                style={{ background: 'var(--green)' }}
              >
                ⬇️ Download PDF
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl text-white font-semibold text-sm text-center"
                style={{ background: '#25D366' }}
              >
                💬 Send on WhatsApp
              </a>
            </div>
            <p className="text-xs text-center text-gray-400">
              Download PDF first, then share it on WhatsApp. The WhatsApp button opens a pre-filled message — attach the PDF manually.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
