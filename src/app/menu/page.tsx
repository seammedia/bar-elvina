import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { Arrow } from "@/components/icons";
import { BOOKING_URL, MENUS } from "@/lib/config";

export const metadata: Metadata = {
  title: "Menu — Elvina",
  description:
    "A Mediterranean kitchen and an eclectic list. View our a la carte, set menus and kids menu.",
};

export default function MenuPage() {
  return (
    <>
      <Nav />
      <PageHeader
        eyebrow="The Menu"
        title="A Mediterranean kitchen + an eclectic list."
        description="Seasonal produce, generous sharing plates and thoughtfully selected wines. Pick a menu below to take a look."
      />

      <section className="menu-page">
        <div className="container">
          <div className="menu-pdf-grid">
            {MENUS.map((m) => (
              <a
                key={m.name}
                href={m.file}
                target="_blank"
                rel="noopener noreferrer"
                className="menu-pdf-card"
              >
                <div className="menu-pdf-body">
                  <h3>{m.name}</h3>
                  <p>{m.desc}</p>
                </div>
                <span className="menu-pdf-cta">View Menu <Arrow /></span>
              </a>
            ))}
          </div>

          <p className="menu-dietaries">
            Please let us know of any dietary requirements when you book.
          </p>

          <div className="menu-foot-actions">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-tan btn-lg"
            >
              Book a Table
            </a>
            <a href="/bottomless" className="btn btn-dark btn-lg">Bottomless</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
