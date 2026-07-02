const posters = [
  { name: "Wagyu Wednesday", image: "/images/whatson-wagyu.jpg", alt: "Wagyu Wednesday - $33 Tajima wagyu rump, Wednesdays at Elvina" },
  { name: "Aperitivo Time", image: "/images/whatson-aperitivo.jpg", alt: "Aperitivo Time - Wed to Fri 5-7pm, oysters, margaritas, spritz and wine" },
  { name: "Bottomless", image: "/images/whatson-bottomless.jpg", alt: "Bottomless lunch and dinner - $99 per person, Wed to Sat all winter" },
];

export function WhatsOn() {
  return (
    <section className="happenings">
      <div className="container">
        <span className="eyebrow">What&apos;s On</span>
        <h2>Always something on.</h2>
        <div className="whatson-grid">
          {posters.map((p) => (
            <figure key={p.name} className="whatson-poster">
              <img src={p.image} alt={p.alt} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
