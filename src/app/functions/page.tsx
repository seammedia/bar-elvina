import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { IconMail, IconPhone, Arrow } from "@/components/icons";
import { ROOMS, BUSINESS } from "@/lib/config";

export const metadata: Metadata = {
  title: "Functions & Events — Elvina",
  description:
    "Host your next function at Elvina, Avalon Beach. Five distinct spaces, from intimate dinners to garden parties. Enquire today.",
};

export default function FunctionsPage() {
  return (
    <>
      <Nav />
      <PageHeader
        eyebrow="Functions & Events"
        title="Host with us on Avalon Beach."
        description="From a long lunch to a private celebration, Elvina has a space to match the occasion. Five distinct areas, all yours."
      />

      <section className="section-pad-sm">
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
                  <div className="room-photo-placeholder">
                    <span className="placeholder-label">PHOTOGRAPHY</span>
                  </div>
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

      <section style={{ background: "var(--paper)" }}>
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
            <ContactForm subjects={["Function enquiry", "Private dining", "Large group booking", "Corporate event", "General enquiry"]} defaultSubject="Function enquiry" />
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
