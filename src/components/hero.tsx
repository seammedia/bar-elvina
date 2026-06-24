import { BOOKING_URL } from "@/lib/config";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src="/images/hero-terrace.jpg" alt="The sunlit terrace at Elvina, Avalon Beach" />
      </div>
      <div className="hero-inner">
        <div className="container">
          <div className="hero-content">
            <span className="eyebrow hero-eyebrow">Avalon Beach</span>
            <h1>Inviting.<br />Breezy.<br />Intriguing.</h1>
            <p>
              A Mediterranean bar and kitchen on the Northern Beaches.
              Sun-drunk afternoons, slow evenings, and a list that knows
              the long way home.
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
              <a href="/functions" className="btn btn-outline-light btn-lg">Functions</a>
              <a href="/bottomless" className="btn btn-outline-light btn-lg">Bottomless</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
