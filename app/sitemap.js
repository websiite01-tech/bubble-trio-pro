export default function sitemap() {
  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const base = (process.env.NEXT_PUBLIC_SITE_URL || (productionHost ? "https://" + productionHost : "https://bubble-trio-pro.vercel.app")).replace(/\/$/, "");
  if (!base) return [];
  const lastModified = new Date();
  return [
    { url: base + "/", lastModified, changeFrequency: "weekly", priority: 1 },
    { url: base + "/about", lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: base + "/privacy", lastModified, changeFrequency: "yearly", priority: 0.4 },
    { url: base + "/contact", lastModified, changeFrequency: "yearly", priority: 0.4 },
    { url: base + "/cookie-policy", lastModified, changeFrequency: "yearly", priority: 0.4 },
    { url: base + "/terms", lastModified, changeFrequency: "yearly", priority: 0.4 },
    { url: base + "/advertising-disclosure", lastModified, changeFrequency: "yearly", priority: 0.4 },
    { url: base + "/content-standards", lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: base + "/disclaimer", lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: base + "/accessibility", lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: base + "/corrections", lastModified, changeFrequency: "yearly", priority: 0.3 }
  ];
}