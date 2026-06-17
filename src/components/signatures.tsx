const items = [
  {
    name: "Booze",
    desc: "Wines by region. Cocktails with a southern slant. Spritz hours that count.",
  },
  {
    name: "Food",
    desc: "Plates from the Med, sea-side flavours, seasonal produce.",
  },
  {
    name: "Bottomless",
    desc: "Two hours of unlimited beers, bubbles, vino, spritz & margaritas.",
  },
  {
    name: "Happenings",
    desc: "Happy hours, family dinners, lamb shoulders and Sunday roasts.",
  },
];

export function Signatures() {
  return (
    <section id="menu" className="signatures">
      <div className="container">
        <span className="eyebrow">What We Do</span>
        <h2>The room. The list. The plates.</h2>
        <div className="sig-grid">
          {items.map((item) => (
            <div key={item.name} className="sig-card">
              <div className="sig-name">{item.name}</div>
              <p className="sig-desc">{item.desc}</p>
              <a href="/menu" className="sig-link">View Menu →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
