import FunFactCounter from "@/components/FunFactCounter";
import Pricing from "@/components/Pricing";
import { TestimonialSlider1 } from "@/components/TestimonialSlider";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import {Service2} from "@/components/Services";
import Faq from "@/components/Faq";
import Hero from "@/components/hero";
import Steps from "@/components/steps";

const page = () => {
  return (
    <NextLayout>
      <Hero/>
      <Steps/>
      {/* <section class="cs_bg_filed" data-src="/assets/img/how_to_work_bg.svg">
      <div class="cs_height_115 cs_height_lg_70"></div>
      <div class="container">
        <div class="cs_section_heading_1_with_sub">
          <div class="cs_section_heading cs_style_1">
            <h3 class="cs_section_subtitle cs_accent_color text-uppercase cs_medium cs_fs_20 cs_mb_10 wow fadeInLeft" data-wow-duration="0.9s" data-wow-delay="0.25s">
              <img src="assets/img/icons/fan.svg" alt="" class="cs_section_subheading_icon"/>
              Who To Work
            </h3>
            <h2 class="cs_section_title cs_fs_48 cs_semibold mb-0">Simple Working Process</h2>
          </div>
          <p class="mb-0">Keeping the outdoor unit clean, and sealing any you leaks in your home can improve efficiency</p>
        </div>
        <div class="cs_height_45 cs_height_lg_45"></div>
        <div class="cs_card_1_wrap">
          <div class="cs_card_1_col">
            <div class="cs_card cs_style_1">
              <div class="cs_card_in cs_white_bg">
                <div class="cs_card_icon cs_center cs_mb_30">
                  <img src="assets/img/icons/how_to_work_icon_1.svg" alt=""/>
                </div>
                <h3 class="cs_fs_24 cs_semibold cs_mb_6">Cool Wave System</h3>
                <p class="cs_fs_14 cs_mb_25">Upgrade to the latest energy and efficient air conditioning Frost technology with Eco Cool</p>
                <a href="about-us.html" class="cs_text_btn cs_fs_14 text-uppercase cs_heading_color cs_bold">
                  READ MORE
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.28125 1.21875L13.7812 6.46875C13.9271 6.61458 14 6.79167 14 7C14 7.20833 13.9271 7.38542 13.7812 7.53125L8.28125 12.7812C7.90625 13.0729 7.55208 13.0729 7.21875 12.7812C6.92708 12.4062 6.92708 12.0521 7.21875 11.7188L11.375 7.75H0.75C0.291667 7.70833 0.0416667 7.45833 0 7C0.0416667 6.54167 0.291667 6.29167 0.75 6.25H11.375L7.21875 2.28125C6.92708 1.94792 6.92708 1.59375 7.21875 1.21875C7.55208 0.927083 7.90625 0.927083 8.28125 1.21875Z" fill="currentColor"></path>
                  </svg>                    
                </a>
              </div>
              <div class="cs_card_shape">
                <svg width="305" height="145" viewBox="0 0 305 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M274.465 30.698L35.5518 41.3918L0 6.19539V120.27C0 133.924 11.1913 145 24.9875 145H280.012C293.809 145 305 133.924 305 120.27V0.478516L274.465 30.698Z" fill="currentColor"/>
                </svg>                  
              </div>
            </div>
          </div>
          <div class="cs_card_1_col">
            <div class="cs_card cs_style_1 cs_type_1">
              <div class="cs_card_in cs_white_bg">
                <h3 class="cs_fs_24 cs_semibold cs_mb_6">Arctic Installations</h3>
                <p class="cs_fs_14 cs_mb_25">The Arctic Blast Repair service addresses all your air Eco Cool  conditioning repair needs</p>
                <a href="about-us.html" class="cs_text_btn cs_fs_14 text-uppercase cs_heading_color cs_bold cs_mb_30">
                  READ MORE
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.28125 1.21875L13.7812 6.46875C13.9271 6.61458 14 6.79167 14 7C14 7.20833 13.9271 7.38542 13.7812 7.53125L8.28125 12.7812C7.90625 13.0729 7.55208 13.0729 7.21875 12.7812C6.92708 12.4062 6.92708 12.0521 7.21875 11.7188L11.375 7.75H0.75C0.291667 7.70833 0.0416667 7.45833 0 7C0.0416667 6.54167 0.291667 6.29167 0.75 6.25H11.375L7.21875 2.28125C6.92708 1.94792 6.92708 1.59375 7.21875 1.21875C7.55208 0.927083 7.90625 0.927083 8.28125 1.21875Z" fill="currentColor"></path>
                  </svg>                    
                </a>
                <div class="cs_card_icon cs_center">
                  <img src="assets/img/icons/how_to_work_icon_2.svg" alt=""/>
                </div>
              </div>
              <div class="cs_card_shape">
                <svg width="305" height="146" viewBox="0 0 305 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M274.465 115.014L35.5518 104.253L0 139.669V24.883C0 11.1442 11.1913 -0.000549316 24.9875 -0.000549316H280.012C293.809 -0.000549316 305 11.1442 305 24.883V145.422L274.465 115.014Z" fill="currentColor"/>
                </svg>                                   
              </div>
            </div>
          </div>
          <div class="cs_card_1_col">
            <div class="cs_card cs_style_1">
              <div class="cs_card_in cs_white_bg">
                <div class="cs_card_icon cs_center cs_mb_30">
                  <img src="assets/img/icons/how_to_work_icon_3.svg" alt=""/>
                </div>
                <h3 class="cs_fs_24 cs_semibold cs_mb_6">Air Flow Solutions</h3>
                <p class="cs_fs_14 cs_mb_25">Our Quick Cool Installation and service provides fast and cooling efficient installation </p>
                <a href="about-us.html" class="cs_text_btn cs_fs_14 text-uppercase cs_heading_color cs_bold">
                  READ MORE
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.28125 1.21875L13.7812 6.46875C13.9271 6.61458 14 6.79167 14 7C14 7.20833 13.9271 7.38542 13.7812 7.53125L8.28125 12.7812C7.90625 13.0729 7.55208 13.0729 7.21875 12.7812C6.92708 12.4062 6.92708 12.0521 7.21875 11.7188L11.375 7.75H0.75C0.291667 7.70833 0.0416667 7.45833 0 7C0.0416667 6.54167 0.291667 6.29167 0.75 6.25H11.375L7.21875 2.28125C6.92708 1.94792 6.92708 1.59375 7.21875 1.21875C7.55208 0.927083 7.90625 0.927083 8.28125 1.21875Z" fill="currentColor"></path>
                  </svg>                    
                </a>
              </div>
              <div class="cs_card_shape">
                <svg width="305" height="145" viewBox="0 0 305 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M274.465 30.698L35.5518 41.3918L0 6.19539V120.27C0 133.924 11.1913 145 24.9875 145H280.012C293.809 145 305 133.924 305 120.27V0.478516L274.465 30.698Z" fill="currentColor"/>
                </svg>                  
              </div>
            </div>
          </div>
          <div class="cs_card_1_col">
            <div class="cs_card cs_style_1 cs_type_1">
              <div class="cs_card_in cs_white_bg">
                <h3 class="cs_fs_24 cs_semibold cs_mb_6">Emergency Service</h3>
                <p class="cs_fs_14 cs_mb_25">We handle everything from and assessing your cooling needs to positioning  Arctic Blast</p>
                <a href="about-us.html" class="cs_text_btn cs_fs_14 text-uppercase cs_heading_color cs_bold cs_mb_30">
                  READ MORE
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.28125 1.21875L13.7812 6.46875C13.9271 6.61458 14 6.79167 14 7C14 7.20833 13.9271 7.38542 13.7812 7.53125L8.28125 12.7812C7.90625 13.0729 7.55208 13.0729 7.21875 12.7812C6.92708 12.4062 6.92708 12.0521 7.21875 11.7188L11.375 7.75H0.75C0.291667 7.70833 0.0416667 7.45833 0 7C0.0416667 6.54167 0.291667 6.29167 0.75 6.25H11.375L7.21875 2.28125C6.92708 1.94792 6.92708 1.59375 7.21875 1.21875C7.55208 0.927083 7.90625 0.927083 8.28125 1.21875Z" fill="currentColor"></path>
                  </svg>                    
                </a>
                <div class="cs_card_icon cs_center">
                  <img src="assets/img/icons/how_to_work_icon_4.svg" alt=""/>
                </div>
              </div>
              <div class="cs_card_shape">
                <svg width="305" height="146" viewBox="0 0 305 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M274.465 115.014L35.5518 104.253L0 139.669V24.883C0 11.1442 11.1913 -0.000549316 24.9875 -0.000549316H280.012C293.809 -0.000549316 305 11.1442 305 24.883V145.422L274.465 115.014Z" fill="currentColor"/>
                </svg>                                   
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cs_height_120 cs_height_lg_70"></div>
    </section> */}

      {/* <section
        className="hero-section hero-1 bg-cover fix"
        style={{ backgroundImage: 'url("assets/img/hero/01.png")' }}
      >
        <div className="container">
          <div className="row g-4  justify-content-between">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="wow fadeInUp " data-wow-delay=".2s">
                  Spécialisé en électricité,<br></br> informatique et
                  technologies de sécurité.
                </h1>
                <div className="hero-button">
                  <Link
                    href="/"
                    className="theme-btn hover-white wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    Get Started Now <i className="far fa-arrow-right" />
                  </Link>
                  <Link
                    href="/service"
                    className="btn-link wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    Voir les services <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div
                  className="hero-client d-flex align-items-center gap-4 mt-50 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <img src="assets/img/hero/client.png" alt="img" />
                  <p className="text-white">
                    Trusted by 1M+ people <br />
                    around the globe
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 wow fadeInUp" data-wow-delay=".4s">
              <div className="hero-contact-box">
                <h4>Obtenir des consultations</h4>
                <p>Prêt à enregistrer nos services Landsio</p>
                <form
                  action="#"
                  id="contact-form"
                  method="POST"
                  className="contact-form-item"
                >
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Votre nom"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          placeholder="Adresse électronique"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          placeholder="Numéro de téléphone"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="theme-btn hover-white">
                      Commencer maintenant <i className="far fa-arrow-right" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}
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
                          src="assets/img/about/about2.png"
                          alt="about-img"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".4s">
                      <div className="about-image">
                        <img
                          src="assets/img/about/about1.png"
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
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      PIOLEC : Électricité, Informatique et Sécurité
                    </h2>
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
      <Service2 paddingTop={5} title="Our Services" />

      {/* Cta Video Section Start */}
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
      <section className="case-study-section fix section-padding theme-bg">
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
                {/* <img src="assets/img/bale.png" alt="img" /> */}
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
      </section>
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
      {/* News Section Start */}
      <Faq/>

      <section className="news-section section-padding pt-0 mt-20">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              {/* <img src="assets/img/bale.png" alt="img" /> */}
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
      </section>
    </NextLayout>
  );
};
export default page;
