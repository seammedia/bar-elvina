const events = [
  {
    name: "Sunset Happy Hour",
    desc: "Spritz, beers, snacks. Watch the day wind down.",
    when: "Wed-Fri 4-6pm",
  },
  {
    name: "Family Dinner",
    desc: "Early-evening sitting, sharing menu, easy pace.",
    when: "Wed-Sun 4-6pm",
  },
  {
    name: "BYO & Lamb Shoulder",
    desc: "Bring the bottle. We'll bring the lamb.",
    when: "Wed from 5pm",
  },
  {
    name: "Crab Pasta & Vino",
    desc: "House pasta, glass of white. A Thursday tradition.",
    when: "Thurs from 5pm",
  },
  {
    name: "Sunday Chook",
    desc: "Whole roast chook. Sides. Long Sunday energy.",
    when: "Sun from 4pm",
  },
];

export function Happenings() {
  return (
    <section className="happenings">
      <div className="container">
        <span className="eyebrow">Weekly Happenings</span>
        <h2>Always something on.</h2>
        <div className="happenings-list">
          {events.map((e) => (
            <div key={e.name} className="happening-row">
              <div>
                <p className="name">{e.name}</p>
                <p className="desc">{e.desc}</p>
              </div>
              <span className="when">{e.when}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
