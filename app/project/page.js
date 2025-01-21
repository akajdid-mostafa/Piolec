import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import Cta from "@/components/Cta";
import { projects } from "./data";


const Page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Galerie de travail" headingTag="h1" backgroundImage = "assets/img/back.png" />
      <section className="project-section fix section-paddingg ">
        <div className="container">
          <div className="section-title text-center">
            {/* <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              Galerie de travail
            </span> */}
            <h4 className="wow fadeInUp gallery-text" data-wow-delay=".3s">
            Explorez la créativité et l’engagement qui animent notre travail à travers ces images, et profitez de la visite
            </h4>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="row justify-content-center">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="project-card-items">
                      {/* Image Container with Fixed Size */}
                      <div
                        className="project-image"
                        style={{
                          width: "100%", // Full width of the container
                          height: "300px", // Fixed height for all images
                          position: "relative", // Required for Next.js Image component
                          overflow: "hidden", // Ensure images don't overflow
                        }}
                      >
                        <Link href={`/project/${project.id}`}>
                        <img
                          src={project.details.images[0]}
                          alt="img"
                          style={{
                            width: "100%", // Ensure the image fills the container
                            height: "100%", // Ensure the image fills the container
                            objectFit: "cover", // Ensure the image covers the container without distortion
                          }}
                        />
                        </Link>
                      </div>
                      <div className="project-content">
                        {/* <p>{project.category}</p> */}
                        <h6>
                          <Link href={`/project/${project.id}`}>
                            {project.title}
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta
       sectionPadding={true}
       h2="Prêt à optimiser vos installations électriques ?"
       p="Découvrez des solutions sur mesure pour plus de performance et de sécurité."
        />
    </NextLayout>
  );
};

export default Page;