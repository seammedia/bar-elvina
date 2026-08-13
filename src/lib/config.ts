// Site-wide config for Elvina

// SevenRooms reservation system. Book buttons across the site point here.
// TODO: Swap for the embedded SevenRooms widget code once Dorgan/Dingdus Bookings supply it.
export const BOOKING_URL = "https://www.sevenrooms.com/reservations/barelvina";

// Square gift voucher purchase page (supplied by Lucas, June 2026).
export const GIFT_VOUCHER_URL = "https://app.squareup.com/gift/ML2RT53PZQJMW/order";

// Events / function pack PDF. TODO: replace placeholder with Lucas's real pack.
export const FUNCTION_PACK_URL = "/elvina-function-pack.pdf";

// Menu PDFs embedded on the menu page (tabbed viewer).
export const MENUS = [
  { name: "A La Carte", desc: "Our full seasonal menu.", file: "/menus/a-la-carte.pdf" },
  { name: "Drinks", desc: "Cocktails, wine, beer and non-alcoholic drinks.", file: "/menus/drinks.pdf" },
  { name: "To Gather · $69", desc: "Our sharing menu for a relaxed gathering.", file: "/menus/set-menu-gather.pdf" },
  { name: "To Share · $89", desc: "The fuller Elvina sharing experience.", file: "/menus/set-menu-share.pdf" },
  { name: "Kids Menu", desc: "For the little ones.", file: "/menus/kids-menu.pdf" },
];

export const BUSINESS = {
  name: "Elvina",
  address: "Level One, 50 Old Barrenjoey Rd, Avalon Beach NSW 2107",
  email: "info@barelvina.com.au",
  phone: "02 8926 2340",
  phoneTel: "+61289262340",
  instagram: "https://www.instagram.com/barelvina/",
  hours: {
    wedThu: "5:00pm - late",
    fri: "12:00pm - late",
    sat: "12:00pm - late",
    sunMonTue: "Closed",
  },
};

export const TRADING_HOURS = [
  { days: "Wed-Thu", hours: BUSINESS.hours.wedThu },
  { days: "Fri", hours: BUSINESS.hours.fri },
  { days: "Sat", hours: BUSINESS.hours.sat },
  { days: "Sun-Tue", hours: BUSINESS.hours.sunMonTue },
];

export const WHATS_ON_EVENTS = [
  {
    slug: "aperitivo-time",
    name: "Aperitivo Time",
    image: "/images/whatson-aperitivo.jpg",
    alt: "Aperitivo Time at Elvina in Avalon Beach",
    description:
      "Ease into the evening with $4 oysters, $12 margaritas and spritzes, $7 Avalon Brewery beer and $10 vino classico.",
    price: "From $4",
    priceValue: 4,
    when: "Wednesday-Friday, 5pm-7pm",
    bookingUrl: BOOKING_URL,
    schedule: { days: ["Wednesday", "Thursday", "Friday"], start: "17:00", end: "19:00" },
  },
  {
    slug: "bottomless",
    name: "Bottomless Lunch & Dinner",
    image: "/images/whatson-bottomless-pink.jpg",
    alt: "Bottomless lunch and dinner at Elvina in Avalon Beach",
    description:
      "A signature banquet with two hours of free-flowing spritzes, beer, bubbles and house wine.",
    price: "$99 per person",
    priceValue: 99,
    when: "Lunch and dinner sittings",
    bookingUrl: "https://www.sevenrooms.com/xmpcVvXn",
  },
  {
    slug: "wagyu-wednesday",
    name: "Wagyu Wednesday",
    image: "/images/whatson-wagyu.jpg",
    alt: "Wagyu Wednesday at Elvina in Avalon Beach",
    description:
      "250g Tajima MB4+ wagyu rump served with fries and eschalot butter.",
    price: "$33",
    priceValue: 33,
    when: "Every Wednesday from 5pm",
    bookingUrl: "https://www.sevenrooms.com/xov8ekXe",
    schedule: { days: ["Wednesday"], start: "17:00" },
  },
  {
    slug: "vino-vinyl-fridays",
    name: "Vino Vinyl Fridays",
    image: "/images/whatson-vinyl.jpg",
    alt: "Vino Vinyl Fridays at Elvina in Avalon Beach",
    description:
      "Drinks, tunes and food upstairs, with music by Luke Tommy G, aka Luke Warm.",
    price: "À la carte food and drinks",
    when: "Every Friday from 5pm",
    bookingUrl: "https://www.sevenrooms.com/x1kaQXh3",
    schedule: { days: ["Friday"], start: "17:00" },
  },
  {
    slug: "wine-club",
    name: "Elvina Wine Club",
    image: "/images/whatson-wine-club.jpg",
    alt: "Elvina Wine Club dinners in Avalon Beach",
    description:
      "Monthly Thursday dinners with remarkable winemakers, good food and plenty to discover in the glass.",
    price: "Pricing varies by dinner",
    when: "Select Thursdays - see booking page for times",
    bookingUrl: "https://www.sevenrooms.com/xCPuT68k",
  },
];

export const BOTTOMLESS = {
  price: "$99",
  duration: "2 hours",
  minimum: "Smaller groups on request",
  description: "A signature banquet with two hours of spritzes, beer, bubbles and house wines.",
};

// Five distinct spaces - functions are a key revenue priority.
// All five now have dedicated photography supplied by Lucas (June 2026).
export const ROOMS = [
  {
    name: "The Foyer",
    capacity: "Seats 25 · Stands 30",
    desc: "Our inside dining room. Warm, intimate, the heart of the venue.",
    image: "/images/room-foyer.jpg",
  },
  {
    name: "The Terrace",
    capacity: "Seats 30 · Stands 50",
    desc: "Covered dining with the sea air. Cool in summer, warm in winter.",
    image: "/images/venue-terrace.jpg",
  },
  {
    name: "The Bar",
    capacity: "Seats 20 · Stands 25",
    desc: "A little bar setting for a drink, a snack, and a slow afternoon.",
    image: "/images/room-bar.jpg",
  },
  {
    name: "The Private Dining Room",
    capacity: "Seats 20 · Stands 25",
    desc: "A private room at the back, yours for the evening.",
    image: "/images/room-function.jpg",
  },
  {
    name: "The Garden",
    capacity: "Seats 20 · Stands 30",
    desc: "An open-air garden out back. Long lunches and golden hour.",
    image: "/images/room-garden.jpg",
  },
];
