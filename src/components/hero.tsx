import Image from "next/image";
import { BOOKING_URL } from "@/lib/config";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <Image
          src="/images/hero-terrace.jpg"
          alt="The sunlit terrace at Elvina restaurant in Avalon Beach"
          fill
          sizes="100vw"
          preload
        />
      </div>
      <div className="hero-inner">
        <div className="container">
          <div className="hero-content">
            <h1><span className="hero-location">Avalon Beach restaurant &amp; wine bar</span>Inviting.<br />Breezy.<br />Sun-soaked.</h1>
            <p>
              A coastal Mediterranean kitchen and bar in Avalon Village. Long
              lunches, sun-drunk afternoons and dancing evenings, all with an
              eclectic wine list.
            </p>
            <div className="hero-ctas">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-tan btn-lg"
              >
                Book a Table
              </a>
              <a href="/menu" className="btn btn-outline-light btn-lg">View Menu</a>
              <a href="/functions" className="hero-tertiary">Plan an Event</a>
            </div>
          </div>
        </div>
        <a href="#about" className="hero-scroll" aria-label="Scroll down">
          <span className="hero-scroll-text">Take a look</span>
          <span className="hero-scroll-arrow" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
