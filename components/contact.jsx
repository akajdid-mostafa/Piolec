"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeCircleCheck, faPhoneVolume, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="Contact" className="contact-container">
      <div className="contact-inner-container">
        <div className="contact-content wow fadeInUp" data-wow-delay=".4s">
          <div className="contact-grid">
            
            {/* Email Card */}
            <div className="contact-card">
              <span className="contact-card-icon">
                <FontAwesomeIcon icon={faEnvelopeCircleCheck} className="contact-card-icon" />
                <p className="contact-card-title">Email</p>
              </span>
              <p className="contact-card-description">Contactez-nous à l'adresse suivante</p>
              <a href="mailto:piolec21@outlook.com" className="contact-card-link">
                piolec21@outlook.com
              </a>
            </div>

            {/* Phone Card */}
            <div className="contact-card">
              <span className="contact-card-icon">
                <FontAwesomeIcon icon={faPhoneVolume} className="contact-card-icon" />
                <p className="contact-card-title">Téléphone</p>
              </span>
              <p className="contact-card-description">Nous Contacter par Téléphone</p>
              <a href="tel:+212662-241871" className="contact-card-link">
                +212 662-241871<br />
                +212 666491605
              </a>
            </div>

            {/* Location Card */}
            <div className="contact-card">
              <span className="contact-card-icon">
                <FontAwesomeIcon icon={faLocationDot} className="contact-card-icon" />
                <p className="contact-card-title">Emplacement</p>
              </span>
              <p className="contact-card-description">Nous Trouver dans Nos Centres</p>
              <a 
                href="https://goo.gl/maps/QcWzYETAh4FS3KTD7" 
                className="contact-card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Siège : </span> Lalla yacout, N°39, 1er étage, casablanca
              </a>
              <a 
                href="https://goo.gl/maps/QcWzYETAh4FS3KTD7" 
                className="contact-card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>succursale : </span> Agadir
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;