import Breadcrumb from "@/components/Breadcrumb";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import GrowBusiness from "@/components/GrowBusiness";
import Services, { Service2 } from "@/components/Services";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import Servicee from "@/components/servicee";
import WorkingProcess from "@/components/WorkingProcess";
import Steps from "@/components/steps";

const electricite_automatisme = {
  id: "electricite_automatisme",
  title: "Electricité & Automatisme",
  description:
    "Nous excellons dans la conception, l’installation et la maintenance de systèmes électriques et d’automatisation, répondant aux besoins industriels, commerciaux et résidentiels. Nos services couvrent l’étude, le dimensionnement et la mise en service de vos installations, la préparation d’armoires électriques, l’automatisation des processus industriels, ainsi que la mise en œuvre de solutions de variation de vitesse et de démarrage spécifique.",
  
    description2:
    "Nous nous engageons à respecter les normes en vigueur et à fournir des installations sûres et performantes, que ce soit pour des courants forts ou faibles. Besoin d’une alimentation de secours avec des groupes électrogènes ou des onduleurs ? Ou d’une solution sur mesure pour vos équipements électriques ? PIOLEC est votre partenaire de confiance pour des projets électriques aboutis.",
    images: [
    {
      src: "/assets/img/service/service1/02.png",
      alt: "Image 1",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/img/service/service1/03.png",
      alt: "Image 2",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/img/service/service1/01.png",
      alt: "Image 3",
      width: 300,
      height: 400,
    },
  ],
  contentFirst: true, // Set to false to display images first
  showLink: false,
  linkText: "En savoir plus sur nous",
  linkHref: "about",
  serviceSectionClass: true,
};
const contrôle_dacces_surveillance = {
  id: "contrôle_dacces_surveillance",
  title: "Contrôle d'accès & Surveillance ",
  description:
    "La sécurité de vos bâtiments et sites est une priorité pour PIOLEC. Nous proposons des systèmes de contrôle d’accès modernes et performants, incluant des lecteurs biométriques, des badges et des claviers à code, pour gérer les accès physiques de manière sécurisée.",
  
    description2:
    "En complément, nous installons également des systèmes de vidéosurveillance avec des caméras IP et analogiques, offrant une surveillance continue et en temps réel de vos espaces. Nos solutions de gestion centralisée vous permettent de superviser et de contrôler les accès de vos installations de manière intuitive et efficace. Avec PIOLEC, vous pouvez protéger vos biens et vos personnes en toute confiance.",
    images: [
    {
      src: "/assets/img/service/service2/01.png",
      alt: "Image 1",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/img/service/service2/02.png",
      alt: "Image 2",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/img/service/service2/03.png",
      alt: "Image 3",
      width: 300,
      height: 400,
    },
  ],
  contentFirst: false, // Set to false to display images first
  showLink: false,
  linkText: "En savoir plus sur nous",
  linkHref: "about",
  serviceSectionClass: false,
};
const detection_incendie_intrusion = {
  id: "detection_incendie_intrusion",
  title: "Détection incendie & intrusion ",
  description:
    "Chez PIOLEC, la protection de vos locaux est une priorité absolue. Nos systèmes de détection d'incendie de haute qualité incluent des centrales d'alarme, des détecteurs de fumée et des détecteurs thermiques, ainsi que des logiciels de supervision avancés pour une gestion centralisée. Conçus pour réagir rapidement en cas d'urgence, nos systèmes vous alertent immédiatement, permettant de prendre les mesures nécessaires sans délai et de minimiser les risques.",
  description2:
  "En parallèle, nous proposons des systèmes de détection d'intrusion performants et fiables, comprenant des centrales d'alarme, des capteurs de mouvement et des contacts magnétiques pour portes et fenêtres. Tous nos systèmes de sécurité incluent une étude technique approfondie et une exécution rigoureuse, jusqu'au test point par point de manière pratique et réaliste. Avec PIOLEC, vous pouvez compter sur des solutions complètes et sécurisées pour protéger vos biens et vos collaborateurs.",
  images: [
    {
      src: "/assets/img/service/service3/01.png",
      alt: "Image 1",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/img/service/service3/02.png",
      alt: "Image 2",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/img/service/service3/03.png",
      alt: "Image 3",
      width: 300,
      height: 400,
    },
  ],
  contentFirst: true, // Set to false to display images first
  showLink: false,
  linkText: "En savoir plus sur nous",
  linkHref: "about",
  serviceSectionClass: true,
};
const precablage_informatique = {
  id: "precablage_informatique",
  title: "Precablage informatique ",
  description:
    "Dans un monde de plus en plus connecté, une infrastructure réseau fiable est indispensable. Chez PIOLEC, nous proposons des services de pré-câblage informatique pour assurer une connectivité optimale et sécurisée. Nous installons des câbles RJ45 et fibre optique avec leurs accessoires de raccordement, des panneaux de brassage, des switches et des chemins de câbles pour créer des réseaux performants et évolutifs. ",
    
    description2:
    "Nos équipes prennent en charge l’installation et la configuration de vos équipements réseau, garantissant une infrastructure robuste et prête à répondre à vos besoins actuels et futurs. Avec PIOLEC, vous bénéficiez d’une connectivité fluide et sécurisée pour tous vos projets informatiques.",
    images: [
    {
      src: "/assets/img/service/service4/01.png",
      alt: "Image 1",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/img/service/service4/02.png",
      alt: "Image 2",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/img/service/service4/03.png",
      alt: "Image 3",
      width: 300,
      height: 400,
    },
  ],
  contentFirst: false, // Set to false to display images first
  showLink: false,
  linkText: "En savoir plus sur nous",
  linkHref: "about",
  serviceSectionClass: false,
};
const energies_renouvelables = {
  id: "energies_renouvelables_travaux_divers",
  title: "Energies renouvelables ",
  description:
    "Nous vous accompagnons dans la transition vers des énergies plus propres et durables. Nous proposons des solutions innovantes en énergies renouvelables pour le pompage ou l’injection, par l’installation de panneaux solaires photovoltaïques produisant de l’électricité à partir de l’énergie solaire. ",
  description2:"Nos experts vous conseillent et vous guident dans le choix des solutions les plus adaptées à vos besoins et à votre budget, vous permettant de réduire votre consommation d’énergie et votre empreinte carbone tout en réalisant des économies significatives. Avec PIOLEC, vous faites un pas vers un avenir plus durable.",
    images: [
    {
      src: "/assets/img/service/service5/01.png",
      alt: "Image 1",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/img/service/service5/02.png",
      alt: "Image 2",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/img/service/service5/03.png",
      alt: "Image 3",
      width: 300,
      height: 400,
    },
  ],
  contentFirst: true, // Set to false to display images first
  showLink: false,
  linkText: "En savoir plus sur nous",
  linkHref: "about",
  serviceSectionClass: true,
};
const maintenance_sav = {
  id: "maintenance_sav",
  title: "Maintenance & S.A.V",
  description:
    "Pour assurer la longévité et le bon fonctionnement de vos installations, PIOLEC propose des services de maintenance préventive et corrective, ainsi qu’un support après-vente réactif et professionnel.",
    description2:
    "Nos techniciens effectuent des inspections régulières pour anticiper les pannes et garantir le bon fonctionnement de vos équipements. en cas de problème, notre équipe intervient rapidement pour résoudre les dysfonctionnements et minimiser les temps d’arrêt. de plus, nous proposons un support technique continu 24h/24 pour répondre à vos questions et vous accompagner dans l’utilisation de vos installations",
  images: [
    {
      src: "/assets/img/service/service6/01.png",
      alt: "Image 1",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/img/service/service6/02.png",
      alt: "Image 2",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/img/service/service6/03.png",
      alt: "Image 3",
      width: 300,
      height: 400,
    },
  ],
  contentFirst: false, // Set to false to display images first
  showLink: false,
  linkText: "En savoir plus sur nous",
  linkHref: "about",
  serviceSectionClass: false,
};
const travaux_divers = {
  id: "travaux-divers",
  title: "Travaux divers",
  description:
    "En complément de nos services principaux, nous proposons également des travaux divers intégrés dans les projets d’électricité, tels que les travaux de génie civil, la menuiserie métallique, la peinture, et bien plus encore. Nos équipes sont capables de s'adapter et de suivre ces travaux divers pour garantir une exécution harmonieuse et cohérente.",
  images: [
    {
      src: "/assets/img/service/service7/01.png",
      alt: "Image 1",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/img/service/service7/02.png",
      alt: "Image 2",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/img/service/service7/03.png",
      alt: "Image 3",
      width: 300,
      height: 400,
    },
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
      <Breadcrumb pageName="Our Services" pageTitle="Nos Services" backgroundImage="assets/img/service/Back.png" />
      <GrowBusiness paddingTop={8} />
      <Servicee {...electricite_automatisme} />
      <Servicee {...contrôle_dacces_surveillance} />
      <Servicee {...detection_incendie_intrusion} />
      <Servicee {...precablage_informatique} />
      <Servicee {...energies_renouvelables} />
      <Servicee {...maintenance_sav} />
      <Servicee {...travaux_divers} />
      <Steps/>
      {/* <WorkingProcess
        title1="Découverte et analyse"
        desc1="Nous analysons vos besoins pour créer une solution sur mesure, adaptée à vos objectifs et contraintes."
        title2="Conception et planification"
        desc2="Nos experts conçoivent des plans détaillés et des schémas techniques conformes aux normes pour une mise en œuvre optimale."
        title3="Exécution et Mise en Œuvre"
        desc3="Nous procédons à l'exécution des travaux, en veillant à ce que toutes les étapes respectent les normes en vigueur."
        title4="Tests et réception de projet"
        desc4="Nous effectuons des tests point à point de l'installation à l'aide de fiches de tests spéciales pour garantir une vérification approfondie des équipements. De plus, nous offrons un support technique continu pour répondre aux besoins de nos clients."
      /> */}
      <Faq />
      <Cta
        sectionPadding="true"
        h2="Prêt à moderniser vos installations électriques ?"
        p="Découvrez des solutions innovantes et fiables pour une performance énergétique optimale et une gestion simplifiée de vos systèmes électriques."
      />
    </NextLayout>
  );
};
export default page;
