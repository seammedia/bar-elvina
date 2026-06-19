import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { BOOKING_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Menu — Elvina",
  description:
    "Mediterranean plates, signature cocktails, beers and a wine list by the glass. Always evolving with the season.",
};

type Item = { name: string; desc?: string; price: string; tags?: string };

const food: { name: string; intro?: string; items: Item[] }[] = [
  {
    name: "Snacks",
    items: [
      { name: "Sea salt & caraway focaccia, smoked butter", price: "13", tags: "GFO" },
      { name: "White bean hummus, confit leek, paprika", price: "9", tags: "GF DF" },
      { name: "Marinated green Sicilian olives", price: "9", tags: "GF DF" },
      { name: "Sydney rock oyster, shallot & house rosé vinegar mignonette", price: "6ea", tags: "GF DF" },
      { name: "Yellowfin tuna tostada, horseradish, caper, pickled onion", price: "10ea", tags: "DF GFO" },
      { name: "Fried zucchini flower, lemon balm ricotta, anchovy", price: "11ea" },
      { name: "Butterflied Yamba king prawns (2pc), kombu butter, lemon", price: "19ea", tags: "GF" },
    ],
  },
  {
    name: "Starters",
    items: [
      { name: "LP's quality meats charcuterie, seasonal accompaniments", price: "18 / 32", tags: "GFO" },
      { name: "Cauliflower blossom, roasted almond cream, harissa", price: "19", tags: "GF" },
      { name: "Chicken liver parfait, sweet & sour currants, pedro ximenez jelly", price: "22", tags: "GFO" },
      { name: "Grilled broccoli, smoked butter, white bean hummus, macadamia", price: "24", tags: "GF" },
      { name: "Buttermilk chicken zinger bun, iceberg, pickles, saffron mayo", price: "14" },
    ],
  },
  {
    name: "Plates",
    items: [
      { name: "Cacio e pepe, fresh spaghetti, pecorino, parsley", desc: "Add bacon +5", price: "33", tags: "GFO" },
      { name: "Market fish, cream potatoes, broccolini, lemon-caper-butter", price: "39", tags: "GF" },
      { name: "250g Tajima Wagyu rump MB4+, onion rings, eschalot butter, garden leaves", price: "46", tags: "GF DFO" },
      { name: "8-hour lamb shoulder, zatar rub, salsa verde, harissa yoghurt, garden peas", price: "44", tags: "GF" },
    ],
  },
  {
    name: "Sides",
    items: [
      { name: "Fries, pimiento aioli", price: "10", tags: "GF DF" },
      { name: "Rocket, radicchio, pomegranate, orange & mustard vinaigrette", price: "14", tags: "GF DF" },
      { name: "Roasted pumpkin, Greek yogurt, sunflower seeds, tahini", price: "18", tags: "GF DFO" },
    ],
  },
  {
    name: "Sweet",
    items: [
      { name: "Tiramisu, pistachio, espresso, amaretto crumb", price: "16" },
      { name: "Ranys' flan, brazilian pudding, dulce de leche, white chocolate", price: "11ea", tags: "GF" },
      { name: "Mousse au chocolat, condensed milk, chocolate flakes", desc: "Served table side.", price: "14", tags: "GF" },
    ],
  },
];

