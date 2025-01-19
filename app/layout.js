import "@css/animate.css";
import "@css/bootstrap.min.css";
import "@css/font-awesome.css";
import "@css/magnific-popup.css";
import "@css/main.css";
import "@css/meanmenu.css";
import "@css/nice-select.css";
import "@css/swiper-bundle.min.css";
import "./globals.css";


export const metadata = {
  title: "PIOLEC - Votre Partenaire de Confiance en Électricité, Informatique et Systèmes de Sécurité",
  description:
    "PIOLEC est spécialisé dans les installations électriques, les réseaux informatiques, l'automatisation et les systèmes de sécurité. Nous fournissons des solutions innovantes pour les projets résidentiels, commerciaux et industriels.",
  keywords: [
    "électricité",
    "solutions informatiques",
    "systèmes d'automatisation",
    "systèmes de sécurité",
    "installations électriques",
    "énergie renouvelable",
    "Maroc",
  ],
  author: "PIOLEC",
  openGraph: {
    title: "PIOLEC - Votre Partenaire de Confiance en Électricité, Informatique et Systèmes de Sécurité",
    description:
      "PIOLEC est spécialisé dans les installations électriques, les réseaux informatiques, l'automatisation et les systèmes de sécurité. Nous fournissons des solutions innovantes pour les projets résidentiels, commerciaux et industriels.",
    url: "https://www.piolec.com",
    siteName: "PIOLEC",
    images: [
      {
        url: "https://www.piolec.com/og-image.jpg", // Remplacez par l'URL de votre image Open Graph
        width: 1200,
        height: 630,
        alt: "PIOLEC - Solutions Innovantes en Électricité, Informatique et Sécurité",
      },
    ],
    locale: "fr_FR", // Langue et région en français
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PIOLEC - Votre Partenaire de Confiance en Électricité, Informatique et Systèmes de Sécurité",
    description:
      "PIOLEC est spécialisé dans les installations électriques, les réseaux informatiques, l'automatisation et les systèmes de sécurité. Nous fournissons des solutions innovantes pour les projets résidentiels, commerciaux et industriels.",
    images: ["https://www.piolec.com/twitter-image.jpg"], // Remplacez par l'URL de votre image Twitter
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="apple-mobile-web-app-title" content="Piolec" />
      <body>
      {children}
      </body>
    </html>
  );
}
