// Site-wide config for Elvina

// SevenRooms reservation system. Book buttons across the site point here.
// TODO: Swap for the embedded SevenRooms widget code once Dorgan/Dingdus Bookings supply it.
export const BOOKING_URL = "https://www.sevenrooms.com/reservations/barelvina";

// Square gift voucher purchase page (supplied by Lucas, June 2026).
export const GIFT_VOUCHER_URL = "https://app.squareup.com/gift/ML2RT53PZQJMW/order";

// Final function pack supplied by Lucas on 2 October 2026.
export const FUNCTION_PACK_URL = "/elvina-function-pack.pdf";

// Menu files embedded on the menu page (tabbed viewer).
export const MENUS = [
  {
    "name": "Food Menu",
    "desc": "Our full seasonal menu.",
    "file": "/menus/a-la-carte.pdf",
    "pages": [
      "/menus/previews/2026-10-13/a-la-carte/page-1.jpg"
    ]
  },
  {
    "name": "Drinks",
    "desc": "Cocktails, wine, beer and non-alcoholic drinks.",
    "file": "/menus/drinks.pdf",
    "pages": [
      "/menus/previews/2026-10-13/drinks/page-1.jpg",
      "/menus/previews/2026-10-13/drinks/page-2.jpg",
      "/menus/previews/2026-10-13/drinks/page-3.jpg",
      "/menus/previews/2026-10-13/drinks/page-4.jpg",
      "/menus/previews/2026-10-13/drinks/page-5.jpg",
      "/menus/previews/2026-10-13/drinks/page-6.jpg"
    ]
  },
  {
    "name": "Wine List",
    "desc": "Our current wine list.",
    "file": "/menus/wine-list.pdf",
    "pages": [
      "/menus/previews/2026-11-05/wine-list/page-1.jpg"
    ]
  },
  {
    "name": "Kids Menu",
    "desc": "For the little ones.",
    "file": "/menus/kids-menu.pdf",
    "pages": [
      "/menus/previews/2026-10-02/kids-menu/page-1.jpg"
    ]
  },
  {
    "name": "$69 Set Menu",
    "desc": "Our sharing menu for a relaxed gathering.",
    "file": "/menus/set-menu-gather.pdf",
    "pages": [
      "/menus/previews/2026-10-13/set-menu-gather/page-1.jpg"
    ]
  },
  {
    "name": "$89 Set Menu",
    "desc": "The fuller Elvina sharing experience.",
    "file": "/menus/set-menu-share.pdf",
    "pages": [
      "/menus/previews/2026-10-13/set-menu-share/page-1.jpg"
    ]
  },
  {
    "name": "Canapés",
    "desc": "Our canapé selection for events and functions.",
    "file": "/menus/canapes.pdf",
    "pages": [
      "/menus/previews/2026-10-02/canapes/page-1.jpg"
    ]
  }
];

export const BUSINESS = {
  name: "Elvina",
  address: "Level One, 50 Old Barrenjoey Rd, Avalon Beach NSW 2107",
  email: "info@barelvina.com.au",
  phone: "02 8926 2340",
  phoneTel: "+61289262340",
  instagram: "https://www.instagram.com/barelvina/",
  hours: {
    wedThu: "3:00pm - late",
    fri: "12:00pm - late",
    sat: "12:00pm - late",
    sun: "12:00pm - late",
    monTue: "Closed",
  },
};

// Christmas and New Year hours (Lucas, WhatsApp 11 Nov 2026 12:24 pm, same as his 4 Nov email and the
// Business Profile special hours; 24 Dec changed to closed, Lucas WhatsApp 13 Nov 5:28 pm). Shown under the regular hours until `until`.
export const HOLIDAY_HOURS = {
  title: "Christmas & New Year",
  until: "2027-01-04T00:00:00+11:00",
  lines: [
    { days: "Mon 21 Dec", hours: "Closed" },
    { days: "Tue 22 Dec", hours: "3:00pm - late" },
    { days: "Wed 23 Dec", hours: "3:00pm - late" },
    { days: "Thu 24 Dec", hours: "Closed" },
    { days: "Fri 25 Dec", hours: "3:00pm - late" },
    { days: "Sat 26 Dec", hours: "12:00pm - midnight" },
    { days: "Sun 27 Dec", hours: "12:00pm - 8:00pm" },
    { days: "Mon 28 Dec", hours: "Closed" },
    { days: "Tue 29 Dec", hours: "3:00pm - late" },
    { days: "Wed 30 Dec", hours: "3:00pm - late" },
    { days: "Thu 31 Dec", hours: "3:00pm - 1:00am" },
    { days: "Fri 1 Jan", hours: "3:00pm - late" },
    { days: "Sat 2 Jan", hours: "12:00pm - midnight" },
    { days: "Sun 3 Jan", hours: "12:00pm - 8:00pm" },
  ],
};

export const TRADING_HOURS = [
  { days: "Wed-Thu", hours: BUSINESS.hours.wedThu },
  { days: "Fri", hours: BUSINESS.hours.fri },
  { days: "Sat", hours: BUSINESS.hours.sat },
  { days: "Sun", hours: BUSINESS.hours.sun },
  { days: "Mon-Tue", hours: BUSINESS.hours.monTue },
];

export type EventSchedule = {
  days: string[];
  start: string;
  end?: string;
};

export type WhatsOnEvent = {
  slug: string;
  name: string;
  image: string;
  alt: string;
  description: string;
  price: string;
  priceValue?: number;
  when: string;
  bookingUrl: string;
  schedules?: EventSchedule[];
};

