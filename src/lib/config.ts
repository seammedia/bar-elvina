// Site-wide config for Elvina

// SevenRooms reservation system. Book buttons across the site point here.
// TODO: Swap for the embedded SevenRooms widget code once Dorgan/Dingdus Bookings supply it.
export const BOOKING_URL = "https://www.sevenrooms.com/reservations/barelvina";

// Square gift voucher purchase page (supplied by Lucas, June 2026).
export const GIFT_VOUCHER_URL = "https://app.squareup.com/gift/ML2RT53PZQJMW/order";

// Events / function pack PDF. TODO: replace placeholder with Lucas's real pack.
export const FUNCTION_PACK_URL = "/elvina-function-pack.pdf";

// Menu PDFs (boxes on the menu page). TODO: replace placeholders with real menus.
export const MENUS = [
  { name: "A La Carte", desc: "Our full seasonal menu.", file: "/menus/a-la-carte.pdf" },
  { name: "Set Menu", desc: "Shared feasting for groups.", file: "/menus/set-menu.pdf" },
  { name: "Set Menu · $85", desc: "The full Elvina experience.", file: "/menus/set-menu-85.pdf" },
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
    sat: "4:00pm - late",
    sunMonTue: "Closed",
  },
};

export const BOTTOMLESS = {
  price: "$99",
  duration: "2 hours",
  minimum: "Minimum 2 people",
  description: "Two hours of unlimited beers, bubbles, vino, spritz's and margaritas.",
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
