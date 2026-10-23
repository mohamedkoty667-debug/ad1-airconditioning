/*
  The live website address, used for Google (sitemap) and link previews.
  Set NEXT_PUBLIC_SITE_URL once you have a domain, e.g. https://www.ad1airconditioning.co.uk
  On Vercel it falls back to your project's production address automatically.
*/
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000")
).replace(/\/$/, "");
