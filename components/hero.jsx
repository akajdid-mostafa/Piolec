"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero-section hero-1 bg-cover fix">
      <div className="container">
        <div className="row g-4 justify-content-between">
          <div className="col-lg-7">
            <div className="hero-content">
              <h1 className="wow fadeInUp" data-wow-delay=".2s">
                Installation & Maintenance Electrique CFA / CFO Travaux Divers
              </h1>
              <div className="hero-button">
                <Link
                  href="/contact"
                  className="theme-btn hover-white wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  Contactez Nous <i className="far fa-arrow-right" />
                </Link>
                <Link
                  href="/service"
                  className="btn-link wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  Voir les services <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-5 wow fadeInUp" data-wow-delay=".4s">
            <div className="hero-contact-box">
              <h4>Obtenir des consultations</h4>
              <p>Prêt à enregistrer nos services Landsio</p>
              <form
                action="#"
                id="contact-form"
                method="POST"
                className="contact-form-item"
              >
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="form-clt">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-clt">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Adresse électronique"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-clt">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Numéro de téléphone"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button type="submit" className="theme-btn hover-white">
                      Commencer maintenant <i className="far fa-arrow-right" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
