import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { Arrow } from "@/components/icons";
import { BOTTOMLESS_LUNCH } from "@/lib/config";

export const metadata: Metadata = {
  title: "Bottomless Lunch — Bar Elvina",
  description:
    "Two hours of bottomless wine, beer and cocktails with a sharing menu. Every Saturday and Sunday at Bar Elvina, Avalon Beach.",
};

const includes = [
  "House sparkling, white, rosé, red",
  "Tap beer + cider",
  "Aperol Spritz + Elvina Spritz",
  "Shared snacks while you settle in",
  "Three-course sharing menu",
  "Two-hour sitting, your pace",
];

const faqs = [
  {
    q: "How do I book?",
    a: "Email us or use the booking form. We usually need 48 hours notice for groups, and 24 hours for tables of 2 to 4.",
  },
  {
    q: "Minimum group size?",
    a: "Two people. We seat groups up to 12 at the bench. Larger groups get the private table on request.",
  },
  {
    q: "Whole-table only?",
    a: "Yes - everyone at the table needs to be on the package. Keeps the kitchen and bar in rhythm.",
  },
  {
    q: "Dietaries?",
    a: "Always. Flag GF, vegetarian, vegan, or allergies on booking and we'll build the sharing menu around you.",
  },
];

export default function BottomlessLunchPage() {
  return (
    <>
      <Nav />
      <PageHeader
        eyebrow="The Long Lunch"
        title="Bottomless Lunch."
        description={`${BOTTOMLESS_LUNCH.price} per person. ${BOTTOMLESS_LUNCH.duration} of free-flowing drinks alongside a sharing menu. ${BOTTOMLESS_LUNCH.days}.`}
      />

      <section className="section-pad-sm">
        <div className="container">
          <div className="about-grid">
            <div className="about-copy">
              <span className="eyebrow">What&apos;s included</span>
              <h2>Drink well. Eat well. Take your time.</h2>
              <p>
                Two hours of wine, beer, cocktails, and a sharing menu from the kitchen.
                Saturdays and Sundays, your weekend lunch is sorted.
              </p>
              <ul className="bottomless-includes">
                {includes.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <a href="/contact" className="btn btn-tan" style={{ marginTop: 8 }}>
                Book the Long Lunch <Arrow />
              </a>
            </div>
            <div className="about-photo">
              <div className="about-photo-placeholder">
                <span className="placeholder-label">THE LONG LUNCH</span>
              </div>
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
          <h2>{BOTTOMLESS_LUNCH.days}.</h2>
          <p>
            Tables go quickly through summer. Lock in your sitting and we&apos;ll
            do the rest. {BOTTOMLESS_LUNCH.price} per person, {BOTTOMLESS_LUNCH.duration}.
          </p>
          <div className="cta-strip-actions">
            <a href="/contact" className="btn btn-tan">Book Now <Arrow /></a>
            <a href="/menu" className="btn btn-outline-light">View Menu</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
