import Link from "next/link";

const Cta = ({ sectionPadding = false ,h2,p }) => {
  return (
    <section
      className={`cta-marketing-section fix ${
        sectionPadding ? "section-padding" : ""
      }`}
    >
      <div className="container">
        <div className="cta-marketing-wrapper">
          <div className="content">
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
            
            {h2}
            </h2>
            <p className="text-white wow fadeInUp" data-wow-delay=".5s">
            
            {p}
            </p>
          </div>
          <div className="thumb wow fadeInUp" data-wow-delay=".6s">
            <img src="assets/img/cta/cta-marketing.png" alt="img" />
            <div className="circle-shape">
              <img src="assets/img/cta/circle-shape.png" alt="shape-img" />
            </div>
          </div>
          <Link
            href="/about"
            className="theme-btn bg-2 wow fadeInUp"
            data-wow-delay=".7s"
          >
            Contactez-nous <i className="far fa-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Cta;
