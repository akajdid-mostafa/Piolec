import Link from "next/link";

const servicesData = [
  {
    id: 1,
    image: "/assets/img/service/service1.jpg",
    icon: "flaticon-electricity",
    title: "Electricité & Automatisme",
    description:
      "We provide expert electrical installations for residential, commercial, and industrial projects, ensuring safety and efficiency.",
      Link:"/service#electricite_automatisme",
  },
  {
    id: 2,
    image: "/assets/img/service/service2.jpg",
    icon: "flaticon-automation",
    title: "Contrôle d'accès & Surveillance",
    description:
      "Our automation solutions streamline operations, reduce costs, and enhance productivity for businesses.",
      Link:"/service#contrôle_dacces_surveillance",
  },
  {
    id: 3,
    image: "/assets/img/service/serv3.jpg",
    icon: "flaticon-security",
    title: "Détection incendie & intrusion",
    description:
      "We install advanced security systems, including access control, fire detection, and video surveillance, to protect your property.",
      Link:"/service#detection_incendie_intrusion",
  },
  {
    id: 4,
    image: "/assets/img/service/service4.jpg",
    icon: "flaticon-network",
    title: "Precablage informatique",
    description:
      "We design and implement robust IT networks, ensuring seamless connectivity and data security for your business.",
      Link:"/service#precablage_informatique",
  },
  {
    id: 5,
    image: "/assets/img/service/service5.jpg",
    icon: "/service#energies_renouvelables_travaux_divers",
    title: "Energies renouvelables",
    description:
      "We offer sustainable energy solutions, including solar power systems, to help you reduce energy costs and environmental impact.",
      Link:"/service#energies_renouvelables_travaux_divers",
  },
  {
    id: 6,
    image: "/assets/img/service/service6.jpg",
    icon: "flaticon-maintenance",
    title: "Maintenance & S.A.V",
    description:
      "Our maintenance and after-sales services ensure the longevity and optimal performance of your electrical and security systems.",
      Link:"/service#maintenance_sav",
  },
  {
    id: 7,
    image: "/assets/img/service/serv7.jpg",
    icon: "flaticon-maintenance",
    title: "Travaux divers",
    description:
      "Our maintenance and after-sales services ensure the longevity and optimal performance of your electrical and security systems.",
      Link:"/service#travaux-divers",
  },
];

export const Service2 = ({ paddingTop = 0, title = "Popular Services" }) => {
  return (
    <section
      className={`service-section section-paddingg pt-${paddingTop}`}
      id="services"
    >
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            {title}
          </span>
        </div>
        <div className="row">
          {servicesData.map((service) => (
            <div
            key={service.id}
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
            style={{ marginBottom: "30px" }}
            >
              <div className="service-popular-items">
                <div className="service-image">
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="service-content">
                  <h5>
                    <Link href={service.Link}>{service.title}</Link>
                  </h5><br></br>
                  <Link href={service.Link} className="theme-btn">
                  En savoir plus <i className="far fa-arrow-right " />
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

