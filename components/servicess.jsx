import Link from "next/link";

export const Start = () => {
    return (
        <section className="about-section fix section-padding">
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4 align-items-center justify-content-between">
              <div className="col-lg-5">
                <div className="about-content ms-0">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="assets/img/bale.png" alt="img" />
                      Problèmes Solutions
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Votre succès, notre électricité de confiance
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Chez PIOLEC, nous mettons notre expertise à votre service
                    pour des installations électriques sûres, efficaces et
                    conformes aux normes. Que ce soit pour un projet
                    résidentiel, industriel ou commercial, nous vous
                    accompagnons de l&apos;étude à la réalisation, en garantissant
                    qualité et fiabilité à chaque étape.
                  </p>
                  <ul className="about-list wow fadeInUp" data-wow-delay=".3s">
                    <li>
                      <i className="fas fa-check" />
                      Connectez-vous à des solutions électriques sans tracas.
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Profitez de services rapides et fiables.
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Trouvez des solutions qui répondent à vos besoins en un
                      temps record.
                    </li>
                  </ul>
                  <div
                    className="about-button mt-5 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <Link href="about" className="theme-btn">
                      En savoir plus sur nous
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-image-items-4">
                  <div className="experience-items">
                    <h6>
                      Plus de 400 clients au Maroc et au-delà lui font
                      confiance.
                    </h6>
                    <img src="assets/img/about/face-mans.png" alt="img" />
                    <h2>
                      <span className="count">
                        <Counter end={5} />
                      </span>
                      +
                    </h2>
                    <p>Années d&apos;expérience</p>
                  </div>
                  <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                      <div className="row g-4">
                        <div
                          className="col-md-12 wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div className="about-thumbs">
                            <img src="assets/img/about/07.jpg" alt="img" />
                          </div>
                        </div>
                        <div
                          className="col-md-12 wow fadeInUp"
                          data-wow-delay=".5s"
                        >
                          <div className="about-thumbs">
                            <img src="assets/img/about/08.jpg" alt="img" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".7s">
                      <div className="about-thumbs">
                        <img src="assets/img/about/09.jpg" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

export const Start2 = () => {
    return (
        <section className="about-section fix section-padding">
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4 align-items-center justify-content-between">
              <div className="col-lg-5">
                <div className="about-content ms-0">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="assets/img/bale.png" alt="img" />
                      Problèmes Solutions
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Votre succès, notre électricité de confiance
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Chez PIOLEC, nous mettons notre expertise à votre service
                    pour des installations électriques sûres, efficaces et
                    conformes aux normes. Que ce soit pour un projet
                    résidentiel, industriel ou commercial, nous vous
                    accompagnons de l&apos;étude à la réalisation, en garantissant
                    qualité et fiabilité à chaque étape.
                  </p>
                  <ul className="about-list wow fadeInUp" data-wow-delay=".3s">
                    <li>
                      <i className="fas fa-check" />
                      Connectez-vous à des solutions électriques sans tracas.
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Profitez de services rapides et fiables.
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Trouvez des solutions qui répondent à vos besoins en un
                      temps record.
                    </li>
                  </ul>
                  <div
                    className="about-button mt-5 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <Link href="about" className="theme-btn">
                      En savoir plus sur nous
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-image-items-4">
                  <div className="experience-items">
                    <h6>
                      Plus de 400 clients au Maroc et au-delà lui font
                      confiance.
                    </h6>
                    <img src="assets/img/about/face-mans.png" alt="img" />
                    <h2>
                      <span className="count">
                        <Counter end={5} />
                      </span>
                      +
                    </h2>
                    <p>Années d&apos;expérience</p>
                  </div>
                  <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                      <div className="row g-4">
                        <div
                          className="col-md-12 wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div className="about-thumbs">
                            <img src="assets/img/about/07.jpg" alt="img" />
                          </div>
                        </div>
                        <div
                          className="col-md-12 wow fadeInUp"
                          data-wow-delay=".5s"
                        >
                          <div className="about-thumbs">
                            <img src="assets/img/about/08.jpg" alt="img" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".7s">
                      <div className="about-thumbs">
                        <img src="assets/img/about/09.jpg" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

// export const WorkingProcess = ({title1,title2,title3,title4,desc1,desc2,desc3,desc4}) => {
// return (
//       <section className="working-section-2 section-padding">
//         <div className="container">
//           <div className="section-title text-center">
//             <span className="sub-content wow fadeInUp">
//               <img src="assets/img/bale.png" alt="img" />
//               Processus de travail
//             </span>
//             <h2 className="wow fadeInUp" data-wow-delay=".3s">
//             Nous achevons notre travail pour suivre <br />
//             Quelques moyens simples
//             </h2>
//           </div>
//           <div className="row align-items-center justify-content-between">
//             <div className="col-lg-8 wow fadeInUp" data-wow-delay=".3s">
//               <div className="working-card-items">
//                 {/* <div className="icon">
//                   <img src="assets/img/working-process/icon-1.png" alt="img" />
//                 </div> */}
//                 <div className="content">
//                   <span className="sub-title">Étape 01</span>
//                   <h3>{title1}</h3>
//                   <p>
//                     {desc1}
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-3 wow fadeInUp" data-wow-delay=".5s">
//               <div className="arrow-image">
//                 <img src="assets/img/working-process/arrow-down.png" alt="img" />
//               </div>
//             </div>
//             <div className="col-lg-3 wow fadeInUp" data-wow-delay=".3s">
//               <div className="arrow-image text-center">
//                 <img
//                   src="assets/img/working-process/arrow-revers.png"
//                   alt="img"
//                 />
//               </div>
//             </div>
//             <div className="col-lg-8 wow fadeInUp" data-wow-delay=".5s">
//               <div className="working-card-items">
//                 <div className="content">
//                   <span className="sub-title">Étape 02</span>
//                   <h3>{title2}</h3>
//                   <p>
//                    {desc2}
//                   </p>
//                 </div>
//                 {/* <div className="icon">
//                   <img src="assets/img/working-process/icon-2.png" alt="img" />
//                 </div> */}
//               </div>
//             </div>
//             <div className="col-lg-8 wow fadeInUp" data-wow-delay=".3s">
//               <div className="working-card-items">
//                 {/* <div className="icon">
//                   <img src="assets/img/working-process/icon-3.png" alt="img" />
//                 </div> */}
//                 <div className="content">
//                   <span className="sub-title">Étape 03</span>
//                   <h3>{title3}</h3>
//                   <p>
//                   {desc3}
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-3 wow fadeInUp" data-wow-delay=".5s">
//               <div className="arrow-image">
//                 <img src="assets/img/working-process/arrow-down.png" alt="img" />
//               </div>
//             </div>
//             <div className="col-lg-3 wow fadeInUp" data-wow-delay=".3s">
//               <div className="arrow-image text-center">
//                 <img
//                   src="assets/img/working-process/arrow-revers.png"
//                   alt="img"
//                 />
//               </div>
//             </div>
//             <div className="col-lg-8 wow fadeInUp" data-wow-delay=".5s">
//               <div className="working-card-items">
//                 <div className="content">
//                   <span className="sub-title">Étape 04</span>
//                   <h3>{title4}</h3>
//                   <p>
//                     {desc4}
//                   </p>
//                 </div>
//                 {/* <div className="icon">
//                   <img src="assets/img/working-process/icon-4.png" alt="img" />
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
// );
// };

// export const WorkingProcess2 = () => {
//     return (
//       <section className="working-process-section section-padding pt-0">
//         <div className="container">
//           <div className="section-title text-center">
//             <span className="sub-content wow fadeInUp">
//               <img src="assets/img/bale.png" alt="img" />
//               Nos Valeurs
//             </span>
//           </div>
//           <div className="about-content text-center">
//             <h4 className="wow fadeInUp" data-wow-delay=".3s">
//               Chez PIOLEC, nous plaçons la satisfaction de nos clients au cœur de
//               notre démarche. Nos valeurs fondamentales sont :
//             </h4>
//           </div>
//           <div className="work-process-wrapper">
//             <div className="row align-items-center">
//               <div className="col-lg-6">
//                 <div className="work-process-content">
//                   <div
//                     className="work-process-items wow fadeInUp"
//                     data-wow-delay=".3s"
//                   >
//                     <div className="digit-box">01</div>
//                     <h4>Écoute et Compréhension </h4>
//                     <p>
//                       Nous sommes à l'écoute de nos clients pour comprendre leurs
//                       besoins et leur proposer des solutions adaptées.
//                     </p>
//                   </div>
//                   <div
//                     className="work-process-items wow fadeInUp"
//                     data-wow-delay=".5s"
//                   >
//                     <div className="digit-box">02</div>
//                     <h4>Engagement et Fiabilité</h4>
//                     <p>
//                       Nous tenons nos promesses en respectant les délais, les
//                       budgets et les normes de qualité convenus.
//                     </p>
//                   </div>
//                   <div
//                     className="work-process-items wow fadeInUp"
//                     data-wow-delay=".7s"
//                   >
//                     <div className="digit-box">03</div>
//                     <h4>Innovation et Évolution</h4>
//                     <p>
//                       Nous proposons des solutions évolutives qui créent une
//                       réelle valeur ajoutée pour nos clients et les aident à se
//                       développer.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-6">
//                 <div
//                   className="work-process-image wow fadeInUp"
//                   data-wow-delay=".4s"
//                 >
//                   <img src="assets/img/business-mens-grsl.jpg" alt="img" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   };
  