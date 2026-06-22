import { IconStar } from "./icons";
import { BOTTOMLESS } from "@/lib/config";

const reviews = [
  {
    quote: "Exactly what Avalon needed. The wine list is a treat.",
    author: "A LOCAL",
  },
  {
    quote: "Bottomless menu was the best Saturday I've had in months.",
    author: "A REGULAR",
  },
  {
    quote: "Service is warm, the room is gorgeous, the kitchen is on point.",
    author: "A FRIEND",
  },
];

function Stars() {
  return (
    <div className="stars" aria-label="5 star rating">
      {[0, 1, 2, 3, 4].map((i) => (
        <IconStar key={i} size={13} />
      ))}
    </div>
  );
}

export function Together() {
  return (
    <section className="together">
      <div className="container">
        <div className="together-grid">
          <div className="promo">
            <img src="/images/drink-spritz.jpg" alt="A spritz at Elvina" className="promo-img" />
            <div className="promo-content">
              <span className="eyebrow">The Bottomless Menu</span>
              <h3>Two hours.<br />{BOTTOMLESS.price} pp.</h3>
              <p className="promo-desc">
                {BOTTOMLESS.description}
              </p>
              <a href="/bottomless" className="btn">Find Out More</a>
            </div>
          </div>
          <div className="reviews-block">
            <span className="eyebrow">From The Locals</span>
            <h2>A proper Avalon room.</h2>
            <div className="review-row">
              {reviews.map((r) => (
                <div key={r.author} className="review-card">
                  <Stars />
                  <p className="quote">&ldquo;{r.quote}&rdquo;</p>
                  <div className="author">{r.author}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
