"use client";

import { projects } from "@/app/project/data";
import Link from "next/link";

const Pupulerproject = () => {
  // Get the first 3 projects
  const firstThreeProjects = projects.slice(0, 3);

  return (
    <section className="case-study-section fix section-paddingg theme-bg">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <span className="sub-content wow fadeInUp">Projets populaires</span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              Découvrez nos projets les plus populaires Réalisé
            </h2>
          </div>
          <Link href="/project" className="theme-btn white-border">
            Voir plus de projets
          </Link>
        </div>
        <div className="row">
          {firstThreeProjects.map((project) => (
            <div
              key={project.id}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="case-study-items">
              <div
                        className="project-image"
                        style={{
                          display: "flex", // Keep images in the same row
                          gap: "10px", // Add more spacing between images
                          width: "100%", // Full width
                          height: "210px", // Increase image height
                          overflow: "hidden", // Prevent overflow
                        }}
                      >
                        {project.details.images
                          .slice(0, 4)
                          .map((image, index) => (
                            <Link
                              key={index}
                              href={`/project/${project.id}`}
                              style={{ flex: "1" }}
                            >
                              <img
                                src={image}
                                alt={`image-${index}`}
                                style={{
                                  width: "100%", // Make sure each image takes equal width
                                  height: "100%", // Increase height
                                  objectFit: "cover", // Ensure proper fit without distortion
                                  borderRadius: "10px", // Optional: for rounded corners
                                }}
                              />
                            </Link>
                          ))}
                      </div>
                <div className="content">
                  <h3>
                    <Link href={`/project/${project.id}`}>
                      {project.title}
                    </Link>
                  </h3>
                  <Link className="arrow-btn" href={`/project/${project.id}`}>
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

export default Pupulerproject;