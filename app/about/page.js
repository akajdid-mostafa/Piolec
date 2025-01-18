import Breadcrumb from "@/components/Breadcrumb";
import FunFactCounter from "@/components/FunFactCounter";
import {Team2} from "@/components/Team";
import { TestimonialSlider2 } from "@/components/TestimonialSlider";
import  WorkingProcess2  from "@/components/WorkingProcess";
import NextLayout from "@/layouts/NextLayout";
import Cta from "@/components/Cta";
import Link from "next/link";
const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="À propos de l'entreprise" />
      {/* <Breadcrumb /> */}
      {/* About Section Start */}
      <section className="about-section fix section-paddingg pb-0">
        <div className="container">
          <div className="about-wrapper style-2">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="about-content ms-0 style-about">
                  {/* <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="assets/img/bale.png" alt="img" />
                      À propos de l'entreprise
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Nous augmentons le nombre de visiteurs de votre site web et augmentons les ventes
                    </h2>
                  </div> */}
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Bienvenue sur le site web de **PIOLEC**, votre partenaire
                    privilégié en électricité, informatique, automatisme et
                    systèmes de sécurité. Depuis notre création, nous nous
                    engageons à fournir des solutions innovantes et sur mesure
                    pour répondre aux besoins de nos clients à travers le Maroc.
                  </p>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    <div className="dot" />
                    <div className="content">
                      <h4>Qui sommes-nous ?</h4>
                      <p>
                        PIOLEC est une entreprise marocaine spécialisée dans les
                        domaines de l'électricité industrielle, de
                        l'automatisme, de l'informatique et des systèmes de
                        sécurité. Forte de son expertise et de son
                        professionnalisme, PIOLEC a su gagner la confiance d'un
                        large éventail de clients et de partenaires, tant dans
                        le secteur public que privé.
                      </p>
                      <p>
                        Notre mission est de proposer des solutions techniques
                        performantes et adaptées, tout en respectant les normes
                        en vigueur et en garantissant une qualité de service
                        optimale. Que ce soit pour des installations
                        électriques, des systèmes de sécurité, des réseaux
                        informatiques ou des solutions d'automatisme, PIOLEC met
                        à votre disposition son savoir-faire et son expérience
                        pour accompagner vos projets de A à Z.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="about-image-3">
                  <img src="assets/img/about/05.jpg" alt="img" />
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
              <div className="col-lg-6 wow  fadeInUp" data-wow-delay=".3s">
                <div className="about-image-3">
                  <img src="assets/img/about/06.jpg" alt="img" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <h4 className="wow fadeInUp" data-wow-delay=".3s">
                    Nos Domaines d&apos;Expertise
                  </h4>
                  {/* <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">
                    In the early years, our dedicated team worked tirelessly to
                    key Next milestones or achievements, such as product
                    launches, partnerships or expansions these efforts laid the
                    foundation
                  </p> */}
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    <div className="dot" />
                    <div className="content">
                      <h6>Électricité Industrielle et Automatisme</h6>
                      <p>
                        Conception et réalisation d'armoires électriques,
                        câblage de machines, solutions en énergies
                        renouvelables, alimentation de secours (groupes
                        électrogènes, onduleurs, etc.).
                      </p>
                    </div>
                  </div>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    <div className="dot" />
                    <div className="content">
                      <h6>Contrôle d'Accès et Systèmes d'Évacuation</h6>
                      <p>
                        Installation et configuration de systèmes de contrôle
                        d'accès (badges, digicodes, lecteurs biométriques) et de
                        gestion centralisée des issues de secours (UGIS).
                      </p>
                    </div>
                  </div>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    <div className="dot" />
                    <div className="content">
                      <h6>Systèmes de Sécurité Incendie et Intrusion</h6>
                      <p>
                        Installation de systèmes de détection d'incendie,
                        centrales d'alarme, et logiciels de supervision.
                      </p>
                    </div>
                  </div>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    <div className="dot" />
                    <div className="content">
                      <h6>Réseaux Informatiques et Vidéosurveillance </h6>
                      <p>
                        Câblage informatique, installation de caméras de
                        surveillance (IP et analogique), et mise en place
                        d'infrastructures réseau (armoires de brassage, switchs,
                        routeurs).
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/about"
                    className="theme-btn mt-50 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    Learn More Us
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
      <Team2 />
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
