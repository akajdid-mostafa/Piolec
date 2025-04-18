import FunFactCounter from "@/components/FunFactCounter";
import Pricing from "@/components/Pricing";
import { TestimonialSlider1 } from "@/components/TestimonialSlider";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import {Service2} from "@/components/Services";
import Faq from "@/components/Faq";
import Hero from "@/components/hero";
import Steps from "@/components/steps";
import Pupulerproject from "@/components/Pupulerproject";
import Cta from "@/components/Cta";

const page = () => {
  return (
    <NextLayout>
      <Hero/>
      <div>
      {/* Service Section Start */}
      {/* <section className="service-section fix pt-80 pb-80 section-bg">
        <div className="container">
          <h4
            className="mb-5 text-white text-center wow fadeInUp"
            data-wow-delay=".3s"
          >
            Ensuring Your Success with Premium Electrical, and Security System Solutions.
          </h4>
          <div className="row g-4">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-items">
                <div className="content">
                  <p>01</p>
                  <h5>
                    <Link href="/service-details">
                      Data Manage &amp; <br />
                      Solutions Center
                    </Link>
                  </h5>
                  <Link className="arrow-btn" href="/service-details">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="thumb">
                  <img src="assets/img/service/01.jpg" alt="img" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="service-items">
                <div className="content">
                  <p>02</p>
                  <h5>
                    <Link href="/service-details">
                      Preparing For <br />
                      Cloud Services
                    </Link>
                  </h5>
                  <Link className="arrow-btn" href="/service-details">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="thumb">
                  <img src="assets/img/service/02.jpg" alt="img" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="service-items">
                <div className="content">
                  <p>03</p>
                  <h5>
                    <Link href="/service-details">
                      Machine Learning <br />
                      &amp; Development
                    </Link>
                  </h5>
                  <Link className="arrow-btn" href="/service-details">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="thumb">
                  <img src="assets/img/service/03.jpg" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      </div>
      
      {/* About Section Start */}
      <section className="about-section fix section-padding">
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="about-image-items">
                  {/* <ul
                    className="experience-text wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <li>Plus de 25 ans d'expérience</li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>Entreprise primée</li>
                  </ul> */}
                  <div className="row g-4 align-items-center">
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".2s">
                      <div className="about-image">
                        <img
                          src="assets/img/about/about3.jpg"
                          alt="about-img"
                        />
                        <img
                          src="assets/img/about/about4.jpeg"
                          alt="about-img"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".4s">
                      <div className="about-image">
                        <img
                          src="assets/img/about/img2.png"
                          alt="about-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      {/* <img src="assets/img/bale.png" alt="img" >/*/}
                      À propos de l'entreprise
                    </span>
                    {/* <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      PIOLEC : Électricité, Informatique et Sécurité
                    </h2> */}
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    PIOLEC, entreprise marocaine spécialisée en électricité,
                    informatique et systèmes de sécurité, est un partenaire de
                    confiance sur tout le territoire national. Son expertise et
                    son professionnalisme garantissent des solutions innovantes
                    et sur mesure pour répondre aux besoins de ses clients.
                  </p>
                  <ul className="about-list wow fadeInUp" data-wow-delay=".3s">
                    <li>
                      <i className="fas fa-check" />
                      Analyse et Conseil
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Installation et Mise en Œuvre
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Maintenance et Suivi
                    </li>
                  </ul>
                  <div
                    className="about-author wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="about-button">
                      <Link href="/about" className=" theme-btn hover-white">
                        En savoir plus
                        <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                    {/* <div className="author-image">
                      <img src="assets/img/about/author.jpg" alt="author-img" />
                      <div className="content">
                        <h5>
                          Lucas J. Swe / <span>CO Founder</span>
                        </h5>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section Start */}
      <Service2 paddingTop={5} title="Nos services" />

      <Steps/>

      {/* Cta Video Section Start */}
      
      <div>
        {/* <div
        className="cta-video-section fix bg-cover"
        style={{ backgroundImage: 'url("assets/img/cta/cta-video.jpg")' }}
      >
        <div className="container">
          <div className="cta-video-wrapper">
            <div className="video-box">
              <a
                href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                className="video-buttton ripple video-popup"
              >
                <i className="fas fa-play" />
              </a>
            </div>
          </div>
        </div>
        <div className="marquee-wrapper text-slider">
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                <span className="text-slider">IT</span>
                <span className="text-slider">Consulting </span>
                <span className="text-slider style-border" />
                <span className="text-slider">Co</span>
                <span className="text-slider">Machine </span>
                <span className="text-slider style-border" />
                <span className="text-slider">IT</span>
                <span className="text-slider">Learning </span>
                <span className="text-slider style-border" />
                <span className="text-slider">Web </span>
                <span className="text-slider">Development</span>
                <span className="text-slider">IT</span>
                <span className="text-slider">Consulting </span>
                <span className="text-slider style-border" />
                <span className="text-slider">Co</span>
                <span className="text-slider">Machine </span>
                <span className="text-slider style-border" />
                <span className="text-slider">IT</span>
                <span className="text-slider">Learning </span>
                <span className="text-slider style-border" />
                <span className="text-slider">Web </span>
                <span className="text-slider">Development</span>
                <span className="text-slider">IT</span>
                <span className="text-slider">Consulting </span>
                <span className="text-slider style-border" />
                <span className="text-slider">Co</span>
                <span className="text-slider">Machine </span>
                <span className="text-slider style-border" />
                <span className="text-slider">IT</span>
                <span className="text-slider">Learning </span>
                <span className="text-slider style-border" />
                <span className="text-slider">Web </span>
                <span className="text-slider">Development</span>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      {/* Team Section Start */}
      {/* <section className="team-section fix section-padding">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="section-title">
                <span className="sub-content wow fadeInUp">
                  <img src="assets/img/bale.png" alt="img" />
                  Team Member
                </span>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  Meet Our Professional <br />
                  Team Members
                </h2>
              </div>
              <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                Sed ut perspiciatis unde omnis iste natus error sit volupta
                temes <br /> accusantium doloremque laudantium, totam rem
              </p>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="team-items">
                <div className="team-image">
                  <img src="assets/img/team/01.jpg" alt="img" />
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="/team-details">Robert E. Whitmore</Link>
                  </h4>
                  <p>Product Designer</p>
                  <div className="social-profile">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                    <span className="plus-btn">
                      <i className="far fa-plus" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="team-items">
                <div className="team-image">
                  <img src="assets/img/team/02.jpg" alt="img" />
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Johnny M. Smith</Link>
                  </h4>
                  <p>IT Consultant</p>
                  <div className="social-profile">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                    <span className="plus-btn">
                      <i className="far fa-plus" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="team-items">
                <div className="team-image">
                  <img src="assets/img/team/03.jpg" alt="img" />
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="/team-details">Angelo H. Tomlin</Link>
                  </h4>
                  <p>Senior Manager</p>
                  <div className="social-profile">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                    <span className="plus-btn">
                      <i className="far fa-plus" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="team-items">
                <div className="team-image">
                  <img src="assets/img/team/04.jpg" alt="img" />
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="/team-details">Robert E. Whitmore</Link>
                  </h4>
                  <p>Web Designer</p>
                  <div className="social-profile">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                    <span className="plus-btn">
                      <i className="far fa-plus" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="team-items">
                <div className="team-image">
                  <img src="assets/img/team/05.jpg" alt="img" />
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="/team-details">Manuel G. Wilmer</Link>
                  </h4>
                  <p>CEO &amp; Founder</p>
                  <div className="social-profile">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                    <span className="plus-btn">
                      <i className="far fa-plus" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-xxl-5 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <Link href="/team" className="theme-btn">
                View More Members
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      {/* Funfact Section Start */}
      {/* <section className="funfact-section section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              Chiffres Clés de PIOLEC
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Découvrez les performances et les réalisations de notre
              entreprise.
            </h2>
          </div>
          <FunFactCounter />
        </div>
      </section> */}
      {/* Popular Case Study Section Start */}
      {/* <section className="case-study-section fix section-padding theme-bg">
        <div className="left-shape">
          <img src="assets/img/case-study/left-shape.png" alt="shape-img" />
        </div>
        <div className="right-shape">
          <img src="assets/img/case-study/right-shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <span className="sub-content wow fadeInUp">
                Popular Case Study
              </span>
              <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                Discover Our Popular Case Study <br /> That We Globally
                Completes
              </h2>
            </div>
            <Link href="/project" className="theme-btn white-border">
              View More Cases
            </Link>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="case-study-items">
                <div className="thumb">
                  <img src="assets/img/case-study/01.jpg" alt="img" />
                </div>
                <div className="content">
                  <p>IT Consulting</p>
                  <h3>
                    <Link href="/case-study-details">
                      How to achieve more with your nine to five
                    </Link>
                  </h3>
                  <Link className="arrow-btn" href="/case-study-details">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="case-study-items">
                <div className="thumb">
                  <img src="assets/img/case-study/02.jpg" alt="img" />
                </div>
                <div className="content">
                  <p>Machine Learning</p>
                  <h3>
                    <Link href="/case-study-details">
                      Strategies for outstanding future results
                    </Link>
                  </h3>
                  <Link className="arrow-btn" href="/case-study-details">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="case-study-items">
                <div className="thumb">
                  <img src="assets/img/case-study/03.jpg" alt="img" />
                </div>
                <div className="content">
                  <p>Software Design</p>
                  <h3>
                    <Link href="/case-study-details">
                      Discover a better way of system defining company goals.
                    </Link>
                  </h3>
                  <Link className="arrow-btn" href="/case-study-details">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Pricing Section Start */}
      {/* <Pricing /> */}
      {/* Testimonial Section Start */}
      {/* <section className="testimonial-section fix section-padding pt-0">
        <div className="container">
          <div className="testimonial-wrapper">
            <div className="row g-4">
              <div className="col-lg-3">
                <div className="testimonial-image">
                  <img src="assets/img/testimonial/testimonial.png" alt="img" />
                </div>
              </div>
              <div className="col-lg-7 ps-lg-5">
                <TestimonialSlider1 />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      </div>

      <Pupulerproject/>
      {/* News Section Start */}
      <Faq/>
      <Cta
        sectionPadding="true"
        h2="Prêt à moderniser vos installations électriques ?"
        p="Découvrez des solutions innovantes et fiables pour une performance énergétique optimale et une gestion simplifiée de vos systèmes électriques."
      />

      {/* <section className="news-section section-padding pt-0 mt-20">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">

              News &amp; Blog
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Explore Our Latest News &amp; Blog
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="news-box-items">
                <div className="news-content">
                  <p>November 25, 2024</p>
                  <h4>
                    <Link href="/news-details">
                      Revealing Images With Animations Gradients, Blend Modes
                      Cool
                    </Link>
                  </h4>
                  <Link className="link-btn" href="/news-details">
                    Read More
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/01.jpg")' }}
                />
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="news-box-items">
                <div className="news-content">
                  <p>November 25, 2024</p>
                  <h4>
                    <Link href="/news-details">
                      List of 5 ways Generating Real Time Audio Sentiment
                      Analysis
                    </Link>
                  </h4>
                  <Link className="link-btn" href="/news-details">
                    Read More
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/02.jpg")' }}
                />
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="news-box-items">
                <div className="news-content">
                  <p>November 25, 2024</p>
                  <h4>
                    <Link href="/news-details">
                      Revealing Images With Animations Gradients, Blend Modes
                      Cool
                    </Link>
                  </h4>
                  <Link className="link-btn" href="/news-details">
                    Read More
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/03.jpg")' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </NextLayout>
  );
};
export default page;
