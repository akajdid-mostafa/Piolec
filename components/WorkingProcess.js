import Link from "next/link";

const WorkingProcess = ({title1,title2,title3,title4,desc1,desc2,desc3,desc4}) => {
  return (
    <section className="working-section-2 section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            Processus de travail
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
          Nous achevons notre travail pour suivre <br />
          Quelques moyens simples
          </h2>
        </div>
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-8 wow fadeInUp" data-wow-delay=".3s">
            <div className="working-card-items">
              {/* <div className="icon">
                <img src="assets/img/working-process/icon-1.png" alt="img" />
              </div> */}
              <div className="content">
                <span className="sub-title">Étape 01</span>
                <h3>{title1}</h3>
                <p>
                  {desc1}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 wow fadeInUp" data-wow-delay=".5s">
            <div className="arrow-image">
              <img src="assets/img/working-process/arrow-down.png" alt="img" />
            </div>
          </div>
          <div className="col-lg-3 wow fadeInUp" data-wow-delay=".3s">
            <div className="arrow-image text-center">
              <img
                src="assets/img/working-process/arrow-revers.png"
                alt="img"
              />
            </div>
          </div>
          <div className="col-lg-8 wow fadeInUp" data-wow-delay=".5s">
            <div className="working-card-items">
              <div className="content">
                <span className="sub-title">Étape 02</span>
                <h3>{title2}</h3>
                <p>
                 {desc2}
                </p>
              </div>
              {/* <div className="icon">
                <img src="assets/img/working-process/icon-2.png" alt="img" />
              </div> */}
            </div>
          </div>
          <div className="col-lg-8 wow fadeInUp" data-wow-delay=".3s">
            <div className="working-card-items">
              {/* <div className="icon">
                <img src="assets/img/working-process/icon-3.png" alt="img" />
              </div> */}
              <div className="content">
                <span className="sub-title">Étape 03</span>
                <h3>{title3}</h3>
                <p>
                {desc3}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 wow fadeInUp" data-wow-delay=".5s">
            <div className="arrow-image">
              <img src="assets/img/working-process/arrow-down.png" alt="img" />
            </div>
          </div>
          <div className="col-lg-3 wow fadeInUp" data-wow-delay=".3s">
            <div className="arrow-image text-center">
              <img
                src="assets/img/working-process/arrow-revers.png"
                alt="img"
              />
            </div>
          </div>
          <div className="col-lg-8 wow fadeInUp" data-wow-delay=".5s">
            <div className="working-card-items">
              <div className="content">
                <span className="sub-title">Étape 04</span>
                <h3>{title4}</h3>
                <p>
                  {desc4}
                </p>
              </div>
              {/* <div className="icon">
                <img src="assets/img/working-process/icon-4.png" alt="img" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WorkingProcess;

export const WorkingProcess2 = () => {
  return (
    <section className="working-process-section section-padding pt-0">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            Nos Valeurs
          </span>
        </div>
        <div className="about-content text-center">
          <h4 className="wow fadeInUp" data-wow-delay=".3s">
            Chez PIOLEC, nous plaçons la satisfaction de nos clients au cœur de
            notre démarche. Nos valeurs fondamentales sont :
          </h4>
        </div>
        <div className="work-process-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="work-process-content">
                <div
                  className="work-process-items wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="digit-box">01</div>
                  <h4>Écoute et Compréhension </h4>
                  <p>
                    Nous sommes à l'écoute de nos clients pour comprendre leurs
                    besoins et leur proposer des solutions adaptées.
                  </p>
                </div>
                <div
                  className="work-process-items wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="digit-box">02</div>
                  <h4>Engagement et Fiabilité</h4>
                  <p>
                    Nous tenons nos promesses en respectant les délais, les
                    budgets et les normes de qualité convenus.
                  </p>
                </div>
                <div
                  className="work-process-items wow fadeInUp"
                  data-wow-delay=".7s"
                >
                  <div className="digit-box">03</div>
                  <h4>Innovation et Évolution</h4>
                  <p>
                    Nous proposons des solutions évolutives qui créent une
                    réelle valeur ajoutée pour nos clients et les aident à se
                    développer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="work-process-image wow fadeInUp"
                data-wow-delay=".4s"
              >
                <img src="assets/img/business-mens-grsl.jpg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
