import React from 'react';
import {
  Document, Page, Text, View, StyleSheet, Font,
} from '@react-pdf/renderer';
import { QuoteFormData } from '@/types/quote';

// Colors matching balajitravels.site
const C = {
  saffron: '#FF6B00',
  saffronLight: '#FF8C33',
  green: '#2D5016',
  greenLight: '#3D6B1F',
  gold: '#C9A84C',
  goldLight: '#F5E6C8',
  white: '#FFFFFF',
  black: '#1A1A1A',
  gray: '#555555',
  lightGray: '#F5F5F5',
  borderGray: '#E0E0E0',
  textMuted: '#777777',
};

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 9,
    color: C.black,
    paddingTop: 0,
    paddingBottom: 40,
  },

  // Header
  header: {
    backgroundColor: C.green,
    paddingHorizontal: 30,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerCompany: {
    color: C.white,
    fontSize: 18,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 0.5,
  },
  headerTagline: {
    color: C.gold,
    fontSize: 8,
    marginTop: 2,
    letterSpacing: 1,
  },
  headerRight: {
    alignItems: 'flex-end',
  },
  headerContact: {
    color: C.white,
    fontSize: 8,
    opacity: 0.85,
  },

  // Gold accent bar
  accentBar: {
    backgroundColor: C.saffron,
    height: 4,
  },

  // Subject line
  subjectBar: {
    backgroundColor: C.goldLight,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: C.gold,
  },
  subjectText: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 12,
    color: C.green,
    textAlign: 'center',
  },

  body: {
    paddingHorizontal: 30,
    paddingTop: 16,
  },

  // Greeting
  greeting: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 4,
    color: C.black,
  },
  greetingLine: {
    fontSize: 9,
    color: C.gray,
    lineHeight: 1.5,
    marginBottom: 12,
  },

  // Section heading
  sectionHeading: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 10,
    color: C.saffron,
    marginBottom: 6,
    marginTop: 14,
    textDecoration: 'underline',
  },

  // Package overview table
  packageTable: {
    border: 1,
    borderColor: C.borderGray,
    marginBottom: 14,
  },
  packageRow: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: C.borderGray,
  },
  packageLabel: {
    width: '35%',
    fontFamily: 'Helvetica-Bold',
    fontSize: 9,
    padding: 5,
    color: C.black,
    backgroundColor: C.lightGray,
  },
  packageValue: {
    width: '65%',
    fontSize: 9,
    padding: 5,
    color: C.black,
  },

  // Hotel table
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: C.green,
    padding: 5,
  },
  tableHeaderCell: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 9,
    color: C.white,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: C.borderGray,
  },
  tableRowAlt: {
    backgroundColor: C.lightGray,
  },
  tableCell: {
    fontSize: 9,
    padding: 5,
    textAlign: 'center',
    color: C.black,
  },
  tableCellBold: {
    fontFamily: 'Helvetica-Bold',
  },

  // Price display
  priceContainer: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1.5,
    borderColor: C.saffron,
    borderRadius: 4,
    backgroundColor: '#FFF8F0',
    alignItems: 'center',
  },
  priceLabel: {
    fontSize: 9,
    color: C.gray,
    marginBottom: 2,
  },
  priceValue: {
    fontSize: 20,
    fontFamily: 'Helvetica-Bold',
    color: C.saffron,
  },

  // Day itinerary
  dayHeading: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 9,
    color: C.saffron,
    marginTop: 10,
    marginBottom: 3,
    textDecoration: 'underline',
  },
  dayText: {
    fontSize: 9,
    color: C.gray,
    lineHeight: 1.5,
    marginBottom: 2,
  },

  // Inclusions / Exclusions
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 3,
    paddingLeft: 4,
  },
  bulletMark: {
    fontSize: 9,
    color: C.saffron,
    width: 14,
    marginTop: 0.5,
  },
  bulletText: {
    fontSize: 9,
    color: C.gray,
    flex: 1,
    lineHeight: 1.4,
  },

  // Note
  noteBox: {
    backgroundColor: '#FFF3CD',
    borderLeftWidth: 3,
    borderLeftColor: C.gold,
    padding: 8,
    marginVertical: 8,
  },
  noteText: {
    fontSize: 8,
    color: '#5C4A00',
    lineHeight: 1.4,
  },

  // Payment
  paymentBox: {
    borderWidth: 1,
    borderColor: C.borderGray,
    borderRadius: 4,
    overflow: 'hidden',
    marginTop: 8,
  },
  paymentHeader: {
    backgroundColor: C.green,
    padding: 6,
  },
  paymentHeaderText: {
    color: C.white,
    fontFamily: 'Helvetica-Bold',
    fontSize: 9,
    textAlign: 'center',
  },
  paymentRow: {
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: C.borderGray,
  },
  paymentLabel: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 8,
    color: C.gray,
    width: '35%',
  },
  paymentValue: {
    fontSize: 8,
    color: C.black,
    flex: 1,
  },

  // Policy
  policyHeading: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 9,
    color: C.green,
    marginTop: 10,
    marginBottom: 4,
    textDecoration: 'underline',
  },

  // Footer
  footer: {
    marginTop: 16,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: C.borderGray,
  },
  footerThanks: {
    fontSize: 8,
    color: C.saffron,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 3,
  },
  footerName: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: C.black,
  },
  footerDetail: {
    fontSize: 8,
    color: C.gray,
    lineHeight: 1.4,
  },
  footerAddress: {
    fontSize: 7.5,
    color: C.textMuted,
    marginTop: 4,
    lineHeight: 1.4,
  },

  twoCol: {
    flexDirection: 'row',
    gap: 12,
  },
  col: {
    flex: 1,
  },

  divider: {
    height: 0.5,
    backgroundColor: C.borderGray,
    marginVertical: 8,
  },

  pageNumber: {
    position: 'absolute',
    bottom: 20,
    right: 30,
    fontSize: 7,
    color: C.textMuted,
  },
});