const drinks: { name: string; intro?: string; items: Item[] }[] = [
  {
    name: "Signature Cocktails",
    items: [
      { name: "Summer Thyme Spritz", desc: "Latitude 16 Gin, Limoncello, St Germain, Kaffir & Thyme Syrup, Prosecco.", price: "18" },
      { name: "Little Gremlin", desc: "Hickson House Peach Gin, Paraiso Lychee Liqueur, Amaretto, Cranberry.", price: "20" },
      { name: "Native Ginger", desc: "Tromba Blanco Tequila, Amaro Montenegro, Mezcal, Ginger, Honey.", price: "21" },
      { name: "Rye Rebel", desc: "Bulleit Rye, Applejack, Pomegranate, Lemon Juice.", price: "22" },
      { name: "Sail Away", desc: "Tromba Reposado, Clarified Cinnamon & Grapefruit, Coconut Water.", price: "24" },
      { name: "Princess Peach", desc: "23rd St Vodka, Peach Liquor, Clarified Peach & Coconut Puree, Lemon.", price: "24" },
      { name: "The Marg", desc: "House Infused Tequila, Cointreau, Lime, Agave. Ask for our current range.", price: "32" },
    ],
  },
  {
    name: "Beers, Bottles & Cans",
    items: [
      { name: "Avalon Brewery Pale Ale", desc: "4.5% — Avalon Beach, NSW. On tap.", price: "10" },
      { name: "Avalon Brewery Japanese Lager", desc: "4.2% — Avalon Beach, NSW. On tap.", price: "10" },
      { name: "Nomikai Japanese Style Lager", desc: "375ml, 4.6% — Melbourne, VIC.", price: "8" },
      { name: "Alla Nostra Italian Style Lager", desc: "375ml, 4.8% — Melbourne, VIC.", price: "8" },
      { name: "Peroni Red", desc: "330ml, 4.7% — Rome, Italy.", price: "10" },
      { name: "Estrella", desc: "330ml, 4.6% — Barcelona, Spain.", price: "11" },
      { name: "Hiatus Pacific Ale", desc: "375ml, <0.5% — Australia.", price: "10" },
    ],
  },
  {
    name: "Ciders & No / Low",
    items: [
      { name: "Bertie Apple Cider", desc: "375ml, 4.6% — Port Melbourne, VIC.", price: "12" },
      { name: "Napoleone Crisp Apple Cider", desc: "375ml, 4.7% — Yarra Valley, VIC.", price: "10" },
      { name: "NOOT Ginger Mule", desc: "250ml, 0% — Avalon Beach, NSW.", price: "14" },
      { name: "NOOT Watermelon Margarita", desc: "250ml, 0% — Avalon Beach, NSW.", price: "14" },
      { name: "NOOT Limoncello Spritz", desc: "250ml, 0% — Avalon Beach, NSW.", price: "14" },
      { name: "NOOT Negroni Spritz", desc: "250ml, 0% — Avalon Beach, NSW.", price: "14" },
    ],
  },
  {
    name: "Wines by the Glass",
    intro: "Bubbles, rosé & orange, white, red. A full bottle list in venue.",
    items: [
      { name: "Lunar Prosecco 2024", desc: "Tumbarumba, NSW. Bubbles.", price: "14" },
      { name: "Laurent-Perrier Brut", desc: "Champagne, FR.", price: "29" },
      { name: "Marchland & Burch Village Rosé Grenache 2024", desc: "Yarra Valley.", price: "14" },
      { name: "Momento Mori Fistful of Flowers 2024", desc: "Mt Camel, VIC. Orange.", price: "18" },
      { name: "Villa Fresca Pinot Grigio 2024", desc: "King Valley, VIC.", price: "14" },
      { name: "DeCapel 'Henry' Chardonnay 2023", desc: "Hunter Valley, NSW.", price: "16" },
      { name: "Sarrau Branu Di Gallura Vermentino 2024", desc: "Sardinia, ITA.", price: "18" },
      { name: "82 Metres Pinot Noir 2024", desc: "Yarra Valley, VIC.", price: "14" },
      { name: "Round Two 'Single Vineyard' Shiraz 2023", desc: "Barossa Valley, SA.", price: "14" },
      { name: "Padrillos Malbec 2024", desc: "Mendoza, Argentina.", price: "17" },
    ],
  },
];

function MenuColumn({ groups }: { groups: { name: string; intro?: string; items: Item[] }[] }) {
  return (
    <div className="menu-cats">
      {groups.map((cat) => (
        <div key={cat.name}>
          <div className="menu-cat-h">
            <h3>{cat.name}</h3>
            <span className="count">{cat.items.length} items</span>
          </div>
          {cat.intro && (
            <p style={{
              fontFamily: "var(--mono)",
              fontStyle: "italic",
              fontSize: 13,
              color: "var(--muted)",
              margin: "8px 0 16px",
              lineHeight: 1.55,
            }}>{cat.intro}</p>
          )}
          <div className="menu-list">
            {cat.items.map((item) => (
              <div key={item.name} className="menu-item">
                <div>
                  <p className="name">
                    {item.name}
                    {item.tags && <span className="menu-tags"> {item.tags}</span>}
                  </p>
                  {item.desc && <p className="desc">{item.desc}</p>}
                </div>
                <span className="price">${item.price}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function MenuPage() {
  return (
    <>
      <Nav />
      <PageHeader
        eyebrow="The Menu"
        title="A Mediterranean kitchen + an honest list."
        description="A sample of what we're serving. Menus shift with the season. Bookings recommended for specials and weekends."
      />

      <section className="menu-page">
        <div className="container">
          <div className="menu-banner">
            <span className="menu-banner-title">$55 2-Course Menu</span>
            <span className="menu-banner-sub">Available every day until 6pm</span>
          </div>

          <div className="menu-section-head">
            <span className="eyebrow">Food</span>
            <h2>From the kitchen.</h2>
          </div>
          <MenuColumn groups={food} />

          <div className="menu-section-head" style={{ marginTop: "clamp(56px, 7vw, 96px)" }}>
            <span className="eyebrow">Drinks</span>
            <h2>From the bar.</h2>
          </div>
          <MenuColumn groups={drinks} />

          <div className="menu-foot-note">
            <span>
              GF gluten free · DF dairy free · GFO / DFO option available. Please flag any dietaries on booking.
              A 10% surcharge applies Saturdays and Sundays, 15% on public holidays, and a 10% service charge for groups of 10+.
            </span>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-tan"
              >
                Book a Table
              </a>
              <a href="/bottomless" className="btn btn-dark">Bottomless</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
