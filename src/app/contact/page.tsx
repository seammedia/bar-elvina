import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { IconPin, IconClock, IconMail, IconPhone } from "@/components/icons";

export const metadata: Metadata = {
  title: "Visit — Elvina",
  description:
    "Book a table at Elvina, find our hours and location, or send us an enquiry.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <PageHeader
        eyebrow="Visit Us"
        title="Book a table, say hi, plan an event."
        description="We answer emails within one business day. For larger bookings and private events, send through the details and we'll come back fast."
      />

      <section>
        <div className="container">
          <div className="contact-grid">
            <form
              className="contact-form"
              action="https://formsubmit.co/info@barelvina.com.au"
              method="POST"
            >
              <div className="field-row">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" required placeholder="Your name" />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required placeholder="you@email.com" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject" defaultValue="Booking">
                  <option>Booking enquiry</option>
                  <option>Private event</option>
                  <option>Bottomless Menu</option>
                  <option>Press</option>
                  <option>General enquiry</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required placeholder="Date, headcount, and anything we should know..." />
              </div>
              <button type="submit" className="btn btn-tan" style={{ alignSelf: "flex-start" }}>
                Send Message
              </button>
            </form>

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
                      <div className="hour-line"><span>Wed-Thu</span><span>5pm - 10pm</span></div>
                      <div className="hour-line"><span>Fri</span><span>4pm - late</span></div>
                      <div className="hour-line"><span>Sat-Sun</span><span>12pm - late</span></div>
                      <div className="hour-line"><span>Mon-Tue</span><span>Closed</span></div>
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

              <div className="visit-map" style={{ minHeight: 320 }}>
                <iframe
                  title="Elvina location map"
                  src="https://www.google.com/maps?q=50+Old+Barrenjoey+Rd,Avalon+Beach+NSW+2107&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
