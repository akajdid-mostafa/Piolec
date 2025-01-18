import Counter from "./Counter";

const funFactData = [
  {
    id: 1,
    endValue: 98,
    unit: "%",
    title: "Satisfaction Client",
    description: "Des solutions sur mesure pour des résultats exceptionnels.",
    delay: ".2s",
    active: false,
  },
  {
    id: 2,
    endValue: 35,
    unit: "m+",
    title: "Projets Réussis",
    description: "Plus de 35 projets réalisés avec succès à travers le Maroc.",
    delay: ".4s",
    active: true,
  },
  {
    id: 3,
    endValue: 97,
    unit: "%",
    title: "Avis Positifs",
    description: "La confiance de nos clients témoigne de notre professionnalisme.",
    delay: ".6s",
    active: false,
  },
  {
    id: 4,
    endValue: 92,
    unit: "%",
    title: "Équipe Certifiée",
    description: "Des experts certifiés pour des services de qualité supérieure.",
    delay: ".8s",
    active: false,
  },
];

const FunFactCounter = ({ style }) => {
  return (
    <div className="row">
      {funFactData.map((item) => (
        <div
          key={item.id}
          className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
          data-wow-delay={item.delay}
        >
          <div
            className={`funfact-box-items ${item.active ? "active" : `style-${style}`}`}
            style={{ height: "100%" }} // Ensure all cards have the same height
          >
            <h2>
              <span className="count">
                <Counter end={item.endValue} />
              </span>
              {item.unit}
            </h2>
            <h6>{item.title}</h6>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FunFactCounter;