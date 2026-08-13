import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { WhatsOn } from "@/components/whats-on";
import { Arrow } from "@/components/icons";
import { BOOKING_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "What's On — Elvina",
  description:
    "What's on at Elvina: Aperitivo Time, Wine Club dinners, $99 bottomless lunch and dinner, Wagyu Wednesday and Vino Vinyl Fridays.",
};

export default function WhatsOnPage() {
  return (
    <>
      <Nav />
      <PageHeader
        eyebrow="What's On"
        title="A reason for every night."
        description="Pull up a chair, find your spot. There's always something on at Elvina."
      />
      <WhatsOn eagerFirstPoster />

      <section className="cta-strip">
        <div className="container">
          <h2>Lock in a sitting.</h2>
          <p>
            Specials move quickly. For tables, you can make a booking, or
            try your luck and walk in at the bar.
          </p>
          <div className="cta-strip-actions">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-tan"
            >
              Book a Table <Arrow />
            </a>
            <a href="/menu" className="btn btn-outline-light">View Menu</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
