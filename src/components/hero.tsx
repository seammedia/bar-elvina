export function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-inner">
        <div className="container">
          <div className="hero-content">
            <span className="eyebrow hero-eyebrow">Avalon Beach</span>
            <h1>Inviting.<br />Breezy.<br />Intriguing.</h1>
            <p>
              A coastal-European bar and kitchen on the Northern Beaches.
              Sun-drunk afternoons, slow evenings, and a list that knows
              the long way home.
            </p>
            <div className="hero-ctas">
              <a href="/contact" className="btn btn-tan">Book a Table</a>
              <a href="/bottomless-lunch" className="btn btn-outline-light">Bottomless Menu</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
