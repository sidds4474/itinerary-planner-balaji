'use client';

import { useState } from 'react';
import { QuoteFormData, HotelOption, DayItinerary, DEFAULT_INCLUSIONS, DEFAULT_EXCLUSIONS } from '@/types/quote';
import PackageSection from '@/components/quote/PackageSection';
import HotelOptionsSection from '@/components/quote/HotelOptionsSection';
import ItinerarySection from '@/components/quote/ItinerarySection';
import InclusionsSection from '@/components/quote/InclusionsSection';
import DeliverySection from '@/components/quote/DeliverySection';

const INITIAL_FORM: QuoteFormData = {
  clientName: '',
  clientPhone: '',
  clientEmail: '',
  packageName: '',
  destination: '',
  numAdults: 2,
  numChildren: 0,
  numInfants: 0,
  roomConfig: '',
  travelDate: '',
  durationNights: 1,
  durationDays: 2,
  pickupPoint: '',
  droppingPoint: '',
  vehicle: '',
  mealPlan: 'Breakfast & Dinner',
  pricingMode: 'total',
  hotelOptions: [
    {
      tier: 'Standard',
      hotels: [{ days: 'Day 01', destination: '', hotel: '' }],
      totalCost: 0,
    },
  ],
  dayItinerary: [{ dayLabel: '', description: '' }],
  inclusions: [...DEFAULT_INCLUSIONS],
  exclusions: [...DEFAULT_EXCLUSIONS],
  agentName: '',
  agentTitle: 'Travel Consultant',
  agentPhone: '',
  agentEmail: '',
  bankName: 'Balaji Travels',
  accountNumber: '',
  ifscCode: '',
  branch: '',
  upiId: '',
};

const STEPS = ['Package Details', 'Hotel Options', 'Day Itinerary', 'Inclusions / Exclusions', 'Preview & Send'];

export default function NewQuotePage() {
  const [form, setForm] = useState<QuoteFormData>(INITIAL_FORM);
  const [step, setStep] = useState(0);
  const [generating, setGenerating] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const update = (patch: Partial<QuoteFormData>) => setForm(f => ({ ...f, ...patch }));

  const handleGenerate = async () => {
    setGenerating(true);
    try {
      const res = await fetch('/api/generate-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      {/* Header */}
      <header style={{ background: 'var(--green)' }} className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'var(--saffron)' }}>
            <span className="text-white text-sm font-bold">B</span>
          </div>
          <span className="text-white font-semibold text-lg">Balaji Travels — Quote Builder</span>
        </div>
        <span className="text-white/60 text-sm">Step {step + 1} of {STEPS.length}</span>
      </header>

      {/* Step tabs */}
      <div style={{ background: 'var(--green-light)' }} className="px-6 py-0 flex gap-0 overflow-x-auto">
        {STEPS.map((s, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className="px-4 py-3 text-sm font-medium whitespace-nowrap transition-all border-b-2"
            style={{
              borderBottomColor: step === i ? 'var(--gold)' : 'transparent',
              color: step === i ? 'var(--gold)' : 'rgba(255,255,255,0.7)',
            }}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {step === 0 && <PackageSection form={form} update={update} />}
        {step === 1 && <HotelOptionsSection form={form} update={update} />}
        {step === 2 && <ItinerarySection form={form} update={update} />}
        {step === 3 && <InclusionsSection form={form} update={update} />}
        {step === 4 && (
          <DeliverySection
            form={form}
            pdfUrl={pdfUrl}
            generating={generating}
            onGenerate={handleGenerate}
          />
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={() => setStep(s => Math.max(0, s - 1))}
            disabled={step === 0}
            className="px-6 py-2.5 rounded-lg text-sm font-medium border border-gray-300 text-gray-600 disabled:opacity-40 hover:bg-gray-50 transition-colors"
          >
            ← Back
          </button>
          {step < STEPS.length - 1 ? (
            <button
              onClick={() => setStep(s => Math.min(STEPS.length - 1, s + 1))}
              className="px-6 py-2.5 rounded-lg text-sm font-medium text-white transition-colors"
              style={{ background: 'var(--saffron)' }}
            >
              Next →
            </button>
          ) : (
            <button
              onClick={handleGenerate}
              disabled={generating}
              className="px-8 py-2.5 rounded-lg text-sm font-medium text-white transition-colors disabled:opacity-60"
              style={{ background: 'var(--saffron)' }}
            >
              {generating ? 'Generating PDF...' : 'Generate Quote PDF'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
