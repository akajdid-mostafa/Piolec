"use client";

import Link from "next/link";

const services = [
  {
    id: 1,
    image: "assets/img/service/04.png",
    title: "Étude et installation électrique complète.",
    link: "/etude-et-installation-electrique-complete",
  },
  {
    id: 2,
    image: "assets/img/service/05.png",
    title: "Systèmes de sécurité - Installation.",
    link: "/systemes-de-securite-installation",
    active: true, // To mark this service as active
  },
  {
    id: 3,
    image: "assets/img/service/06.png",
    title: "Réseaux informatiques - Installations.",
    link: "/reseaux-informatiques-nstallations",
  },
  {
    id: 4,
    image: "assets/img/service/07.png",
    title: "Maintenance et service après-vente.",
    link: "/maintenance-et-service-apres-vente",
  },
];

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
          {services.map((service, index) => (
            <div
              key={service.id}
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.2 * (index + 1)}s`}
              style={{ marginBottom: "20px" }} // Add space between cards
            >
              <div
                className={`service-card-items ${service.active ? "active" : ""}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%", // Ensure the card takes full height
                }}
              >
                <div
                  className="service-thumb"
                  style={{ flex: 1 }} // Allow the image section to grow
                >
                  <img src={service.image} alt="service-img" />
                  <div className="line-shape">
                    <img src="assets/img/service/line.png" alt="shape-img" />
                  </div>
                </div>
                <div
                  className="service-content"
                  style={{
                    flex: 1, // Ensure the content section takes equal space
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between", // Distribute space evenly
                  }}
                >
                  <h4>
                    <Link href={service.link}>{service.title}</Link>
                  </h4>
                  <Link className="link-btn" href={service.link}>
                    Read More
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;