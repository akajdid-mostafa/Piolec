import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Page introuvable",
  description:
    "La page que vous recherchez n'existe pas ou a été déplacée. Retournez à l'accueil de PIOLEC.",
  path: "/404",
  noIndex: true,
});

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Page introuvable" />
      <div className="error-section fix section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="error-items text-center">
                <div className="error-image wow fadeInUp" data-wow-delay=".3s">
                  <img src="assets/img/error.png" alt="Erreur 404 - page introuvable" />
                </div>
                <Link
                  href="/"
                  className="theme-btn wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <span>
                    Retour à l&apos;accueil
                    <i className="fas fa-chevron-right" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NextLayout>
  );
};
export default page;
