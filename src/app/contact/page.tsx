import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { IconPin, IconClock, IconMail, IconPhone } from "@/components/icons";
import { BOOKING_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Visit — Elvina",
  description:
    "Find Elvina on Avalon Beach. Hours, location, and how to get in touch.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <PageHeader
        eyebrow="Visit Us"
        title="Drop in, book in, get in touch."
        description="The fastest way to a table is the booking button. For everything else, we're a phone call or an email away."
      />

      <section>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div>
                <h3>Find us</h3>
                <div className="visit-rows" style={{ marginBottom: 0 }}>
                  <div className="visit-row">
                    <span className="icon"><IconPin /></span>
                    <div className="text">
                      Level One,<br />
                      50 Old Barrenjoey Rd,<br />
                      Avalon Beach NSW 2107
                    </div>
                  </div>
                  <div className="visit-row">
                    <span className="icon"><IconClock /></span>
                    <div className="text">
                      <div className="hour-line"><span>Wed-Thu</span><span>5pm - late</span></div>
                      <div className="hour-line"><span>Fri-Sat</span><span>4pm - late</span></div>
                      <div className="hour-line"><span>Sun-Tue</span><span>Closed</span></div>
                    </div>
                  </div>
                  <div className="visit-row">
                    <span className="icon"><IconPhone /></span>
                    <div className="text"><a href="tel:+61289262340">02 8926 2340</a></div>
                  </div>
                  <div className="visit-row">
                    <span className="icon"><IconMail /></span>
                    <div className="text">
                      <a href="mailto:info@barelvina.com.au">info@barelvina.com.au</a>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-tan btn-lg"
                style={{ alignSelf: "flex-start" }}
              >
                Book a Table
              </a>

              <div className="visit-map" style={{ minHeight: 320 }}>
                <iframe
                  title="Elvina location map"
                  src="https://www.google.com/maps?q=50+Old+Barrenjoey+Rd,Avalon+Beach+NSW+2107&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div>
              <h3 style={{
                fontFamily: "var(--display)",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                fontSize: 22,
                color: "var(--burnt-sienna)",
                margin: "0 0 8px",
              }}>
                Can&apos;t find what you&apos;re looking for?
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--muted)", margin: "0 0 24px" }}>
                Use the box below and we&apos;ll get back to you within one business day.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
