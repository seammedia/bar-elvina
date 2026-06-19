const items = [
  {
    name: "Booze",
    desc: "Wines by region. Cocktails with a southern slant. Spritz hours that count.",
    href: "/menu",
    cta: "View Menu →",
  },
  {
    name: "Food",
    desc: "Plates from the Med, sea-side flavours, seasonal produce.",
    href: "/menu",
    cta: "View Menu →",
  },
  {
    name: "Bottomless",
    desc: "Two hours of unlimited beers, bubbles, vino, spritz & margaritas.",
    href: "/bottomless",
    cta: "View Page →",
  },
  {
    name: "Functions",
    desc: "Five spaces to host in. Lunches, parties, private dinners.",
    href: "/functions",
    cta: "View Page →",
  },
];

export function Signatures() {
  return (
    <section id="menu" className="signatures">
      <div className="container">
        <span className="eyebrow">What We Do</span>
        <h2>The rooms. The list. The plates.</h2>
        <div className="sig-grid">
          {items.map((item) => (
            <div key={item.name} className="sig-card">
              <div className="sig-name">{item.name}</div>
              <p className="sig-desc">{item.desc}</p>
              <a href={item.href} className="sig-link">{item.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
