"use client";

import { useParams } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { useEffect, useState } from "react";
import { projects } from "../../project/data";

// Import Swiper styles and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const ProjectDetailPage = () => {
  const params = useParams(); // Use useParams to get dynamic route parameters
  const { id } = params;

  // Find the project by ID
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <NextLayout>
      <section className="project-details-section fix section-padding">
        <div className="container">
          <div className="project-details-wrapper">
            <div className="row g-4 justify-content-between">
              <div className="col-lg-12">
                {/* Swiper Carousel */}
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000 }}
                  loop={true}
                >
                  {project.details.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div
                        className="project-details-image"
                        style={{
                          width: "100%", // Full width of the container
                          height: "500px", // Fixed height for all images
                          position: "relative", // Required for Next.js Image component
                          overflow: "hidden", // Ensure images don't overflow
                        }}
                      >
                        <Image
                          src={image}
                          alt={`Project Image ${index + 1}`}
                          fill // Fill the container
                          style={{ objectFit: "cover" }} // Ensure the image covers the container
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="col-lg-7">
                <div className="project-details-content">
                  <h5>{project.category}</h5>
                  <h2>{project.details.overview}</h2>
                  <p className="mt-4">{project.details.content}</p>
                  <h4 className="mt-50">Project Initiation</h4>
                  <ul className="project-list">
                    <li>
                      <i className="far fa-check" />
                      Define the project scope, goals, and objectives
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Identify the target audience and market research.
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Determine the budget, timeline, and available resources.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="project-information">
                  <h4>Project Information's</h4>
                  <ul>
                    <li>
                      Clients <span>{project.details.information.client}</span>
                    </li>
                    <li>
                      Category <span>{project.details.information.category}</span>
                    </li>
                    <li>
                      Date <span>{project.details.information.date}</span>
                    </li>
                    <li>
                      Location <span>{project.details.information.location}</span>
                    </li>
                    <li>
                      Duration <span>{project.details.information.duration}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};

export default ProjectDetailPage;