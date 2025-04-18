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
            <h3 className="text-white wow fadeInUp" data-wow-delay=".3s">
            {h2}
            </h3>
            <p className="text-white wow fadeInUp" data-wow-delay=".5s">
            {p}
            </p>
          </div>
          <div className="thumb wow fadeInUp" data-wow-delay=".6s">
              <img src="https://res.cloudinary.com/dzqres7rq/image/upload/v1744972853/logo_djbfso.png" alt="img" />
              <div className="circle-shape">
                <img src="https://res.cloudinary.com/dzqres7rq/image/upload/v1744972853/circle-shape_vdgnp4.png" alt="shape-img" />
              </div>
            </div>
          <Link
            href="/contact"
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
