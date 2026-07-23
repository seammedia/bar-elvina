import type { MetadataRoute } from "next";

const BASE = "https://elvina.com.au";
const UPDATED = new Date("2026-07-23");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, lastModified: UPDATED, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/menu`, lastModified: UPDATED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/whats-on`, lastModified: UPDATED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/functions`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/bottomless`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/about`, lastModified: UPDATED, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: UPDATED, changeFrequency: "yearly", priority: 0.6 },
  ];
}
