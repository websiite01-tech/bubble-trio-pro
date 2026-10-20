import { siteConfig } from "./site-config";

export default function robots() {
  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || siteConfig.siteUrl || (productionHost ? "https://" + productionHost : "")).replace(/\/$/, "");
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"]
    },
    ...(siteUrl ? { sitemap: siteUrl + "/sitemap.xml" } : {})
  };
}