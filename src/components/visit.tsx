import { IconPin, IconClock, IconMail, IconPhone } from "./icons";

export function Visit() {
  return (
    <section id="visit" className="visit">
      <div className="container">
        <div className="visit-grid">
          <div className="visit-info">
            <span className="eyebrow">Find Us</span>
            <h2>Visit us on Avalon Beach.</h2>
            <div className="visit-rows">
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
                  <div className="hour-line"><span>Sat</span><span>12pm - late</span></div>
                  <div className="hour-line"><span>Sun</span><span>12pm - late</span></div>
                  <div className="hour-line"><span>Mon-Tue</span><span>Closed</span></div>
                </div>
              </div>
              <div className="visit-row">
                <span className="icon"><IconPhone /></span>
                <div className="text">
                  <a href="tel:+61289262340">02 8926 2340</a>
                </div>
              </div>
              <div className="visit-row">
                <span className="icon"><IconMail /></span>
                <div className="text">
                  <a href="mailto:info@barelvina.com.au">info@barelvina.com.au</a>
                </div>
              </div>
            </div>
            <a href="/contact" className="btn btn-tan">Book a Table</a>
          </div>
          <div className="visit-map">
            <iframe
              title="Elvina location map"
              src="https://www.google.com/maps?q=50+Old+Barrenjoey+Rd,Avalon+Beach+NSW+2107&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
