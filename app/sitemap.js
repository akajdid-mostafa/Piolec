import { projects } from "@/app/Projets/data";
import { SITE_URL, STATIC_ROUTES } from "@/lib/seo";

export default function sitemap() {
  const staticPages = STATIC_ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  const projectPages = projects.map((project) => ({
    url: `${SITE_URL}/Projets/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages];
}
