export function About() {
  return (
    <section id="about" className="section-pad-sm">
      <div className="container">
        <div className="about-grid">
          <div className="about-copy">
            <span className="eyebrow">A True Local</span>
            <h2>Coastal Mediterranean.</h2>
            <p>
              Elvina sits in Avalon Village, looking out toward the
              main street. Inside, an eclectic list of wine, plates pulled from
              the coastal Mediterranean, and a warmth that makes the afternoon
              disappear.
            </p>
            <p>
              Friends welcome. Long sittings encouraged. Bare feet not discouraged.
            </p>
            <a href="/about" className="link-tan">Our story.</a>
          </div>
          <div className="about-photo">
            <img src="/images/room-foyer.jpg" alt="The dining room at Elvina, Avalon Village" />
          </div>
        </div>
      </div>
    </section>
  );
}
