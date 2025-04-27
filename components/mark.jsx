"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const data = [
  { imgSrc: "/assets/img/mark/01.png" },
  { imgSrc: "/assets/img/mark/02.png" },
  { imgSrc: "/assets/img/mark/03.png" },
  { imgSrc: "/assets/img/mark/04.png" },
  { imgSrc: "/assets/img/mark/05.png" },
  { imgSrc: "/assets/img/mark/06.png" },
];

export default function Mark() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: false, 
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="mark-container">
      <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            {/* <img src="assets/img/bale.png" alt="img" /> */}
            Marques partenaires
          </span>
          {/* <h2 className="wow fadeInUp" data-wow-delay=".3s">
          Questions fréquemment posées
          </h2> */}
        </div>
      <div className="mark-inner">
        <div className="mark-slider-wrapper">
          <Slider {...settings}>
            {data.map((item, i) => (
              <div key={i} className="mark-slide">
                <div className="mark-image-wrapper">
                  <Image
                    src={item.imgSrc}
                    alt="carousel-image"
                    width={200} // make width bigger
                    height={100} // adjust height
                    className="mark-image"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* <hr /> */}
      </div>
    </div>
  );
}
