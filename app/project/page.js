import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const projects = [
  {
    id: 1,
    image: "/assets/img/project/05.jpg",
    category: "Product Design",
    title: "Business Task Management Dashboard Design",
    link: "project-details",
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
    image: "assets/img/project/06.jpg",
    category: "Website Design",
    title: "Business Consulting Web Explorations Design",
    link: "project-details",
    description: "Designing a dashboard for task management.",
    details: {
      images: [
        "assets/img/project/details-1.jpg",
        "assets/img/project/details-2.jpg",
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
    image: "assets/img/project/07.jpg",
    category: "Product Design",
    title: "Mobile Applications Design",
    link: "project-details",
    description: "Designing a dashboard for task management.",
    details: {
      images: [
        "assets/img/project/details-1.jpg",
        "assets/img/project/details-2.jpg",
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
    image: "assets/img/project/08.jpg",
    category: "Website Design",
    title: "Furniture Website Design",
    link: "project-details",
    description: "Designing a dashboard for task management.",
    details: {
      images: [
        "assets/img/project/details-1.jpg",
        "assets/img/project/details-2.jpg",
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
    image: "assets/img/project/09.jpg",
    category: "Product Design",
    title: "Business Card Design and Branding Identity",
    link: "project-details",
    description: "Designing a dashboard for task management.",
    details: {
      images: [
        "assets/img/project/details-1.jpg",
        "assets/img/project/details-2.jpg",
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
    image: "assets/img/project/10.jpg",
    category: "Website Design",
    title: "Modern T-Shirt Design and Branding Identity",
    link: "project-details",
    description: "Designing a dashboard for task management.",
    details: {
      images: [
        "assets/img/project/details-1.jpg",
        "assets/img/project/details-2.jpg",
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
    image: "assets/img/project/11.jpg",
    category: "Product Design",
    title: "Mobile Applications Design",
    link: "project-details",
    description: "Designing a dashboard for task management.",
    details: {
      images: [
        "assets/img/project/details-1.jpg",
        "assets/img/project/details-2.jpg",
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
    id: 8,
    image: "assets/img/project/12.jpg",
    category: "Product Design",
    title: "Furniture Website Design",
    link: "project-details",
    description: "Designing a dashboard for task management.",
    details: {
      images: [
        "assets/img/project/details-1.jpg",
        "assets/img/project/details-2.jpg",
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
    id: 9,
    image: "assets/img/project/12.jpg",
    category: "Product Design",
    title: "Furniture Website Design",
    link: "project-details",
    description: "Designing a dashboard for task management.",
    details: {
      images: [
        "assets/img/project/details-1.jpg",
        "assets/img/project/details-2.jpg",
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
    id: 10,
    image: "assets/img/project/12.jpg",
    category: "Product Design",
    title: "Furniture Website Design",
    link: "project-details",
    description: "Designing a dashboard for task management.",
    details: {
      images: [
        "assets/img/project/details-1.jpg",
        "assets/img/project/details-2.jpg",
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
    id: 11,
    image: "assets/img/project/12.jpg",
    category: "Product Design",
    title: "Furniture Website Design",
    link: "project-details",
    description: "Designing a dashboard for task management.",
    details: {
      images: [
        "assets/img/project/details-1.jpg",
        "assets/img/project/details-2.jpg",
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
];

const page = () => {
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
                      <div className="project-image">
                        <img src={project.image} alt="img" />
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

export default page;
