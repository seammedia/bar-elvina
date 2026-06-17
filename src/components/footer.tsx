import { IconInstagram } from "./icons";

export function Footer() {
  return (
    <footer id="contact">
      <div className="container">
        <div className="foot-inner">
          <div className="foot-brand-block">
            <a href="#" className="nav-brand">
              <img src="/logos/elvina-mermaid-white.svg" alt="Elvina" className="nav-logo" />
            </a>
            <p>
              A coastal-European bar and kitchen on Avalon Beach.
              Inviting. Breezy. Intriguing.
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
              <li><a href="/happenings">Happenings</a></li>
              <li><a href="/bottomless-lunch">Bottomless</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Visit</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Hours</h4>
            <div className="lines">
              <div className="hour-line"><span>Wed-Thu</span><span>5pm - 10pm</span></div>
              <div className="hour-line"><span>Fri</span><span>4pm - late</span></div>
              <div className="hour-line"><span>Sat-Sun</span><span>12pm - late</span></div>
              <div className="hour-line"><span>Mon-Tue</span><span>Closed</span></div>
            </div>
          </div>
          <div className="foot-col">
            <h4>Visit</h4>
            <div className="lines">
              <div className="line">Level One,<br />50 Old Barrenjoey Rd,<br />Avalon Beach 2107</div>
              <div className="line"><a href="tel:+61289262340">02 8926 2340</a></div>
              <div className="line"><a href="mailto:info@barelvina.com.au">info@barelvina.com.au</a></div>
            </div>
          </div>
          <div />
        </div>
        <div className="foot-bottom">
          <div>© 2026 Elvina. All rights reserved.</div>
          <div>Avalon Beach, NSW</div>
        </div>
      </div>
    </footer>
  );
}
