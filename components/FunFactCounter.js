import Counter from "./Counter";
const FunFactCounter = ({ style }) => {
  return (
    <div className="row">
      <div
        className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay=".2s"
      >
        <div className={`funfact-box-items style-${style}`}>
          <h2>
            <span className="count">
              <Counter end={98} />
            </span>
            %
          </h2>
          <h6>Satisfaction Client</h6>
          <p>
          Des solutions sur mesure pour des résultats exceptionnels.
          </p>
        </div>
      </div>
      <div
        className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay=".4s"
      >
        <div className={`funfact-box-items active`}>
          <h2>
            <span className="count">
              <Counter end={35} />
            </span>
            m+
          </h2>
          <h6>Projets Réussis</h6>
          <p>Plus de 35 projets réalisés avec succès à travers le Maroc.</p>
        </div>
      </div>
      <div
        className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay=".6s"
      >
        <div className={`funfact-box-items style-${style}`}>
          <h2>
            <span className="count">
              <Counter end={97} />
            </span>
            %
          </h2>
          <h6>Avis Positifs</h6>
          <p>La confiance de nos clients témoigne de notre professionnalisme.</p>
        </div>
      </div>
      <div
        className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay=".8s"
      >
        <div className={`funfact-box-items style-${style}`}>
          <h2>
            <span className="count">
              <Counter end={92} />
            </span>
            %
          </h2>
          <h6>Équipe Certifiée</h6>
          <p>Des experts certifiés pour des services de qualité supérieure.</p>
        </div>
      </div>
    </div>
  );
};
export default FunFactCounter;
