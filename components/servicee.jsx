"use client";

import Link from "next/link";
import Image from "next/image";

const Servicee = ({
  id,
  title,
  description,
  description2,
  images,
  contentFirst = true,
  showLink = false,
  linkText = "En savoir plus sur nous",
  linkHref = "about",
  serviceSectionClass = true,
  
}) => {
  return (
    <section
      id={id}
      className={`${serviceSectionClass ? "servic--section" : ""} fix section-padding`}
    >
      <div className="container">
        <div className="about-wrapper">
          <div className="row g-5 align-items-stretch"> {/* Use align-items-stretch to make columns equal height */}
            {/* Partie content if contentFirst is true */}
            {contentFirst && (
              <div className="col-lg-6">
                <div className="about-content ms-0">
                  <div className="section-title">
                  <span className="sub-contentt wow fadeInUp">
                    <img src="assets/img/flesh.svg" alt="img" />
                    {title}
                  </span>
                    {/* <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      
                    </h2> */}
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    {description}
                  </p>
                  <br></br>
                  <p className="mt-6  wow fadeInUp" data-wow-delay=".5s">
                    {description2}
                  </p>
                  {showLink && (
                    <div
                      className="about-button mt-5 wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <Link href={linkHref} className="theme-btn">
                        {linkText}
                        <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Partie Images */}
            <div className="col-lg-6">
              <div className="about-image-items-4">
                <div className="row g-4 align-items-stretch">
                  {/* If content is first, render partie two images first */}
                  {contentFirst ? (
                    <>
                      <div className="col-lg-6">
                        <div className="row g-4">
                          {images.slice(0, 2).map((img, index) => (
                            <div
                              key={index}
                              className="col-md-12 wow fadeInUp"
                              data-wow-delay={`${0.3 + index * 0.2}s`}
                            >
                              <div className="about-thumbs">
                                <Image
                                  src={img.src}
                                  alt={img.alt}
                                  width={img.width || 300}
                                  height={img.height || 200}
                                  className="image-fit"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="col-lg-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="about-thumbs">
                          <Image
                            src={images[2].src}
                            alt={images[2].alt}
                            width={images[2].width || 300}
                            height={images[2].height || 400}
                            className="image-fit"
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* If content is second, render partie one image first */}
                      <div className="col-lg-6  wow fadeInUp" data-wow-delay=".7s">
                        <div className="about-thumbs">
                          <Image
                            src={images[2].src}
                            alt={images[2].alt}
                            width={images[2].width || 300}
                            height={images[2].height || 400}
                            className="image-fit"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="row g-4">
                          {images.slice(0, 2).map((img, index) => (
                            <div
                              key={index}
                              className="col-md-12 wow fadeInUp"
                              data-wow-delay={`${0.3 + index * 0.2}s`}
                            >
                              <div className="about-thumbs">
                                <Image
                                  src={img.src}
                                  alt={img.alt}
                                  width={img.width || 300}
                                  height={img.height || 200}
                                  className="image-fit"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Partie content if contentFirst is false */}
            {!contentFirst && (
              <div className="col-lg-6">
                <div className="about-content ms-0">
                  <div className="section-title">
                  <span className="sub-contentt wow fadeInUp">
                    <img src="assets/img/flesh.svg" alt="img" />
                    {title}
                  </span>
                    {/* <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      {title}
                    </h2> */}
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    {description}
                  </p>
                  <br></br>
                  <p className="mt-6 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    {description2}
                  </p>
                  {showLink && (
                    <div
                      className="about-button mt-5 wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <Link href={linkHref} className="theme-btn">
                        {linkText}
                        <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add custom CSS */}
      
    </section>
  );
};

export default Servicee;