import Breadcrumb from "@/components/Breadcrumb";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import GrowBusiness from "@/components/GrowBusiness";
import Services, { Service2 } from "@/components/Services";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import Servicee from "@/components/servicee";



const electricite_automatisme  = {
  title: "Electricité & Automatisme",
  description: "Chez PIOLEC, nous mettons notre expertise à votre service pour des installations électriques sûres, efficaces et conformes aux normes. Que ce soit pour un projet résidentiel, industriel ou commercial, nous vous accompagnons de l'étude à la réalisation, en garantissant qualité et fiabilité à chaque étape.",
  images: [
    { src: "/assets/img/about/0101.png", alt: "Image 1", width: 300, height: 200 },
    { src: "/assets/img/about/0102.png", alt: "Image 2", width: 300, height: 200 },
    { src: "/assets/img/about/0103.png", alt: "Image 3", width: 300, height: 400 },
  ],
  contentFirst: true, // Set to false to display images first
  showLink: false,
  linkText: "En savoir plus sur nous",
  linkHref: "about",
  serviceSectionClass: true,
};
const contrôle_dacces_surveillance = {
  title: "Contrôle d'accès & Surveillance ",
  description: "Chez PIOLEC, nous mettons notre expertise à votre service pour des installations électriques sûres, efficaces et conformes aux normes. Que ce soit pour un projet résidentiel, industriel ou commercial, nous vous accompagnons de l'étude à la réalisation, en garantissant qualité et fiabilité à chaque étape.",
  images: [
    { src: "/assets/img/about/0101.png", alt: "Image 1", width: 300, height: 200 },
    { src: "/assets/img/about/0102.png", alt: "Image 2", width: 300, height: 200 },
    { src: "/assets/img/about/0103.png", alt: "Image 3", width: 300, height: 400 },
  ],
  contentFirst: true, // Set to false to display images first
  showLink: false,
  linkText: "En savoir plus sur nous",
  linkHref: "about",
  serviceSectionClass: false,
};
const detection_incendie_intrusion  = {
  title: "Détection incendie & intrusion ",
  description: "Chez PIOLEC, nous mettons notre expertise à votre service pour des installations électriques sûres, efficaces et conformes aux normes. Que ce soit pour un projet résidentiel, industriel ou commercial, nous vous accompagnons de l'étude à la réalisation, en garantissant qualité et fiabilité à chaque étape.",
  images: [
    { src: "/assets/img/about/0101.png", alt: "Image 1", width: 300, height: 200 },
    { src: "/assets/img/about/0102.png", alt: "Image 2", width: 300, height: 200 },
    { src: "/assets/img/about/0103.png", alt: "Image 3", width: 300, height: 400 },
  ],
  contentFirst: true, // Set to false to display images first
  showLink: false,
  linkText: "En savoir plus sur nous",
  linkHref: "about",
  serviceSectionClass: true,
};
const precablage_informatique  = {
  title: "Precablage informatique ",
  description: "Chez PIOLEC, nous mettons notre expertise à votre service pour des installations électriques sûres, efficaces et conformes aux normes. Que ce soit pour un projet résidentiel, industriel ou commercial, nous vous accompagnons de l'étude à la réalisation, en garantissant qualité et fiabilité à chaque étape.",
  images: [
    { src: "/assets/img/about/0101.png", alt: "Image 1", width: 300, height: 200 },
    { src: "/assets/img/about/0102.png", alt: "Image 2", width: 300, height: 200 },
    { src: "/assets/img/about/0103.png", alt: "Image 3", width: 300, height: 400 },
  ],
  contentFirst: true, // Set to false to display images first
  showLink: false,
  linkText: "En savoir plus sur nous",
  linkHref: "about",
  serviceSectionClass: false,
};
const energies_renouvelables_travaux_divers = {
  title: "Energies renouvelables & Travaux divers ",
  description: "Chez PIOLEC, nous mettons notre expertise à votre service pour des installations électriques sûres, efficaces et conformes aux normes. Que ce soit pour un projet résidentiel, industriel ou commercial, nous vous accompagnons de l'étude à la réalisation, en garantissant qualité et fiabilité à chaque étape.",
  images: [
    { src: "/assets/img/about/0101.png", alt: "Image 1", width: 300, height: 200 },
    { src: "/assets/img/about/0102.png", alt: "Image 2", width: 300, height: 200 },
    { src: "/assets/img/about/0103.png", alt: "Image 3", width: 300, height: 400 },
  ],
  contentFirst: true, // Set to false to display images first
  showLink: false,
  linkText: "En savoir plus sur nous",
  linkHref: "about",
  serviceSectionClass: true,
};
const maintenance_sav = {
  title: "Maintenance & S.A.V",
  description: "Chez PIOLEC, nous mettons notre expertise à votre service pour des installations électriques sûres, efficaces et conformes aux normes. Que ce soit pour un projet résidentiel, industriel ou commercial, nous vous accompagnons de l'étude à la réalisation, en garantissant qualité et fiabilité à chaque étape.",
  images: [
    { src: "/assets/img/about/0101.png", alt: "Image 1", width: 300, height: 200 },
    { src: "/assets/img/about/0102.png", alt: "Image 2", width: 300, height: 200 },
    { src: "/assets/img/about/0103.png", alt: "Image 3", width: 300, height: 400 },
  ],
  contentFirst: true, // Set to false to display images first
  showLink: false,
  linkText: "En savoir plus sur nous",
  linkHref: "about",
  serviceSectionClass: false,
};



const page = () => {

  



  return (
    <NextLayout>
      <Breadcrumb pageName="Our Services" pageTitle="Nos Services" />
      <GrowBusiness paddingTop={8} />
      <Servicee {...electricite_automatisme} />
      <Servicee {...contrôle_dacces_surveillance} />
      <Servicee {...detection_incendie_intrusion} />
      <Servicee {...precablage_informatique} />
      <Servicee {...energies_renouvelables_travaux_divers} />
      <Servicee {...maintenance_sav} />
      <Cta
        sectionPadding= "true"
        h2="Prêt à moderniser vos installations électriques ?"
        p="Découvrez des solutions innovantes et fiables pour une performance énergétique optimale et une gestion simplifiée de vos systèmes électriques."
       />
      <Faq />
    </NextLayout>
  );
};
export default page;
