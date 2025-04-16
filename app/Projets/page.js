import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import Cta from "@/components/Cta";
import { projects } from "./data";
import ProjectPresentation from "@/components/ProjectPresentation";

const Page = () => {
  // Sort projects by date (newest first)
  const sortedProjects = [...projects].sort((a, b) => {
    const dateA = new Date(a.details.information.date);
    const dateB = new Date(b.details.information.date);
    return dateB - dateA; // For descending order (newest first)
  });

  return (
    <NextLayout>
      <Breadcrumb
        pageName="Galerie de travail"
        headingTag="h1"
        backgroundImage="assets/img/back.png"
      />
      <section className="project-section fix section-paddingg">
        <div className="container">
          <div className="section-title text-center">
            <h4 className="wow fadeInUp gallery-text" data-wow-delay=".3s">
              Explorez la créativité et l&apos;engagement qui animent notre
              travail à travers ces images, et profitez de la visite
            </h4>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="row justify-content-center">
                {sortedProjects.map((project) => (
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
                          display: "flex",
                          gap: "10px",
                          width: "100%",
                          height: "210px",
                          overflow: "hidden",
                        }}
                      >
                        {project.details.images
                          .slice(0, 4)
                          .map((image, index) => (
                            <Link
                              key={index}
                              href={`/Projets/${project.id}`}
                              style={{ flex: "1" }}
                            >
                              <img
                                src={image}
                                alt={`image-${index}`}
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                  borderRadius: "10px",
                                }}
                              />
                            </Link>
                          ))}
                      </div>

                      <div className="project-content">
                        <h6>
                          <Link href={`/Projets/${project.id}`}>
                            {project.title}
                          </Link>
                        </h6>
                        {/* Optional: Display the date if you want */}
                        {/* <p className="project-date" style={{ fontSize: '0.8rem', color: '#666' }}>
                          {new Date(project.details.information.date).toLocaleDateString()}
                        </p> */}
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