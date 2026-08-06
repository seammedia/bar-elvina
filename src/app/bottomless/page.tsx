import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { Arrow } from "@/components/icons";
import { BOOKING_URL, BOTTOMLESS } from "@/lib/config";

export const metadata: Metadata = {
  title: "Bottomless — Elvina",
  description: `${BOTTOMLESS.description} ${BOTTOMLESS.price} per person.`,
};

const includes = [
  "Rosemary & confit garlic focaccia",
  "Marinated Sicilian olives",
  "White bean hummus, confit leek, paprika",
  "Mediterranean dip, kalamata olives, peppers, anchovies",
  "Mushroom & saffron arancini, parmesan",
  "Rany's chargrilled spatchcock, roasted red pepper, guindillas & lime",
  "Fries, pimiento aioli",
  "Rocket, radicchio, pistachio, pomegranate, citrus vinaigrette",
];

const faqs = [
  {
    q: "How do I book?",
    a: "Use the booking form, or email us. No notice needed - just lock in a time.",
  },
  {
    q: "Minimum group size?",
    a: BOTTOMLESS.minimum,
  },
  {
    q: "Whole-table only?",
    a: "Yes - everyone at the table needs to be on the package. Keeps the kitchen and bar in rhythm.",
  },
];

export default function BottomlessPage() {
  return (
    <>
      <Nav />
      <PageHeader
        eyebrow="Bottomless"
        title={`Two hours. ${BOTTOMLESS.price} per person.`}
        description={BOTTOMLESS.description}
      />

      <section className="section-pad-sm">
        <div className="container">
          <div className="about-grid">
            <div className="about-copy">
              <span className="eyebrow">What&apos;s included</span>
              <h2>Drink well. Settle in. Take your time.</h2>
              <p>
                A signature banquet with {BOTTOMLESS.duration} of spritzes,
                beer, bubbles and house wines. {BOTTOMLESS.price} per person. {" "}
                {BOTTOMLESS.minimum}.
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
            {BOTTOMLESS.price} per person, {BOTTOMLESS.duration}, signature
            banquet and drinks package included.
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
