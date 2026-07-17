import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Old WordPress site URLs (pre July 2026) still in Google's index -
    // send each to its closest new page so stale search results land well.
    return [
      { source: "/happenings", destination: "/whats-on", permanent: true },
      { source: "/parties-groups", destination: "/functions", permanent: true },
      { source: "/catering", destination: "/functions", permanent: true },
      { source: "/a-mediterranean-retreat", destination: "/about", permanent: true },
      { source: "/our-story", destination: "/about", permanent: true },
      { source: "/festive-trading-hours", destination: "/contact", permanent: true },
      { source: "/poker-night-competition", destination: "/whats-on", permanent: true },
      { source: "/tasting-australia-degustation", destination: "/menu", permanent: true },
      { source: "/bottomless-lunch", destination: "/bottomless", permanent: true },
      // Old uploaded menu PDFs / posters (e.g. Elvina-Menu.pdf sitelink)
      { source: "/wp-content/:path*", destination: "/menu", permanent: true },
    ];
  },
};

export default nextConfig;
