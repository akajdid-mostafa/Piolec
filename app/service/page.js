import Breadcrumb from "@/components/Breadcrumb";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import GrowBusiness from "@/components/GrowBusiness";
import Services, { Service2 } from "@/components/Services";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import Servicee from "@/components/servicee";
import WorkingProcess from "@/components/WorkingProcess";



const electricite_automatisme  = {
  id:"electricite_automatisme",
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
  id:"contrôle_dacces_surveillance",
  title: "Contrôle d'accès & Surveillance ",
  description: "Chez PIOLEC, nous mettons notre expertise à votre service pour des installations électriques sûres, efficaces et conformes aux normes. Que ce soit pour un projet résidentiel, industriel ou commercial, nous vous accompagnons de l'étude à la réalisation, en garantissant qualité et fiabilité à chaque étape.",
  images: [
    { src: "/assets/img/about/0101.png", alt: "Image 1", width: 300, height: 200 },
    { src: "/assets/img/about/0102.png", alt: "Image 2", width: 300, height: 200 },
    { src: "/assets/img/about/0103.png", alt: "Image 3", width: 300, height: 400 },
  ],
  contentFirst: false, // Set to false to display images first
  showLink: false,
  linkText: "En savoir plus sur nous",
  linkHref: "about",
  serviceSectionClass: false,
};
const detection_incendie_intrusion  = {
  id:"detection_incendie_intrusion",
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
  id:"precablage_informatique",
  title: "Precablage informatique ",
  description: "Chez PIOLEC, nous mettons notre expertise à votre service pour des installations électriques sûres, efficaces et conformes aux normes. Que ce soit pour un projet résidentiel, industriel ou commercial, nous vous accompagnons de l'étude à la réalisation, en garantissant qualité et fiabilité à chaque étape.",
  images: [
    { src: "/assets/img/about/0101.png", alt: "Image 1", width: 300, height: 200 },
    { src: "/assets/img/about/0102.png", alt: "Image 2", width: 300, height: 200 },
    { src: "/assets/img/about/0103.png", alt: "Image 3", width: 300, height: 400 },
  ],
  contentFirst: false, // Set to false to display images first
  showLink: false,
  linkText: "En savoir plus sur nous",
  linkHref: "about",
  serviceSectionClass: false,
};
const energies_renouvelables_travaux_divers = {
  id:"energies_renouvelables_travaux_divers",
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
  id:"maintenance_sav",
  title: "Maintenance & S.A.V",
  description: "Chez PIOLEC, nous mettons notre expertise à votre service pour des installations électriques sûres, efficaces et conformes aux normes. Que ce soit pour un projet résidentiel, industriel ou commercial, nous vous accompagnons de l'étude à la réalisation, en garantissant qualité et fiabilité à chaque étape.",
  images: [
    { src: "/assets/img/about/0101.png", alt: "Image 1", width: 300, height: 200 },
    { src: "/assets/img/about/0102.png", alt: "Image 2", width: 300, height: 200 },
    { src: "/assets/img/about/0103.png", alt: "Image 3", width: 300, height: 400 },
  ],
  contentFirst: false, // Set to false to display images first
  showLink: false,
  linkText: "En savoir plus sur nous",
  linkHref: "about",
  serviceSectionClass: false,
};

const travaux_divers = {
  id:"travaux-divers",
  title: "Travaux divers",
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
      <Servicee {...travaux_divers} />

      <WorkingProcess
        title1="Découverte et analyse"
        desc1="Nous analysons vos besoins pour créer une solution sur mesure, adaptée à vos objectifs et contraintes."
        title2="Conception et planification"
        desc2=" Nos experts conçoivent des plans détaillés et des schémas techniques conformes aux normes pour une mise en œuvre optimale."
        title3="Installation et exécution"
        desc3="Nous installons vos réseaux informatiques avec des matériaux de qualité et des techniques éprouvées, garantissant fiabilité et performance."
        title4="Tests et remise des clés"
        desc4="Nous testons rigoureusement votre réseau avant la livraison et vous fournissons un support technique pour une utilisation optimale."
      />

      <Faq />

      <Cta
        sectionPadding= "true"
        h2="Prêt à moderniser vos installations électriques ?"
        p="Découvrez des solutions innovantes et fiables pour une performance énergétique optimale et une gestion simplifiée de vos systèmes électriques."
       />
      
    </NextLayout>
  );
};
export default page;
