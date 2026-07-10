export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.piolec.ma";

export const SITE_NAME = "PIOLEC";

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/piolec/",
  linkedin: "https://ma.linkedin.com/company/timnstec",
};

export const DEFAULT_KEYWORDS = [
  "électricité Maroc",
  "installation électrique CFA CFO",
  "automatisme industriel",
  "systèmes de sécurité",
  "pré-câblage informatique",
  "maintenance électrique",
  "électricien Casablanca",
  "électricien Agadir",
  "PIOLEC",
];

const DEFAULT_DESCRIPTION =
  "PIOLEC, expert en électricité CFA/CFO, automatisme, réseaux informatiques et systèmes de sécurité au Maroc. Installations sécurisées, maintenance et SAV partout au Maroc.";

const DEFAULT_OG_IMAGE = "/assets/img/about/about3.jpg";

export function createMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "",
  keywords = [],
  noIndex = false,
  image = DEFAULT_OG_IMAGE,
}) {
  const pageTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} - Installation & Maintenance Électrique CFA / CFO | Maroc`;
  const url = `${SITE_URL}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return {
    title: pageTitle,
    description,
    keywords: [...DEFAULT_KEYWORDS, ...keywords],
    alternates: {
      canonical: url,
      languages: {
        fr: url,
      },
    },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "fr_MA",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [imageUrl],
    },
    ...(noIndex && {
      robots: { index: false, follow: false },
    }),
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ElectricalContractor",
  name: "PIOLEC",
  url: SITE_URL,
  inLanguage: "fr-FR",
  logo: `${SITE_URL}/assets/img/logo/black-logo.svg`,
  image: `${SITE_URL}/assets/img/about/about3.jpg`,
  description: DEFAULT_DESCRIPTION,
  email: "piolec21@outlook.com",
  telephone: ["+212662241871", "+212666491605"],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "61 AV. Lalla Yacout, N°39, 1er étage centre riad",
      addressLocality: "Casablanca",
      addressCountry: "MA",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Agadir",
      addressCountry: "MA",
    },
  ],
  areaServed: {
    "@type": "Country",
    name: "Maroc",
  },
  sameAs: [SOCIAL_LINKS.facebook, SOCIAL_LINKS.linkedin],
};

export const STATIC_ROUTES = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/A_propos", priority: 0.8, changeFrequency: "monthly" },
  { path: "/service", priority: 0.9, changeFrequency: "monthly" },
  { path: "/Projets", priority: 0.8, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  {
    path: "/etude-et-installation-electrique-complete",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/systemes-de-securite-installation",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/reseaux-informatiques-installations",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/maintenance-et-service-apres-vente",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  { path: "/team", priority: 0.5, changeFrequency: "monthly" },
];
