export default function sitemap() {
  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const base = (process.env.NEXT_PUBLIC_SITE_URL || (productionHost ? "https://" + productionHost : "")).replace(/\/$/, "");
  if (!base) return [];
  const lastModified = new Date();
  return [
    { url: base + "/", lastModified, changeFrequency: "weekly", priority: 1 },
    { url: base + "/about", lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: base + "/privacy", lastModified, changeFrequency: "yearly", priority: 0.4 },
    { url: base + "/contact", lastModified, changeFrequency: "yearly", priority: 0.4 }
  ];
}