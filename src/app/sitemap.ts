import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://youartsquads.netlify.app";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/activites`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/reservation`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/galerie`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
  ];
}
