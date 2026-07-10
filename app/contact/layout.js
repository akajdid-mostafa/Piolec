import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contactez-nous",
  description:
    "Contactez PIOLEC pour vos projets d'électricité, automatisme et systèmes de sécurité. Siège à Casablanca, succursale à Agadir. Devis gratuit et conseil personnalisé.",
  path: "/contact",
  keywords: [
    "contact électricien Maroc",
    "devis installation électrique",
    "PIOLEC Casablanca",
    "PIOLEC Agadir",
  ],
});

export default function ContactLayout({ children }) {
  return children;
}
