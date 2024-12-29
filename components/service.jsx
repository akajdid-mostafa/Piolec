"use client";

import Link from "next/link";


const Service = () => {
  return (
    <section className="service-section section-padding pt-0">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            Services populaires
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Nous fournissons un service de qualité supérieure <br />
            Pour votre entreprise
          </h2>
        </div>
        <div className="row">
          <div
            className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay=".2s"
          >
            <div className="service-card-items">
              <div className="icon">
                <i className="flaticon-technical" />
              </div>
              <h3>
                <Link href="service-details">
                  Étude et installation électrique complète.
                </Link>
              </h3>
              <div className="service-thumb">
                <img src="assets/img/service/04.png" alt="service-img" />
                <div className="line-shape">
                  <img src="assets/img/service/line.png" alt="shape-img" />
                </div>
              </div>
              <Link className="link-btn" href="service-details">
                Read More
                <i className="far fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div
            className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="service-card-items active">
              <div className="icon">
                <i className="flaticon-vector-design" />
              </div>
              <h3>
                <Link href="service-details">
                  Systèmes de sécurité - Installation.
                </Link>
              </h3>
              <div className="service-thumb">
                <img src="assets/img/service/05.png" alt="service-img" />
                <div className="line-shape">
                  <img src="assets/img/service/line.png" alt="shape-img" />
                </div>
              </div>
              <Link className="link-btn" href="service-details">
                Read More
                <i className="far fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div
            className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay=".6s"
          >
            <div className="service-card-items">
              <div className="icon">
                <i className="flaticon-database" />
              </div>
              <h3>
                <Link href="service-details">
                  Réseaux informatiques - Installations.
                </Link>
              </h3>
              <div className="service-thumb">
                <img src="assets/img/service/06.png" alt="service-img" />
                <div className="line-shape">
                  <img src="assets/img/service/line.png" alt="shape-img" />
                </div>
              </div>
              <Link className="link-btn" href="service-details">
                Read More
                <i className="far fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div
            className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay=".8s"
          >
            <div className="service-card-items">
              <div className="icon">
                <i className="flaticon-design-thinking" />
              </div>
              <h3>
                <Link href="service-details">
                  Maintenance et service après-vente.
                </Link>
              </h3>
              <div className="service-thumb">
                <img src="assets/img/service/07.png" alt="service-img" />
                <div className="line-shape">
                  <img src="assets/img/service/line.png" alt="shape-img" />
                </div>
              </div>
              <Link className="link-btn" href="service-details">
                Read More
                <i className="far fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Service;
