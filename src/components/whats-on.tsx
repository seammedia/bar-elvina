import Image from "next/image";

const posters = [
  { name: "Aperitivo Time", image: "/images/whatson-aperitivo.jpg", alt: "Aperitivo Time - Wed to Fri 5-7pm, $4 oysters, margaritas, spritz and wine" },
  { name: "Bottomless", image: "/images/whatson-bottomless-pink.jpg", alt: "Bottomless lunch and dinner - $99 including a signature banquet and two-hour drinks package" },
  { name: "Wagyu Wednesday", image: "/images/whatson-wagyu.jpg", alt: "Wagyu Wednesday - $33 Tajima MB4+ wagyu rump with fries and eschallot butter" },
  { name: "Vino Vinyl Fridays", image: "/images/whatson-vinyl.jpg", alt: "Vino Vinyl Fridays at Elvina - drinks, tunes and food with music by Luke Tommy G" },
  { name: "Wine Club", image: "/images/whatson-wine-club.jpg", alt: "Elvina Wine Club - monthly Thursday dinners with remarkable winemakers" },
];

export function WhatsOn({ eagerFirstPoster = false }: { eagerFirstPoster?: boolean }) {
  return (
    <section className="happenings">
      <div className="container">
        <span className="eyebrow">What&apos;s On</span>
        <h2>Always something on.</h2>
        <div className="whatson-grid">
          {posters.map((p, index) => (
            <figure key={p.name} className="whatson-poster">
              <Image
                src={p.image}
                alt={p.alt}
                width={1000}
                height={1400}
                sizes="(max-width: 820px) 100vw, 50vw"
                loading={eagerFirstPoster && index === 0 ? "eager" : "lazy"}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
