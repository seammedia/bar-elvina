import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { IconPin, IconStar, Arrow } from "@/components/icons";
import { BOOKING_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "About — Elvina",
  description:
    "A Mediterranean bar and kitchen on Avalon Beach. A place that feels like the coast.",
};

const values = [
  {
    icon: <IconStar />,
    title: "Long lunches",
    body:
      "We're built for the table that won't get up. Order another bottle. The sun's still good.",
  },
  {
    icon: <IconPin />,
    title: "Avalon first",
    body:
      "A room for the locals, the regulars, the friends visiting on weekends. The coast in here, on the plate.",
  },
  {
    icon: <IconStar />,
    title: "Honest hospitality",
    body:
      "Good wine, good plates, good people. Nothing fussy. Everything done properly.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <PageHeader
        eyebrow="Our Story"
        title="Inviting. Breezy. Intriguing."
        description="Inspiring in a subtle and refined way. Informed by a coastal, Mediterranean feeling."
      />

      <section className="section-pad-sm">
        <div className="container">
          <div className="about-grid">
            <div className="about-copy">
              <span className="eyebrow">Why we&apos;re here</span>
              <h2>A place that feels like the coast.</h2>
              <p>
                Elvina sits on the level above Avalon Beach, looking out toward
                the main street. Inside, an honest wine list, plates pulled from
                the Mediterranean, and a warmth that makes the afternoon disappear.
              </p>
              <p>
                The room is warm. The afternoons are long. The wine is always cold.
                Pull up a chair on the beach side of the Northern Beaches.
              </p>
              <a href="/contact" className="link-tan">Come say hi.</a>
            </div>
            <div className="about-photo">
              <img src="/images/room-bar.jpg" alt="The bar at Elvina, looking over Avalon Beach" />
            </div>
          </div>
        </div>
      </section>

      <section className="signatures" style={{ background: "var(--paper)" }}>
        <div className="container">
          <span className="eyebrow">What We Stand For</span>
          <h2>Three things, on the wall.</h2>
          <div className="values-grid">
            {values.map((v) => (
              <div key={v.title} className="value-card">
                <div className="icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container">
          <h2>Pull up a chair on Avalon.</h2>
          <p>
            Level One, 50 Old Barrenjoey Rd. Bookings open most nights,
            walk-ins always welcome at the bar.
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