const POLICY_TEXT = {
  payment: [
    'Booking Amount — 25% of Package Cost',
    '40 Days before departure — 50% of amount',
    '12–08 days before departure — 75% of Package',
    '07 days or less before departure — 100% of Package Cost',
  ],
  cancellation: [
    'Up to 30 days before Journey — 30% of amount',
    'Up to 20 days before Journey — 50% of amount',
    'Less than 10 days before Journey — No Refund',
  ],
  important: [
    'Please consult the driver / local representative for next day\'s transfer timings.',
    'Due to shortage of water supply on the hills, there will be restricted water supply by hotels. Please cooperate.',
    'Hotels are in remote locations — do not compare facilities with metro city hotels. Power cuts are common after noon; hotels have limited backup.',
    'AC will not function on hilly drives.',
    'Normal Check-in: 2:00 PM / Checkout: 12:00 PM. Early check-in subject to availability.',
    'Trekking: Yamunotri (12 km) & Kedarnath Ji (42 km round). Anyone fit can trek. People with cardiac or respiratory issues should consult a doctor before travel.',
    'Clothes (May–June): 5°C–20°C — carry light clothes and a jacket. (Aug–Nov): -15°C–10°C — carry thermals, woolen clothes, gloves.',
    'Medical: People with asthma or health problems must get a medical checkup. Oxygen cylinders available at extra cost.',
  ],
};

function Bullet({ text }: { text: string }) {
  return (
    <View style={styles.bulletRow}>
      <Text style={styles.bulletMark}>Ø</Text>
      <Text style={styles.bulletText}>{text}</Text>
    </View>
  );
}

function PackageRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.packageRow}>
      <Text style={styles.packageLabel}>{label}</Text>
      <Text style={styles.packageValue}>{value}</Text>
    </View>
  );
}

function SectionHeading({ children }: { children: string }) {
  return <Text style={styles.sectionHeading}>{children}</Text>;
}

