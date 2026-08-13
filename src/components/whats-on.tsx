import Image from "next/image";
import { Arrow } from "./icons";
import { WHATS_ON_EVENTS } from "@/lib/config";

export function WhatsOn({ eagerFirstPoster = false }: { eagerFirstPoster?: boolean }) {
  return (
    <section className="happenings">
      <div className="container">
        <span className="eyebrow">What&apos;s On</span>
        <h2>What&apos;s on in Avalon Beach.</h2>
        <div className="whatson-grid">
          {WHATS_ON_EVENTS.map((event, index) => (
            <article key={event.slug} id={event.slug} className="whatson-card">
              <a
                href={event.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="whatson-poster"
                aria-label={`Book ${event.name}`}
              >
                <Image
                  src={event.image}
                  alt={event.alt}
                  width={1000}
                  height={1400}
                  sizes="(max-width: 820px) 100vw, 50vw"
                  loading={eagerFirstPoster && index === 0 ? "eager" : "lazy"}
                />
              </a>
              <div className="whatson-content">
                <h3>{event.name}</h3>
                <p>{event.description}</p>
                <dl>
                  <div><dt>When</dt><dd>{event.when}</dd></div>
                  <div><dt>Price</dt><dd>{event.price}</dd></div>
                </dl>
                <a
                  href={event.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-tan"
                >
                  Book This Offer <Arrow />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
