import Link from "next/link";

const servicesData = [
  {
    id: 1,
    image: "/assets/img/project/001.JPG",
    icon: "flaticon-electricity",
    title: "Electricite et automatisme",
    description:
      "We provide expert electrical installations for residential, commercial, and industrial projects, ensuring safety and efficiency.",
  },
  {
    id: 2,
    image: "/assets/img/project/002.png",
    icon: "flaticon-automation",
    title: "Controle dacces et surveillance",
    description:
      "Our automation solutions streamline operations, reduce costs, and enhance productivity for businesses.",
  },
  {
    id: 3,
    image: "/assets/img/project/003.png",
    icon: "flaticon-security",
    title: "Detection incendie et intrusion",
    description:
      "We install advanced security systems, including access control, fire detection, and video surveillance, to protect your property.",
  },
  {
    id: 4,
    image: "/assets/img/project/004.png",
    icon: "flaticon-network",
    title: "Precablage informatique",
    description:
      "We design and implement robust IT networks, ensuring seamless connectivity and data security for your business.",
  },
  {
    id: 5,
    image: "/assets/img/project/005.png",
    icon: "flaticon-renewable-energy",
    title: "Panneau solaire",
    description:
      "We offer sustainable energy solutions, including solar power systems, to help you reduce energy costs and environmental impact.",
  },
  {
    id: 6,
    image: "/assets/img/project/006.png",
    icon: "flaticon-maintenance",
    title: "Maintenance et S.A.V",
    description:
      "Our maintenance and after-sales services ensure the longevity and optimal performance of your electrical and security systems.",
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
            {/* <img src="assets/img/bale.png" alt="img" /> */}
            {title}
          </span>
          {/* <h2 className="wow fadeInUp" data-wow-delay=".3s">
            We Provide the Best Solutions for <br />
            Electricity, IT, Automation, and Security Systems
          </h2> */}
        </div>
        <div className="row">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
              style={{ marginBottom: "30px" }} // Add margin-bottom to create space
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
                  <h3>
                    <Link href="/service-details">{service.title}</Link>
                  </h3>
                  {/* <p>{service.description}</p> */}
                  <Link href="/service-details" className="theme-btn bg-2">
                  En savoir plus <i className="far fa-arrow-right" />
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




const Services = () => {
  return (
    <section
      className="service-section-4 fix bg-cover section-padding"
      style={{
        backgroundImage: 'url("assets/img/service/service-bg-min.jpg")',
      }}
      id="services"
    >
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content bg-color-3 wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            Our Services
          </span>
          <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
            We Provide the Best Solutions for <br />
            Electricity, IT, Automation, and Security Systems
          </h2>
        </div>
        <div className="row">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-box-items">
                <div className="icon">
                  <i className={service.icon} />
                </div>
                <div className="content">
                  <h3>
                    <Link href="service-details">{service.title}</Link>
                  </h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;


