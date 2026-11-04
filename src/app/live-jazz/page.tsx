import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { Arrow } from "@/components/icons";
import { BUSINESS, WHATS_ON_EVENTS } from "@/lib/config";

export const metadata: Metadata = {
  title: "Live Jazz in Avalon Beach, Thursdays | Elvina",
  description:
    "Live jazz every Thursday from 6pm at Elvina in Avalon Beach, with food and drinks from the kitchen and bar. Come early for Aperitivo, 3pm to 6pm.",
  alternates: { canonical: "/live-jazz" },
};

const jazz = WHATS_ON_EVENTS.find((event) => event.slug === "live-jazz-night")!;
const aperitivo = WHATS_ON_EVENTS.find((event) => event.slug === "aperitivo-time")!;

const details = [
  { q: "When", a: "Every Thursday. Doors from 3pm, live jazz from 6pm." },
  { q: "Where", a: `Upstairs at Elvina, ${BUSINESS.address}.` },
  { q: "Food and drinks", a: "À la carte from the kitchen and bar." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EventSeries",
  name: jazz.name,
  description:
    "Live jazz every Thursday from 6pm at Elvina in Avalon Beach, with food and drinks from the kitchen and bar.",
  url: "https://elvina.com.au/live-jazz",
  image: "https://elvina.com.au/images/live-jazz-elvina.jpg",
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
    url: jazz.bookingUrl,
    availability: "https://schema.org/InStock",
  },
  eventSchedule: {
    "@type": "Schedule",
    repeatFrequency: "P1W",
    byDay: "https://schema.org/Thursday",
    startTime: "18:00",
  },
};

export default function LiveJazzPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Nav />
      <PageHeader
        eyebrow="Live Jazz Night"
        title="Live jazz in Avalon Beach, every Thursday from 6pm."
        description="Live music upstairs at Elvina, with food and drinks from the kitchen and bar."
      />

      <section className="section-pad-sm">
        <div className="container">
          <div className="about-grid">
            <div className="about-copy">
              <span className="eyebrow">Thursday nights</span>
              <h2>Come early. Stay for the music.</h2>
              <p>
                Start with Aperitivo from 3pm to 6pm: {aperitivo.description.replace("Ease into the evening with ", "")}
              </p>
              <p>
                The band starts at 6pm. Book a table for dinner, or try your luck and walk in at the bar.
              </p>
              <a
                href={jazz.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-tan btn-lg"
                style={{ marginTop: 8 }}
              >
                Book for Thursday <Arrow />
              </a>
            </div>
            <div className="about-photo" style={{ aspectRatio: "1306 / 1024" }}>
              <img
                src="/images/live-jazz-elvina.jpg"
                alt="Jazz musicians with a double bass and guitar in front of the bar at Elvina"
                style={{ aspectRatio: "1306 / 1024", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="signatures" style={{ background: "var(--paper)" }}>
        <div className="container">
          <span className="eyebrow">Good to Know</span>
          <h2>The detail.</h2>
          <div className="values-grid">
            {details.map((d) => (
              <div key={d.q} className="value-card">
                <h4>{d.q}</h4>
                <p>{d.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container">
          <h2>Lock in Thursday.</h2>
          <p>Live jazz from 6pm, every week, at Elvina in Avalon Beach.</p>
          <div className="cta-strip-actions">
            <a
              href={jazz.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-tan"
            >
              Book Now <Arrow />
            </a>
            <a href="/whats-on" className="btn btn-outline-light">What&apos;s On</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
