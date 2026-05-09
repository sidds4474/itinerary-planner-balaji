import { NextRequest, NextResponse } from 'next/server';
import { renderToBuffer } from '@react-pdf/renderer';
import { QuoteDocument } from '@/components/pdf/QuoteDocument';
import { QuoteFormData } from '@/types/quote';
import React from 'react';

export async function POST(req: NextRequest) {
  const form: QuoteFormData = await req.json();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const buffer = await renderToBuffer(React.createElement(QuoteDocument, { form }) as any);

  return new NextResponse(new Uint8Array(buffer), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="Quote_${form.clientName || 'Guest'}.pdf"`,
    },
  });
}
