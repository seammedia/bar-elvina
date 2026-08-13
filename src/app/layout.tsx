import type { Metadata } from "next";
import { MobileActions } from "@/components/mobile-actions";
import { BUSINESS } from "@/lib/config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://elvina.com.au"),
  title: "Elvina | Avalon Beach Restaurant & Wine Bar",
  description:
    "A coastal Mediterranean restaurant and wine bar in Avalon Beach on Sydney's Northern Beaches. Book dining, bottomless lunch, weddings and private events.",
  keywords: [
    "restaurant Avalon Beach",
    "Avalon Beach restaurant",
    "Northern Beaches wine bar",
    "bottomless lunch Northern Beaches",
    "wedding venue Avalon",
    "private dining Northern Beaches",
  ],
  openGraph: {
    title: "Elvina | Avalon Beach Restaurant & Wine Bar",
    description:
      "Coastal Mediterranean dining, wine, bottomless lunches and private events in Avalon Beach.",
    url: "https://elvina.com.au",
    siteName: "Elvina",
    locale: "en_AU",
    type: "website",
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
      </body>
    </html>
  );
}
