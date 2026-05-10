import { HotelOption, DayItinerary } from '@/types/quote';

export interface RouteTemplate {
  id: string;
  label: string;
  packageName: string;
  destination: string;
  durationNights: number;
  durationDays: number;
  pickupPoint: string;
  droppingPoint: string;
  hotelOptions: HotelOption[];
  dayItinerary: DayItinerary[];
}

export const ROUTE_TEMPLATES: RouteTemplate[] = [
  // ─── Single Dham: Kedarnath Ji (3N/4D) ─────────────────────────────────────
  {
    id: 'kedarnath-3n4d',
    label: 'Single Dham – Kedarnath Ji (3N / 4D)',
    packageName: 'Kedarnath Yatra Package',
    destination: 'Haridwar - Phata - Kedarnath Ji - Phata - Rishikesh - Haridwar',
    durationNights: 3,
    durationDays: 4,
    pickupPoint: 'Haridwar',
    droppingPoint: 'Haridwar',
    hotelOptions: [
      {
        tier: 'Standard',
        hotels: [
          { days: 'Day 01', destination: 'Phata', hotel: 'Shivay Inn' },
          { days: 'Day 02', destination: 'Kedarnath Ji', hotel: 'Ashram Dormitory (Without Meal)' },
          { days: 'Day 03', destination: 'Phata', hotel: 'Shivay Inn' },
        ],
        totalCost: 0,
      },
      {
        tier: 'Deluxe',
        hotels: [
          { days: 'Day 01', destination: 'Phata', hotel: 'Hotel Narendra Orchid' },
          { days: 'Day 02', destination: 'Kedarnath Ji', hotel: 'Ashram Dormitory (Without Meal)' },
          { days: 'Day 03', destination: 'Phata', hotel: 'Hotel Narendra Orchid' },
        ],
        totalCost: 0,
      },
      {
        tier: 'Luxury',
        hotels: [
          { days: 'Day 01', destination: 'Phata', hotel: "Hotel Shiva's Trident" },
          { days: 'Day 02', destination: 'Kedarnath Ji', hotel: 'Ashram Dormitory (Without Meal)' },
          { days: 'Day 03', destination: 'Phata', hotel: "Hotel Shiva's Trident" },
        ],
        totalCost: 0,
      },
    ],
    dayItinerary: [
      {
        dayLabel: 'Day 01 :: Arrive Haridwar - Phata (200 Kms 6-7 Hrs)',
        description: 'Meet our Representative / Driver at Haridwar Railway Station / Airport and proceed to Phata.\n\nEn route visit to places like: Devprayag.\n\nArrive Phata, Transfer to the Hotel & Check in to the Hotel.\n\nOvernight stay at Hotel.',
      },
      {
        dayLabel: 'Day 02 :: Phata – GauriKund - Kedarnath (15 Kms & 17 Kms Trek)',
        description: 'Early morning (5:00 AM) check-out from the hotel and drive to Gaurikund.\n\nFrom here, we will start a 17 Kms trek to Kedarnath. Either by walking, Doli or by horse at own cost.\n\nOn arrival at Kedarnath, check-in into the Ashram.\n\nIn the evening visit Shankaracharya Samadhi behind the temple and take part in evening Aarti.\n\nOvernight stay at the Ashram.\n\nNote: Kedarnath Ji there is only basic accommodation available on Quad sharing basis. Meals are not included in Kedarnath Ji that will be paid directly by Guest.',
      },
      {
        dayLabel: 'Day 03 :: Kedarnath - Gaurikund - Sonprayag - Phata',
        description: 'After darshan trek down to Gaurikund.\n\nGaurikund to Sonprayag on your own by local taxi.\n\nMeet our representative / driver at Sonprayag parking.\n\nLater proceed to Phata. On arrival check in to the Hotel.\n\nOvernight stay at the hotel.',
      },
      {
        dayLabel: 'Day 04 :: Phata - Haridwar (200 Kms 6-7 Hrs)',
        description: 'After breakfast, check-out from the hotel.\n\nEn route, visit Dhari Devi Temple and Rishikesh.\n\nProceed to Haridwar.\n\nDrop at Haridwar Railway Station for your onward journey.\n\n***** Tour Ends *****',
      },
    ],
  },

  // ─── Single Dham: Badrinath Ji (2N/3D) ─────────────────────────────────────
  {
    id: 'badrinath-2n3d',
    label: 'Single Dham – Badrinath Ji (2N / 3D)',
    packageName: 'Single Dham Yatra (Badrinath)',
    destination: 'Haridwar - Badrinath - Rudraprayag - Haridwar',
    durationNights: 2,
    durationDays: 3,
    pickupPoint: 'Haridwar',
    droppingPoint: 'Haridwar',
    hotelOptions: [
      {
        tier: 'Standard',
        hotels: [
          { days: 'Day 01', destination: 'Badrinath Ji', hotel: 'Hotel Chirag Palace' },
          { days: 'Day 02', destination: 'Rudraprayag', hotel: 'Hotel Vijay Lords' },
        ],
        totalCost: 0,
      },
      {
        tier: 'Deluxe',
        hotels: [
          { days: 'Day 01', destination: 'Badrinath Ji', hotel: '' },
          { days: 'Day 02', destination: 'Rudraprayag', hotel: '' },
        ],
        totalCost: 0,
      },
    ],
    dayItinerary: [
      {
        dayLabel: 'Day 01 :: Haridwar – Badrinath Ji (Approx 330 Kms / 10-11 Hrs)',
        description: 'Pick-up from Haridwar and proceed to Badrinath.\n\nEn route enjoy beautiful mountain views and river valleys.\n\nOn arrival at Badrinath, check-in to the hotel.\n\nTake a holy bath in Tapt Kund (Suryakund), then visit Badrinath Temple for darshan.\n\nAfter darshan, return to the hotel.\n\nOvernight stay at the hotel.',
      },
      {
        dayLabel: 'Day 02 :: Badrinath – Rudraprayag (Approx 150 Kms / 5-6 Hrs)',
        description: 'After breakfast, check-out from the hotel.\n\nVisit Mana Village (last village near Tibet border).\n\nExplore Vyas Gufa, Ganesh Gufa, Bhim Pul, Charan Paduka and Saraswati River origin point.\n\nAfter sightseeing, drive to Rudraprayag.\n\nOn arrival, check-in to the hotel.\n\nOvernight stay at the hotel.',
      },
      {
        dayLabel: 'Day 03 :: Rudraprayag – Haridwar Drop (Approx 160 Kms / 5-6 Hrs)',
        description: 'After breakfast, check-out from the hotel.\n\nProceed towards Haridwar.\n\nOur Representative / Driver drops you at Haridwar Station / Airport for your onward journey.\n\n***** Tour Ends *****',
      },
    ],
  },

  // ─── Do Dham: Kedarnath + Badrinath (5N/6D) ────────────────────────────────
  {
    id: 'dodham-5n6d',
    label: 'Do Dham – Kedarnath & Badrinath (5N / 6D)',
    packageName: 'Do Dham Yatra Package',
    destination: 'Haridwar - Phata - Kedarnath Ji - Phata - Badrinath Ji - Rudraprayag - Haridwar',
    durationNights: 5,
    durationDays: 6,
    pickupPoint: 'Haridwar',
    droppingPoint: 'Haridwar',
    hotelOptions: [
      {
        tier: 'Standard',
        hotels: [
          { days: 'Day 01 & Day 03', destination: 'Phata / Guptkashi', hotel: 'Hotel Mount Hills' },
          { days: 'Day 02', destination: 'Kedarnath Ji', hotel: 'Ashram Dormitory' },
          { days: 'Day 04', destination: 'Badrinath Ji', hotel: 'New Siddharth Hotel' },
          { days: 'Day 05', destination: 'Rudraprayag', hotel: 'Hotel Alaknanda Inn' },
        ],
        totalCost: 0,
      },
      {
        tier: 'Deluxe',
        hotels: [
          { days: 'Day 01 & Day 03', destination: 'Phata', hotel: "Hotel Shiva's Trident" },
          { days: 'Day 02', destination: 'Kedarnath Ji', hotel: 'Ashram Dormitory' },
          { days: 'Day 04', destination: 'Badrinath Ji', hotel: 'Hotel Shree Ananat' },
          { days: 'Day 05', destination: 'Rudraprayag', hotel: 'Hotel Narayana' },
        ],
        totalCost: 0,
      },
      {
        tier: 'Luxury',
        hotels: [
          { days: 'Day 01 & Day 03', destination: 'Phata', hotel: 'Hotel Snow Bell Resort' },
          { days: 'Day 02', destination: 'Kedarnath Ji', hotel: 'Ashram Dormitory' },
          { days: 'Day 04', destination: 'Badrinath Ji', hotel: 'Hotel Lords Palace' },
          { days: 'Day 05', destination: 'Rudraprayag', hotel: 'Hotel Monal Resort' },
        ],
        totalCost: 0,
      },
    ],
    dayItinerary: [
      {
        dayLabel: 'Day 01 :: Haridwar - Guptkashi / Phata / Sersi (220 Kms 8-9 Hrs)',
        description: 'Morning meet our Representative / Driver at Haridwar Station and proceed to Guptkashi / Phata.\n\nEn route visit to places like: Devprayag, Srinagar.\n\nArrive Phata/Sersi, Transfer to Hotel & Check in the Hotel.\n\nOvernight stay at Hotel.',
      },
      {
        dayLabel: 'Day 02 :: Guptkashi / Phata - Sonprayag (15 Kms) – Kedarnath Ji (17 Kms Trek)',
        description: 'Early in the morning take a packed breakfast and check out from the hotel (keep your luggage on the vehicle or locker room). Proceed to Sonprayag from where the Govt. approved taxi (₹20-50 per person) drops you at Gaurikund where you start your trek to Kedarnath Ji.\n\nGovernment has put up tents for stay at Bhimbali, Lencholi and Kedarnath; they will also provide meals and medical facilities at these locations.\n\nAfter darshan at Kedarnath overnight stay at Kedarnath Camps. (At your own cost by walk, doli, horse).\n\nNote: Kedarnath Ji there is only basic accommodation available on Triple and Quad sharing basis. Meals are not included in Kedarnath Ji that will be paid directly by Guest.',
      },
      {
        dayLabel: 'Day 03 :: Kedarnath (17 Kms Trek: 7-8 Hrs) – Gaurikund – Sonprayag - Phata',
        description: 'Morning after Pooja, check out of Kedarnath and start your trek back to Gaurikund, then drive by local Bolero to Sonprayag. Our driver will meet you at the same point where he dropped you.\n\nLater proceed to the hotel at Phata.\n\nOvernight stay at the Hotel.',
      },
      {
        dayLabel: 'Day 04 :: Phata - Badrinath Ji (190 Kms 7-8 Hrs)',
        description: 'After breakfast check out from the hotel and proceed to Badrinath Ji.\n\nArrive Badrinath Ji, Check in the Hotel.\n\nAfter freshening up, visit Badrinath Ji Temple, Charan Paduka.\n\nOvernight stay at Hotel.',
      },
      {
        dayLabel: 'Day 05 :: Badrinath Ji Sightseeing - Rudraprayag (160 Kms 5-6 Hrs)',
        description: 'Morning after the temple darshan, proceed to Mana Village and visit Vyas Gufa, Ganesh Gufa, Bhim Pul and the "Mukh" of the Saraswati River.\n\nAfter sightseeing, proceed to Rudraprayag.\n\nArrive Rudraprayag, Check in to the Hotel.\n\nOvernight stay at the Hotel.',
      },
      {
        dayLabel: 'Day 06 :: Rudraprayag - Haridwar (150 Kms 5 Hrs)',
        description: 'After breakfast check out from the hotel and proceed to Haridwar.\n\nEn route visit Maa Dhari Devi Temple.\n\nOur Representative / Driver drops you to Haridwar Station / Airport for your onward destination.\n\n***** Tour Ends *****',
      },
    ],
  },

  // ─── Char Dham: Yamunotri + Gangotri + Kedarnath + Badrinath (10N/11D) ─────
  {
    id: 'chardham-10n11d',
    label: 'Char Dham – Full Circuit (10N / 11D)',
    packageName: 'Char Dham Yatra Package',
    destination: 'Haridwar - Barkot - Yamunotri - Uttarkashi - Gangotri - Guptkashi - Kedarnath - Badrinath - Rudraprayag - Haridwar',
    durationNights: 10,
    durationDays: 11,
    pickupPoint: 'Haridwar',
    droppingPoint: 'Haridwar',
    hotelOptions: [
      {
        tier: 'Standard',
        hotels: [
          { days: 'Day 01', destination: 'Haridwar', hotel: '' },
          { days: 'Day 02', destination: 'Barkot', hotel: '' },
          { days: 'Day 03', destination: 'Barkot', hotel: '' },
          { days: 'Day 04', destination: 'Uttarkashi', hotel: '' },
          { days: 'Day 05', destination: 'Uttarkashi', hotel: '' },
          { days: 'Day 06', destination: 'Guptkashi / Phata', hotel: '' },
          { days: 'Day 07', destination: 'Kedarnath Ji', hotel: 'Ashram Dormitory' },
          { days: 'Day 08', destination: 'Badrinath Ji', hotel: '' },
          { days: 'Day 09', destination: 'Rudraprayag', hotel: '' },
          { days: 'Day 10', destination: 'Haridwar', hotel: '' },
        ],
        totalCost: 0,
      },
    ],
    dayItinerary: [
      {
        dayLabel: 'Day 01 :: Arrive Haridwar',
        description: 'Arrive Haridwar. Check in to the hotel.\n\nIn the evening visit Har Ki Pauri for Ganga Aarti.\n\nOvernight stay at Haridwar.',
      },
      {
        dayLabel: 'Day 02 :: Haridwar - Barkot (180 Kms 5-6 Hrs)',
        description: 'After breakfast check out and proceed to Barkot.\n\nEn route visit Kempty Falls, Mussoorie (on the way).\n\nArrive Barkot, Check in the hotel.\n\nOvernight stay at Hotel.',
      },
      {
        dayLabel: 'Day 03 :: Barkot – Yamunotri (30 Kms) & Back – Barkot',
        description: 'Early morning drive to Janki Chatti (30 Kms from Barkot). From Janki Chatti start trek of 6 Kms to Yamunotri temple.\n\nDip in Surya Kund hot water spring. After darshan at Yamunotri trek back to Janki Chatti.\n\nDrive back to Barkot.\n\nOvernight stay at Hotel.',
      },
      {
        dayLabel: 'Day 04 :: Barkot - Uttarkashi (75 Kms 2-3 Hrs)',
        description: 'After breakfast check out from Hotel and proceed to Uttarkashi.\n\nArrive Uttarkashi, Check in the Hotel.\n\nVisit Vishwanath Temple, Shakti Temple.\n\nOvernight stay at Hotel.',
      },
      {
        dayLabel: 'Day 05 :: Uttarkashi – Gangotri (100 Kms 3-4 Hrs) & Back – Uttarkashi',
        description: 'Early morning after breakfast proceed to Gangotri.\n\nArrive Gangotri, take a holy dip in the River Bhagirathi. Visit Gangotri Temple for darshan and blessings.\n\nAfter darshan drive back to Uttarkashi.\n\nOvernight stay at Hotel.',
      },
      {
        dayLabel: 'Day 06 :: Uttarkashi – Guptkashi / Phata (220 Kms 8-9 Hrs)',
        description: 'After breakfast check out and proceed to Guptkashi / Phata.\n\nEn route visit Tehri Dam viewpoint.\n\nArrive Guptkashi / Phata, Check in the Hotel.\n\nOvernight stay at Hotel.',
      },
      {
        dayLabel: 'Day 07 :: Phata – Sonprayag – Kedarnath Ji (15 Kms + 17 Kms Trek)',
        description: 'Early in the morning take a packed breakfast and check out from the hotel. Proceed to Sonprayag from where the Govt. approved taxi drops you at Gaurikund where you start your 17 Kms trek to Kedarnath Ji.\n\nAfter darshan at Kedarnath overnight stay at Kedarnath Camps. (At your own cost by walk, doli, horse).\n\nNote: Only basic accommodation available at Kedarnath. Meals are not included and will be paid directly by Guest.',
      },
      {
        dayLabel: 'Day 08 :: Kedarnath – Phata – Badrinath Ji (190 Kms)',
        description: 'Morning after Pooja, trek back to Gaurikund, then drive to Sonprayag. Our driver will meet you at Sonprayag.\n\nProceed directly to Badrinath Ji.\n\nArrive Badrinath Ji, Check in the Hotel. Visit Badrinath Temple for darshan, Tapt Kund.\n\nOvernight stay at Hotel.',
      },
      {
        dayLabel: 'Day 09 :: Badrinath Sightseeing – Rudraprayag (160 Kms 5-6 Hrs)',
        description: 'Morning after temple darshan, visit Mana Village, Vyas Gufa, Ganesh Gufa, Bhim Pul and the Mukh of Saraswati River.\n\nAfter sightseeing proceed to Rudraprayag.\n\nArrive Rudraprayag, Check in the Hotel.\n\nOvernight stay at Hotel.',
      },
      {
        dayLabel: 'Day 10 :: Rudraprayag – Haridwar (150 Kms 5 Hrs)',
        description: 'After breakfast check out and proceed to Haridwar.\n\nEn route visit Maa Dhari Devi Temple.\n\nOur Representative / Driver drops you to Haridwar Station / Airport.\n\n***** Tour Ends *****',
      },
    ],
  },
];
