export function About() {
  return (
    <section id="about" className="section-pad-sm">
      <div className="container">
        <div className="about-grid">
          <div className="about-copy">
            <span className="eyebrow">A Place That Feels Like The Coast</span>
            <h2>Mediterranean, on Avalon Beach.</h2>
            <p>
              Elvina sits on the level above Avalon Beach, looking out toward
              the main street. Inside, an honest list of wine, plates pulled from
              the Mediterranean, and a warmth that makes the afternoon disappear.
            </p>
            <p>
              Friends welcome. Long sittings encouraged. Bare feet not discouraged.
            </p>
            <a href="/about" className="link-tan">Our story.</a>
          </div>
          <div className="about-photo">
            <img src="/images/room-foyer.jpg" alt="The dining room at Elvina, Avalon Beach" />
          </div>
        </div>
      </div>
    </section>
  );
}
