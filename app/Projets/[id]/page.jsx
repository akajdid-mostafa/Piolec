"use client";

import { useParams } from "next/navigation";
import NextLayout from "@/layouts/NextLayout";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { useEffect } from "react";
import { projects } from "../data";
import Cta from "@/components/Cta";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const ProjectDetailPage = () => {
  const params = useParams();
  const { id } = params;
  const project = projects.find((p) => p.id === parseInt(id));

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});
    return () => {
      Fancybox.destroy();
    };
  }, []);
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <NextLayout>
      <section className="project-details-section fix section-paddingg">
        <div className="container">
          <div className="project-details-wrapper">
            <div className="row g-4 justify-content-between">
              <div className="col-lg-7">
                <div className="project-details-content">
                  <h4 className="mt-50">Objet de projet :</h4>
                  <p className="mt-4">{project.details.content}</p>
                  <h4 className="mt-50">Travaux effectués :</h4>
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
                  </ul>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="image-list">
                  {project.details.images.map((image, index) => (
                    <div key={index} className="project-details-image">
                      <a href={image} data-fancybox="gallery">
                        <Image
                          src={image}
                          alt={`Project Image ${index + 1}`}
                          width={500}
                          height={300}
                          style={{
                            objectFit: "cover",
                            borderRadius: "12px",
                          }}/>
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
