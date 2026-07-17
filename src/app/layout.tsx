import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://elvina.com.au"),
  title: "Elvina — Avalon Beach",
  description:
    "A neighbourhood kitchen and bar in Avalon Beach. Coastal Mediterranean in feel. Inviting. Breezy. Intriguing.",
  openGraph: {
    title: "Elvina — Avalon Beach",
    description:
      "Coastal Mediterranean in feel. Inviting. Breezy. Intriguing.",
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
