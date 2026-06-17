export function About() {
  return (
    <section id="about" className="section-pad-sm">
      <div className="container">
        <div className="about-grid">
          <div className="about-copy">
            <span className="eyebrow">More Than A Bar</span>
            <h2>A neighbourhood spot, built for the Beaches.</h2>
            <p>
              Bar Elvina is for the long afternoon and the slow evening. A coastal kitchen,
              an honest wine list, and a room you&apos;ll want to settle into.
            </p>
            <p>
              Born from a love of Avalon and the way the Northern Beaches actually live.
              Locals welcome. Friends welcome. Long sittings encouraged.
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
