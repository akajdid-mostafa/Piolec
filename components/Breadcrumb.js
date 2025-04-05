import Link from "next/link";

const Breadcrumb = ({
  pageName = "À propos de l'entreprise",
  pageTitle,
  headingTag = "h1",
  backgroundImage = "assets/img/breadcrumb.png", // Default image URL
  backgroundCover = true, // New prop with default true
}) => {
  // Create a dynamic heading element based on the prop
  const HeadingTag = headingTag;
  const backgroundClass = backgroundCover ? "bg-cover" : "bg-coverr";

  return (
    <div
    className={`breadcrumb-wrapper section-padding ${backgroundClass}`}
      style={{ backgroundImage: `url(${backgroundImage})` }} // Use dynamic image URL
    >
      <div className="container">
        <div className="page-heading">
          <HeadingTag className="wow fadeInUp text-white" data-wow-delay=".3s">
            {pageTitle ? pageTitle : pageName}
          </HeadingTag>
          {/* <ul className="breadcrumb-items  wow fadeInUp" data-wow-delay=".5s">
            <li>
              <Link href="/" >Home</Link>
            </li>
            <li>
              <i className="fas fa-chevron-right" />
            </li>
            <li className="style-2">{pageName}</li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;