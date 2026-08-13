import { BOOKING_URL } from "@/lib/config";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src="/images/hero-terrace.jpg" alt="The sunlit terrace at Elvina, Avalon" />
      </div>
      <div className="hero-inner">
        <div className="container">
          <div className="hero-content">
            <h1>Inviting.<br />Breezy.<br />Sun-soaked.</h1>
            <p>
              A coastal Mediterranean kitchen and bar in Avalon. Long
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
              <a href="/functions" className="btn btn-outline-light btn-lg">Events &amp; Weddings</a>
              <a href="/bottomless" className="btn btn-outline-light btn-lg">Bottomless</a>
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
