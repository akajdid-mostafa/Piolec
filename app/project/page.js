import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import { projects } from "./data";


const Page = () => {
  return (
    <NextLayout>
      <section className="project-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              Galerie de travail
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Explorer les projets en vedette
            </h2>
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
                        <img
                          src={project.details.images[0]}
                          alt="img"
                          style={{
                            width: "100%", // Ensure the image fills the container
                            height: "100%", // Ensure the image fills the container
                            objectFit: "cover", // Ensure the image covers the container without distortion
                          }}
                        />
                      </div>
                      <div className="project-content">
                        <p>{project.category}</p>
                        <h3>
                          <Link href={`/project-details/${project.id}`}>
                            {project.title}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};

export default Page;