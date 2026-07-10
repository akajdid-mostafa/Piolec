import { SITE_URL } from "@/lib/seo";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/project-details/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
