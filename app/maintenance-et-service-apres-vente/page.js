import Breadcrumb from "@/components/Breadcrumb";
import Counter from "@/components/Counter";
import Cta from "@/components/Cta";
import { GrowBusiness2 } from "@/components/GrowBusiness";
import Pricing from "@/components/Pricing";
import WorkingProcess from "@/components/WorkingProcess";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import { Start } from "@/components/servicess";
import { Start2 } from "@/components/servicess";

const page = () => {
  return (
    <NextLayout>
      {/* <Breadcrumb pageName="Étude et installation électrique complète." /> */}
      {/* About Section Start */}
      <Start/>
      <Link href="/about">
      <h4>
        about
      </h4>
      </Link>
      {/* Service Video Section Start */}
      <Start2/>
      {/* Working Process Section Start */}
      <WorkingProcess
       title1="Découverte et analyse"
       desc1="Nous analysons vos besoins pour créer une solution sur mesure, adaptée à vos objectifs et contraintes."
       title2="Conception et planification"
       desc2=" Nos experts conçoivent des plans détaillés et des schémas techniques conformes aux normes pour une mise en œuvre optimale."
       title3="Installation et exécution"
       desc3="Nous installons votre système électrique avec des matériaux de qualité et des techniques éprouvées, garantissant fiabilité et sécurité."
       title4="Tests et remise des clés"
       desc4="Nous testons rigoureusement votre installation avant la livraison, et vous fournissons un support technique pour une utilisation optimale."
       />
      {/* Grow Business Section Start */}
      <GrowBusiness2 bg={"footer-bg"} />
      {/* Pricing Section Start */}
      {/* <Pricing /> */}
      <Cta sectionPadding={true} />
    </NextLayout>
  );
};
export default page;
