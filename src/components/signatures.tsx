const items = [
  {
    name: "Wine",
    desc: "Coastal-leaning list. Mostly Australian. Mostly excellent.",
  },
  {
    name: "Cocktails",
    desc: "Classics done properly. House specials worth ordering.",
  },
  {
    name: "Kitchen",
    desc: "Sharing plates, sea-side flavours, seasonal produce.",
  },
  {
    name: "Sundays",
    desc: "Bottomless lunch every weekend. Two hours, your pace.",
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
