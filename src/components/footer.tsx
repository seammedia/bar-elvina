import { IconInstagram } from "./icons";
import { GIFT_VOUCHER_URL } from "@/lib/config";

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
              A Mediterranean bar and kitchen on Avalon Beach.
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
              <li><a href="/functions">Functions</a></li>
              <li><a href="/whats-on">What&apos;s On</a></li>
              <li><a href="/bottomless">Bottomless</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Visit</a></li>
              <li>
                <a href={GIFT_VOUCHER_URL} target="_blank" rel="noopener noreferrer">
                  Gift Vouchers
                </a>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Hours</h4>
            <div className="lines">
              <div className="hour-line"><span>Wed-Thu</span><span>5pm - late</span></div>
              <div className="hour-line"><span>Fri-Sat</span><span>4pm - late</span></div>
              <div className="hour-line"><span>Sun-Tue</span><span>Closed</span></div>
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
