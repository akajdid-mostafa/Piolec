import Counter from "./Counter";
import Link from "next/link";

const GrowBusiness = ({ paddingTop = 0 }) => {
  return (
    <section
      className={`grow-business-section fix section-padding pt-${paddingTop}`}
    >
      <div className="container">
        <div className="grow-business-wrapper-2">
          <div className="row g-4 justify-content-between">
            <div className="col-lg-5">
              <div
                className="grow-business-image wow fadeInUp"
                data-wow-delay=".3s"
              >
                <img src="assets/img/grow/02.jpg" alt="img" />
                <div
                  className="grap-shape float-bob-x wow fadeInLeft"
                  data-wow-delay=".5s"
                >
                  <img src="assets/img/grow/grap.png" alt="shape-img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="grow-business-content">
                <div className="section-title">
                  <span className="sub-content wow fadeInUp">
                    <img src="assets/img/bale.png" alt="img" />
                    Grandir avec PIOLEC
                  </span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Des solutions innovantes pour la croissance de votre
                    entreprise
                  </h2>
                </div>
                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  Chez PIOLEC, nous fournissons des solutions de pointe en
                  matière d'électricité, d'informatique, d'automatisation et de
                  systèmes de sécurité pour aider votre entreprise à prospérer.
                  Notre expertise garantit des opérations efficaces, une
                  sécurité renforcée et une croissance durable pour votre
                  organisation.
                </p>
                <div className="grow-counting-area">
                  <div
                    className="grow-counting-items wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <h2>
                      <span className="count">
                        <Counter end={90} />
                      </span>
                      %
                    </h2>
                    <p>Efficacité opérationnelle</p>
                  </div>
                  <div
                    className="grow-counting-items wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <h2>
                      <span className="count">
                        <Counter end={95} />
                      </span>
                      %
                    </h2>
                    <p>Customer Satisfaction</p>
                  </div>
                  <div
                    className="grow-counting-items wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <h2>
                      <span className="count">
                        <Counter end={85} />
                      </span>
                      %
                    </h2>
                    <p>Taux de réussite des projets</p>
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
export default GrowBusiness;

export const GrowBusiness2 = ({
  bg,
  title,
  desc,
  firsttitle,
  firstdesc,
  secondtitle,
  seconddesc,
  image,
}) => {
  return (
    <section className={`grow-business-section fix section-padding ${bg}`}>
      <div className="container">
        <div className="grow-business-wrapper">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="grow-content">
                <div className="section-title">
                  <span className="sub-content wow fadeInUp">
                    <img src="assets/img/bale.png" alt="img" />
                    Faites croître votre entreprise
                  </span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    {title}
                  </h2>
                </div>
                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  {desc}
                </p>
                <div className="grow-percent-area">
                  <div className="row g-4">
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".3s">
                      <div className="grow-percent-items">
                        <h2>
                          <span className="count">
                            <Counter end={85} />
                          </span>
                          %
                        </h2>
                        <h3>{firsttitle}</h3>
                        <p>{firstdesc}</p>
                        {/* <div className="vector-shape pt-3">
                          <img src="assets/img/vector.png" alt="img" />
                        </div> */}
                      </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".5s">
                      <div className="grow-percent-items">
                        <h2>
                          <span className="count">
                            <Counter end={15} />
                          </span>
                          %
                        </h2>
                        <h3>{secondtitle}</h3>
                        <p>{seconddesc}</p>
                        {/* <div className="vector-shape pt-3">
                          <img src="assets/img/vector.png" alt="img" />
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
              <div className="grow-image-items">
                {/* <div className="grow-shape float-bob-y">
                  <img src="assets/img/grow/grow-shape.png" alt="shape-img" />
                </div> */}
                <div className="frame-shape">
                  <img src="assets/img/about/0107.png" alt="shape-img" />
                </div>
                <div className="user-shape float-bob-x">
                  <img src="assets/img/about/0106.png" alt="shape-img" />
                </div>
                <div className="grow-image">
                  <img src={image} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
