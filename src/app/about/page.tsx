import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { IconPin, IconStar, Arrow } from "@/components/icons";

export const metadata: Metadata = {
  title: "About — Bar Elvina",
  description:
    "A neighbourhood bar and kitchen on Avalon Beach. The room, the people, the way we like to spend an afternoon.",
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
    title: "Avalon-first",
    body:
      "A room for the locals, the regulars, the friends visiting on weekends. The Beaches in here, on the plate.",
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
        title="Long lunches. Low evenings."
        description="Bar Elvina opened on Avalon Beach in 2026 with a simple idea: a neighbourhood bar that sits between holiday and home."
      />

      <section className="section-pad-sm">
        <div className="container">
          <div className="about-grid">
            <div className="about-copy">
              <span className="eyebrow">Why we&apos;re here</span>
              <h2>A bar that feels like the Beaches.</h2>
              <p>
                Bar Elvina is a neighbourhood bar and kitchen on Avalon Beach.
                A coastal-leaning wine list, cocktails that get ordered twice,
                and a kitchen that leans on whatever&apos;s in season.
              </p>
              <p>
                The room is warm. The afternoons are long. The wine is always cold.
                Pull up a chair on the beach side of the Northern Beaches.
              </p>
              <a href="/contact" className="link-tan">Come say hi.</a>
            </div>
            <div className="about-photo">
              <div className="about-photo-placeholder">
                <span className="placeholder-label">THE ROOM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="signatures" style={{ background: "var(--paper)" }}>
        <div className="container">
          <span className="eyebrow">What we stand for</span>
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
            Avalon Beach, two blocks from the sand. Bookings open most nights,
            walk-ins always welcome at the bar.
          </p>
          <div className="cta-strip-actions">
            <a href="/contact" className="btn btn-tan">Book a Table <Arrow /></a>
            <a href="/menu" className="btn btn-outline-light">View Menu</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
