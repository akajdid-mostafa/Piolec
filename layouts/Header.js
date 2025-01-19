"use client";
import { nextUtility } from "@/utility";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

const Header = ({ header, single }) => {
  useEffect(() => {
    nextUtility.stickyNav();
  }, []);

  switch (header) {
    case 1:
      return <Header1 single={single} />;
    default:
      return <Header1 single={single} />;
  }
};
export default Header;

const Menu = ({ single, menu }) => {
  const singleMenu = menu
    ? menu
    : [
        { id: 1, href: "/about", title: "A propos" },
        { id: 2, href: "/services", title: "Services" },
        { id: 3, href: "/team", title: "L'équipe " },
        { id: 4, href: "/blog", title: "Blog" },
      ];
  return (
    <Fragment>
      <nav id="mobile-menu" className="d-none d-xl-block">
        <ul>
          <li className="has-dropdown active menu-thumb">
            <Link href="/">
              Accueil
              {/* <i className="fas fa-angle-down" /> */}
            </Link>
            {/* <ul className="submenu has-homemenu">
                <li className="border-none">
                  <div className="row g-4">
                    <div className="col-xl-2 homemenu">
                      <div className="homemenu-thumb">
                        <img src="assets/img/header/home-1.jpg" alt="img" />
                        <div className="demo-button">
                          <Link href="/" className="theme-btn">
                            Multi Page
                          </Link>
                          <Link href="/index-one-page" className="theme-btn">
                            One Page
                          </Link>
                        </div>
                      </div>
                      <div className="homemenu-content text-center">
                        <h4 className="homemenu-title">Home 01</h4>
                      </div>
                    </div>
                    <div className="col-xl-2  homemenu">
                      <div className="homemenu-thumb">
                        <img src="assets/img/header/home-2.jpg" alt="img" />
                        <div className="demo-button">
                          <Link href="index-2" className="theme-btn">
                            Multi Page
                          </Link>
                          <Link href="/index-two-page" className="theme-btn">
                            One Page
                          </Link>
                        </div>
                      </div>
                      <div className="homemenu-content text-center">
                        <h4 className="homemenu-title">Home 02</h4>
                      </div>
                    </div>
                    <div className="col-xl-2 homemenu">
                      <div className="homemenu-thumb">
                        <img src="assets/img/header/home-3.jpg" alt="img" />
                        <div className="demo-button">
                          <Link href="/index-3" className="theme-btn">
                            Multi Page
                          </Link>
                          <Link href="/index-three-page" className="theme-btn">
                            One Page
                          </Link>
                        </div>
                      </div>
                      <div className="homemenu-content text-center">
                        <h4 className="homemenu-title">Home 03</h4>
                      </div>
                    </div>
                    <div className="col-xl-2 homemenu">
                      <div className="homemenu-thumb">
                        <img src="assets/img/header/home-4.jpg" alt="img" />
                        <div className="demo-button">
                          <Link href="/index-4" className="theme-btn">
                            Multi Page
                          </Link>
                          <Link href="/index-four-page" className="theme-btn">
                            One Page
                          </Link>
                        </div>
                      </div>
                      <div className="homemenu-content text-center">
                        <h4 className="homemenu-title">Home 04</h4>
                      </div>
                    </div>
                    <div className="col-xl-2 homemenu">
                      <div className="homemenu-thumb">
                        <img src="assets/img/header/home-5.jpg" alt="img" />
                        <div className="demo-button">
                          <Link href="/index-5" className="theme-btn">
                            Multi Page
                          </Link>
                          <Link href="/index-five-page" className="theme-btn">
                            One Page
                          </Link>
                        </div>
                      </div>
                      <div className="homemenu-content text-center">
                        <h4 className="homemenu-title">Home 05</h4>
                      </div>
                    </div>
                    <div className="col-xl-2 homemenu">
                      <div className="homemenu-thumb">
                        <img src="assets/img/header/home-6.jpg" alt="img" />
                        <div className="demo-button">
                          <Link href="/index-6" className="theme-btn">
                            Multi Page
                          </Link>
                          <Link href="/index-six-page" className="theme-btn">
                            One Page
                          </Link>
                        </div>
                      </div>
                      <div className="homemenu-content text-center">
                        <h4 className="homemenu-title">Home 06</h4>
                      </div>
                    </div>
                  </div>
                </li>
              </ul> */}
          </li>
          <li className="has-dropdown active d-xl-none">
            <Link href="/" className="border-none">
              Accueil
              {/* <i className="fas fa-angle-down" /> */}
            </Link>
            {/* <ul className="submenu">
                <li>
                  <Link href="/">Home 01</Link>
                </li>
                <li>
                  <Link href="/index-2">Home 02</Link>
                </li>
                <li>
                  <Link href="/index-3">Home 03</Link>
                </li>
                <li>
                  <Link href="/index-4">Home 04</Link>
                </li>
                <li>
                  <Link href="/index-5">Home 05</Link>
                </li>
                <li>
                  <Link href="/index-6">Home 06</Link>
                </li>
              </ul> */}
          </li>
          <li>
            <Link href="/about">A propos</Link>
          </li>
          <li>
            <Link href="/service">
              Services
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu">
              <li>
                <Link href="/service#electricite_automatisme">
                  Electricité & Automatisme
                </Link>
              </li>
              <li>
                <Link href="/service#contrôle_dacces_surveillance">
                  Contrôle d'accès & Surveillance
                </Link>
              </li>
              <li>
                <Link href="/service#detection_incendie_intrusion">
                  Détection incendie & intrusion
                </Link>
              </li>
              <li>
                <Link href="/service#precablage_informatique">
                  Precablage informatique
                </Link>
              </li>
              <li>
                <Link href="/service#energies_renouvelables_travaux_divers">
                  Energies renouvelables
                </Link>
              </li>
              <li>
                <Link href="/service#maintenance_sav">Maintenance & S.A.V</Link>
              </li>
              <li>
                <Link href="/service#travaux-divers">Travaux divers</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/project">Projets</Link>
          </li>
          {/* <li className="has-dropdown">
            <Link href="/news">
              Pages
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu">
              <li className="has-dropdown">
                <Link href="/project-details">
                  Projects
                  <i className="fas fa-angle-down" />
                </Link>
                <ul className="submenu">
                  <li>
                    <Link href="/project">Projects</Link>
                  </li>
                  <li>
                    <Link href="/project-details">Project Details</Link>
                  </li>
                </ul>
              </li>
              <li className="has-dropdown">
                <Link href="team-details">
                  Team
                  <i className="fas fa-angle-down" />
                </Link>
                <ul className="submenu">
                  <li>
                    <Link href="team">Team</Link>
                  </li>
                  <li>
                    <Link href="team-details">Team Details</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/pricing">Pricing Table</Link>
              </li>
              <li>
                <Link href="/404">404 Page</Link>
              </li>
            </ul>
          </li> */}
          <li>
            <Link href="/news">
              Blog
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu">
              <li>
                <Link href="/news">Blog </Link>
              </li>
              <li>
                <Link href="/news-details">Détails du blog</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

const MobileMenu = ({ single, menu }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  const multiMenuSet = (value) =>
      setMultiMenu(multiMenu === value ? "" : value),
    multiMenuActiveLi = (value) =>
      value === multiMenu ? { display: "block" } : { display: "none" };
  const singleMenu = menu
    ? menu
    : [
        { id: 1, href: "/about", title: "A propos" },
        { id: 2, href: "/services", title: "Services" },
        { id: 3, href: "/team", title: "L'équipe" },
        { id: 4, href: "/blog", title: "Blog" },
      ];
  return (
    <div className="mobile-menu fix mb-3 mean-container d-block d-xl-none">
      <div className="mean-bar">
        <a href="#nav" className="meanmenu-reveal">
          <span>
            <span>
              <span />
            </span>
          </span>
        </a>
        <nav className="mean-nav">
          <ul>
            <li className="has-dropdown active d-xl-none">
              <a
                href="#"
                className="border-none"
                onClick={() => activeMenuSet("home")}
              >
                Accueil
                {/* <i className="fas fa-angle-down" /> */}
              </a>
              {/* <ul className="submenu" style={activeLi("home")}>
                <li>
                  <Link href="/">Home 01</Link>
                </li>
                <li>
                  <Link href="/index-2">Home 02</Link>
                </li>
                <li>
                  <Link href="/index-3">Home 03</Link>
                </li>
                <li>
                  <Link href="/index-4">Home 04</Link>
                </li>
                <li>
                  <Link href="/index-5">Home 05</Link>
                </li>
                <li>
                  <Link href="/index-6">Home 06</Link>
                </li>
              </ul> */}
              {/* <a
                className="mean-expand"
                href="#"
                onClick={() => activeMenuSet("home")}
              >
                 <i className="far fa-plus" /> 
              </a> */}
            </li>
            {single ? (
              <Fragment>
                {singleMenu.map((menu) => (
                  <li key={menu.id}>
                    <a href={`#${menu.href}`}>{menu.title}</a>
                  </li>
                ))}
              </Fragment>
            ) : (
              <Fragment>
                <li>
                  <Link href="/about">A propos</Link>
                </li>
                <li>
                  <a href="#" onClick={() => activeMenuSet("Services")}>
                    Services
                    <i className="fas fa-angle-down" />
                  </a>
                  <ul className="submenu" style={activeLi("Services")}>
                    <li>
                      <Link href="/service#electricite_automatisme">
                        Electricité & Automatisme
                      </Link>
                    </li>
                    <li>
                      <Link href="/service#contrôle_dacces_surveillance">
                        Contrôle d'accès & Surveillance
                      </Link>
                    </li>
                    <li>
                      <Link href="/service#detection_incendie_intrusion">
                        Détection incendie & intrusion
                      </Link>
                    </li>
                    <li>
                      <Link href="/service#precablage_informatique">
                        Precablage informatique
                      </Link>
                    </li>
                    <li>
                      <Link href="/service#energies_renouvelables_travaux_divers">
                        Energies renouvelables
                      </Link>
                    </li>
                    <li>
                      <Link href="/service#maintenance_sav">
                        Maintenance & S.A.V
                      </Link>
                    </li>
                    <li>
                      <Link href="/service#travaux-divers">Travaux divers</Link>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="#"
                    onClick={() => activeMenuSet("Services")}
                  >
                    <i className="far fa-plus" />
                  </a>
                </li>
                <li>
                  <Link href="/project">Projets</Link>
                </li>
                {/* <li className="has-dropdown">
                  <a href="#" onClick={() => activeMenuSet("Pages")}>
                  Projects
                    <i className="fas fa-angle-down" />
                  </a>
                  <ul className="submenu" style={activeLi("Pages")}>
                    <li className="has-dropdown">
                      <a href="#" onClick={() => multiMenuSet("Projects")}>
                        Projects
                        <i className="fas fa-angle-down" />
                      </a>
                      <ul
                        className="submenu"
                        style={multiMenuActiveLi("Projects")}
                      >
                        <li>
                          <Link href="/project">Projects</Link>
                        </li>
                        <li>
                          <Link href="/project-details">Project Details</Link>
                        </li>
                      </ul>
                      <a
                        className="mean-expand"
                        href="#"
                        onClick={() => multiMenuSet("Projects")}
                      >
                        <i className="far fa-plus" />
                      </a>
                    </li>
                    <li className="has-dropdown">
                      <a href="#" onClick={() => multiMenuSet("Team")}>
                        Team
                        <i className="fas fa-angle-down" />
                      </a>
                      <ul className="submenu" style={multiMenuActiveLi("Team")}>
                        <li>
                          <Link href="/team">Team</Link>
                        </li>
                        <li>
                          <Link href="/team-details">Team Details</Link>
                        </li>
                      </ul>
                      <a
                        className="mean-expand"
                        href="#"
                        onClick={() => multiMenuSet("Team")}
                      >
                        <i className="far fa-plus" />
                      </a>
                    </li>
                    <li>
                      <Link href="/pricing">Pricing Table</Link>
                    </li>
                    <li>
                      <Link href="/404">404 Page</Link>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="#"
                    onClick={() => activeMenuSet("Pages")}
                  >
                    <i className="far fa-plus" />
                  </a>
                </li> */}
                <li>
                  <a href="#" onClick={() => activeMenuSet("Blog")}>
                    Blog
                    <i className="fas fa-angle-down" />
                  </a>
                  <ul className="submenu" style={activeLi("Blog")}>
                    <li>
                      <Link href="/news">Blog </Link>
                    </li>
                    <li>
                      <Link href="/news-details">Détails du blog</Link>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="#"
                    onClick={() => activeMenuSet("Blog")}
                  >
                    <i className="far fa-plus" />
                  </a>
                </li>
                <li className="mean-last">
                  <Link href="/contact">Contact</Link>
                </li>
              </Fragment>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

const Sidebar = ({ sidebarToggle, close, menu, single }) => {
  return (
    <Fragment>
      <div className="fix-area">
        <div className={`offcanvas__info ${sidebarToggle ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <img src="/assets/img/logo/black-logo.svg" alt="logo-img" />
                  </Link>
                </div>
                <div className="offcanvas__close" onClick={() => close()}>
                  <button>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <div className="mobile-menu fix mb-3">
                <MobileMenu single={single} menu={menu} />
              </div>
              <p className="text d-none d-xl-block mb-5">
                PIOLEC, entreprise Marocaine opérant dans les domaines
                D&apos;électricité & Informatique, et automatisme et des
                systèmes de sécurités, ayant comme vocation, réalisation des
                prestations :
              </p>
              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        61 AV. Lalla yacout, N°39, 1er étage centre riad,
                        casablanca
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:piolec21@outlook.com">
                        piolec21@outlook.com
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        Mod-friday, 09am -05pm
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+11002345909">0662241871 / 0666491605</a>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <Link
                    href="/contact"
                    className="theme-btn hover-white text-center"
                  >
                    Nous contacter
                  </Link>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`offcanvas__overlay ${sidebarToggle ? "overlay-open" : ""}`}
        onClick={() => close()}
      />
    </Fragment>
  );
};

const Header1 = ({ single, menu }) => {
  const singleMenu = [
    { id: 1, href: "/about", title: "About" },
    { id: 2, href: "/services", title: "Services" },
    { id: 3, href: "/projects", title: "Projects" },
    { id: 4, href: "/testimonial", title: "Testimonial" },
  ];

  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <Fragment>
      <header id="header-sticky" className="header-1">
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="sticky-logo">
                <Link href="/">
                  <img src="/assets/img/logo/black-logo.svg" alt="logo-img" />
                </Link>
              </div>
              <div className="header-left">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <Menu single={single} />
                  </div>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="icon-items">
                  <div className="icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="content">
                    <p>Passer un appel</p>
                    <h4>
                      <a href="tel:+00012345688">+2126 62241871</a>
                    </h4>
                  </div>
                </div>
                <div className="header__hamburger d-xl-block my-auto">
                  <div
                    className="sidebar__toggle"
                    onClick={() => setSidebarToggle(true)}
                  >
                    <i className="far fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar
        sidebarToggle={sidebarToggle}
        close={() => setSidebarToggle(false)}
        single={single}
        menu={singleMenu}
      />
    </Fragment>
  );
};
