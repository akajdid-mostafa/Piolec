import Breadcrumb from "@/components/Breadcrumb";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import GrowBusiness from "@/components/GrowBusiness";
import Services, { Service2 } from "@/components/Services";
import NextLayout from "@/layouts/NextLayout";

const page = () => {
  return (
    <NextLayout>
      {/* <Breadcrumb pageName="Our Services" pageTitle="Popular Services" /> */}
      <GrowBusiness paddingTop={8} />
      {/* <Services /> */}
      <Service2 paddingTop={5} title="Our Services" />
      <Cta
        h2="Prêt à moderniser vos installations électriques ?"
        p="Découvrez des solutions innovantes et fiables pour une performance énergétique optimale et une gestion simplifiée de vos systèmes électriques."
       />
      <Faq />
    </NextLayout>
  );
};
export default page;
