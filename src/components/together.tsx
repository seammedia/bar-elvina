import Image from "next/image";
import { BOTTOMLESS } from "@/lib/config";

export function Together() {
  return (
    <section className="together">
      <div className="container">
        <div className="promo promo-wide">
          <Image
            src="/images/food-bottomless-spatchcock-2026-11.jpg"
            alt="Chargrilled spatchcock on spring pea puree, part of the Bottomless banquet at Elvina"
            fill
            sizes="(max-width: 600px) 100vw, 1240px"
            className="promo-img"
          />
          <div className="promo-content">
            <span className="eyebrow">Bottomless Lunch &amp; Dinner, Northern Beaches</span>
            <h3>Two hours.<br />{BOTTOMLESS.price} pp.</h3>
            <p className="promo-desc">{BOTTOMLESS.description}</p>
            <a href="/bottomless" className="btn">Explore Bottomless</a>
          </div>
        </div>
      </div>
    </section>
  );
}
