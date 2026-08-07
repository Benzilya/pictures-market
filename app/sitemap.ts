import type { MetadataRoute } from "next";
import { artworks } from "../data/artworks";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.com";
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/collection`, changeFrequency: "weekly", priority: 0.9 },
    ...artworks.map((artwork) => ({
      url: `${base}/artwork/${artwork.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
