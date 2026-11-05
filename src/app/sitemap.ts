import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { path: "", priority: 1 },
    { path: "/work", priority: 0.8 },
    { path: "/pricing", priority: 0.8 },
    { path: "/services", priority: 0.8 },
    { path: "/services/linkedin-headshots", priority: 0.7 },
    { path: "/services/executive-portraits", priority: 0.7 },
    { path: "/services/team-headshots", priority: 0.7 },
    { path: "/about", priority: 0.6 },
    { path: "/book", priority: 0.9 },
  ].map((p) => ({ url: `${SITE_URL}${p.path}`, changeFrequency: "monthly", priority: p.priority }));
}
