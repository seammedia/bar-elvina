export function About() {
  return (
    <section id="about" className="section-pad-sm">
      <div className="container">
        <div className="about-grid">
          <div className="about-copy">
            <span className="eyebrow">The Room</span>
            <h2>A neighbourhood spot, with a very-much-Euro feeling.</h2>
            <p>
              Elvina sits on the level above Avalon Beach, looking out toward
              the headland. Inside, an honest list of wine, plates pulled from the
              Mediterranean, and a warmth that makes the afternoon disappear.
            </p>
            <p>
              Friends welcome. Long sittings encouraged. Bare feet not discouraged.
            </p>
            <a href="/about" className="link-tan">Our story.</a>
          </div>
          <div className="about-photo">
            <div className="about-photo-placeholder">
              <span className="placeholder-label">VENUE PHOTOGRAPHY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
