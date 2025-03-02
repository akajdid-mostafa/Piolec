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
                <div className="thumb">
                  <Link href={`/project/${project.id}`}>
                    <img
                      src={project.details.images[0]}
                      alt="img"
                      style={{
                        width: "100%", // Ensure the image fills the container
                        height: "200px", // Set a fixed height for all images
                        objectFit: "cover", // Ensure the image covers the container without distortion
                      }}
                    />
                  </Link>
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