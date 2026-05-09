export type HotelTier = 'Standard' | 'Deluxe' | 'Luxury' | 'Super Luxury';
export type PricingMode = 'total' | 'per_person';

export interface HotelStop {
  days: string;        // e.g. "Day 01", "Day 02 & Day 03"
  destination: string;
  hotel: string;
}

export interface HotelOption {
  tier: HotelTier;
  hotels: HotelStop[];
  totalCost: number;
}

export interface DayItinerary {
  dayLabel: string;    // e.g. "Day 01 :: Haridwar – Barkot (180 Kms, 5-6 Hours approx)"
  description: string;
}

export interface QuoteFormData {
  // Client
  clientName: string;
  clientPhone: string;
  clientEmail: string;

  // Package Overview
  packageName: string;
  destination: string;       // full route string
  numAdults: number;
  numChildren: number;       // 5+ years (food only)
  numInfants: number;        // under 5, free
  roomConfig: string;        // e.g. "01 Room on Triple Sharing Basis"
  travelDate: string;
  durationNights: number;
  durationDays: number;
  pickupPoint: string;
  droppingPoint: string;
  vehicle: string;
  mealPlan: string;

  // Pricing
  pricingMode: PricingMode;

  // Hotel Options (1–3)
  hotelOptions: HotelOption[];

  // Day-wise itinerary
  dayItinerary: DayItinerary[];

  // Inclusions / Exclusions (editable but pre-filled)
  inclusions: string[];
  exclusions: string[];

  // Agent info (pre-filled from profile)
  agentName: string;
  agentTitle: string;
  agentPhone: string;
  agentEmail: string;

  // Company payment details (pre-filled)
  bankName: string;
  accountNumber: string;
  ifscCode: string;
  branch: string;
  upiId: string;
}

export const DEFAULT_INCLUSIONS = [
  'Accommodation on sharing basis as per itinerary.',
  'Meals Plan (MAPAI) Daily breakfast & dinner (Veg Meal).',
  'Kedarnath Ji only stays without meals (Ashram Dormitory).',
  'Attached baths and toilets with running Hot & Cold water (timing basis).',
  'Fuel parking, toll taxes, Interstate taxes, permit, driver allowance, & night halt charges.',
  'All Transfers, excursions & sightseeing as per the itinerary.',
  'Transfers & Sightseeing by AC Vehicle. (AC will not work on Hilly drives.)',
  'Entire travel as per the itinerary.',
];

export const DEFAULT_EXCLUSIONS = [
  '5% GST extra on total billing.',
  'Travel insurance covering medical evacuation, hospitalization, air evacuation, baggage insurance and trip cancellation.',
  'Tips and Porter charges.',
  'If the destination of a particular day can\'t be reached due to landslides, natural calamities, traffic jams — arrangements at extra cost bearable by guests directly. Refunds of the original destination shall not be made.',
  'Any food or beverages not included in the package like mineral water, refreshments/meals/lunches en route or at hotels.',
  'Any personal expenses, room service, mineral water, alcoholic and non-alcoholic beverages, phone calls, laundry etc.',
  'Any services not mentioned in the inclusion list.',
  'Any Pony, Palki, Horse Charges at Kedarnath Ji & Yamunotri Ji.',
  'Helicopter Ticket for Kedarnath Ji.',
];
