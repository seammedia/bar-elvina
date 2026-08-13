import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { WhatsOn } from "@/components/whats-on";
import { Arrow } from "@/components/icons";
import { BOOKING_URL, BUSINESS, WHATS_ON_EVENTS } from "@/lib/config";

export const metadata: Metadata = {
  title: "What's On in Avalon Beach | Elvina",
  description:
    "Book Aperitivo Time, Wine Club dinners, $99 bottomless lunch and dinner, $33 Wagyu Wednesday and Vino Vinyl Fridays at Elvina in Avalon Beach.",
};

export default function WhatsOnPage() {
  const eventJsonLd = WHATS_ON_EVENTS.map((event) => ({
    "@context": "https://schema.org",
    "@type": "EventSeries",
    name: event.name,
    description: event.description,
    image: `https://elvina.com.au${event.image}`,
    url: `https://elvina.com.au/whats-on#${event.slug}`,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: BUSINESS.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Level One, 50 Old Barrenjoey Rd",
        addressLocality: "Avalon Beach",
        addressRegion: "NSW",
        postalCode: "2107",
        addressCountry: "AU",
      },
    },
    organizer: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: "https://elvina.com.au",
    },
    offers: {
      "@type": "Offer",
      url: event.bookingUrl,
      availability: "https://schema.org/InStock",
      ...(event.priceValue
        ? { price: event.priceValue, priceCurrency: "AUD" }
        : {}),
    },
    ...(event.schedule
      ? {
          eventSchedule: {
            "@type": "Schedule",
            repeatFrequency: "P1W",
            byDay: event.schedule.days.map((day) => `https://schema.org/${day}`),
            startTime: event.schedule.start,
            ...(event.schedule.end ? { endTime: event.schedule.end } : {}),
          },
        }
      : {}),
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Nav />
      <PageHeader
        eyebrow="What's On"
        title="A reason for every night in Avalon Beach."
        description="Explore the details, check the price and book each Elvina offer directly."
      />
      <WhatsOn eagerFirstPoster />

      <section className="cta-strip">
        <div className="container">
          <h2>Lock in a sitting.</h2>
          <p>
            Specials move quickly. For tables, you can make a booking, or
            try your luck and walk in at the bar.
          </p>
          <div className="cta-strip-actions">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-tan"
            >
              Book a Table <Arrow />
            </a>
            <a href="/menu" className="btn btn-outline-light">View Menu</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
