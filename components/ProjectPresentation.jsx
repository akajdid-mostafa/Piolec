"use client";

const ProjectPresentation = () => {
  const projectImages = [
    {
      image: "https://res.cloudinary.com/dzqres7rq/image/upload/v1740869681/IMG_20211110_181929_bxixlk.jpg", // Replace with your actual image paths
      title: "Installation Électrique CFA / CFO",
      description: "Armoire d'automatisme"
    },
    {
      image: "https://res.cloudinary.com/dzqres7rq/image/upload/v1740869681/IMG_20211110_181929_bxixlk.jpg",
      title: "Eclairage extérieur",
      description: "Armoire électrique pour station de pompage"
    }
  ];

  return (
    <section className="case-study-section fix section-paddingg theme-bg">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <span className="sub-content wow fadeInUp">Nos Réalisations</span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              Explorez la créativité et l'engagement qui animent notre travail
            </h2>
          </div>
        </div>
        <div className="row">
          {projectImages.map((project, index) => (
            <div
              key={index}
              className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="case-study-items">
                <div
                  className="project-image"
                  style={{
                    width: "100%" ,
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div className="content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <p className="text-white">Profitez de la visite</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectPresentation;