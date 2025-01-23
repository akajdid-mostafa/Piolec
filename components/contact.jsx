"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeCircleCheck, faPhoneVolume, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const socialLinks = [
  {
    imgSrc: "/images/Footer/facebook.svg",
    link: "https://www.facebook.com/profile.php?id=61567020357925&mibextid=ZbWKwL",
    width: 20,
  },
  {
    imgSrc: "/images/Footer/insta.svg",
    link: "https://www.instagram.com/ocean.connecting",
    width: 28,
  },
  { imgSrc: "/images/Footer/twitter.svg", link: "#", width: 28 },
  {
    imgSrc: "/images/Footer/youtube.svg",
    link: "https://www.youtube.com/results?search_query=ocean+connecting",
    width: 28,
  },
];

const Contact = () => {
  return (
    <div id="Contact" className="contact-container">
      <div className="contact-inner-container">
        <div className="contact-content">
          <div className="contact-grid">
            <ContactCard
              icon={<FontAwesomeIcon icon={faEnvelopeCircleCheck} className="contact-card-icon" />}
              title="Email"
              description="Contactez-nous à l'adresse suivante"
              link="mailto:piolec21@outlook.com"
              linkText="piolec21@outlook.com"
            />
            <ContactCard
              icon={<FontAwesomeIcon icon={faPhoneVolume} className="contact-card-icon" />}
              title="Téléphone"
              description="Nous Contacter par Téléphone"
              link="tel:+212662-241871"
              linkText="+212 662-241871"
            />
            <ContactCard
              icon={<FontAwesomeIcon icon={faLocationDot} className="contact-card-icon" />}
              title="Emplacement"
              description="Nous Trouver dans Nos Centres"
              link="https://goo.gl/maps/QcWzYETAh4FS3KTD7"
              linkText="61 AV. Lalla yacout, N°39, 1er étage centre riad, casablanca"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactCard = ({ icon, title, description, link, linkText }) => (
  <div className="contact-card">
    <span className="contact-card-icon">
      {icon}
      <p className="contact-card-title">{title}</p>
    </span>
    <p className="contact-card-description">{description}</p>
    <a href={link} className="contact-card-link">
      {linkText}
    </a>
  </div>
);

const InputField = ({ placeholder }) => (
  <input className="input-field" placeholder={placeholder} />
);

export default Contact;