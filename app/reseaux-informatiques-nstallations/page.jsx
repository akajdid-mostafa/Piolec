import Breadcrumb from "@/components/Breadcrumb";
import Counter from "@/components/Counter";
import Cta from "@/components/Cta";
import { GrowBusiness2 } from "@/components/GrowBusiness";
import Pricing from "@/components/Pricing";
import WorkingProcess from "@/components/WorkingProcess";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import * as servicess from "@/components/servicess";

const page = () => {
  return (
    <NextLayout>
      {/* <Breadcrumb pageName="Étude et installation électrique complète." /> */}
      {/* About Section Start */}
      <section className="about-section fix section-padding">
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4 align-items-center justify-content-between">
              <div className="col-lg-5">
                <div className="about-content ms-0">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      {/* <img src="assets/img/bale.png" alt="img" /> */}
                      Problèmes Solutions
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Votre connectivité, notre expertise
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Chez PIOLEC, nous mettons notre savoir-faire en réseaux
                    informatiques à votre service pour des installations
                    performantes, fiables et adaptées à vos besoins. Que ce soit
                    pour un projet professionnel, commercial ou industriel, nous
                    vous accompagnons de l&apos;étude à la mise en œuvre, en
                    garantissant une connectivité optimale et une conformité aux
                    normes en vigueur.
                  </p>
                  <ul className="about-list wow fadeInUp" data-wow-delay=".3s">
                    <li>
                      <i className="fas fa-check" />
                      Profitez d&apos;une installation rapide et
                      professionnelle.
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Bénéficiez de réseaux informatiques performants et
                      sécurisés.
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Optez pour des solutions sur mesure adaptées à vos
                      besoins.
                    </li>
                  </ul>
                  <div
                    className="about-button mt-5 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <Link href="about" className="theme-btn">
                      En savoir plus sur nous
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-image-items-4">
                  <div className="experience-items">
                    <h6>
                      Plus de 400 clients au Maroc et au-delà lui font
                      confiance.
                    </h6>
                    {/* <img src="assets/img/about/face-mans.png" alt="img" /> */}
                    <h2>
                      <span className="count">
                        <Counter end={5} />
                      </span>
                      +
                    </h2>
                    <p>Années d&apos;expérience</p>
                  </div>
                  <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                      <div className="row g-4">
                        <div
                          className="col-md-12 wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div className="about-thumbs">
                            <img src="assets/img/about/0301.png" alt="img" />
                          </div>
                        </div>
                        <div
                          className="col-md-12 wow fadeInUp"
                          data-wow-delay=".5s"
                        >
                          <div className="about-thumbs">
                            <img src="assets/img/about/0302.png" alt="img" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".7s">
                      <div className="about-thumbs">
                        <img src="assets/img/about/0303.png" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Video Section Start */}
      <section className="service-video-section fix section-padding">
        <div className="container">
          <div className="service-video-wrapper">
            <div className="row align-items-center">
              <div className="col-lg-7 wow fadeInUp" data-wow-delay=".3s">
                <div className="service-video-image">
                  <img src="assets/img/about/0304.png" alt="img" />
                  <div className="video-box">
                    <a
                      href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                      className="video-buttton ripple video-popup"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                  <ul
                    className="experience-text wow fadeInUp"
                    data-wow-delay=".6s"
                    style={{ visibility: "visible", animationDelay: "0.6s" }}
                  >
                    <li>5+ ans d'expérience</li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>Services électriques primés</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="content">
                  <div className="section-title mb-0">
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Des solutions pour une connectivité totale
                    </h2>
                  </div>
                  <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">
                    PIOLEC propose des réseaux informatiques innovants, adaptés
                    à vos besoins, pour une productivité et une communication
                    fluides.
                  </p>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    <h5>
                      <i className="fas fa-check-circle" />
                      Conception et mise en œuvre simplifiées
                    </h5>
                    <p>
                      PIOLEC simplifie vos projets de réseaux informatiques, de
                      l&apos;étude à l&apos;installation, avec des solutions
                      claires et efficaces.
                    </p>
                  </div>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".5s">
                    <h5>
                      <i className="fas fa-check-circle" />
                      Gestion centralisée et solutions personnalisées
                    </h5>
                    <p>
                      Contrôlez vos réseaux informatiques facilement grâce à des
                      outils intuitifs et des options sur mesure.
                    </p>
                  </div>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".5s">
                    <h5>
                      <i className="fas fa-check-circle" />
                      Performance et sécurité optimisées
                    </h5>
                    <p>
                      Profitez de réseaux informatiques performants, sécurisés
                      et évolutifs, conçus pour répondre à vos besoins
                      spécifiques.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Working Process Section Start */}
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
      {/* Grow Business Section Start */}
      <GrowBusiness2
        bg={"footer-bg"}
        title="Faites croître votre connectivité"
        desc="Boostez la productivité de votre entreprise avec des réseaux informatiques modernes et performants, conçus pour répondre à vos besoins spécifiques."
        firsttitle="de fiabilité"
        firstdesc=" Profitez d’une connectivité ininterrompue avec des réseaux hautement performants."
        secondtitle="de gain de temps"
        seconddesc="Optimisez vos processus grâce à des réseaux fluides et réactifs."
        image="assets/img/about/0305.png"
      />
      {/* Pricing Section Start */}
      {/* <Pricing /> */}
      <Cta
       sectionPadding={true}
       h2="Prêt à optimiser vos réseaux informatiques ?"
       p="Découvrez des solutions sur mesure pour une connectivité optimale et une productivité accrue."
        />
    </NextLayout>
  );
};
export default page;
