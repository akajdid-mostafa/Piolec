"use client";

import { useParams } from "next/navigation"; // Use next/navigation instead of next/router
import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const projects = [
  {
    id: 1,
    image: "/assets/img/project/05.jpg",
    category: "Product Design",
    title: "Business Task Management Dashboard Design",
    description: "Designing a dashboard for task management.",
    details: {
      images: [
        "/assets/img/project/details-1.jpg",
        "/assets/img/project/details-2.jpg",
      ],
      overview: "Introduction Of Projects Overview",
      content: "Designing a digital product and branding project involves several key steps...",
      information: {
        client: "Myron S.",
        category: "Design & Dev",
        date: "October, 2024",
        location: "New York",
        duration: "1 month",
      },
    },
  },
  {
    id: 2,
    image: "/assets/img/project/05.jpg",
    category: "Product Design",
    title: "Business Task Management Dashboard Design",
    description: "Designing a dashboard for task management.",
    details: {
      images: [
        "/assets/img/project/details-1.jpg",
        "/assets/img/project/details-2.jpg",
      ],
      overview: "Introduction Of Projects Overview",
      content: "Designing a digital product and branding project involves several key steps...",
      information: {
        client: "Myron S.",
        category: "Design & Dev",
        date: "October, 2024",
        location: "New York",
        duration: "1 month",
      },
    },
  },
  {
    id: 3,
    image: "/assets/img/project/05.jpg",
    category: "Product Design",
    title: "Business Task Management Dashboard Design",
    description: "Designing a dashboard for task management.",
    details: {
      images: [
        "/assets/img/project/details-1.jpg",
        "/assets/img/project/details-2.jpg",
      ],
      overview: "Introduction Of Projects Overview",
      content: "Designing a digital product and branding project involves several key steps...",
      information: {
        client: "Myron S.",
        category: "Design & Dev",
        date: "October, 2024",
        location: "New York",
        duration: "1 month",
      },
    },
  },
  {
    id: 4,
    image: "/assets/img/project/05.jpg",
    category: "Product Design",
    title: "Business Task Management Dashboard Design",
    description: "Designing a dashboard for task management.",
    details: {
      images: [
        "/assets/img/project/details-1.jpg",
        "/assets/img/project/details-2.jpg",
      ],
      overview: "Introduction Of Projects Overview",
      content: "Designing a digital product and branding project involves several key steps...",
      information: {
        client: "Myron S.",
        category: "Design & Dev",
        date: "October, 2024",
        location: "New York",
        duration: "1 month",
      },
    },
  },
  {
    id: 5,
    image: "/assets/img/project/05.jpg",
    category: "Product Design",
    title: "Business Task Management Dashboard Design",
    description: "Designing a dashboard for task management.",
    details: {
      images: [
        "/assets/img/project/details-1.jpg",
        "/assets/img/project/details-2.jpg",
      ],
      overview: "Introduction Of Projects Overview",
      content: "Designing a digital product and branding project involves several key steps...",
      information: {
        client: "Myron S.",
        category: "Design & Dev",
        date: "October, 2024",
        location: "New York",
        duration: "1 month",
      },
    },
  },
  {
    id: 6,
    image: "/assets/img/project/05.jpg",
    category: "Product Design",
    title: "Business Task Management Dashboard Design",
    description: "Designing a dashboard for task management.",
    details: {
      images: [
        "/assets/img/project/details-1.jpg",
        "/assets/img/project/details-2.jpg",
      ],
      overview: "Introduction Of Projects Overview",
      content: "Designing a digital product and branding project involves several key steps...",
      information: {
        client: "Myron S.",
        category: "Design & Dev",
        date: "October, 2024",
        location: "New York",
        duration: "1 month",
      },
    },
  },
  {
    id: 7,
    image: "/assets/img/project/05.jpg",
    category: "Product Design",
    title: "Business Task Management Dashboard Design",
    description: "Designing a dashboard for task management.",
    details: {
      images: [
        "/assets/img/project/details-1.jpg",
        "/assets/img/project/details-2.jpg",
      ],
      overview: "Introduction Of Projects Overview",
      content: "Designing a digital product and branding project involves several key steps...",
      information: {
        client: "Myron S.",
        category: "Design & Dev",
        date: "October, 2024",
        location: "New York",
        duration: "1 month",
      },
    },
  },
  // Add other projects here...
];

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
          {/* <Breadcrumb pageName={project.title} /> */}
          <section className="project-details-section fix section-padding">
            <div className="container">
              <div className="project-details-wrapper">
                <div className="row g-4 justify-content-between">
                  <div className="col-lg-8">
                    <div className="project-details-image">
                      <img src={project.details.images[0]} alt="img" />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="project-details-image">
                      <img src={project.details.images[1]} alt="img" />
                    </div>
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