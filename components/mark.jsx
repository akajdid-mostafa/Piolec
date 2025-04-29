"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const data = [
  { imgSrc: "/assets/img/mark/schnieder.svg" },
  { imgSrc: "/assets/img/mark/siemens.svg" },
  { imgSrc: "/assets/img/mark/ingelec.svg" },
  { imgSrc: "/assets/img/mark/nexans.svg" },
  { imgSrc: "/assets/img/mark/abb.svg" },
  { imgSrc: "/assets/img/mark/eaton.svg" },
  { imgSrc: "/assets/img/mark/legrand.svg" },
  { imgSrc: "/assets/img/mark/jm-concept.svg" },
  { imgSrc: "/assets/img/mark/victron-energy.svg" },
  { imgSrc: "/assets/img/mark/philips.svg" },
  { imgSrc: "/assets/img/mark/tosun.svg" },
  { imgSrc: "/assets/img/mark/esser.svg" },
  { imgSrc: "/assets/img/mark/unv.svg" },
  { imgSrc: "/assets/img/mark/hik-vision.svg" },
  { imgSrc: "/assets/img/mark/ruijie.svg" },
  { imgSrc: "/assets/img/mark/suprema.svg" },
  { imgSrc: "/assets/img/mark/tdsi.svg" },
  { imgSrc: "/assets/img/mark/anviz.svg" },
  { imgSrc: "/assets/img/mark/teletek.svg" },
  { imgSrc: "/assets/img/mark/tecno-alarm.svg" },
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
            Nos partenaires
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
                    width={200} 
                    height={100} 
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
