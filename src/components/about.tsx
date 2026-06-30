export function About() {
  return (
    <section id="about" className="section-pad-sm">
      <div className="container">
        <div className="about-grid">
          <div className="about-copy">
            <span className="eyebrow">A True Local</span>
            <h2>Mediterranean, in Avalon Beach.</h2>
            <p>
              Elvina sits perched above Avalon Beach: a restaurant and bar
              inspired by the relaxed spirit of the Mediterranean. A kitchen of
              generous sharing plates, a bar for sun-drunk afternoons, and an
              eclectic wine list to see out the evening.
            </p>
            <p>
              Friends welcome. Long lunches encouraged. Bare feet not discouraged.
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
