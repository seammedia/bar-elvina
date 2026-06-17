import { IconInstagram } from "./icons";

export function Footer() {
  return (
    <footer id="contact">
      <div className="container">
        <div className="foot-inner">
          <div className="foot-brand-block">
            <a href="#" className="nav-brand">
              <span className="nav-brand-name">BAR ELVINA</span>
            </a>
            <p>
              A neighbourhood bar and kitchen on Avalon Beach.
              Long lunches, low evenings.
            </p>
            <div className="foot-social">
              <a
                href="https://www.instagram.com/barelvina/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <IconInstagram />
              </a>
            </div>
          </div>
          <div className="foot-col">
            <h4>Navigation</h4>
            <ul>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/bottomless-lunch">Bottomless Lunch</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Hours</h4>
            <div className="lines">
              <div className="hour-line"><span>Mon-Tue</span><span>Closed</span></div>
              <div className="hour-line"><span>Wed-Thu</span><span>5pm - late</span></div>
              <div className="hour-line"><span>Fri-Sat</span><span>12pm - late</span></div>
              <div className="hour-line"><span>Sun</span><span>12pm - 6pm</span></div>
            </div>
          </div>
          <div className="foot-col">
            <h4>Contact</h4>
            <div className="lines">
              <div className="line">Avalon Beach,<br />NSW 2107</div>
              <div className="line"><a href="mailto:lucas@barelvina.com.au">lucas@barelvina.com.au</a></div>
            </div>
          </div>
          <div />
        </div>
        <div className="foot-bottom">
          <div>© 2026 Bar Elvina. All rights reserved.</div>
          <div>Avalon Beach, Sydney</div>
        </div>
      </div>
    </footer>
  );
}
