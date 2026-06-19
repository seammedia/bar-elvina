const events = [
  {
    name: "Wagyu Wednesday",
    desc: "250g Tajima Wagyu rump, onion rings, eschalot butter, garden leaves.",
    when: "Wed",
    image: "/images/food-wagyu.jpg",
  },
  {
    name: "Ribs Thursday",
    desc: "Low and slow. The chef's weekly special.",
    when: "Thu",
    image: "/images/food-steak-wine.jpg",
  },
  {
    name: "Supper Club — Live DJ",
    desc: "A DJ on the decks and the bar running late.",
    when: "Fri",
    image: "/images/drink-spritz.jpg",
  },
  {
    name: "Sunset Happy Hour",
    desc: "Spritz, beers, snacks. Watch the day wind down.",
    when: "Wed-Fri 4-6pm",
    image: "/images/venue-bar.jpg",
  },
  {
    name: "Bottomless Weekends",
    desc: "Two hours, $99pp, all the good stuff. Sat & Sun.",
    when: "Sat-Sun",
    image: "/images/food-feast.jpg",
  },
];

export function WhatsOn() {
  return (
    <section className="happenings">
      <div className="container">
        <span className="eyebrow">What&apos;s On</span>
        <h2>Always something on.</h2>
        <div className="happenings-list">
          {events.map((e) => (
            <div key={e.name} className="happening-row">
              <div className="happening-main">
                <div className="happening-thumb">
                  <img src={e.image} alt={e.name} />
                </div>
                <div>
                  <p className="name">{e.name}</p>
                  <p className="desc">{e.desc}</p>
                </div>
              </div>
              <span className="when">{e.when}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
