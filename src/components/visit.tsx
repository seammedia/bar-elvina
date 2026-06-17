import { IconPin, IconClock, IconMail } from "./icons";

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
                <div className="text">Avalon Beach,<br />NSW 2107</div>
              </div>
              <div className="visit-row">
                <span className="icon"><IconClock /></span>
                <div className="text">
                  <div className="hour-line"><span>Mon-Tue</span><span>Closed</span></div>
                  <div className="hour-line"><span>Wed-Thu</span><span>5:00pm - late</span></div>
                  <div className="hour-line"><span>Fri-Sat</span><span>12:00pm - late</span></div>
                  <div className="hour-line"><span>Sun</span><span>12:00pm - 6:00pm</span></div>
                </div>
              </div>
              <div className="visit-row">
                <span className="icon"><IconMail /></span>
                <div className="text">
                  <a href="mailto:lucas@barelvina.com.au">lucas@barelvina.com.au</a>
                </div>
              </div>
            </div>
            <a href="/contact" className="btn btn-tan">Book a Table</a>
          </div>
          <div className="visit-map">
            <iframe
              title="Bar Elvina location map"
              src="https://www.google.com/maps?q=Avalon+Beach+NSW+2107&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
