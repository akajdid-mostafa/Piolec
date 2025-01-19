import Breadcrumb from "@/components/Breadcrumb";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import GrowBusiness from "@/components/GrowBusiness";
import Services, { Service2 } from "@/components/Services";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Our Services" pageTitle="Nos Services" />
      <GrowBusiness paddingTop={8} />
      <section className="about-section fix section-padding">
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4 align-items-center justify-content-between">
              <div className="col-lg-7">
                <div className="about-content ms-0">
                  <div className="section-title">
                    {/* <span className="sub-content wow fadeInUp">
                      <img src="assets/img/bale.png" alt="img" />
                      Problèmes Solutions
                    </span> */}
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Electricité & Automatisme 
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Chez PIOLEC, nous mettons notre expertise à votre service
                    pour des installations électriques sûres, efficaces et
                    conformes aux normes. Que ce soit pour un projet
                    résidentiel, industriel ou commercial, nous vous
                    accompagnons de l&apos;étude à la réalisation, en
                    garantissant qualité et fiabilité à chaque étape.
                  </p>
                  {/* <ul className="about-list wow fadeInUp" data-wow-delay=".3s">
                    <li>
                      <i className="fas fa-check" />
                      Connectez-vous à des solutions électriques sans tracas.
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Profitez de services rapides et fiables.
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Trouvez des solutions qui répondent à vos besoins en un
                      temps record.
                    </li>
                  </ul> */}
                  {/* <div
                    className="about-button mt-5 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <Link href="about" className="theme-btn">
                      En savoir plus sur nous
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-5">
                <div className="about-image-items-4">
                  {/* <div className="experience-items">
                    <h6>
                      Plus de 400 clients au Maroc et au-delà lui font
                      confiance.
                    </h6>
                    <img src="assets/img/about/face-mans.png" alt="img" />
                    <h2>
                      <span className="count">
                        <Counter end={5} />
                      </span>
                      +
                    </h2>
                    <p>Années d&apos;expérience</p>
                  </div> */}
                  <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                      <div className="row g-4">
                        <div
                          className="col-md-12 wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div className="about-thumbs">
                            <img src="assets/img/about/0101.png" alt="img" />
                          </div>
                        </div>
                        <div
                          className="col-md-12 wow fadeInUp"
                          data-wow-delay=".5s"
                        >
                          <div className="about-thumbs">
                            <img src="assets/img/about/0102.png" alt="img" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".7s">
                      <div className="about-thumbs">
                        <img src="assets/img/about/0103.png" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
