import type { Metadata } from "next";
import { Fraunces, Cormorant_Garamond, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bar Elvina — Avalon Beach",
  description:
    "A neighbourhood bar and kitchen on Avalon Beach. Long lunches, low evenings, and a list built around the Northern Beaches.",
  openGraph: {
    title: "Bar Elvina — Avalon Beach",
    description:
      "Long lunches, low evenings, and a list built around the Northern Beaches.",
    url: "https://barelvina.com.au",
    siteName: "Bar Elvina",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${cormorant.variable} ${interTight.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
