"use client";

import { projects } from "@/app/Projets/data";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import "./styles.css"; // Your custom CSS file

const Pupulerproject = () => {
  // Get all projects you want to display (adjust the slice as needed)
  const displayedProjects = projects.slice(0, 6); // Showing 6 projects for scrolling

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default for large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // Mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

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
          <Link href="/Projets" className="theme-btn white-border">
            Voir plus de projets
          </Link>
        </div>
        
        <div className="case-study-slider">
          <Slider {...settings}>
            {displayedProjects.map((project) => (
              <div key={project.id} className="slide-item">
                <div className="case-study-items">
                  <div className="project-image">
                    {project.details.images.slice(0, 4).map((image, index) => (
                      <Link
                        key={index}
                        href={`/Projets/${project.id}`}
                        className="project-image-link"
                      >
                        <img
                          src={image}
                          alt={`image-${index}`}
                          className="project-thumbnail"
                        />
                      </Link>
                    ))}
                  </div>
                  <div className="content">
                    <h4 className="mt-4">
                      <Link href={`/Projets/${project.id}`}>
                        {project.title}
                      </Link>
                    </h4>
                    <Link className="arrow-btn" href={`/Projets/${project.id}`}>
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Pupulerproject;