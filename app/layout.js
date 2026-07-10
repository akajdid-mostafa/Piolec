import "@css/animate.css";
import "@css/bootstrap.min.css";
import "@css/font-awesome.css";
import "@css/magnific-popup.css";
import "@css/main.css";
import "@css/meanmenu.css";
import "@css/nice-select.css";
import "@css/swiper-bundle.min.css";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { createMetadata, organizationJsonLd, SITE_URL } from "@/lib/seo";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  ...createMetadata({}),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/web-app-manifest-192x192.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/web-app-manifest-192x192.png"
        />
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
        <JsonLd data={organizationJsonLd} />
        {children}
      </body>
    </html>
  );
}
