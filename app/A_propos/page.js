import Breadcrumb from "@/components/Breadcrumb";
import FunFactCounter from "@/components/FunFactCounter";
import { Team2 } from "@/components/Team";
import { TestimonialSlider2 } from "@/components/TestimonialSlider";
import WorkingProcess2 from "@/components/WorkingProcess";
import NextLayout from "@/layouts/NextLayout";
import Cta from "@/components/Cta";
import Link from "next/link";
const page = () => {
  return (
    <NextLayout>
      <Breadcrumb
        pageName="À propos de l'entreprise"
        backgroundImage="assets/img/about/about.jpg"
      />
      <section className="about-section fix section-paddingg pb-0">
        <div className="container">
          <div className="about-wrapper style-2">
            <div className="row g-4 align-items-center">
              <div className="row ">
                <div
                  className="welcome-message wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <strong>Bienvenue</strong> sur le site web de PIOLEC, votre
                  partenaire privilégié en électricité, automatisme, pré-câblage
                  informatique et systèmes de sécurité. Depuis notre création,
                  nous nous engageons à fournir des solutions innovantes et sur
                  mesure pour répondre aux besoins de nos clients à travers le
                  Maroc.
                </div>
              </div>

              <div className="col-lg-6">
                <div className="about-content ms-0 style-about">
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    {/* <div className="dot" /> */}
                    <div className="content">
                      <h4
                        className="icon-items wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <div className="dot" />
                        Qui sommes-nous ?
                      </h4>
                      <p>
                        PIOLEC sarl est une entreprise marocaine crée en 2021
                        grâce aux deux jeunes passionnés par le domaine de
                        l&apos;électricité.
                      </p>
                      <p className="mt-2">
                        PIOLEC active dans le domaine de l'électricité
                        industrielle, de l'automatisme, du pré-câblage
                        informatique et les systèmes de sécurité. Forte de son
                        professionnalisme et de son engagement, Notre entreprise
                        a su gagner la confiance d'un large éventail de clients
                        et de partenaires, tant dans le secteur public que
                        privé.
                      </p>
                      <p className="mt-2">
                        Notre mission est de proposer des solutions techniques
                        performantes et adaptées à vos besoins et budgets, tout
                        en respectant les normes en vigueur et en garantissant
                        une qualité de service optimale.
                      </p>
                      <p className="mt-2">
                        PIOLEC met à votre disposition son savoir-faire et son
                        expérience pour accompagner vos projets de A à Z.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="about-image-4">
                  <img src="assets/img/about/about12.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section Start */}
      <section className="about-section fix section-padding pt-80">
        <div className="container">
          <div className="about-wrapper style-2">
            <div className="row g-4 align-items-center">
              <div className="col-lg-5 wow  fadeInUp" data-wow-delay=".3s">
                <div className="about-image-3">
                  <img src="assets/img/about/about1.png" alt="img" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="about-content">
                  <h4 className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    <div className="dot" />
                    Nos Domaines d&apos;Expertise
                  </h4>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    {/* <div className="dot" /> */}
                    <div className="content">
                      <h6>Electricité & Automatisme</h6>
                      <p>
                        Conception et maintenance de systèmes électriques et
                        d&apos;automatisation. Solutions sûres et conformes aux
                        normes.
                      </p>
                    </div>
                  </div>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    {/* <div className="dot" /> */}
                    <div className="content">
                      <h6>Contrôle d'accès & Surveillance</h6>
                      <p>
                        Contrôle d&apos;accès (badges, biométrie) et
                        vidéosurveillance. Sécurité optimale avec gestion
                        centralisée.
                      </p>
                    </div>
                  </div>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    {/* <div className="dot" /> */}
                    <div className="content">
                      <h6>Détection incendie & intrusion</h6>
                      <p>
                        Systèmes de détection d&apos;incendie et
                        d&apos;intrusion. Alertes rapides et gestion
                        centralisée.
                      </p>
                    </div>
                  </div>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    {/* <div className="dot" /> */}
                    <div className="content">
                      <h6>Precablage informatique </h6>
                      <p>
                        Installation de câbles RJ45 et fibre optique.
                        Infrastructure réseau fiable et évolutive.
                      </p>
                    </div>
                  </div>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    {/* <div className="dot" /> */}
                    <div className="content">
                      <h6>Energies renouvelables</h6>
                      <p>
                        Solutions solaires photovoltaïques. Énergie propre et
                        économies durables.
                      </p>
                    </div>
                  </div>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    {/* <div className="dot" /> */}
                    <div className="content">
                      <h6>Maintenance & S.A.V</h6>
                      <p>
                        Maintenance préventive et corrective. Support technique
                        réactif 24h/24.
                      </p>
                    </div>
                  </div>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    {/* <div className="dot" /> */}
                    <div className="content">
                      <h6>Travaux divers</h6>
                      <p>
                        Travaux complémentaires (génie civil, menuiserie,
                        peinture). Exécution harmonieuse des projets.
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/service"
                    className="theme-btn mt-30 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    En savoir plus
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section Start */}

      {/* <section className="funfact-section-2 section-padding pt-0">
        <div className="container">
         
        </div>
      </section> */}
      {/* Working Process Section Start */}
      {/* <WorkingProcess2 /> */}
      {/* Funfact Section Start */}
      {/* <section className="funfact-section section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              Chiffres Clés de PIOLEC
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Découvrez les performances et les réalisations de notre entreprise.
            </h2>
          </div>
          <FunFactCounter />
        </div>
      </section> */}
      {/* Team Section Start */}
      {/* <Team2 /> */}
      {/* Brand Section Start */}
      {/* <section className="brand-section-2 mt-0 mb-0 fix section-padding pt-0">
        <div className="container-fluid">
          <div className="brand-wrapper-2">
            <div className="radius-shape">
              <img src="assets/img/brand/radius-left.png" alt="shape-img" />
            </div>
            <div className="radius-shape-2">
              <img src="assets/img/brand/radius-right.png" alt="shape-img" />
            </div>
            <h5 className="wow fadeInUp" data-wow-delay=".3s">
              We Have <span>1563+</span> Global Partners. Explore Our Global
              Clients
            </h5>
            <div className="brand-items">
              <div className="brand-image wow fadeInUp" data-wow-delay=".2s">
                <img src="assets/img/brand/linkedIn.png" alt="img" />
              </div>
              <div className="brand-image wow fadeInUp" data-wow-delay=".4s">
                <img src="assets/img/brand/dropbox.png" alt="img" />
              </div>
              <div className="brand-image wow fadeInUp" data-wow-delay=".6s">
                <img src="assets/img/brand/trello.png" alt="img" />
              </div>
              <div className="brand-image wow fadeInUp" data-wow-delay=".8s">
                <img src="assets/img/brand/framer.png" alt="img" />
              </div>
            </div>
            <div className="brand-items">
              <div className="brand-image wow fadeInUp" data-wow-delay=".2s">
                <img src="assets/img/brand/grammarly.png" alt="img" />
              </div>
              <div className="brand-image wow fadeInUp" data-wow-delay=".4s">
                <img src="assets/img/brand/amazon.png" alt="img" />
              </div>
              <div className="brand-image wow fadeInUp" data-wow-delay=".6s">
                <img src="assets/img/brand/outbrain.png" alt="img" />
              </div>
              <div className="brand-image wow fadeInUp" data-wow-delay=".8s">
                <img src="assets/img/brand/shopify.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Testimonial Section Start */}
      {/* <section className="testimonial-section-2 fix section-padding fix">
        <div className="bg-shape">
          <img src="assets/img/testimonial/bg-shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content">
              <img src="assets/img/bale.png" alt="img" />
              Clients Feedback
            </span>
            <h2>We’ve 1250+ Global Clients Say Us</h2>
          </div>
        </div>
        <TestimonialSlider2 />
      </section> */}
      {/* Footer Section Start */}
      <Cta
        sectionPadding={true}
        h2="Prêt à optimiser vos installations électriques ?"
        p="Découvrez des solutions sur mesure pour plus de performance et de sécurité."
      />
    </NextLayout>
  );
};
export default page;
