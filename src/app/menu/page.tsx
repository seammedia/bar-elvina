import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Menu — Bar Elvina",
  description:
    "Bar Elvina's menu, from the wine list to the kitchen. Updated with the season.",
};

type Item = { name: string; desc?: string; price: string };

const categories: { name: string; priceLabel?: string; items: Item[] }[] = [
  {
    name: "Snacks",
    items: [
      { name: "Olives", desc: "House-marinated.", price: "9" },
      { name: "Sourdough + cultured butter", price: "12" },
      { name: "Fries, smoked paprika salt", price: "14" },
      { name: "Pickled mussels, lemon", price: "18" },
    ],
  },
  {
    name: "Small Plates",
    items: [
      { name: "Kingfish crudo, finger lime, olive oil", price: "26" },
      { name: "Burrata, peach, basil, balsamic", price: "24" },
      { name: "Crispy chicken, hot honey, pickles", price: "22" },
      { name: "Roasted carrots, miso butter, dukkah", price: "19" },
    ],
  },
  {
    name: "Larger",
    items: [
      { name: "Market fish, brown butter, capers", price: "42" },
      { name: "Lamb shoulder, smoked yoghurt, mint", desc: "For 2.", price: "84" },
      { name: "Spaghetti vongole, white wine, parsley", price: "34" },
      { name: "Steak frites, peppercorn jus", price: "44" },
    ],
  },
  {
    name: "Sides",
    items: [
      { name: "Heirloom tomatoes, shallot vinaigrette", price: "14" },
      { name: "Charred greens, anchovy, lemon", price: "15" },
      { name: "Smashed potatoes, garlic aioli", price: "14" },
    ],
  },
  {
    name: "Wine by the Glass",
    priceLabel: "Gls / Btl",
    items: [
      { name: "Sparkling — Tasmanian méthode traditionnelle", price: "14 / 78" },
      { name: "White — Hunter semillon", price: "13 / 65" },
      { name: "Skin contact — Adelaide Hills", price: "16 / 84" },
      { name: "Red — Yarra pinot noir", price: "15 / 78" },
      { name: "Red — Barossa shiraz", price: "16 / 84" },
    ],
  },
  {
    name: "Cocktails",
    items: [
      { name: "Elvina Spritz", desc: "Aperol, prosecco, soda, orange.", price: "20" },
      { name: "Avalon Negroni", desc: "Strange Love gin, Campari, vermouth.", price: "22" },
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
        description="A sample of what we're serving. Menus shift with the season and what the boats bring in. Bookings recommended for weekends."
      />
      <section className="menu-page">
        <div className="container">
          <div className="menu-cats">
            {categories.map((cat) => (
              <div key={cat.name}>
                <div className="menu-cat-h">
                  <h3>{cat.name}</h3>
                  <span className="count">
                    {cat.priceLabel ?? `${cat.items.length} items`}
                  </span>
                </div>
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
            <span>Vegetarian and gluten-free options available. Please flag any dietaries on booking.</span>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="/contact" className="btn btn-tan">Book a Table</a>
              <a href="/bottomless-lunch" className="btn btn-dark">Bottomless Lunch</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
