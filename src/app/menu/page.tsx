import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { MenuViewer } from "@/components/menu-viewer";
import { BOOKING_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Menu | Avalon Beach Restaurant | Elvina",
  description:
    "Explore Elvina's seasonal coastal Mediterranean menu, sharing plates and eclectic wine list in Avalon Beach, Sydney's Northern Beaches.",
};

export default function MenuPage() {
  return (
    <>
      <Nav />
      <PageHeader
        eyebrow="The Menu"
        title="Coastal Mediterranean dining in Avalon Beach."
        description="Seasonal produce, generous sharing plates and thoughtfully selected wines. Browse the menus below."
      />

      <section className="menu-page">
        <div className="container">
          <MenuViewer />

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
