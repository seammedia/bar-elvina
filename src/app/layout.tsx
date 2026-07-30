import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://elvina.com.au"),
  title: "Elvina — Avalon Village",
  description:
    "A neighbourhood kitchen and bar in Avalon Village. Coastal Mediterranean in feel. Inviting. Breezy. Sun-soaked.",
  openGraph: {
    title: "Elvina — Avalon Village",
    description:
      "Coastal Mediterranean in feel. Inviting. Breezy. Sun-soaked.",
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
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
