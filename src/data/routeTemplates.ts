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

  // ─── Do Dham Ex-Delhi: Kedarnath + Badrinath (7N/8D) ──────────────────────
  {
    id: 'dodham-exdelhi-7n8d',
    label: 'Do Dham Ex-Delhi – Kedarnath & Badrinath (7N / 8D)',
    packageName: 'Do Dham Yatra Package (Ex-Delhi)',
    destination: 'Delhi - Haridwar - Phata - Kedarnath Ji - Phata - Badrinath Ji - Rudraprayag - Rishikesh - Delhi',
    durationNights: 7,
    durationDays: 8,
    pickupPoint: 'Delhi',
    droppingPoint: 'Delhi',
    hotelOptions: [
      {
        tier: 'Standard',
        hotels: [
          { days: 'Day 01', destination: 'Haridwar', hotel: 'Hotel Nature Plaza' },
          { days: 'Day 02 & Day 04', destination: 'Phata', hotel: 'Hotel Shivay Inn' },
          { days: 'Day 03', destination: 'Kedarnath Ji', hotel: 'Ashram Dormitory (Without Meal)' },
          { days: 'Day 05', destination: 'Badrinath Ji', hotel: 'Hotel Chirag Palace' },
          { days: 'Day 06', destination: 'Rudraprayag', hotel: 'Hotel Jeet Palace' },
          { days: 'Day 07', destination: 'Rishikesh', hotel: 'Hotel A.K. Residency' },
        ],
        totalCost: 0,
      },
    ],
    dayItinerary: [
      {
        dayLabel: 'Day 01 :: Delhi – Haridwar (250 Kms 5-6 Hrs)',
        description: 'Depart from Delhi early morning and drive to Haridwar.\n\nArrive Haridwar, check-in to the hotel.\n\nIn the evening, attend the famous Ganga Aarti at Har Ki Pauri.\n\nOvernight stay at Haridwar.',
      },
      {
        dayLabel: 'Day 02 :: Haridwar – Phata (200 Kms 6-7 Hrs)',
        description: 'After breakfast, check-out and proceed to Phata.\n\nEn route visit Devprayag (confluence of Bhagirathi & Alaknanda).\n\nArrive Phata, check-in to the hotel.\n\nOvernight stay at hotel.',
      },
      {
        dayLabel: 'Day 03 :: Phata – Sonprayag – GauriKund – Kedarnath (15 Kms + 17 Kms Trek)',
        description: 'Early morning (5:00 AM) check-out. Drive to Sonprayag, then take local taxi to Gaurikund.\n\nBegin 17 Kms trek to Kedarnath (by walk, doli or horse at own cost).\n\nOn arrival at Kedarnath, check-in to Ashram.\n\nEvening Aarti at Kedarnath Temple and Shankaracharya Samadhi.\n\nOvernight stay at Ashram.\n\nNote: Only basic accommodation on quad-sharing basis. Meals not included at Kedarnath.',
      },
      {
        dayLabel: 'Day 04 :: Kedarnath – Gaurikund – Sonprayag – Phata',
        description: 'After morning darshan, trek down to Gaurikund.\n\nProceed to Sonprayag by local taxi. Our driver will meet you at Sonprayag.\n\nDrive to Phata. Check-in to hotel.\n\nOvernight stay at hotel.',
      },
      {
        dayLabel: 'Day 05 :: Phata – Badrinath Ji (190 Kms 7-8 Hrs)',
        description: 'After breakfast, check-out and proceed to Badrinath Ji.\n\nArrive Badrinath, check-in to the hotel.\n\nVisit Badrinath Temple for darshan and take a holy dip in Tapt Kund.\n\nOvernight stay at hotel.',
      },
      {
        dayLabel: 'Day 06 :: Badrinath Sightseeing – Rudraprayag (160 Kms 5-6 Hrs)',
        description: 'After morning temple darshan, visit Mana Village (last village before Tibet border).\n\nExplore Vyas Gufa, Ganesh Gufa, Bhim Pul and Saraswati River origin.\n\nDrive to Rudraprayag. Check-in to hotel.\n\nOvernight stay at hotel.',
      },
      {
        dayLabel: 'Day 07 :: Rudraprayag – Rishikesh (100 Kms 3-4 Hrs)',
        description: 'After breakfast, check-out and drive to Rishikesh.\n\nEn route visit Maa Dhari Devi Temple and Devprayag.\n\nArrive Rishikesh, check-in to hotel.\n\nEvening free for Ram Jhula, Lakshman Jhula and Ganga Aarti.\n\nOvernight stay at hotel.',
      },
      {
        dayLabel: 'Day 08 :: Rishikesh – Delhi Drop (250 Kms 6-7 Hrs)',
        description: 'After breakfast, check-out and proceed to Delhi.\n\nOur Representative / Driver drops you at Delhi for your onward journey.\n\n***** Tour Ends *****',
      },
    ],
  },

  // ─── Kedarnath + Triyuginarayan Wedding Package (4N/5D) ───────────────────
  {
    id: 'kedarnath-triyuginarayan-4n5d',
    label: 'Kedarnath + Triyuginarayan Wedding (4N / 5D)',
    packageName: 'Kedarnath & Triyuginarayan Wedding Package',
    destination: 'Haridwar - Phata - Triyuginarayan - Kedarnath Ji - Phata - Haridwar',
    durationNights: 4,
    durationDays: 5,
    pickupPoint: 'Haridwar',
    droppingPoint: 'Haridwar',
    hotelOptions: [
      {
        tier: 'Standard',
        hotels: [
          { days: 'Day 01', destination: 'Phata', hotel: 'Hotel Shivay Inn' },
          { days: 'Day 02', destination: 'Phata', hotel: 'Hotel Shivay Inn' },
          { days: 'Day 03', destination: 'Phata', hotel: 'Hotel Shivay Inn' },
          { days: 'Day 04', destination: 'Kedarnath Ji', hotel: 'Ashram Dormitory (Without Meal)' },
        ],
        totalCost: 0,
      },
    ],
    dayItinerary: [
      {
        dayLabel: 'Day 01 :: Haridwar – Phata (200 Kms 6-7 Hrs)',
        description: 'Meet our Representative / Driver at Haridwar Railway Station / Airport.\n\nProceed to Phata via Devprayag and Rudraprayag.\n\nArrive Phata, check-in to the hotel.\n\nEvening free for rest and preparation.\n\nOvernight stay at hotel.',
      },
      {
        dayLabel: 'Day 02 :: Phata – Triyuginarayan Temple – Phata',
        description: 'After breakfast, drive to Triyuginarayan (approx 30 Kms from Phata).\n\nArrive at Triyuginarayan, the sacred site where Lord Shiva married Goddess Parvati in the presence of Lord Vishnu.\n\nPerform the wedding ceremony / pooja at the eternal fire (Akhand Dhuni) that has been burning since the divine wedding.\n\nAfter the ceremony, return to Phata.\n\nOvernight stay at hotel.',
      },
      {
        dayLabel: 'Day 03 :: Phata – Sonprayag – GauriKund – Kedarnath (15 Kms + 17 Kms Trek)',
        description: 'Early morning (5:00 AM) check-out from hotel. Drive to Sonprayag, then take local taxi to Gaurikund.\n\nBegin 17 Kms trek to Kedarnath (by walk, doli or horse at own cost).\n\nOn arrival at Kedarnath, check-in to Ashram. Evening darshan and Aarti.\n\nOvernight stay at Ashram.\n\nNote: Only basic accommodation on quad-sharing basis. Meals not included at Kedarnath.',
      },
      {
        dayLabel: 'Day 04 :: Kedarnath Darshan – GauriKund – Phata',
        description: 'Early morning darshan at Kedarnath Temple.\n\nTrek back to Gaurikund. Take local taxi to Sonprayag.\n\nOur driver will meet you at Sonprayag parking.\n\nProceed to Phata. Check-in to hotel.\n\nOvernight stay at hotel.',
      },
      {
        dayLabel: 'Day 05 :: Phata – Haridwar Drop (200 Kms 6-7 Hrs)',
        description: 'After breakfast, check-out from hotel.\n\nEn route visit Dhari Devi Temple and Rishikesh.\n\nProceed to Haridwar.\n\nDrop at Haridwar Railway Station / Airport for your onward journey.\n\n***** Tour Ends *****',
      },
    ],
  },

  // ─── Panch Badri Ex-Dehradun (5N/6D) Deluxe ──────────────────────────────
  {
    id: 'panch-badri-5n6d',
    label: 'Panch Badri – Ex-Dehradun (5N / 6D)',
    packageName: 'Panch Badri Yatra Package',
    destination: 'Dehradun - Rishikesh - Pipalkothi - Joshimath - Badrinath Ji - Pipalkothi - Rishikesh - Dehradun',
    durationNights: 5,
    durationDays: 6,
    pickupPoint: 'Dehradun',
    droppingPoint: 'Dehradun',
    hotelOptions: [
      {
        tier: 'Deluxe',
        hotels: [
          { days: 'Day 01', destination: 'Rishikesh', hotel: 'Hotel Shivansh Inn' },
          { days: 'Day 02 & Day 04', destination: 'Pipalkothi', hotel: 'Hotel Om Pushp' },
          { days: 'Day 03', destination: 'Badrinath Ji', hotel: 'Hotel Kuber Regency' },
          { days: 'Day 05', destination: 'Rishikesh', hotel: 'Hotel Shivansh Inn' },
        ],
        totalCost: 0,
      },
    ],
    dayItinerary: [
      {
        dayLabel: 'Day 01 :: Dehradun – Rishikesh (50 Kms 1-2 Hrs)',
        description: 'Meet our Representative / Driver at Dehradun and proceed to Rishikesh.\n\nArrive Rishikesh, check-in to the hotel.\n\nAfternoon visit Ram Jhula, Lakshman Jhula, Triveni Ghat.\n\nEvening Ganga Aarti at Triveni Ghat.\n\nOvernight stay at hotel.',
      },
      {
        dayLabel: 'Day 02 :: Rishikesh – Adi Badri – Pipalkothi (200 Kms 6-7 Hrs)',
        description: 'After breakfast, check-out and proceed to Pipalkothi.\n\nEn route visit Adi Badri Temple (one of the Panch Badri), dedicated to Lord Vishnu.\n\nAlso visit Karanprayag and Nandprayag (holy confluences).\n\nArrive Pipalkothi, check-in to hotel.\n\nOvernight stay at hotel.',
      },
      {
        dayLabel: 'Day 03 :: Pipalkothi – Joshimath – Badrinath Ji (90 Kms 3-4 Hrs)',
        description: 'After breakfast, check-out and proceed to Badrinath via Joshimath.\n\nEn route visit Vridha Badri Temple at Animath (Joshimath) and Yogdhyan Badri at Pandukeshwar.\n\nAlso visit Narsingh Temple at Joshimath.\n\nArrive Badrinath, check-in to hotel. Visit Badrinath Temple for darshan and take dip in Tapt Kund.\n\nOvernight stay at hotel.',
      },
      {
        dayLabel: 'Day 04 :: Badrinath Sightseeing – Bhavishya Badri – Pipalkothi',
        description: 'Early morning darshan at Badrinath Temple.\n\nVisit Mana Village (last Indian village), Vyas Gufa, Ganesh Gufa, Bhim Pul, Saraswati River.\n\nEn route visit Bhavishya Badri Temple at Subhain (near Joshimath) — dedicated to Lord Vishnu.\n\nProceed to Pipalkothi. Check-in to hotel.\n\nOvernight stay at hotel.',
      },
      {
        dayLabel: 'Day 05 :: Pipalkothi – Rishikesh (200 Kms 6-7 Hrs)',
        description: 'After breakfast, check-out and drive back to Rishikesh.\n\nEn route enjoy views of Nandadevi peaks and Alaknanda valley.\n\nArrive Rishikesh, check-in to hotel.\n\nEvening free for sightseeing.\n\nOvernight stay at hotel.',
      },
      {
        dayLabel: 'Day 06 :: Rishikesh – Dehradun Drop (50 Kms 1-2 Hrs)',
        description: 'After breakfast, check-out and drive to Dehradun.\n\nOur Representative / Driver drops you at Dehradun Railway Station / Airport for your onward journey.\n\n***** Tour Ends *****',
      },
    ],
  },

  // ─── Char Dham Ex-Delhi (11N/12D) Standard ─────────────────────────────────
  {
    id: 'chardham-exdelhi-11n12d',
    label: 'Char Dham Ex-Delhi – Full Circuit (11N / 12D)',
    packageName: 'Char Dham Yatra Package (Ex-Delhi)',
    destination: 'Delhi - Haridwar - Barkot - Yamunotri - Uttarkashi - Gangotri - Phata - Kedarnath Ji - Badrinath Ji - Srinagar - Rishikesh - Delhi',
    durationNights: 11,
    durationDays: 12,
    pickupPoint: 'Delhi',
    droppingPoint: 'Delhi',
    hotelOptions: [
      {
        tier: 'Standard',
        hotels: [
          { days: 'Day 01', destination: 'Haridwar', hotel: 'Hotel Nature Plaza' },
          { days: 'Day 02 & Day 03', destination: 'Barkot', hotel: 'Hotel Ambe Sadan' },
          { days: 'Day 04 & Day 05', destination: 'Uttarkashi', hotel: 'Hotel Holiday Regency' },
          { days: 'Day 06 & Day 08', destination: 'Phata', hotel: 'Hotel Shivay Inn' },
          { days: 'Day 07', destination: 'Kedarnath Ji', hotel: 'Ashram Dormitory (Without Meal)' },
          { days: 'Day 09', destination: 'Badrinath Ji', hotel: 'Hotel Chirag Palace' },
          { days: 'Day 10', destination: 'Srinagar / Rudraprayag', hotel: 'Hotel Mantra Palace' },
          { days: 'Day 11', destination: 'Rishikesh', hotel: 'Hotel Vishal Palace' },
        ],
        totalCost: 0,
      },
    ],
    dayItinerary: [
      {
        dayLabel: 'Day 01 :: Delhi – Haridwar (250 Kms 5-6 Hrs)',
        description: 'Depart from Delhi and drive to Haridwar.\n\nArrive Haridwar, check-in to the hotel.\n\nEvening attend Ganga Aarti at Har Ki Pauri.\n\nOvernight stay at Haridwar.',
      },
      {
        dayLabel: 'Day 02 :: Haridwar – Barkot (180 Kms 5-6 Hrs)',
        description: 'After breakfast, check-out and proceed to Barkot.\n\nEn route visit Kempty Falls, Mussoorie (on the way, time permitting).\n\nArrive Barkot, check-in to hotel.\n\nOvernight stay at hotel.',
      },
      {
        dayLabel: 'Day 03 :: Barkot – Yamunotri (42 Kms + 6 Kms Trek) – Barkot',
        description: 'Early morning drive to Jankichatti (42 Kms). Start 5-6 Kms trek to Yamunotri (by walk, doli or horse at own cost).\n\nAt Yamunotri: take bath in hot Surya Kund, darshan at Yamunotri Temple.\n\nTrek back to Jankichatti and drive to Barkot.\n\nOvernight stay at hotel.',
      },
      {
        dayLabel: 'Day 04 :: Barkot – Uttarkashi (95 Kms 3-4 Hrs)',
        description: 'After breakfast, check-out and drive to Uttarkashi.\n\nArrive Uttarkashi, check-in to hotel.\n\nVisit Vishwanath Temple and Shakti Temple.\n\nOvernight stay at hotel.',
      },
      {
        dayLabel: 'Day 05 :: Uttarkashi – Gangotri (100 Kms) & Back – Uttarkashi',
        description: 'Early morning (5:00 AM) drive to Gangotri.\n\nEn route visit Gangnani Kund, Harshil Valley, Lanka Bridge.\n\nAt Gangotri: take holy dip in River Bhagirathi and darshan at Gangotri Temple.\n\nAfter darshan, drive back to Uttarkashi.\n\nOvernight stay at hotel.',
      },
      {
        dayLabel: 'Day 06 :: Uttarkashi – Phata (220 Kms 8-9 Hrs)',
        description: 'After breakfast, check-out and proceed to Phata.\n\nEn route visit Tehri Dam viewpoint and Kashi Vishwanath Temple at Guptkashi.\n\nArrive Phata, check-in to hotel.\n\nOvernight stay at hotel.',
      },
      {
        dayLabel: 'Day 07 :: Phata – Sonprayag – Kedarnath (15 Kms + 17 Kms Trek)',
        description: 'Early morning (5:00 AM) check-out. Drive to Sonprayag, take local taxi to Gaurikund, then begin 17 Kms trek to Kedarnath (by walk, doli or horse at own cost).\n\nArrive Kedarnath, check-in to Ashram. Evening Aarti at temple.\n\nOvernight stay at Ashram.\n\nNote: Only basic accommodation on quad-sharing basis. Meals not included at Kedarnath.',
      },
      {
        dayLabel: 'Day 08 :: Kedarnath – Gaurikund – Phata',
        description: 'Morning darshan at Kedarnath Temple.\n\nTrek back to Gaurikund and proceed to Sonprayag by local taxi.\n\nOur driver meets you at Sonprayag. Drive to Phata.\n\nOvernight stay at hotel.',
      },
      {
        dayLabel: 'Day 09 :: Phata – Badrinath Ji (190 Kms 7-8 Hrs)',
        description: 'After breakfast, check-out and proceed to Badrinath Ji.\n\nArrive Badrinath, check-in to hotel. Visit Badrinath Temple for darshan and dip in Tapt Kund.\n\nOvernight stay at hotel.',
      },
      {
        dayLabel: 'Day 10 :: Badrinath Sightseeing – Srinagar / Rudraprayag (160 Kms 5-6 Hrs)',
        description: 'Morning darshan at Badrinath Temple.\n\nVisit Mana Village, Vyas Gufa, Ganesh Gufa, Bhim Pul, Saraswati River.\n\nProceed to Srinagar / Rudraprayag. Check-in to hotel.\n\nOvernight stay at hotel.',
      },
      {
        dayLabel: 'Day 11 :: Srinagar – Rishikesh (100 Kms 3-4 Hrs)',
        description: 'After breakfast, check-out and drive to Rishikesh.\n\nEn route visit Maa Dhari Devi Temple and Devprayag.\n\nArrive Rishikesh, check-in to hotel. Evening free for Ram Jhula, Lakshman Jhula.\n\nOvernight stay at hotel.',
      },
      {
        dayLabel: 'Day 12 :: Rishikesh – Delhi Drop (250 Kms 6-7 Hrs)',
        description: 'After breakfast, check-out and proceed to Delhi.\n\nOur Representative / Driver drops you at Delhi for your onward journey.\n\n***** Tour Ends *****',
      },
    ],
  },

  // ─── Char Dham + Mussoorie + Jim Corbett + Nainital Ex-Delhi (15N/16D) ─────
  {
    id: 'chardham-mussoorie-corbett-nainital-15n16d',
    label: 'Char Dham + Mussoorie + Jim Corbett + Nainital Ex-Delhi (15N / 16D)',
    packageName: 'Char Dham + Mussoorie + Jim Corbett + Nainital Package',
    destination: 'Delhi - Haridwar - Mussoorie - Barkot - Yamunotri - Uttarkashi - Gangotri - Phata - Kedarnath Ji - Badrinath Ji - Rudraprayag - Jim Corbett - Nainital - Delhi',
    durationNights: 15,
    durationDays: 16,
    pickupPoint: 'Delhi',
    droppingPoint: 'Delhi',
    hotelOptions: [
      {
        tier: 'Deluxe',
        hotels: [
          { days: 'Day 01', destination: 'Haridwar', hotel: 'Hotel Renest' },
          { days: 'Day 02', destination: 'Mussoorie', hotel: 'Ceyone Resort' },
          { days: 'Day 03 & Day 04', destination: 'Barkot', hotel: 'Hotel Pine Hill' },
          { days: 'Day 05 & Day 06', destination: 'Uttarkashi', hotel: 'Mahima Resort' },
          { days: 'Day 07 & Day 09', destination: 'Phata', hotel: "Hotel Shiva's Trident" },
          { days: 'Day 08', destination: 'Kedarnath Ji', hotel: 'Ashram Dormitory (Without Meal)' },
          { days: 'Day 10', destination: 'Badrinath Ji', hotel: 'Hotel Kuber Regency' },
          { days: 'Day 11', destination: 'Rudraprayag', hotel: 'Hotel Mandakini' },
          { days: 'Day 12 & Day 13', destination: 'Jim Corbett', hotel: 'Corbett Dan' },
          { days: 'Day 14 & Day 15', destination: 'Nainital', hotel: 'Maati Resort' },
        ],
        totalCost: 0,
      },
    ],
    dayItinerary: [
      {
        dayLabel: 'Day 01 :: Delhi – Haridwar (250 Kms 5-6 Hrs)',
        description: 'Depart from Delhi early morning and drive to Haridwar.\n\nArrive Haridwar, check-in to hotel.\n\nEvening attend Ganga Aarti at Har Ki Pauri.\n\nOvernight stay at Haridwar.',
      },
      {
        dayLabel: 'Day 02 :: Haridwar – Mussoorie (100 Kms 3-4 Hrs)',
        description: 'After breakfast, check-out and drive to Mussoorie (Queen of Hills).\n\nArrive Mussoorie, check-in to resort.\n\nAfternoon visit Mall Road, Gun Hill (by ropeway), Kempty Falls.\n\nEvening stroll on the famous Mall Road.\n\nOvernight stay at Mussoorie.',
      },
      {
        dayLabel: 'Day 03 :: Mussoorie – Barkot (120 Kms 4-5 Hrs)',
        description: 'After breakfast, check-out and proceed to Barkot via Yamuna Valley.\n\nEn route enjoy views of Yamuna River and dense forests.\n\nArrive Barkot, check-in to hotel.\n\nOvernight stay at hotel.',
      },
      {
        dayLabel: 'Day 04 :: Barkot – Yamunotri (42 Kms + 6 Kms Trek) – Barkot',
        description: 'Early morning drive to Jankichatti (42 Kms). Start 5-6 Kms trek to Yamunotri (by walk, doli or horse at own cost).\n\nAt Yamunotri: take bath in hot Surya Kund, darshan at Yamunotri Temple.\n\nTrek back to Jankichatti and drive to Barkot.\n\nOvernight stay at hotel.',
      },
      {
        dayLabel: 'Day 05 :: Barkot – Uttarkashi (95 Kms 3-4 Hrs)',
        description: 'After breakfast, check-out and drive to Uttarkashi.\n\nArrive Uttarkashi, check-in to hotel.\n\nVisit Vishwanath Temple and Shakti Temple.\n\nOvernight stay at hotel.',
      },
      {
        dayLabel: 'Day 06 :: Uttarkashi – Gangotri (100 Kms) & Back – Uttarkashi',
        description: 'Early morning (5:00 AM) drive to Gangotri.\n\nEn route visit Gangnani Kund, Harshil Valley, Lanka Bridge.\n\nAt Gangotri: take holy dip in River Bhagirathi and darshan at Gangotri Temple.\n\nAfter darshan, drive back to Uttarkashi.\n\nOvernight stay at hotel.',
      },
      {
        dayLabel: 'Day 07 :: Uttarkashi – Phata (220 Kms 8-9 Hrs)',
        description: 'After breakfast, check-out and proceed to Phata.\n\nEn route visit Tehri Dam viewpoint and Kashi Vishwanath Temple at Guptkashi.\n\nArrive Phata, check-in to hotel.\n\nOvernight stay at hotel.',
      },
      {
        dayLabel: 'Day 08 :: Phata – Sonprayag – Kedarnath (15 Kms + 17 Kms Trek)',
        description: 'Early morning (5:00 AM) check-out. Drive to Sonprayag, take local taxi to Gaurikund, then begin 17 Kms trek to Kedarnath (by walk, doli or horse at own cost).\n\nArrive Kedarnath, check-in to Ashram. Evening Aarti at temple.\n\nOvernight stay at Ashram.\n\nNote: Only basic accommodation on quad-sharing basis. Meals not included at Kedarnath.',
      },
      {
        dayLabel: 'Day 09 :: Kedarnath – Gaurikund – Phata',
        description: 'Morning darshan at Kedarnath Temple.\n\nTrek back to Gaurikund. Proceed to Sonprayag by local taxi.\n\nOur driver meets you at Sonprayag. Drive to Phata.\n\nOvernight stay at hotel.',
      },
      {
        dayLabel: 'Day 10 :: Phata – Badrinath Ji (190 Kms 7-8 Hrs)',
        description: 'After breakfast, check-out and proceed to Badrinath Ji.\n\nArrive Badrinath, check-in to hotel. Visit Badrinath Temple for darshan and dip in Tapt Kund.\n\nOvernight stay at hotel.',
      },
      {
        dayLabel: 'Day 11 :: Badrinath Sightseeing – Rudraprayag (160 Kms 5-6 Hrs)',
        description: 'Morning darshan at Badrinath Temple.\n\nVisit Mana Village, Vyas Gufa, Ganesh Gufa, Bhim Pul, Saraswati River.\n\nProceed to Rudraprayag. Check-in to hotel.\n\nOvernight stay at hotel.',
      },
      {
        dayLabel: 'Day 12 :: Rudraprayag – Jim Corbett National Park (200 Kms 6-7 Hrs)',
        description: 'After breakfast, check-out and proceed to Jim Corbett National Park (via Haridwar / Ramnagar).\n\nArrive Jim Corbett, check-in to resort.\n\nAfternoon free to relax and explore the surroundings.\n\nOvernight stay at resort.',
      },
      {
        dayLabel: 'Day 13 :: Jim Corbett – Jungle Safari (Full Day)',
        description: 'Early morning and evening Jungle Safaris in Jim Corbett National Park (at own cost or as per package).\n\nSpot wildlife: tigers, leopards, elephants, deer, and exotic birds in their natural habitat.\n\nOvernight stay at resort.',
      },
      {
        dayLabel: 'Day 14 :: Jim Corbett – Nainital (70 Kms 2-3 Hrs)',
        description: 'After breakfast, check-out and drive to Nainital (Lake City).\n\nArrive Nainital, check-in to resort.\n\nAfternoon visit Naini Lake (boat ride at own cost), Snow View Point (cable car at own cost), Naina Devi Temple, Mall Road.\n\nOvernight stay at resort.',
      },
      {
        dayLabel: 'Day 15 :: Nainital Sightseeing',
        description: 'After breakfast, explore more of Nainital.\n\nVisit Bhimtal, Naukuchiyatal, Sattal lakes.\n\nVisit Zoo, High Altitude Botanical Garden, Tiffin Top.\n\nEvening free for shopping on Mall Road.\n\nOvernight stay at resort.',
      },
      {
        dayLabel: 'Day 16 :: Nainital – Delhi Drop (300 Kms 7-8 Hrs)',
        description: 'After breakfast, check-out and proceed to Delhi.\n\nOur Representative / Driver drops you at Delhi for your onward journey.\n\n***** Tour Ends *****',
      },
    ],
  },

  // ─── Char Dham + Tungnath Ex-Haridwar (10N/11D) Standard ──────────────────
  {
    id: 'chardham-tungnath-10n11d',
    label: 'Char Dham + Tungnath – Ex-Haridwar (10N / 11D)',
    packageName: 'Char Dham Yatra + Tungnath Package',
    destination: 'Haridwar - Barkot - Yamunotri - Uttarkashi - Gangotri - Phata - Kedarnath Ji - Chopta - Tungnath - Badrinath Ji - Rudraprayag - Haridwar',
    durationNights: 10,
    durationDays: 11,
    pickupPoint: 'Haridwar',
    droppingPoint: 'Haridwar',
    hotelOptions: [
      {
        tier: 'Standard',
        hotels: [
          { days: 'Day 01 & Day 02', destination: 'Barkot / Jankichatti', hotel: 'Hotel Trishul' },
          { days: 'Day 03 & Day 04', destination: 'Uttarkashi', hotel: 'Hotel Holiday Regency' },
          { days: 'Day 05 & Day 07', destination: 'Phata', hotel: 'Hotel Shivay Inn' },
          { days: 'Day 06', destination: 'Kedarnath Ji', hotel: 'Ashram (Without Food)' },
          { days: 'Day 08', destination: 'Chopta', hotel: 'Royal Camp' },
          { days: 'Day 09', destination: 'Badrinath Ji / Pipalkoti', hotel: 'Hotel Brahma Kamal' },
          { days: 'Day 10', destination: 'Rudraprayag / Srinagar', hotel: 'Hotel Alaknanda Inn' },
        ],
        totalCost: 0,
      },
    ],
    dayItinerary: [
      {
        dayLabel: 'Day 01 :: Haridwar – Barkot (180 Kms 5-6 Hrs)',
        description: 'Morning meet our Representative / Driver at Haridwar Railway Station and drive to Barkot.\n\nEn route visit Kempty Falls, Mussoorie (time permitting).\n\nOn arrival check-in to the Hotel.\n\nOvernight stay at hotel Barkot.',
      },
      {
        dayLabel: 'Day 02 :: Barkot – Yamunotri – Barkot (42 Kms + 5 Kms Trek)',
        description: 'Early morning drive to Jankichatti (42 Kms). Start a 5 Kms trek from Janki Chatti to Yamunotri (by walk, doli or horse at own cost).\n\nOn arrival at Yamunotri, take bath in hot Jamunabai Kund then go for Temple darshan.\n\nPilgrims may cook rice by packing it in cloth and dipping it in the hot kund — taken home as Prasad.\n\nAfter darshan, trek back to Jankichatti and return to Barkot.\n\nOvernight stay at hotel.',
      },
      {
        dayLabel: 'Day 03 :: Barkot – Uttarkashi (95 Kms 4 Hrs)',
        description: 'After breakfast (9:00 AM), check-out and drive to Uttarkashi.\n\nEn route visit the famous Kashi Vishwanath Temple at Uttarkashi.\n\nArrive Uttarkashi, check-in to hotel.\n\nOvernight stay at hotel.',
      },
      {
        dayLabel: 'Day 04 :: Uttarkashi – Gangotri – Uttarkashi (100 Kms One Side)',
        description: 'Early morning (5:00 AM) drive to Gangotri.\n\nEn route visit Gangnani Kund, Harshil Valley, Lanka Bridge.\n\nAt Gangotri: take holy dip in River Ganga (Bhagirathi) and darshan at Gangotri Temple.\n\nAfter darshan, drive back to Uttarkashi for overnight stay.',
      },
      {
        dayLabel: 'Day 05 :: Uttarkashi – Phata (220 Kms 8-9 Hrs)',
        description: 'After breakfast (8:00 AM), check-out and drive to Phata.\n\nEn route visit Kashi Vishwanath Temple at Guptkashi.\n\nArrive Phata, check-in to hotel.\n\nOvernight stay at hotel.',
      },
      {
        dayLabel: 'Day 06 :: Phata – Sonprayag – GauriKund – Kedarnath (35 Kms + 17 Kms Trek)',
        description: 'Early morning (5:00 AM) check-out from hotel and drive to Gaurikund.\n\nStart a 17 Kms trek to Kedarnath (by walk, doli or horse at own cost).\n\nOn arrival at Kedarnath, check-in into the Ashram.\n\nIn the evening visit Shankaracharya Samadhi behind the temple and take part in evening Aarti.\n\nOvernight stay at Ashram.\n\nNote: Only basic accommodation on Triple and Quad sharing basis. Meals are not included at Kedarnath Ji.',
      },
      {
        dayLabel: 'Day 07 :: Kedarnath – Gaurikund – Phata',
        description: 'Morning after darshan, trek down to Gaurikund.\n\nArrive Gaurikund, proceed to Sonprayag on your own by local taxi.\n\nOur driver meets you at Sonprayag. Drive to hotel at Phata.\n\nOvernight stay at hotel.',
      },
      {
        dayLabel: 'Day 08 :: Phata – Chopta (70 Kms 3-4 Hrs)',
        description: 'Morning after breakfast, check-out and drive towards Chopta (Mini Switzerland of Uttarakhand).\n\nOn arrival at Chopta, check-in to hotel / camps.\n\nAfter some rest, enjoy local sightseeing and nature walk in Chopta Valley.\n\nIn the evening, enjoy beautiful sunset views of Himalayan ranges.\n\nDinner and overnight stay at Chopta.',
      },
      {
        dayLabel: 'Day 09 :: Chopta – Tungnath – Chandrashila – Badrinath (180 Kms 7-8 Hrs)',
        description: 'Early morning start trek to Tungnath Temple (3.5 Kms one side) — the highest Shiva temple in the world.\n\nAfter temple darshan, optional trek of 1.5 Kms to Chandrashila Peak for breathtaking 360° Himalayan views (approx 3-4 Hours round trip).\n\nReturn to Chopta and drive to Badrinath.\n\nOn arrival, check-in to hotel. Evening attend Badrinath Aarti (if time permits).\n\nOvernight stay at Badrinath.',
      },
      {
        dayLabel: 'Day 10 :: Badrinath – Rudraprayag (190 Kms 8 Hrs)',
        description: 'Early morning take bath in Tapt Kund (Suryakund).\n\nVisit Badrinath Temple for darshan. After darshan, visit Mana Village, Vyas Gufa, Ganesh Gufa, Bhim Pul, Saraswati River.\n\nAfter breakfast, check-out and drive to Rudraprayag.\n\nOn arrival, check-in to hotel.\n\nOvernight stay at hotel.',
      },
      {
        dayLabel: 'Day 11 :: Rudraprayag – Haridwar (150 Kms 5-6 Hrs)',
        description: 'Morning after breakfast, check-out and proceed to Haridwar.\n\nEn route visit Maa Dhari Devi Temple and Devprayag.\n\nOur Representative / Driver drops you at Haridwar for your onward destination.\n\n***** Tour Ends *****',
      },
    ],
  },

  // ─── Char Dham + Tungnath (Ex-Delhi) 13N/14D ────────────────────────────
  {
    id: 'chardham-tungnath-exdelhi-13n14d',
    label: 'Char Dham + Tungnath – Ex-Delhi (13N / 14D)',
    packageName: 'Chardham Yatra + Tungnath',
    destination: 'Delhi - Haridwar - Barkot - Yamunotri - Barkot - Uttarkashi - Gangotri - Uttarkashi - Guptkashi - Kedarnath - Guptkashi - Tungnath - Badrinath - Rudraprayag - Haridwar - Delhi',
    durationNights: 13,
    durationDays: 14,
    pickupPoint: 'Delhi',
    droppingPoint: 'Delhi',
    hotelOptions: [
      {
        tier: 'Standard',
        hotels: [
          { days: 'Day 01', destination: 'Haridwar', hotel: 'Hotel Nature Plaza' },
          { days: 'Day 02-03', destination: 'Barkot / Jankichatti', hotel: 'Hotel Trishul' },
          { days: 'Day 04-05', destination: 'Uttarkashi', hotel: 'Hotel Holiday Regency' },
          { days: 'Day 06, 08', destination: 'Phata', hotel: 'Hotel Mahadev' },
          { days: 'Day 07', destination: 'Kedarnath Ji', hotel: 'Ashram (Without Meal)' },
          { days: 'Day 09-10', destination: 'Chopta', hotel: 'Royal Camp' },
          { days: 'Day 11', destination: 'Badrinath / Pipalkoti', hotel: 'Chirag Palace' },
          { days: 'Day 12', destination: 'Rudraprayag / Srinagar', hotel: 'Hotel Narayan' },
          { days: 'Day 13', destination: 'Rishikesh', hotel: 'A.K Residency' },
        ],
        totalCost: 175000,
      },
    ],
    dayItinerary: [
      { dayLabel: 'Day 01 :: Delhi – Haridwar (220 Kms 5-6 Hrs)', description: 'Pickup from Delhi (Morning 7:00–8:00 AM). Drive to Haridwar. Check-in hotel. Evening Ganga Aarti. Overnight stay.' },
      { dayLabel: 'Day 02 :: Haridwar – Barkot (180 Kms 6-7 Hrs)', description: 'Departure 8:00 AM. En route Kempty Falls. Reach Barkot by evening. Overnight stay.' },
      { dayLabel: 'Day 03 :: Barkot – Yamunotri – Barkot (42 Kms drive + 6 Kms trek)', description: 'Departure 5:00 AM to Janki Chatti. Trek 5–6 hrs total. Visit Yamunotri Temple. Return Barkot. Overnight stay.' },
      { dayLabel: 'Day 04 :: Barkot – Uttarkashi (95 Kms 4 Hrs)', description: 'Departure 9:00 AM. Visit Kashi Vishwanath Temple Uttarkashi. Overnight stay.' },
      { dayLabel: 'Day 05 :: Uttarkashi – Gangotri – Uttarkashi (100 Kms 4-5 Hrs)', description: 'Departure 5:00 AM. Visit Gangotri Temple. Return Uttarkashi. Overnight stay.' },
      { dayLabel: 'Day 06 :: Uttarkashi – Guptkashi (220 Kms 8-9 Hrs)', description: 'Departure 8:00 AM. Long drive via scenic route. Overnight stay.' },
      { dayLabel: 'Day 07 :: Guptkashi – Kedarnath (30 Kms drive + 16-18 Kms trek)', description: 'Departure 4:30–5:00 AM. Trek 7–8 hrs. Visit Kedarnath Temple. Evening Aarti. Overnight stay.' },
      { dayLabel: 'Day 08 :: Kedarnath – Guptkashi / Phata', description: 'Morning Darshan 5:00–7:00 AM. Trek down 6–7 hrs. Drive to hotel. Overnight stay.' },
      { dayLabel: 'Day 09 :: Guptkashi – Chopta (40 Kms 2 Hrs)', description: 'Departure 9:00 AM. Drive to Chopta. Overnight stay.' },
      { dayLabel: 'Day 10 :: Chopta – Tungnath – Chopta (4 Kms trek one side)', description: 'Trek start 5:30 AM. Visit Tungnath Temple. Optional Chandrashila (extra 1.5 Km / 1 hr). Return Chopta. Overnight stay.' },
      { dayLabel: 'Day 11 :: Chopta – Badrinath (200 Kms 7-8 Hrs)', description: 'Departure 8:00 AM. Visit Badrinath Temple. Evening Darshan. Overnight stay.' },
      { dayLabel: 'Day 12 :: Badrinath – Rudraprayag (190 Kms 7-8 Hrs)', description: 'Morning Darshan 6:00 AM. Visit Mana Village & nearby spots. Drive to Rudraprayag. Overnight stay.' },
      { dayLabel: 'Day 13 :: Rudraprayag – Haridwar (140 Kms 5-6 Hrs)', description: 'Departure 8:00 AM. Visit Devprayag & Dhari Devi Temple. Reach Haridwar. Overnight stay.' },
      { dayLabel: 'Day 14 :: Haridwar – Delhi (220 Kms 5-6 Hrs)', description: 'Departure 8:00 AM. Drive to Delhi. Drop at Airport / Railway Station. ***** Tour Ends *****' },
    ],
  },

  // ─── Do Dham by Helicopter – Same Day (Ex-Dehradun) ─────────────────────
  {
    id: 'dodham-heli-sameday',
    label: 'Do Dham by Helicopter – Same Day (Ex-Dehradun)',
    packageName: 'Do Dham Yatra by Helicopter (Same Day)',
    destination: 'Dehradun - Kedarnath - Badrinath - Dehradun',
    durationNights: 0,
    durationDays: 1,
    pickupPoint: 'SSD Helipad, Dehradun',
    droppingPoint: 'SSD Helipad, Dehradun',
    hotelOptions: [
      {
        tier: 'Standard',
        hotels: [
          { days: 'Day 01', destination: 'Same Day Return', hotel: 'No accommodation (Same Day Tour)' },
        ],
        totalCost: 0,
      },
    ],
    dayItinerary: [
      { dayLabel: 'Day 01 :: Dehradun – Kedarnath (30 Min Flight)', description: 'Departure from SSD Helipad, Dehradun. Arrive at Guptkashi/Sersi/Phata base helipad. Change chopper, fly to Kedarnath (6-10 mins). VIP Darshan at Kedarnath Temple. Return to base helipad.' },
      { dayLabel: 'Day 01 :: Kedarnath – Badrinath (30 Min Flight)', description: 'Fly from Kedarnath base helipad to Badrinath helipad. Handlers transfer to temple parking. VIP Darshan at Badrinath Temple. Leisure time near temple.' },
      { dayLabel: 'Day 01 :: Badrinath – Dehradun (50 Min Flight)', description: 'Departure from Badrinath Helipad. Arrival at SSD Helipad, Dehradun. Drop provided. ***** Tour Ends *****' },
    ],
  },

  // ─── Do Dham by Helicopter 3N/4D (Ex-Dehradun) ──────────────────────────
  {
    id: 'dodham-heli-3n4d',
    label: 'Do Dham by Helicopter (3N / 4D, Ex-Dehradun)',
    packageName: 'Do Dham Yatra by Helicopter',
    destination: 'Dehradun - Kedarnath - Badrinath - Dehradun',
    durationNights: 3,
    durationDays: 4,
    pickupPoint: 'Dehradun',
    droppingPoint: 'Dehradun',
    hotelOptions: [
      {
        tier: 'Luxury',
        hotels: [
          { days: 'Day 01', destination: 'Dehradun', hotel: 'Hotel Hyatt Centric' },
          { days: 'Day 02', destination: 'Sersi (Kedarnath Base)', hotel: 'Hotel Sersi Heights' },
          { days: 'Day 03', destination: 'Badrinath', hotel: 'Hotel Amritara The Avadh' },
        ],
        totalCost: 145000,
      },
    ],
    dayItinerary: [
      { dayLabel: 'Arrival Day :: Dehradun', description: 'Arrival at Dehradun airport / railway station. Driver-cum-guide receives and transfers to hotel. Complimentary stay including breakfast and dinner. Overnight stay.' },
      { dayLabel: 'Day 01 :: Dehradun – Kedarnath (30 Min Flight)', description: 'Fly SSD Helipad Dehradun to Guptkashi/Sersi/Phata base helipad. Change chopper to Kedarnath. VIP Darshan. Stay arranged at Kedar basecamp. Overnight stay with dinner.' },
      { dayLabel: 'Day 02 :: Kedarnath – Badrinath (30 Min Flight)', description: 'Fly from Kedarnath base to Badrinath. VIP Darshan at Badrinath Temple. Visit Mana Village, Vyas Gufa, Saraswati River origin. Overnight stay with dinner.' },
      { dayLabel: 'Day 03 :: Badrinath – Dehradun (50 Min Flight)', description: 'Hearty breakfast. Final darshan at Badrinath. Fly back to Dehradun. Drop at airport / railway station / bus stand. ***** Tour Ends *****' },
    ],
  },

  // ─── Sacred Char Dham (Ex-Dehradun Round Trip) 9N/10D ───────────────────
  {
    id: 'chardham-dehradun-9n10d',
    label: 'Sacred Char Dham – Ex-Dehradun Round Trip (9N / 10D)',
    packageName: 'Chardham Yatra',
    destination: 'Dehradun - Barkot - Yamunotri - Barkot - Uttarkashi - Gangotri - Uttarkashi - Phata - Kedarnath - Phata - Badrinath - Rudraprayag - Dehradun',
    durationNights: 9,
    durationDays: 10,
    pickupPoint: 'Dehradun',
    droppingPoint: 'Dehradun',
    hotelOptions: [
      {
        tier: 'Standard',
        hotels: [
          { days: 'Day 01-02', destination: 'Barkot / Jankichatti', hotel: 'Standard Hotel' },
          { days: 'Day 03-04', destination: 'Uttarkashi', hotel: 'Standard Hotel' },
          { days: 'Day 05', destination: 'Phata', hotel: 'Standard Hotel' },
          { days: 'Day 06', destination: 'Kedarnath Ji', hotel: 'Ashram (Without Meal)' },
          { days: 'Day 07', destination: 'Phata', hotel: 'Standard Hotel' },
          { days: 'Day 08', destination: 'Badrinath / Pipalkoti', hotel: 'Standard Hotel' },
          { days: 'Day 09', destination: 'Rudraprayag / Srinagar', hotel: 'Standard Hotel' },
        ],
        totalCost: 275000,
      },
    ],
    dayItinerary: [
      { dayLabel: 'Day 01 :: Dehradun – Barkot (180 Kms 5-6 Hrs)', description: 'Morning meet driver at Dehradun Railway Station/Airport. Drive to Barkot via Kempty Fall (Mussoorie) or Vikashnagar route. Check-in hotel. Overnight stay.' },
      { dayLabel: 'Day 02 :: Barkot – Yamunotri – Barkot (42 Kms + 6 Kms Trek)', description: 'Early morning drive to Jankichatti. 5 Kms trek to Yamunotri (walk/doli/horse). Bath in Jamunabai Kund. Temple darshan. Return Barkot. Overnight stay.' },
      { dayLabel: 'Day 03 :: Barkot – Uttarkashi (95 Kms 4 Hrs)', description: 'After breakfast drive to Uttarkashi. Visit Kashi Vishwanath Temple. Check-in hotel. Overnight stay.' },
      { dayLabel: 'Day 04 :: Uttarkashi – Gangotri – Uttarkashi (100 Kms one side)', description: 'Early morning drive to Gangotri via Gangnani Kund, Harshil Valley, Lanka Bridge. Holy dip in Bhagirathi. Temple darshan. Return Uttarkashi. Overnight stay.' },
      { dayLabel: 'Day 05 :: Uttarkashi – Phata (220 Kms 8-9 Hrs)', description: 'After breakfast drive to Phata via Guptkashi (Vishwanath Temple darshan). Check-in hotel. Overnight stay.' },
      { dayLabel: 'Day 06 :: Phata – Sonprayag – Gaurikund – Kedarnath (35 Kms + 17 Kms Trek)', description: 'Early morning drive to Gaurikund. 20 Kms trek to Kedarnath. Check-in Ashram. Evening Shankaracharya Samadhi & Aarti. Overnight stay.' },
      { dayLabel: 'Day 07 :: Kedarnath – Guptkashi / Phata', description: 'Morning darshan, trek down to Gaurikund. Drive to hotel. Check-in. Overnight stay.' },
      { dayLabel: 'Day 08 :: Guptkashi / Phata – Badrinath (200 Kms 7-8 Hrs)', description: 'Drive to Badrinath. Visit Badrinath Temple, Tapt Kund, Mana Village, Bhim Pul, Saraswati River origin. Overnight stay.' },
      { dayLabel: 'Day 09 :: Badrinath – Rudraprayag (190 Kms 7-8 Hrs)', description: 'Tapt Kund holy bath. Morning Badrinath darshan. Drive to Rudraprayag. Overnight stay.' },
      { dayLabel: 'Day 10 :: Rudraprayag – Dehradun (160 Kms 6-7 Hrs)', description: 'Visit Dhari Devi Temple, Devprayag (origin of Ganga). Drive through Rishikesh. Drop at Dehradun Airport / Railway Station. ***** Tour Ends *****' },
    ],
  },

  // ─── Char Dham by Helicopter 5N/6D (Ex-Dehradun) ────────────────────────
  {
    id: 'chardham-heli-5n6d',
    label: 'Char Dham by Helicopter (5N / 6D, Ex-Dehradun)',
    packageName: 'Chardham Yatra by Helicopter',
    destination: 'Dehradun - Yamunotri - Gangotri - Kedarnath - Badrinath - Dehradun',
    durationNights: 5,
    durationDays: 6,
    pickupPoint: 'Dehradun',
    droppingPoint: 'Dehradun',
    hotelOptions: [
      {
        tier: 'Luxury',
        hotels: [
          { days: 'Day 01', destination: 'Dehradun', hotel: 'Hotel Hyatt Centric' },
          { days: 'Day 02', destination: 'Kharsali (Yamunotri)', hotel: 'Hotel Holy Yamuna' },
          { days: 'Day 03', destination: 'Harshil', hotel: 'Harsil Retreat' },
          { days: 'Day 04', destination: 'Kedarnath Base', hotel: 'Hotel Sersi Heights' },
          { days: 'Day 05', destination: 'Badrinath', hotel: 'Hotel Lords' },
        ],
        totalCost: 0,
      },
    ],
    dayItinerary: [
      { dayLabel: 'Arrival Day :: Dehradun', description: 'Arrival at Dehradun. Transfer to hotel for complimentary stay. Dinner and breakfast included. Overnight stay.' },
      { dayLabel: 'Day 01 :: Dehradun – Yamunotri (30 Min Flight)', description: 'Fly Dehradun (SSD Helipad) to Kharsali. Breakfast then Palki/Pony to Yamunotri Temple (~6 km). Darshan. Lunch. Evening visit Shani Mandir & Yamuna Mata Temple. Overnight stay.' },
      { dayLabel: 'Day 02 :: Yamunotri – Gangotri (30 Min Flight)', description: 'Fly Kharsali to Jhala Helipad (Gangotri). Drive 20 km to Gangotri Temple darshan. Stay in Harsil ("Mini Switzerland"). Evening bonfire. Overnight stay.' },
      { dayLabel: 'Day 03 :: Gangotri – Kedarnath (30 Min Flight)', description: 'Fly Harsil to Guptkashi/Sersi/Phata base helipad, then to Kedarnath. VIP Darshan. Stay at Kedar basecamp. Overnight stay.' },
      { dayLabel: 'Day 04 :: Kedarnath – Badrinath (30 Min Flight)', description: 'Fly Kedarnath base to Badrinath. VIP Darshan. Visit Mana Village, Vyas Gufa, Saraswati River origin. Overnight stay.' },
      { dayLabel: 'Day 05 :: Badrinath – Dehradun (50 Min Flight)', description: 'Hearty breakfast. Final Badrinath darshan. Fly back to Dehradun. Drop at airport / railway / bus stand. ***** Tour Ends *****' },
    ],
  },

  // ─── Char Dham + Hemkund Sahib 11N/12D (Ex-Haridwar) ────────────────────
  {
    id: 'chardham-hemkund-11n12d',
    label: 'Char Dham + Hemkund Sahib (11N / 12D, Ex-Haridwar)',
    packageName: 'Chardham Yatra with Hemkund Sahib',
    destination: 'Haridwar - Barkot - Yamunotri - Barkot - Uttarkashi - Gangotri - Uttarkashi - Guptkashi - Kedarnath - Guptkashi - Badrinath - Mana - Govindghat - Ghangaria - Hemkund Sahib - Ghangaria - Rudraprayag - Haridwar',
    durationNights: 11,
    durationDays: 12,
    pickupPoint: 'Haridwar',
    droppingPoint: 'Haridwar',
    hotelOptions: [
      {
        tier: 'Standard',
        hotels: [
          { days: 'Day 01-02', destination: 'Barkot / Jankichatti', hotel: 'Hotel Trishul / Yamuna Bhakti' },
          { days: 'Day 03-04', destination: 'Uttarkashi', hotel: 'Hotel Jeet Palace / Holiday Regency' },
          { days: 'Day 05, 07', destination: 'Phata', hotel: 'Hotel Shivay Inn Phata' },
          { days: 'Day 06', destination: 'Kedarnath Ji', hotel: 'Ashram (Without Meal)' },
          { days: 'Day 08', destination: 'Badrinath Ji', hotel: 'Chirag Palace' },
          { days: 'Day 09-10', destination: 'Ghangaria', hotel: 'Hotel Kuber' },
          { days: 'Day 11', destination: 'Rudraprayag / Srinagar', hotel: 'Hotel Mantra Palace' },
        ],
        totalCost: 0,
      },
    ],
    dayItinerary: [
      { dayLabel: 'Day 01 :: Haridwar – Barkot (180 Kms 5-6 Hrs)', description: 'Pickup Haridwar. Drive to Barkot via Kempty Fall / Vikashnagar. Check-in. Overnight stay.' },
      { dayLabel: 'Day 02 :: Barkot – Yamunotri – Barkot (42 Kms + 6 Kms Trek)', description: 'Early morning trek from Janki Chatti to Yamunotri. Bath in Jamunabai Kund. Temple darshan. Return Barkot. Overnight stay.' },
      { dayLabel: 'Day 03 :: Barkot – Uttarkashi (95 Kms 4 Hrs)', description: 'After breakfast drive to Uttarkashi. Visit Kashi Vishwanath Temple. Overnight stay.' },
      { dayLabel: 'Day 04 :: Uttarkashi – Gangotri – Uttarkashi (100 Kms one side)', description: 'Early drive to Gangotri via Gangnani Kund, Harshil Valley, Lanka Bridge. Temple darshan. Return Uttarkashi. Overnight stay.' },
      { dayLabel: 'Day 05 :: Uttarkashi – Phata (220 Kms 8-9 Hrs)', description: 'Drive to Phata via Guptkashi Vishwanath Temple. Check-in. Overnight stay.' },
      { dayLabel: 'Day 06 :: Phata – Kedarnath (35 Kms + 17 Kms Trek)', description: 'Early drive to Gaurikund. Trek to Kedarnath (or helicopter from Guptkashi/Phata). Check-in Ashram. Shankaracharya Samadhi & Aarti. Overnight stay.' },
      { dayLabel: 'Day 07 :: Kedarnath – Phata', description: 'Morning darshan, trek down to Gaurikund, drive to Phata. Overnight stay.' },
      { dayLabel: 'Day 08 :: Phata – Badrinath (190 Kms 9 Hrs)', description: 'Drive to Badrinath. Visit Mana Village, Vyas Gufa, Ganesh Gufa, Charanpaduka, Bhim Pul, Saraswati Mukh. Evening Aarti. Overnight stay.' },
      { dayLabel: 'Day 09 :: Badrinath – Ghangaria (25 Kms drive + 13 Kms Trek)', description: 'Morning Badrinath darshan, visit Mana. Drive to Govindghat, then trek to Ghangaria. Overnight stay.' },
      { dayLabel: 'Day 10 :: Ghangaria – Hemkund Sahib – Ghangaria (6 Kms one side)', description: 'Early trek to Hemkund Sahib. Visit Gurudwara and glacial lake. Return Ghangaria. Overnight stay.' },
      { dayLabel: 'Day 11 :: Ghangaria – Govindghat – Rudraprayag (13 Kms Trek + 160 Kms 8-9 Hrs)', description: 'Trek down to Govindghat. Drive to Rudraprayag. Overnight stay.' },
      { dayLabel: 'Day 12 :: Rudraprayag – Haridwar (150 Kms 5-6 Hrs)', description: 'Visit Devprayag & Dhari Devi Temple. Drop at Haridwar Railway Station. ***** Tour Ends *****' },
    ],
  },

  // ─── Single Dham: Gangotri 3N/4D (Ex-Dehradun) ──────────────────────────
  {
    id: 'gangotri-single-3n4d',
    label: 'Single Dham – Gangotri (3N / 4D, Ex-Dehradun)',
    packageName: 'Gangotri Single Dham Yatra',
    destination: 'Dehradun - Uttarkashi - Gangotri - Uttarkashi - Dehradun',
    durationNights: 3,
    durationDays: 4,
    pickupPoint: 'Dehradun',
    droppingPoint: 'Dehradun',
    hotelOptions: [
      {
        tier: 'Standard',
        hotels: [
          { days: 'Day 01-03', destination: 'Uttarkashi', hotel: 'Standard Hotel' },
        ],
        totalCost: 0,
      },
    ],
    dayItinerary: [
      { dayLabel: 'Day 01 :: Dehradun – Uttarkashi (180 Kms 6-7 Hrs)', description: 'Morning pickup, drive to Uttarkashi. Visit Kashi Vishwanath Temple. Check-in. Overnight stay.' },
      { dayLabel: 'Day 02 :: Uttarkashi – Gangotri – Uttarkashi (100 Kms one side)', description: 'Early drive to Gangotri via Gangnani Kund, Harshil Valley, Lanka Bridge. Holy dip in Ganga. Temple darshan. Return Uttarkashi. Overnight stay.' },
      { dayLabel: 'Day 03 :: Uttarkashi Local Sightseeing', description: 'Visit Nachiketa Tal, Kuteti Devi Temple, local market. Overnight stay.' },
      { dayLabel: 'Day 04 :: Uttarkashi – Dehradun (180 Kms 6-7 Hrs)', description: 'After breakfast drive back to Dehradun. ***** Tour Ends *****' },
    ],
  },

  // ─── Holy Do Dham Group Tour 5N/6D (Ex-Haridwar) ────────────────────────
  {
    id: 'dodham-group-5n6d',
    label: 'Do Dham Group Tour (5N / 6D, Ex-Haridwar)',
    packageName: 'The Holy Do Dham Yatra (Group Tour)',
    destination: 'Haridwar - Phata - Kedarnath - Phata - Badrinath - Rudraprayag - Haridwar',
    durationNights: 5,
    durationDays: 6,
    pickupPoint: 'Haridwar Railway Station',
    droppingPoint: 'Haridwar Railway Station',
    hotelOptions: [
      {
        tier: 'Standard',
        hotels: [
          { days: 'Day 01, 03', destination: 'Phata', hotel: 'Hotel Shivy Inn' },
          { days: 'Day 02', destination: 'Kedarnath Ji', hotel: 'Ashram (Only Stay no Meal)' },
          { days: 'Day 04', destination: 'Badrinath', hotel: 'Chirag Palace' },
          { days: 'Day 05', destination: 'Rudraprayag', hotel: 'Vijay Lords Palace' },
        ],
        totalCost: 17000,
      },
    ],
    dayItinerary: [
      { dayLabel: 'Day 01 :: Haridwar – Phata (185 Kms 6-7 Hrs)', description: 'Morning meet driver at Haridwar. Drive to Phata via Kashi Vishwanath Temple Guptkashi. Dinner and overnight stay.' },
      { dayLabel: 'Day 02 :: Phata – Kedarnath (35 Kms + 18 Kms Trek)', description: 'Early breakfast, drive to Sonprayag, jeep to Gaurikund, trek/pony/doli to Kedarnath. Sankaracharya Samadhi & Aarti. Overnight stay (basic accommodation, no meals).' },
      { dayLabel: 'Day 03 :: Kedarnath – Phata (22 Kms Trek + 35 Kms)', description: 'Early morning temple darshan. Trek down to Gaurikund, jeep to Sonprayag, transfer to Phata. Overnight stay.' },
      { dayLabel: 'Day 04 :: Phata – Badrinath (165 Kms 6 Hrs)', description: 'After breakfast drive to Badrinath via Narsingh Temple & Sankaracharya Math at Joshimath. Evening Aarti. Overnight stay.' },
      { dayLabel: 'Day 05 :: Badrinath – Rudraprayag (160 Kms 5-6 Hrs)', description: 'Tapt Kund bath, Badrinath darshan, visit Mana Village, Ganesh/Vyas Gufa, Bhim Pul. Drive to Rudraprayag via Panch Prayags. Overnight stay.' },
      { dayLabel: 'Day 06 :: Rudraprayag – Haridwar (155 Kms 5-6 Hrs)', description: 'After breakfast drive to Haridwar via Dhari Devi Temple, Devprayag Sangam, Rishikesh (if time permits). Drop at Haridwar Railway Station. ***** Tour Ends *****' },
    ],
  },

  // ─── Holy Char Dham Group Tour 9N/10D (Ex-Haridwar) ─────────────────────
  {
    id: 'chardham-group-9n10d',
    label: 'Char Dham Group Tour (9N / 10D, Ex-Haridwar)',
    packageName: 'The Holy Chardham Yatra (Group Tour)',
    destination: 'Haridwar - Barkot - Yamunotri - Barkot - Uttarkashi - Gangotri - Uttarkashi - Phata - Kedarnath - Phata - Badrinath - Rudraprayag - Haridwar',
    durationNights: 9,
    durationDays: 10,
    pickupPoint: 'Haridwar Railway Station',
    droppingPoint: 'Haridwar Railway Station',
    hotelOptions: [
      {
        tier: 'Standard',
        hotels: [
          { days: 'Day 01-02', destination: 'Barkot / Jankichatti', hotel: 'Yamuna Bhakti' },
          { days: 'Day 03-04', destination: 'Uttarkashi', hotel: 'Holidays Residency' },
          { days: 'Day 05, 07', destination: 'Phata', hotel: 'Hotel Shivy Inn' },
          { days: 'Day 06', destination: 'Kedarnath Ji', hotel: 'Ashram (Only Stay no Meal)' },
          { days: 'Day 08', destination: 'Badrinath', hotel: 'Chirag Palace' },
          { days: 'Day 09', destination: 'Rudraprayag / Srinagar', hotel: 'Vijay Lords Palace' },
        ],
        totalCost: 22000,
      },
    ],
    dayItinerary: [
      { dayLabel: 'Day 01 :: Haridwar – Barkot (190 Kms 6-7 Hrs)', description: 'Pickup at Haridwar. Drive to Barkot via Kempty Fall (route may vary). Dinner and overnight stay.' },
      { dayLabel: 'Day 02 :: Barkot – Yamunotri – Barkot (6 Kms Trek)', description: '6 km trek to Yamunotri (walk/mule/palki). Holy dip in Surya Kund. Cook rice as Prasad. Yamunotri Temple darshan. Return Barkot. Overnight stay.' },
      { dayLabel: 'Day 03 :: Barkot – Uttarkashi (123 Kms 5-6 Hrs)', description: 'Drive to Uttarkashi. Visit Kashi Vishwanath Temple. Overnight stay.' },
      { dayLabel: 'Day 04 :: Uttarkashi – Gangotri – Uttarkashi (200 Kms 7 Hrs)', description: 'Early drive to Gangotri via Gangnani Kund, Harshil Village, Lanka Bridge. Temple darshan. Return Uttarkashi. Overnight stay.' },
      { dayLabel: 'Day 05 :: Uttarkashi – Phata (200 Kms 7 Hrs)', description: 'Drive to Phata via Guptkashi Temple. Overnight stay.' },
      { dayLabel: 'Day 06 :: Phata – Kedarnath (35 Kms + 22 Kms Trek)', description: 'Drive to Sonprayag, jeep to Gaurikund, trek/doli/pony to Kedarnath. Sankaracharya Samadhi & evening Aarti. Overnight stay (basic accommodation, no meals).' },
      { dayLabel: 'Day 07 :: Kedarnath – Phata (22 Kms Trek + 35 Kms)', description: 'Morning darshan, trek down to Gaurikund, jeep to Sonprayag, transfer to Phata. Overnight stay.' },
      { dayLabel: 'Day 08 :: Phata – Badrinath (165 Kms 6 Hrs)', description: 'Drive to Badrinath via Narsingh Temple & Sankaracharya Math at Joshimath. Evening Aarti. Overnight stay.' },
      { dayLabel: 'Day 09 :: Badrinath – Rudraprayag (160 Kms 5-6 Hrs)', description: 'Tapt Kund bath, Badrinath darshan, Mana Village, Ganesh/Vyas Gufa, Bhim Pul. Drive to Rudraprayag via Panch Prayags. Overnight stay.' },
      { dayLabel: 'Day 10 :: Rudraprayag – Haridwar (155 Kms 5-6 Hrs)', description: 'Drive to Haridwar via Dhari Devi Temple, Devprayag Sangam, Rishikesh (if time permits). Drop at Haridwar Railway Station/Airport. ***** Tour Ends *****' },
    ],
  },

  // ─── Do Dham (Gangotri + Badrinath) 5N/6D (Ex-Haridwar) ─────────────────
  {
    id: 'dodham-gangotri-badrinath-5n6d',
    label: 'Do Dham – Gangotri + Badrinath (5N / 6D, Ex-Haridwar)',
    packageName: 'Do Dham Yatra (Gangotri & Badrinath)',
    destination: 'Haridwar - Uttarkashi - Gangotri - Uttarkashi - Pipalkoti - Badrinath - Pipalkoti - Rudraprayag - Haridwar',
    durationNights: 5,
    durationDays: 6,
    pickupPoint: 'Haridwar',
    droppingPoint: 'Haridwar',
    hotelOptions: [
      {
        tier: 'Standard',
        hotels: [
          { days: 'Day 01-02', destination: 'Uttarkashi', hotel: 'Standard Hotel' },
          { days: 'Day 03-04', destination: 'Pipalkoti', hotel: 'Standard Hotel' },
          { days: 'Day 05', destination: 'Rudraprayag', hotel: 'Standard Hotel' },
        ],
        totalCost: 35000,
      },
    ],
    dayItinerary: [
      { dayLabel: 'Day 01 :: Haridwar – Uttarkashi (220 Kms 7-8 Hrs)', description: 'Pickup and drive to Uttarkashi. Visit Kashi Vishwanath Temple. Overnight stay.' },
      { dayLabel: 'Day 02 :: Uttarkashi – Gangotri – Uttarkashi', description: 'Early morning drive to Gangotri via Gangnani, Harshil Valley. Temple darshan. Return Uttarkashi. Overnight stay.' },
      { dayLabel: 'Day 03 :: Uttarkashi – Pipalkoti (250 Kms)', description: 'Drive via Devprayag & Rudraprayag to Pipalkoti. Check-in. Overnight stay.' },
      { dayLabel: 'Day 04 :: Pipalkoti – Badrinath – Pipalkoti', description: 'Visit Badrinath Temple, Tapt Kund, Mana Village, Bhim Pul. Return Pipalkoti. Overnight stay.' },
      { dayLabel: 'Day 05 :: Pipalkoti – Rudraprayag', description: 'Drive to Rudraprayag. Check-in hotel. Overnight stay.' },
      { dayLabel: 'Day 06 :: Rudraprayag – Haridwar', description: 'Return to Haridwar. Drop. ***** Tour Ends *****' },
    ],
  },
];