export function QuoteDocument({ form }: { form: QuoteFormData }) {
  const personStr = [
    form.numAdults > 0 ? `${String(form.numAdults).padStart(2, '0')} Adult${form.numAdults > 1 ? 's' : ''}` : '',
    form.numChildren > 0 ? `+ ${String(form.numChildren).padStart(2, '0')} Child${form.numChildren > 1 ? 'ren' : ''} (5+ yrs, food only)` : '',
    form.numInfants > 0 ? `+ ${String(form.numInfants).padStart(2, '0')} Infant${form.numInfants > 1 ? 's' : ''} (<5 yrs, complimentary)` : '',
  ].filter(Boolean).join(' ');

  const travelDateStr = form.travelDate
    ? new Date(form.travelDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
    : '—';

  return (
    <Document title={`Quote – ${form.packageName}`} author="Balaji Travels">
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerCompany}>Balaji Travels</Text>
            <Text style={styles.headerTagline}>भरोसे की यात्रा  •  शुभ यात्रा</Text>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.headerContact}>{form.agentEmail || 'info@balajitravels.site'}</Text>
            <Text style={styles.headerContact}>{form.agentPhone || ''}</Text>
            <Text style={styles.headerContact}>balajitravels.site</Text>
          </View>
        </View>

        <View style={styles.accentBar} />

        {/* Subject */}
        <View style={styles.subjectBar}>
          <Text style={styles.subjectText}>{form.packageName || 'Tour Itinerary & Package'}</Text>
        </View>

        <View style={styles.body}>
          {/* Greeting */}
          <Text style={styles.greeting}>Dear {form.clientName || 'Guest'},</Text>
          <Text style={styles.greetingLine}>
            Greetings from "Balaji Travels" — भरोसे की यात्रा{'\n'}
            Thank you for giving us the opportunity to plan your forthcoming yatra. We promise to make your journey a truly memorable and blessed experience.
          </Text>

          {/* Package Overview */}
          <SectionHeading>Package Overview</SectionHeading>
          <View style={styles.packageTable}>
            <PackageRow label="Package Name" value={form.packageName || '—'} />
            <PackageRow label="Destination / Route" value={form.destination || '—'} />
            <PackageRow label="No. of Persons" value={personStr || '—'} />
            <PackageRow label="No. of Rooms" value={form.roomConfig || '—'} />
            <PackageRow label="Travel Date" value={travelDateStr} />
            <PackageRow label="Duration" value={`${form.durationNights} Nights & ${form.durationDays} Days`} />
            <PackageRow label="Pickup Point" value={form.pickupPoint || '—'} />
            <PackageRow label="Dropping Point" value={form.droppingPoint || '—'} />
            <PackageRow label="Vehicle" value={form.vehicle || '—'} />
            <PackageRow label="Meal Plan" value={form.mealPlan || '—'} />
          </View>

          {/* Hotel Options */}
          {form.hotelOptions.map((opt, optIdx) => (
            <View key={optIdx}>
              <SectionHeading>
                {form.hotelOptions.length > 1
                  ? `Option ${optIdx + 1} : ${opt.tier} Hotels / Similar (MAPI Plan : ${form.mealPlan})`
                  : `Hotel Accommodation : ${opt.tier} / Similar`}
              </SectionHeading>

              {/* Hotel table */}
              <View style={{ borderWidth: 1, borderColor: C.borderGray }}>
                <View style={styles.tableHeader}>
                  <Text style={[styles.tableHeaderCell, { width: '20%' }]}>DAYS</Text>
                  <Text style={[styles.tableHeaderCell, { width: '35%' }]}>DESTINATION</Text>
                  <Text style={[styles.tableHeaderCell, { flex: 1 }]}>{opt.tier} / Similar</Text>
                </View>
                {opt.hotels.map((stop, i) => (
                  <View key={i} style={[styles.tableRow, i % 2 === 1 ? styles.tableRowAlt : {}]}>
                    <Text style={[styles.tableCell, { width: '20%' }]}>{stop.days}</Text>
                    <Text style={[styles.tableCell, styles.tableCellBold, { width: '35%' }]}>{stop.destination}</Text>
                    <Text style={[styles.tableCell, { flex: 1 }]}>{stop.hotel}</Text>
                  </View>
                ))}
              </View>

              {/* Note */}
              <View style={styles.noteBox}>
                <Text style={styles.noteText}>
                  Please Note: This is a pilgrimage yatra. Star-category hotels are not available in these regions. The best available accommodation has been arranged for you. Please do not expect luxury facilities of metro city hotels.
                </Text>
              </View>

              {/* Price */}
              <View style={styles.priceContainer}>
                <Text style={styles.priceLabel}>
                  {form.pricingMode === 'per_person' ? 'Per Person Package Cost' : 'Total Package Cost'}
                </Text>
                <Text style={styles.priceValue}>₹{opt.totalCost.toLocaleString('en-IN')}/-</Text>
              </View>
            </View>
          ))}

          {/* Day-wise Itinerary */}
          <SectionHeading>Day Wise Tour Itinerary</SectionHeading>
          {form.dayItinerary.map((day, i) => (
            <View key={i}>
              <Text style={styles.dayHeading}>{day.dayLabel}</Text>
              <Text style={styles.dayText}>{day.description}</Text>
            </View>
          ))}

          <View style={{ marginBottom: 10, marginTop: 6 }}>
            <Text style={{ textAlign: 'center', fontFamily: 'Helvetica-Bold', fontSize: 9, color: C.gray, letterSpacing: 2 }}>
              *********************** Tour Ends ***********************
            </Text>
          </View>

          {/* Inclusions */}
          <View style={styles.twoCol}>
            <View style={styles.col}>
              <SectionHeading>Inclusions</SectionHeading>
              {form.inclusions.map((item, i) => <Bullet key={i} text={item} />)}
            </View>
            <View style={styles.col}>
              <SectionHeading>Exclusions</SectionHeading>
              {form.exclusions.map((item, i) => <Bullet key={i} text={item} />)}
            </View>
          </View>

          {/* Important Notes */}
          <SectionHeading>Important Notes</SectionHeading>
          {POLICY_TEXT.important.map((item, i) => <Bullet key={i} text={item} />)}

          {/* Payment & Cancellation Policy */}
          <View style={styles.twoCol}>
            <View style={styles.col}>
              <Text style={styles.policyHeading}>Payment Policy</Text>
              {POLICY_TEXT.payment.map((item, i) => <Bullet key={i} text={item} />)}
            </View>
            <View style={styles.col}>
              <Text style={styles.policyHeading}>Cancellation Policy</Text>
              {POLICY_TEXT.cancellation.map((item, i) => <Bullet key={i} text={item} />)}
            </View>
          </View>

          {/* Payment Details */}
          {(form.accountNumber || form.upiId) && (
            <>
              <SectionHeading>Payment Details</SectionHeading>
              <View style={styles.paymentBox}>
                <View style={styles.paymentHeader}>
                  <Text style={styles.paymentHeaderText}>The following modes of payment are available</Text>
                </View>
                {form.accountNumber && (
                  <View>
                    <View style={[styles.paymentRow, { backgroundColor: C.lightGray }]}>
                      <Text style={[styles.paymentLabel, { flex: 1 }]}>1) ACCOUNT TRANSFER</Text>
                    </View>
                    <View style={styles.paymentRow}><Text style={styles.paymentLabel}>Account Name</Text><Text style={styles.paymentValue}>{form.bankName}</Text></View>
                    <View style={styles.paymentRow}><Text style={styles.paymentLabel}>Account Number</Text><Text style={styles.paymentValue}>{form.accountNumber}</Text></View>
                    <View style={styles.paymentRow}><Text style={styles.paymentLabel}>IFSC Code</Text><Text style={styles.paymentValue}>{form.ifscCode}</Text></View>
                    {form.branch && <View style={styles.paymentRow}><Text style={styles.paymentLabel}>Branch</Text><Text style={styles.paymentValue}>{form.branch}</Text></View>}
                  </View>
                )}
                {form.upiId && (
                  <View>
                    <View style={[styles.paymentRow, { backgroundColor: C.lightGray }]}>
                      <Text style={[styles.paymentLabel, { flex: 1 }]}>2) UPI</Text>
                    </View>
                    <View style={styles.paymentRow}><Text style={styles.paymentLabel}>UPI ID</Text><Text style={styles.paymentValue}>{form.upiId}</Text></View>
                  </View>
                )}
              </View>
            </>
          )}

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerThanks}>Feel free to ask for any further queries.</Text>
            <Text style={{ fontSize: 8, color: C.gray, marginBottom: 4 }}>Thanks & Best Regards,</Text>
            <Text style={styles.footerName}>{form.agentName || 'Balaji Travels Team'}</Text>
            <Text style={styles.footerDetail}>{form.agentTitle || 'Travel Consultant'}</Text>
            <Text style={styles.footerDetail}>{form.agentPhone}</Text>
            <Text style={styles.footerDetail}>{form.agentEmail}</Text>
            <Text style={styles.footerAddress}>balajitravels.site</Text>
          </View>
        </View>

        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
      </Page>
    </Document>
  );
}
