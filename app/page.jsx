import FunFactCounter from "@/components/FunFactCounter";
import Pricing from "@/components/Pricing";
import { TestimonialSlider1 } from "@/components/TestimonialSlider";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import {Service2} from "@/components/Services";
import Faq from "@/components/Faq";
import Hero from "@/components/hero";
import Steps from "@/components/steps";
import Pupulerproject from "@/components/Pupulerproject";
import Cta from "@/components/Cta";
import Mark from "@/components/mark";

const page = () => {
  return (
    <NextLayout>
      <Hero/>
      <section className="about-section fix section-padding">
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="about-image-items">
                  <div className="row g-4 align-items-center">
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".2s">
                      <div className="about-image">
                        <img
                          src="assets/img/about/about3.jpg"
                          alt="about-img"
                        />
                        <img
                          src="assets/img/about/about4.jpeg"
                          alt="about-img"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".4s">
                      <div className="about-image">
                        <img
                          src="assets/img/about/img2.png"
                          alt="about-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      À propos de l'entreprise
                    </span>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    PIOLEC, entreprise marocaine spécialisée en électricité,
                    informatique et systèmes de sécurité, est un partenaire de
                    confiance sur tout le territoire national. Son expertise et
                    son professionnalisme garantissent des solutions innovantes
                    et sur mesure pour répondre aux besoins de ses clients.
                  </p>
                  <ul className="about-list wow fadeInUp" data-wow-delay=".3s">
                    <li>
                      <i className="fas fa-check" />
                      Analyse et Conseil
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Installation et Mise en Œuvre
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Maintenance et Suivi
                    </li>
                  </ul>
                  <div
                    className="about-author wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="about-button">
                      <Link href="/about" className=" theme-btn hover-white">
                        En savoir plus
                        <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Service2 paddingTop={5} title="Nos services" />
      <Pupulerproject/>
      <Steps/>
      <Mark/>
      <Faq/>
      <Cta
        sectionPadding="true"
        h2="Prêt à optimiser vos installations électriques ?"
        p="Découvrez des solutions sur mesure pour plus de performance et de sécurité."
      />
    </NextLayout>
  );
};
export default page;
