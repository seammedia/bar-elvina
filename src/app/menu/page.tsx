import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Menu — Elvina",
  description:
    "Coastal-European plates and a wine list organised by region. Always evolving with the season.",
};

type Item = { name: string; desc?: string; price: string };

const categories: { name: string; intro?: string; items: Item[] }[] = [
  {
    name: "Snacks",
    items: [
      { name: "House olives", price: "9" },
      { name: "Warm sourdough, cultured butter", price: "12" },
      { name: "Fries, smoked paprika salt", price: "14" },
      { name: "Anchovies on toast, lemon, parsley", price: "19" },
    ],
  },
  {
    name: "Small Plates",
    items: [
      { name: "Kingfish crudo, finger lime, olive oil", price: "26" },
      { name: "Burrata, peach, basil", price: "24" },
      { name: "Pan con tomate, jamón", price: "22" },
      { name: "Charred octopus, romesco, lemon", price: "28" },
      { name: "Roasted carrots, miso butter, dukkah", price: "19" },
    ],
  },
  {
    name: "Larger",
    items: [
      { name: "Market fish, brown butter, capers", price: "42" },
      { name: "Lamb shoulder, smoked yoghurt, mint", desc: "For two.", price: "84" },
      { name: "Spaghetti vongole, white wine, parsley", price: "34" },
      { name: "Bistecca, peppercorn jus", price: "44" },
      { name: "Sunday chook, sides, all of it", desc: "Sundays only.", price: "38" },
    ],
  },
  {
    name: "Balearic Islands",
    intro: "Talking Ibiza, Mallorca to name a few. The Balearic climate is arid and dry, notable for natural varietals.",
    items: [
      { name: "Cape Mental Chardonnay 2019", desc: "Margaret River, WA.", price: "19 / 78" },
      { name: "Gómez Cruzado, Rioja 2021", desc: "Madrid, SPN.", price: "18 / 72" },
      { name: "By Farr Pinot Gris 2020", desc: "Geelong, VIC.", price: "20 / 84" },
      { name: "Mas Coutelou Chablis 2019", desc: "Corbières, FRA.", price: "21 / 86" },
    ],
  },
  {
    name: "Region No. 2 {Spain}",
    intro: "A nod to the coast that taught us to drink slow.",
    items: [
      { name: "Albariño, Rias Baixas 2022", desc: "Galicia, SPN.", price: "16 / 68" },
      { name: "Verdejo, Rueda 2022", desc: "Castilla y León, SPN.", price: "15 / 62" },
      { name: "Tempranillo, Ribera del Duero 2020", desc: "Ribera, SPN.", price: "18 / 76" },
    ],
  },
  {
    name: "Cocktails",
    items: [
      { name: "Elvina Spritz", desc: "Aperol, prosecco, soda, orange.", price: "20" },
      { name: "Avalon Negroni", desc: "Local gin, Campari, vermouth.", price: "22" },
      { name: "Espresso Martini", desc: "Reserve vodka, fresh espresso, mr black.", price: "22" },
      { name: "Paloma", desc: "Blanco tequila, ruby grapefruit, lime, salt.", price: "20" },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      <Nav />
      <PageHeader
        eyebrow="The Menu"
        title="A coastal kitchen + an honest list."
        description="A sample of what we're serving. Menus shift with the season. Bookings recommended for weekends."
      />
      <section className="menu-page">
        <div className="container">
          <div className="menu-cats">
            {categories.map((cat) => (
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
                        <p className="name">{item.name}</p>
                        {item.desc && <p className="desc">{item.desc}</p>}
                      </div>
                      <span className="price">${item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="menu-foot-note">
            <span>Vegetarian and gluten-free options available. Flag any dietaries on booking.</span>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="/contact" className="btn btn-tan">Book a Table</a>
              <a href="/bottomless-lunch" className="btn btn-dark">Bottomless Menu</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
