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

const Menu = ({ menu }) => {
  const singleMenu = menu
    ? menu
    : [
        { id: 1, href: "/A_propos", title: "A propos" },
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
            </Link>
          </li>
          <li className="has-dropdown active d-xl-none">
            <Link href="/" className="border-none">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/A_propos">A propos</Link>
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
            <Link href="/Projets">Projets</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };

  return (
    <div className="mobile-menu fix mb-3 mean-container d-block d-xl-none">
      <div className="mean-bar">
        <nav className="mean-nav">
          <ul>
            <li className="has-dropdown active d-xl-none">
              <Link href="/" className="border-none">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/A_propos">A propos</Link>
            </li>
            <li>
              <a href="/service" onClick={() => activeMenuSet("Services")}>
                <span>Services</span>
                <i className="fas fa-angle-down" />
              </a>
              <ul className="mean-navv" style={activeLi("Services")}>
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
              <Link href="/Projets">Projets</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

const Sidebar = ({ sidebarToggle, close }) => {
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
                <MobileMenu />
              </div>
              <p className="text d-none d-xl-block mb-5">
                PIOLEC, entreprise Marocaine opérant dans les domaines
                D&apos;électricité & Informatique, et automatisme et des
                systèmes de sécurités, ayant comme vocation, réalisation des
                prestations :
              </p>
              <div className="offcanvas__contact d-none d-xl-block ">
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
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+11002345909">0662241871 / 0666491605</a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="offcanvas__contact  ">
                <div className="header-button mt-4">
                  <Link
                    href="/contact"
                    className="theme-btn hover-white text-center"
                  >
                    Nous contacter
                  </Link>
                </div>
                <div className="social-icon d-flex align-items-center padding-soc">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
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

const Header1 = ({ single }) => {
  const singleMenu = [
    { id: 1, href: "/A_propos", title: "About" },
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
