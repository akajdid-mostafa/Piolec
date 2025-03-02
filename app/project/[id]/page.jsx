"use client";

import { useParams } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { useEffect, useState } from "react";
import { projects } from "../../project/data";
import Cta from "@/components/Cta";

// Import Fancybox
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const ProjectDetailPage = () => {
  const params = useParams(); // Use useParams to get dynamic route parameters
  const { id } = params;

  // Find the project by ID
  const project = projects.find((p) => p.id === parseInt(id));

  useEffect(() => {
    // Initialize Fancybox
    Fancybox.bind("[data-fancybox]", {
      // Options can be set here
    });

    // Cleanup Fancybox on component unmount
    return () => {
      Fancybox.destroy();
    };
  }, []);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <NextLayout>
      <Breadcrumb
        pageName={project.title}
        headingTag="h1"
        backgroundImage="assets/img/back.png"
      />
      <section className="project-details-section fix section-paddingg">
        <div className="container">
          <div className="project-details-wrapper">
            <div className="row g-4 justify-content-between">
              <div className="col-lg-7">
                <div className="project-details-content">
                  {/* <h5>{project.category}</h5> */}
                  {/* <h2>{project.details.overview}</h2> */}
                  <h4 className="mt-50">Objet de projet :</h4>
                  <p className="mt-4">{project.details.content}</p>
                  <h4 className="mt-50">Les tache réaliser :</h4>
                  <ul className="project-list">
                    {project.details.projectInitiation.map((step, index) => (
                      <li key={index}>
                        <FaCheck className="text-green-500" /> {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="project-information">
                  <h4>Information de projet</h4>
                  <ul>
                    <li>Clients :</li>
                    <li>
                      <span>{project.details.information.client}</span>
                    </li>
                    <li>Lieu :</li>
                    <li>
                      <span>{project.details.information.location}</span>
                    </li>
                    <li>Année :</li>
                    <li>
                      <span>{project.details.information.date}</span>
                    </li>
                    {/* <li>Industrie :</li>
                    <li>
                      <span>{project.details.information.category}</span>
                    </li> */}

                    {/* <li>
                      Duration <span>{project.details.information.duration}</span>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-lg-12">
                {/* Image List with Fancybox */}
                <div className="image-list">
                  {project.details.images.map((image, index) => (
                    <div key={index} className="project-details-image">
                      <a href={image} data-fancybox="gallery">
                        <Image
                          src={image}
                          alt={`Project Image ${index + 1}`}
                          width={500} // Fixed width for all images
                          height={300} // Fixed height for all images (adjust as needed)
                          style={{
                            objectFit: "cover", // Ensures images cover the container
                            borderRadius: "12px", // Optional: rounded corners
                          }}
                        />
                      </a>
                    </div>
                  ))}
                </div>
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

export default ProjectDetailPage;
