// Site-wide config for Elvina

// SevenRooms reservation system. Book buttons across the site point here.
// TODO: Swap for the embedded SevenRooms widget code once Dorgan/Dingdus Bookings supply it.
export const BOOKING_URL = "https://www.sevenrooms.com/reservations/barelvina";

export const BUSINESS = {
  name: "Elvina",
  address: "Level One, 50 Old Barrenjoey Rd, Avalon Beach NSW 2107",
  email: "info@barelvina.com.au",
  phone: "02 8926 2340",
  phoneTel: "+61289262340",
  instagram: "https://www.instagram.com/barelvina/",
  hours: {
    wedThu: "5:00pm - late",
    friSat: "4:00pm - late",
    sunMonTue: "Closed",
  },
};

export const BOTTOMLESS = {
  price: "$99",
  duration: "2 hours",
  minimum: "Minimum 2 people",
  description: "Two hours of unlimited beers, bubbles, vino (white/rosé/red), spritz's and margaritas.",
};

// Five distinct spaces - functions are a key revenue priority.
// NOTE: Garden image is a placeholder food/greenery shot - needs a real garden photo.
export const ROOMS = [
  {
    name: "The Foyer",
    capacity: "Seats 25",
    desc: "Our inside dining room. Warm, intimate, the heart of the venue.",
    image: "/images/venue-foyer.jpg",
  },
  {
    name: "The Terrace",
    capacity: "Seats 30",
    desc: "Covered dining with the sea air. Cool in summer, warm in winter.",
    image: "/images/venue-terrace.jpg",
  },
  {
    name: "The Bar",
    capacity: "Seats 12",
    desc: "A little bar setting for a drink, a snack, and a slow afternoon.",
    image: "/images/venue-bar.jpg",
  },
  {
    name: "The Function Room",
    capacity: "Seats 20",
    desc: "A private room at the back, yours for the evening.",
    image: "/images/venue-banquette.jpg",
  },
  {
    name: "The Garden",
    capacity: "Up to 15",
    desc: "An open-air garden out back. Long lunches and golden hour.",
    image: "", // TODO: real garden photo from Lucas (placeholder food shot was actually the foyer)
  },
];
