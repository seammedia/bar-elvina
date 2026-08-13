import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { IconMail, IconPhone, Arrow } from "@/components/icons";
import { ROOMS, BUSINESS } from "@/lib/config";

export const metadata: Metadata = {
  title: "Events & Weddings — Elvina",
  description:
    "Weddings, private celebrations, corporate events and long lunches at Elvina in Avalon. Five distinct spaces, all yours.",
};

const occasions = [
  { title: "Weddings", body: "Ceremonies, receptions and rehearsal dinners with the coastal Mediterranean as your backdrop." },
  { title: "Private Celebrations", body: "Birthdays, engagements, anniversaries: the milestones worth gathering for." },
  { title: "Corporate & Groups", body: "Team lunches, client dinners, end-of-year parties and everything between." },
];

export default function FunctionsPage() {
  return (
    <>
      <Nav />
      <PageHeader
        eyebrow="Events & Weddings"
        title="Celebrate with us in Avalon."
        description="From weddings and private celebrations to corporate events and long lunches, Elvina has a space to match the occasion. Five distinct areas, all yours."
      />

      <section className="section-pad-sm">
        <div className="container">
          <div className="functions-intro">
            <div className="rooms-head" style={{ maxWidth: 560, marginBottom: 0 }}>
              <span className="eyebrow">What We Host</span>
              <h2 style={{
                fontFamily: "var(--display)", fontWeight: 500,
                fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "0.02em",
                textTransform: "uppercase", color: "var(--burnt-sienna)",
                margin: "0 0 18px", lineHeight: 1.1,
              }}>
                Made for the occasion.
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--burnt-sienna)", margin: "0 0 24px" }}>
                Whatever you&apos;re marking, we&apos;ll tailor food, drinks and styling
                to suit. Get in touch and we&apos;ll send our pack with spaces,
                capacities and sample menus.
              </p>
              <a
                href={`mailto:${BUSINESS.email}?subject=${encodeURIComponent("Function Pack request")}&body=${encodeURIComponent("Hi Elvina,\n\nCould you please send through your function pack? A few details about my event:\n\nDate:\nNumber of guests:\nOccasion:\n\nThanks,")}`}
                className="btn btn-tan btn-lg"
              >
                Request Function Pack <Arrow />
              </a>
            </div>
            <div className="occasions">
              {occasions.map((o) => (
                <div key={o.title} className="occasion">
                  <h4>{o.title}</h4>
                  <p>{o.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad-sm" style={{ background: "var(--paper)" }}>
        <div className="container">
          <div className="rooms-head" style={{ maxWidth: 640 }}>
            <span className="eyebrow">The Spaces</span>
            <h2 style={{
              fontFamily: "var(--display)",
              fontWeight: 500,
              fontSize: "clamp(28px, 4vw, 44px)",
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              color: "var(--burnt-sienna)",
              margin: "0 0 18px",
              lineHeight: 1.1,
            }}>
              Five rooms, one view.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--burnt-sienna)", margin: 0 }}>
              Each space has its own feel and capacity. Mix and match, or take the
              whole venue. We&apos;ll tailor food, drinks and styling to your event.
            </p>
          </div>
          <div className="rooms-grid">
            {ROOMS.map((room) => (
              <div key={room.name} className="room-card">
                <div className="room-photo">
                  {room.image ? (
                    <img src={room.image} alt={room.name} />
                  ) : (
                    <div className="room-photo-placeholder">
                      <span className="placeholder-label">PHOTOGRAPHY</span>
                    </div>
                  )}
                </div>
                <div className="room-body">
                  <div className="room-name-row">
                    <h3>{room.name}</h3>
                    <span className="room-cap">{room.capacity}</span>
                  </div>
                  <p>{room.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info" style={{ justifyContent: "flex-start" }}>
              <div>
                <span className="eyebrow" style={{ display: "block", marginBottom: 14 }}>Enquire</span>
                <h3 style={{ marginBottom: 16 }}>Tell us about your event.</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--burnt-sienna)", marginBottom: 24 }}>
                  Send through the date, headcount, and what you have in mind.
                  We&apos;ll come back fast with options.
                </p>
                <div className="visit-rows" style={{ marginBottom: 0 }}>
                  <div className="visit-row">
                    <span className="icon"><IconPhone /></span>
                    <div className="text"><a href={`tel:${BUSINESS.phoneTel}`}>{BUSINESS.phone}</a></div>
                  </div>
                  <div className="visit-row">
                    <span className="icon"><IconMail /></span>
                    <div className="text"><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></div>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm subjects={["Wedding enquiry", "Private celebration", "Corporate event", "Large group booking", "General enquiry"]} defaultSubject="Wedding enquiry" />
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container">
          <h2>Let&apos;s plan something.</h2>
          <p>
            Whatever the occasion, we&apos;ll find the right corner of Elvina for it.
          </p>
          <div className="cta-strip-actions">
            <a href={`mailto:${BUSINESS.email}`} className="btn btn-tan">Enquire Now <Arrow /></a>
            <a href="/menu" className="btn btn-outline-light">View Menu</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
