import { projects } from "@/app/Projets/data";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const project = projects.find((p) => p.id === parseInt(params.id));

  if (!project) {
    return createMetadata({
      title: "Projet introuvable",
      path: `/Projets/${params.id}`,
      noIndex: true,
    });
  }

  return createMetadata({
    title: project.title.trim(),
    description: project.details.content,
    path: `/Projets/${params.id}`,
    keywords: [
      project.details.information.location,
      "projet électrique Maroc",
    ],
    image: project.details.images?.[0],
  });
}

export default function ProjectLayout({ children }) {
  return children;
}