export const WHATS_ON_EVENTS: WhatsOnEvent[] = [
  {
    slug: "aperitivo-time",
    name: "Aperitivo Time",
    image: "/images/whatson-aperitivo-2026-11.jpg",
    alt: "Aperitivo Time at Elvina in Avalon Beach",
    description:
      "Ease into the evening with $4.50 oysters, $15 margaritas, $15 spritzes, $7 Avalon Brewery beer and $10 vino classico.",
    price: "From $4.50",
    priceValue: 4.5,
    when: "Wednesday-Friday, 3pm-6pm",
    bookingUrl: BOOKING_URL,
    schedules: [
      { days: ["Wednesday", "Thursday", "Friday"], start: "15:00", end: "18:00" },
    ],
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
    schedules: [{ days: ["Wednesday"], start: "17:00" }],
  },
  {
    slug: "live-jazz-night",
    name: "Live Jazz Night",
    image: "/images/whatson-jazz-2026-11.jpg",
    alt: "Live Jazz Night at Elvina in Avalon Beach",
    description:
      "Live jazz upstairs every Thursday, plus food and drinks from the kitchen and bar.",
    price: "À la carte food and drinks",
    when: "Every Thursday from 6pm",
    bookingUrl: "https://www.sevenrooms.com/xtWtUeWJ",
    schedules: [{ days: ["Thursday"], start: "18:00" }],
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
    schedules: [{ days: ["Friday"], start: "17:00" }],
  },
  // Margie, 21 Oct 2026: Wine Club poster off the page; Sunday Sessions follows Vino Vinyl. The grid is two
  // across, so the week reads Wagyu (Wed) beside Live Jazz Night (Thu), then Vino Vinyl (Fri) beside Sunday.
  {
    slug: "sunday-sessions",
    name: "Sunday Sessions",
    image: "/images/whatson-sunday-sessions-2026-10.jpg",
    alt: "Sunday Sessions, long lunches and live music at Elvina in Avalon Beach",
    description:
      "Long lunches and live music. Doors open at 12pm, with live music from 3pm.",
    price: "À la carte food and drinks",
    when: "Every Sunday from 12pm, live music from 3pm",
    bookingUrl: "https://www.sevenrooms.com/xFxztivw",
    schedules: [{ days: ["Sunday"], start: "12:00" }],
  },
];

// Site-wide pop-up (Lucas, 16 Oct 2026: "trigger a pop up ... about new lunches hours, Fri/Sat/Sun 12pm.
// Potentially a what's on pop up"). Change `id` whenever the message changes so returning visitors see it
// again; set `enabled: false` to switch it off. Add `image` (a /public path) once Lucas's new photos arrive.
export const POPUP = {
  enabled: true,
  // Lucas, 4 Nov 2026: "revise the pop up ... do better with current offers". Leads with the one-off events,
  // then every current offer. Each feature block hides itself after its `until`.
  // 11 Nov: Rosé Magnum Long Lunch added (Lucas's email 12:12 pm, link xcjTaubr; SevenRooms books Sun 13 Dec).
  id: "whats-on-rose-lunch-2026-11-11",
  eyebrow: "",
  title: "What's on at Elvina",
  body: "",
  features: [
    {
      label: "Sunday 13 December",
      title: "Rosé Magnum Long Lunch",
      text: "Provence rosé poured from magnums, featuring M de Minuty and Whispering Angel. From 1pm, $149 per person.",
      href: "https://www.sevenrooms.com/xcjTaubr",
      cta: "Book a Table",
      until: "2026-12-13T16:00:00+11:00",
    },
    {
      label: "New Year's Eve",
      title: "White Party",
      text: "Thursday 31 December from 6pm. White dress-up, best attire prize, two DJs including a surprise guest, a Margarita on arrival and a sparkling tower at midnight. $20 online, $25 on the door.",
      href: "https://www.sevenrooms.com/xjgGhFsa",
      cta: "Get Tickets",
      until: "2027-01-01T02:00:00+11:00",
    },
  ] as { label: string; title: string; text: string; href: string; cta: string; until: string }[],
  // Lucas, 21 Oct: the terrace shot doubled up with the homepage hero behind it, and the 5 Aug shoot's food is
  // the old menu. Lucas then sent this drinks shot on WhatsApp (SEZ00584.jpg; the Drive file with the same name
  // in the 4 Oct folder is a different photo).
  image: "/images/popup-drinks-2026-10.jpg" as string | null,
  imageAlt: "Spritzes and cocktails in the sun at Elvina",
  // Day by day, like Lucas's October What's On flyer (16 Oct email). Jazz moves to 6pm from the week of 19 Oct.
  days: [
    { day: "Wed", open: "From 3pm", items: ["Aperitivo 3-6pm", "Wagyu Wednesday, $33"] },
    { day: "Thu", open: "From 3pm", items: ["Aperitivo 3-6pm", "Live Jazz Night from 6pm"] },
    { day: "Fri", open: "From 12pm", items: ["French Fridays, 12-6pm", "Aperitivo 3-6pm", "Vino Vinyl Fridays from 5pm"] },
    { day: "Sat", open: "From 12pm", items: ["Long lunches"] },
    { day: "Sun", open: "From 12pm", items: ["Sunday Sessions, live music from 3pm"] },
    { day: "Daily", open: "", items: ["Bottomless, $99pp"] },
  ] as { day: string; open: string; items: string[] }[],
  delayMs: 1200,
  hideForDays: 7,
};

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
    name: "The Dining Room",
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
