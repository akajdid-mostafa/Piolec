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
      <Breadcrumb pageName="Étude et installation électrique complète." />
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
                      Votre succès, notre électricité de confiance
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
                  <ul className="about-list wow fadeInUp" data-wow-delay=".3s">
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
      {/* Service Video Section Start */}
      <section className="service-video-section fix section-padding">
        <div className="container">
          <div className="service-video-wrapper">
            <div className="row align-items-center">
              <div className="col-lg-7 wow fadeInUp" data-wow-delay=".3s">
                <div className="service-video-image">
                  <img src="assets/img/about/0104.png" alt="img" />
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
                      Des solutions pour une vie sûre et efficace
                    </h2>
                  </div>
                  <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">
                    PIOLEC propose des systèmes électriques innovants, sûrs et
                    adaptés à vos besoins, pour un quotidien simplifié et
                    sécurisé.
                  </p>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    <h5>
                      <i className="fas fa-check-circle" />
                      Conception et mise en œuvre faciles
                    </h5>
                    <p>
                      PIOLEC simplifie vos projets électriques, de l’étude à
                      l’installation, avec des solutions claires et efficaces.
                    </p>
                  </div>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".5s">
                    <h5>
                      <i className="fas fa-check-circle" />
                      Gestion en un clic et solutions personnalisées
                    </h5>
                    <p>
                      Contrôlez vos installations électriques facilement grâce à
                      des outils intuitifs et des options sur mesure.
                    </p>
                  </div>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".5s">
                    <h5>
                      <i className="fas fa-check-circle" />
                      Efficacité énergétique et solutions renouvelables
                    </h5>
                    <p>
                      Optimisez votre énergie et réduisez votre impact avec des
                      solutions innovantes et durables.
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
        desc3="Nous installons votre système électrique avec des matériaux de qualité et des techniques éprouvées, garantissant fiabilité et sécurité."
        title4="Tests et remise des clés"
        desc4="Nous testons rigoureusement votre installation avant la livraison, et vous fournissons un support technique pour une utilisation optimale."
      />
      {/* Grow Business Section Start */}
      <GrowBusiness2
        bg={"footer-bg"}
        title="Électricité innovante"
        desc="Boostez la croissance de votre entreprise avec des systèmes électriques modernes et performants, conçus pour répondre à vos besoins spécifiques."
        firsttitle="d'efficacité"
        firstdesc="Optimisez votre énergie avec des solutions intelligentes pour des performances maximales."
        secondtitle="de coûts"
        seconddesc="Réduisez vos dépenses grâce à des installations électriques efficaces et durables."
        image="assets/img/about/0105.png"
      />
      {/* Pricing Section Start */}
      {/* <Pricing /> */}
      <Cta
       sectionPadding={true}
       h2="Prêt à optimiser vos installations électriques ?"
       p="Découvrez des solutions sur mesure pour plus de performance et de sécurité."
        />
    </NextLayout>
  );
};
export default page;
