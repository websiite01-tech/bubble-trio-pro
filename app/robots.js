export default function robots() {
  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (productionHost ? "https://" + productionHost : null);
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"]
    },
    ...(siteUrl ? { sitemap: siteUrl.replace(/\/$/, "") + "/sitemap.xml" } : {})
  };
}