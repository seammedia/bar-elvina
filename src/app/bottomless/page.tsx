import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { Arrow } from "@/components/icons";
import { BOOKING_URL, BOTTOMLESS } from "@/lib/config";

export const metadata: Metadata = {
  title: "Bottomless — Elvina",
  description:
    "Two hours of unlimited beers, bubbles, vino, spritz's and margaritas. $99 per person. Daily when open.",
};

const includes = [
  "House sparkling, white, rosé, red",
  "Tap beers + cider",
  "Aperol Spritz + house spritz",
  "Margaritas to keep it interesting",
  "Snacks while you settle in",
  "Two-hour sitting, your pace",
];

const faqs = [
  {
    q: "How do I book?",
    a: "Use the booking form, or email us. No notice needed - just lock in a time.",
  },
  {
    q: "Minimum group size?",
    a: "Two people. Larger groups can get the private dining room on request.",
  },
  {
    q: "Whole-table only?",
    a: "Yes - everyone at the table needs to be on the package. Keeps the kitchen and bar in rhythm.",
  },
  {
    q: "Dietaries?",
    a: "Always. Flag GF, vegetarian, vegan, or allergies on booking and we'll build the snacks around you.",
  },
];

export default function BottomlessPage() {
  return (
    <>
      <Nav />
      <PageHeader
        eyebrow="Bottomless"
        title={`Two hours. ${BOTTOMLESS.price} per person.`}
        description={`${BOTTOMLESS.duration} of unlimited beers, bubbles, vino (white/rosé/red), spritz's and margaritas. Daily when open.`}
      />

      <section className="section-pad-sm">
        <div className="container">
          <div className="about-grid">
            <div className="about-copy">
              <span className="eyebrow">What&apos;s included</span>
              <h2>Drink well. Settle in. Take your time.</h2>
              <p>
                Two hours of unlimited wine, beer, cocktails. {BOTTOMLESS.price} per
                person, minimum two people. Available every day we&apos;re open.
              </p>
              <ul className="bottomless-includes">
                {includes.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-tan btn-lg"
                style={{ marginTop: 8 }}
              >
                Book Now <Arrow />
              </a>
            </div>
            <div className="about-photo">
              <img src="/images/food-bottomless.jpg" alt="A spread of plates and drinks at Elvina" />
            </div>
          </div>
        </div>
      </section>

      <section className="signatures" style={{ background: "var(--paper)" }}>
        <div className="container">
          <span className="eyebrow">Good to Know</span>
          <h2>The detail.</h2>
          <div className="values-grid">
            {faqs.map((f) => (
              <div key={f.q} className="value-card">
                <h4>{f.q}</h4>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container">
          <h2>Lock it in.</h2>
          <p>
            Tables go quickly through summer. {BOTTOMLESS.price} per person,
            {" "}{BOTTOMLESS.duration}, all the good stuff included.
          </p>
          <div className="cta-strip-actions">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-tan"
            >
              Book Now <Arrow />
            </a>
            <a href="/menu" className="btn btn-outline-light">View Menu</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
