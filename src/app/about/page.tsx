import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { IconPin, IconStar, Arrow } from "@/components/icons";
import { BOOKING_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Our Story — Elvina",
  description:
    "Elvina is a neighbourhood restaurant and bar in Avalon Village, inspired by the relaxed spirit of the coastal Mediterranean.",
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
    title: "A true local",
    body:
      "A place that should feel like your local: the regulars, the friends, the after-beach crowd, all welcome.",
  },
  {
    icon: <IconStar />,
    title: "Genuine hospitality",
    body:
      "Seasonal produce, generous sharing plates and an eclectic wine list, brought together with real warmth.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <PageHeader
        eyebrow="Our Story"
        title="A neighbourhood local, reborn."
        description="Avalon's own since 2020. Here's how Elvina came to be, and where it's headed."
      />

      <section className="section-pad-sm">
        <div className="container">
          <div className="about-grid about-grid-story">
            <div className="about-photo">
              <img src="/images/our-story.jpg" alt="Two margaritas raised in a toast on the terrace at Elvina" />
            </div>
            <div className="about-copy">
              <span className="eyebrow">The Story</span>
              <p>
                Nestled in the heart of Avalon Village, Elvina is a neighbourhood
                restaurant and bar inspired by the relaxed spirit of the coastal
                Mediterranean.
              </p>
              <p>
                Our menu celebrates seasonal produce, generous sharing plates and
                thoughtfully selected wines, all brought together with genuine
                hospitality. Whether you&apos;re joining us after the beach, for a
                long lunch or an evening with friends, we want every visit to feel
                relaxed, memorable and welcoming.
              </p>
            </div>
          </div>

          <div className="story-prose">
            <p>
              Founded in 2020 by Andy Emerson, Elvina quickly became a much-loved
              local, built on great food, warm service and a strong sense of
              community.
            </p>
            <p>
              In 2026, the venue entered its next chapter under the ownership of
              Lucas Cristofle, whose vision is simple: preserve everything locals
              already love while thoughtfully evolving Elvina into one of Sydney&apos;s
              leading neighbourhood dining destinations.
            </p>
            <p>
              At its heart, Elvina is a place to gather, share great food and wine,
              and feel proud to call your local.
            </p>
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
          <h2>Pull up a chair in Avalon.</h2>
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
