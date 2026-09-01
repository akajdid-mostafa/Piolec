"use client";

import { projects } from "@/app/Projets/data";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Pupulerproject = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return undefined;

    const focusableSelector = "a, button, input, select, textarea, [tabindex]";
    const syncHiddenSlides = () => {
      slider.querySelectorAll(".slick-slide").forEach((slide) => {
        const isHidden = slide.getAttribute("aria-hidden") === "true";

        slide.querySelectorAll(focusableSelector).forEach((element) => {
          if (isHidden) {
            if (!element.hasAttribute("data-slick-original-tabindex")) {
              element.setAttribute(
                "data-slick-original-tabindex",
                element.getAttribute("tabindex") ?? ""
              );
            }
            element.setAttribute("tabindex", "-1");
          } else if (element.hasAttribute("data-slick-original-tabindex")) {
            const originalTabIndex = element.getAttribute(
              "data-slick-original-tabindex"
            );

            if (originalTabIndex) {
              element.setAttribute("tabindex", originalTabIndex);
            } else {
              element.removeAttribute("tabindex");
            }
            element.removeAttribute("data-slick-original-tabindex");
          }
        });
      });
    };

    syncHiddenSlides();
    const observer = new MutationObserver(syncHiddenSlides);
    observer.observe(slider, {
      subtree: true,
      attributes: true,
      attributeFilter: ["aria-hidden", "class"],
    });

    return () => observer.disconnect();
  }, []);
 
  const displayedProjects = [...projects]
    .sort((a, b) => new Date(b.details.information.date) - new Date(a.details.information.date));

  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,        
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,   
    pauseOnHover: false, 
    arrows: true,
    cssEase: 'linear',  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  return (
    <section className="case-study-section fix section-paddinggg theme-bg">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <span className="sub-content wow fadeInUp">Nos projets</span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
            Découvrez une sélection de projets
            </h2>
          </div>
          <Link href="/Projets" className="theme-btn white-border">
            Voir plus
          </Link>
        </div>
        
        <div ref={sliderRef} className="case-study-slider">
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
                          loading="lazy"
                          decoding="async"
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
                    <Link
                      className="arrow-btn"
                      href={`/Projets/${project.id}`}
                      aria-label={`Voir le projet ${project.title}`}
                    >
                      <i className="far fa-arrow-right" aria-hidden="true" />
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
