import type { Metadata } from "next";
import { MobileActions } from "@/components/mobile-actions";
import { GoogleTag } from "@/components/google-tag";
import { MetaPixel } from "@/components/meta-pixel";
import { SitePopup } from "@/components/site-popup";
import { BUSINESS } from "@/lib/config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://elvina.com.au"),
  title: "Elvina | Avalon Beach Restaurant & Bar",
  description:
    "A coastal Mediterranean restaurant and bar in Avalon Beach on Sydney's Northern Beaches. Book dining, bottomless lunch, weddings and private events.",
  keywords: [
    "restaurant Avalon Beach",
    "Avalon Beach restaurant",
    "Northern Beaches bar",
    "bottomless lunch Northern Beaches",
    "wedding venue Avalon",
    "private dining Northern Beaches",
  ],
  openGraph: {
    title: "Elvina | Avalon Beach Restaurant & Bar",
    description:
      "Coastal Mediterranean dining, wine, bottomless lunches and private events in Avalon Beach.",
    url: "https://elvina.com.au",
    siteName: "Elvina",
    locale: "en_AU",
    type: "website",
  },
  // Meta domain verification for the "Elvina" business portfolio (2595833570869622), 22 Oct 2026.
  // Google: Search Console property https://elvina.com.au/ for contact@seammedia.com.au, 28 Oct 2026.
  verification: {
    google: "_8ZPSXbqmTgf_0T5U50JUoABUugnWtFSMCNHrT12BPU",
    other: { "facebook-domain-verification": "ot0nvd6cuzal6x493ffsnkxkshthqg" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const restaurantJsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: BUSINESS.name,
    url: "https://elvina.com.au",
    telephone: BUSINESS.phoneTel,
    email: BUSINESS.email,
    servesCuisine: "Coastal Mediterranean",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Level One, 50 Old Barrenjoey Rd",
      addressLocality: "Avalon Beach",
      addressRegion: "NSW",
      postalCode: "2107",
      addressCountry: "AU",
    },
    sameAs: [BUSINESS.instagram],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <MobileActions />
        <GoogleTag />
        <MetaPixel />
        <SitePopup />
      </body>
    </html>
  );
}
