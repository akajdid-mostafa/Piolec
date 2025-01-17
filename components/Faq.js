"use client";

import React, { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "Quels sont les services offerts par PIOLEC ?",
    answer:
      "PIOLEC est spécialisée dans les systèmes électriques, les réseaux informatiques, l'automatisation et les systèmes de sécurité. Nous fournissons des services tels que les installations électriques, les systèmes de contrôle d'accès, la détection d'incendie et d'intrusion, le câblage informatique, la vidéosurveillance et les solutions d'énergie renouvelable.",
  },
  {
    id: 2,
    question: "Comment PIOLEC s'assure-t-elle de la qualité de ses services ?",
    answer:
      "PIOLEC assure la qualité en adhérant aux normes de l'industrie, en utilisant des matériaux de haute qualité et en employant des professionnels expérimentés. Nous assurons également une maintenance et une assistance permanentes pour garantir la longévité et les performances optimales de nos installations.",
  },
  {
    id: 3,
    question: "PIOLEC peut-elle prendre en charge des projets industriels de grande envergure ?",
    answer:
      "Oui, PIOLEC a une grande expérience dans la gestion de projets industriels à grande échelle. Nous fournissons des solutions personnalisées pour l'électricité industrielle, l'automatisation et les systèmes de sécurité, en veillant à ce que tous les projets soient achevés dans les délais et dans les limites du budget.",
  },
  {
    id: 4,
    question: "PIOLEC fournit-elle des services de maintenance ?",
    answer:
      "Oui, PIOLEC offre un service complet de maintenance et de service après-vente (S.A.V.) pour toutes ses installations. Notre équipe veille à ce que vos systèmes électriques et de sécurité restent dans un état optimal grâce à des inspections régulières et des réparations opportunes.",
  },
  {
    id: 5,
    question: "Quels sont les types de systèmes de sécurité installés par PIOLEC ?",
    answer:
      "PIOLEC installe une large gamme de systèmes de sécurité, y compris des systèmes de contrôle d'accès, des systèmes de détection d'incendie et d'intrusion, et des systèmes de vidéosurveillance. Nous proposons également des solutions de gestion centralisée des issues de secours et des systèmes d'accès biométriques.",
  },
];

const Faq = () => {
  // Initialize openIndex to 0 to open the first question by default
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            Quelques questions
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
          Questions fréquemment posées
          </h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="faq-content">
              <div className="faq-accordion">
                <div className="accordion" id="accordion">
                  {faqData.map((item, index) => (
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay=".3s"
                      key={item.id}
                    >
                      <h4 className="accordion-header">
                        <button
                          className={`accordion-button ${
                            openIndex === index ? "" : "collapsed"
                          }`}
                          type="button"
                          onClick={() => toggleAccordion(index)}
                          aria-expanded={openIndex === index}
                          aria-controls={`faq${item.id}`}
                        >
                          {item.question}
                        </button>
                      </h4>
                      <div
                        id={`faq${item.id}`}
                        className={`accordion-collapse collapse ${
                          openIndex === index ? "show" : ""
                        }`}
                      >
                        <div className="accordion-body">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;