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
  title: "PIOLEC - Installation & Maintenance Electrique CFA / CFO Travaux Divers",
  description:
    "PIOLEC, expert en électricité, automatisme et technologies innovantes. Installations sécurisées, réseaux performants. Engagement client, respect des délais et normes pour votre avantage concurrentiel.",
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
    title: "PIOLEC - Installation & Maintenance Electrique CFA / CFO Travaux Divers",
    description:
    "PIOLEC, expert en électricité, automatisme et technologies innovantes. Installations sécurisées, réseaux performants. Engagement client, respect des délais et normes pour votre avantage concurrentiel.",
    url: "https://www.piolec.ma",
    siteName: "PIOLEC",
    images: [
      {
        url: "https://www.piolec.ma/assets/img/logo/black-logo.svg", // Remplacez par l'URL de votre image Open Graph
        width: 1200,
        height: 630,
        alt: "PIOLEC - Installation & Maintenance Electrique CFA / CFO Travaux Divers",
      },
    ],
    locale: "fr_FR", // Langue et région en français
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PIOLEC - Installation & Maintenance Electrique CFA / CFO Travaux Divers",
    description:
    "PIOLEC, expert en électricité, automatisme et technologies innovantes. Installations sécurisées, réseaux performants. Engagement client, respect des délais et normes pour votre avantage concurrentiel.",
    images: ["https://www.piolec.com/twitter-image.jpg"], // Remplacez par l'URL de votre image Twitter
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/web-app-manifest-192x192.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/web-app-manifest-192x192.png" />
        <link rel="shortcut icon" href="/web-app-manifest-192x192.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/web-app-manifest-192x192.png"
        />
        <meta name="apple-mobile-web-app-title" content="Piolec" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
      {children}
      </body>
    </html>
  );
}
