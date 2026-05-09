'use client';

import { useState } from 'react';
import { QuoteFormData, DEFAULT_INCLUSIONS, DEFAULT_EXCLUSIONS } from '@/types/quote';
import PackageSection from '@/components/quote/PackageSection';
import HotelOptionsSection from '@/components/quote/HotelOptionsSection';
import ItinerarySection from '@/components/quote/ItinerarySection';
import InclusionsSection from '@/components/quote/InclusionsSection';
import DeliverySection from '@/components/quote/DeliverySection';
import ThemeToggle from '@/components/ThemeToggle';

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
    <div className="min-h-screen" style={{ background: 'var(--bg-base)' }}>
      {/* Header */}
      <header style={{ background: 'var(--bg-surface)', borderBottom: '1px solid var(--bg-border)' }} className="px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'var(--saffron)' }}>
            <span className="text-white text-sm font-bold">B</span>
          </div>
          <div>
            <span className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>Balaji Travels</span>
            <span className="text-xs ml-2" style={{ color: 'var(--text-muted)' }}>Quote Builder</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '12px', padding: '4px 10px', borderRadius: '20px', background: 'var(--bg-elevated)', color: 'var(--text-secondary)', border: '1px solid var(--bg-border)' }}>
            Step {step + 1} / {STEPS.length}
          </span>
          <ThemeToggle />
        </div>
      </header>

      {/* Step tabs */}
      <div style={{ background: 'var(--bg-surface)', borderBottom: '1px solid var(--bg-border)' }} className="px-4 flex gap-0 overflow-x-auto">
        {STEPS.map((s, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className="px-4 py-3 text-xs font-medium whitespace-nowrap transition-all border-b-2"
            style={{
              borderBottomColor: step === i ? 'var(--saffron)' : 'transparent',
              color: step === i ? 'var(--saffron)' : 'var(--text-muted)',
            }}
          >
            {i < step ? '✓ ' : ''}{s}
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
        <div className="flex justify-between mt-10 pt-6" style={{ borderTop: '1px solid var(--bg-border)' }}>
          <button
            onClick={() => setStep(s => Math.max(0, s - 1))}
            disabled={step === 0}
            className="px-5 py-2.5 rounded-lg text-sm font-medium transition-colors disabled:opacity-30"
            style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)', border: '1px solid var(--bg-border)' }}
          >
            ← Back
          </button>
          {step < STEPS.length - 1 ? (
            <button
              onClick={() => setStep(s => Math.min(STEPS.length - 1, s + 1))}
              className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white transition-all"
              style={{ background: 'var(--saffron)' }}
            >
              Next →
            </button>
          ) : (
            <button
              onClick={handleGenerate}
              disabled={generating}
              className="px-8 py-2.5 rounded-lg text-sm font-semibold text-white transition-all disabled:opacity-50"
              style={{ background: 'var(--saffron)' }}
            >
              {generating ? 'Generating...' : 'Generate PDF'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
