import type { MetadataRoute } from "next";

const locales = ["en", "pt", "es", "uk"];
const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://render-strategies.emersonbraun.dev");

// Static routes for each locale
const staticRoutes = [
  "",
  "csr",
  "ssr",
  "ssg",
  "isr",
  "rsc",
  "streaming",
  "ppr",
  "comparison",
];

// Dynamic SSG routes
const ssgIds = ["1", "2", "3"];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  // Generate routes for each locale
  for (const locale of locales) {
    // Add static routes
    for (const route of staticRoutes) {
      const path = route ? `/${locale}/${route}` : `/${locale}`;
      routes.push({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency:
          route === ""
            ? "daily"
            : route === "comparison"
              ? "weekly"
              : "monthly",
        priority:
          route === ""
            ? 1.0
            : route === "comparison"
              ? 0.9
              : route === "ssg"
                ? 0.85
                : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [
              l,
              `${baseUrl}/${l}${route ? `/${route}` : ""}`,
            ]),
          ),
        },
      });
    }

    // Add dynamic SSG routes
    for (const id of ssgIds) {
      routes.push({
        url: `${baseUrl}/${locale}/ssg/${id}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}/ssg/${id}`]),
          ),
        },
      });
    }
  }

  return routes;
}
