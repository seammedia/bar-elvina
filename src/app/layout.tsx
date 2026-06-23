import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elvina — Avalon Beach",
  description:
    "A neighbourhood bar and kitchen on Avalon Beach. Mediterranean in feel. Inviting. Breezy. Intriguing.",
  openGraph: {
    title: "Elvina — Avalon Beach",
    description:
      "Mediterranean in feel. Inviting. Breezy. Intriguing.",
    url: "https://barelvina.com.au",
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
