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
                      <img src="assets/img/bale.png" alt="img" />
                      Problèmes Solutions
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Votre tranquillité, notre engagement
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Chez PIOLEC, nous mettons notre expertise en maintenance et
                    service après-vente à votre service pour garantir la
                    performance et la durabilité de vos installations. Que ce
                    soit pour des systèmes électriques, des réseaux
                    informatiques ou des systèmes de sécurité, nous vous offrons
                    un accompagnement professionnel et réactif pour répondre à
                    vos besoins en toute situation.
                  </p>
                  <ul className="about-list wow fadeInUp" data-wow-delay=".3s">
                    <li>
                      <i className="fas fa-check" />
                      Bénéficiez d&apos;une maintenance préventive et corrective
                      de qualité.
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Assurez la longévité de vos installations grâce à un suivi
                      régulier.
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Optez pour un service réactif et disponible pour vos
                      urgences.
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
                            <img src="assets/img/about/0401.png" alt="img" />
                          </div>
                        </div>
                        <div
                          className="col-md-12 wow fadeInUp"
                          data-wow-delay=".5s"
                        >
                          <div className="about-thumbs">
                            <img src="assets/img/about/0402.png" alt="img" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".7s">
                      <div className="about-thumbs">
                        <img src="assets/img/about/0403.png" alt="img" />
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
                  <img src="assets/img/about/0404.png" alt="img" />
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
                      Des solutions pour une performance durable
                    </h2>
                  </div>
                  <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">
                    PIOLEC propose des services de maintenance et de SAV adaptés
                    à vos besoins, pour garantir la fiabilité et la performance
                    de vos installations sur le long terme.
                  </p>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    <h5>
                      <i className="fas fa-check-circle" />
                      Maintenance préventive et corrective
                    </h5>
                    <p>
                      PIOLEC intervient pour anticiper les pannes et résoudre
                      les problèmes techniques, en garantissant des
                      installations toujours opérationnelles.
                    </p>
                  </div>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".5s">
                    <h5>
                      <i className="fas fa-check-circle" />
                      Réactivité et disponibilité
                    </h5>
                    <p>
                      Notre équipe est à votre écoute pour intervenir rapidement
                      en cas de besoin, avec des solutions efficaces et
                      durables.
                    </p>
                  </div>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".5s">
                    <h5>
                      <i className="fas fa-check-circle" />
                      Support technique et conseils personnalisés
                    </h5>
                    <p>
                      Profitez d&apos;un accompagnement sur mesure pour optimiser
                      l&apos;utilisation de vos installations et prévenir les
                      éventuels dysfonctionnements.
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
        title1="Diagnostic et analyse"
        desc1="Nous identifions les problèmes ou les points à améliorer pour proposer des solutions adaptées."
        title2="Intervention et réparation"
        desc2=" Nos techniciens qualifiés interviennent rapidement pour résoudre les problèmes et garantir le bon fonctionnement de vos installations."
        title3="Suivi et prévention"
        desc3="Nous mettons en place un plan de maintenance préventive pour éviter les pannes futures et assurer la longévité de vos équipements."
        title4="Rapport et conseils"
        desc4="Nous vous fournissons un rapport détaillé de nos interventions et des conseils pour optimiser l’utilisation de vos installations."
      />
      {/* Grow Business Section Start */}
      <GrowBusiness2
        bg={"footer-bg"}
        title="Faites croître la fiabilité de vos installations"
        desc="Boostez la performance de vos systèmes grâce à des services de maintenance et de SAV professionnels et réactifs."
        firsttitle="de satisfaction client"
        firstdesc="Grâce à des interventions rapides et efficaces."
        secondtitle="de réduction des pannes"
        seconddesc="Grâce à une maintenance préventive régulière."
        image="assets/img/about/0405.png"
      />
      {/* Pricing Section Start */}
      {/* <Pricing /> */}
      <Cta
        sectionPadding={true}
        h2="Prêt à garantir la performance de vos installations ?"
        p="Découvrez des solutions de maintenance et de SAV sur mesure pour une tranquillité d’esprit totale."
      />
    </NextLayout>
  );
};
export default page;
