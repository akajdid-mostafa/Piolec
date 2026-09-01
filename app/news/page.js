import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Actualités & Conseils Électriques",
  description:
    "Retrouvez les dernières actualités de PIOLEC : conseils en installation électrique CFA/CFO, systèmes de sécurité, réseaux informatiques et automatisme industriel au Maroc.",
  path: "/news",
  keywords: [
    "actualités électricité Maroc",
    "conseils installation électrique",
    "sécurité électrique bâtiment",
    "automatisme industriel Maroc",
  ],
  noIndex: true,
});

const articles = [
  {
    id: 1,
    image: "assets/img/news/post-1.jpg",
    category: "Installation Électrique",
    date: "15 Juin 2025",
    title:
      "L'importance du câblage CFA/CFO dans les bâtiments modernes au Maroc",
    excerpt:
      "Le câblage CFA (Courants Faibles et Analogiques) et CFO (Courants Forts) constitue la colonne vertébrale de tout bâtiment moderne. Une installation bien planifiée garantit la sécurité des occupants, la performance des équipements et la conformité aux normes marocaines NM 03-5-226.",
  },
  {
    id: 2,
    image: "assets/img/news/post-2.jpg",
    category: "Systèmes de Sécurité",
    date: "02 Juin 2025",
    title:
      "Vidéosurveillance et contrôle d'accès : protégez votre entreprise efficacement",
    excerpt:
      "Dans un contexte où la sécurité des locaux professionnels est primordiale, PIOLEC propose des solutions intégrées de vidéosurveillance IP et de contrôle d'accès biométrique, adaptées aux PME, industries et bâtiments résidentiels partout au Maroc.",
  },
  {
    id: 3,
    image: "assets/img/news/post-6.jpg",
    category: "Réseaux Informatiques",
    date: "20 Mai 2025",
    title: "Pré-câblage informatique : la clé d'une infrastructure réseau performante",
    excerpt:
      "Un pré-câblage structuré bien conçu est essentiel pour toute entreprise souhaitant disposer d'un réseau informatique fiable et évolutif. PIOLEC réalise vos installations de câblage structuré cat. 6 et fibre optique selon les standards TIA-568 et ISO 11801.",
  },
  {
    id: 4,
    image: "assets/img/news/post-3.jpg",
    category: "Automatisme",
    date: "10 Mai 2025",
    title: "Automatisme industriel : optimisez vos processus de production",
    excerpt:
      "L'automatisation des processus industriels permet de réduire les coûts, d'augmenter la productivité et d'améliorer la qualité de production. PIOLEC maîtrise la programmation d'automates (API), la supervision SCADA et l'intégration de systèmes variateurs de vitesse.",
  },
  {
    id: 5,
    image: "assets/img/news/post-7.jpg",
    category: "Maintenance & SAV",
    date: "28 Avril 2025",
    title:
      "Maintenance préventive électrique : évitez les pannes coûteuses dans votre entreprise",
    excerpt:
      "Une maintenance préventive régulière de vos installations électriques est la meilleure protection contre les arrêts imprévus de production. PIOLEC assure des contrats de maintenance annuels incluant thermographie infrarouge, vérification des tableaux électriques et tests de continuité.",
  },
  {
    id: 6,
    image: "assets/img/news/post-4.jpg",
    category: "Installation Électrique",
    date: "15 Avril 2025",
    title: "Tableaux électriques HTA/HTB : comment garantir leur conformité et leur sécurité ?",
    excerpt:
      "Les tableaux de distribution électrique haute tension sont des équipements critiques nécessitant une expertise rigoureuse. PIOLEC réalise l'étude, la fourniture, l'installation et la mise en service de tableaux TGBT, armoires de distribution HTA et postes de transformation conformes aux normes CEI.",
  },
  {
    id: 7,
    image: "assets/img/news/post-5.jpg",
    category: "Systèmes de Sécurité",
    date: "01 Avril 2025",
    title: "Détection incendie : les systèmes SSI pour protéger vos locaux",
    excerpt:
      "Le Système de Sécurité Incendie (SSI) est une obligation légale pour de nombreux types de bâtiments au Maroc. PIOLEC installe et maintient des systèmes de détection automatique d'incendie (DAI), alarmes sonores et visuelles, et équipements d'évacuation conformes aux normes en vigueur.",
  },
];

const categories = [
  { label: "Installation Électrique CFA/CFO", count: 3 },
  { label: "Systèmes de Sécurité", count: 2 },
  { label: "Réseaux Informatiques", count: 2 },
  { label: "Automatisme Industriel", count: 1 },
  { label: "Maintenance & SAV", count: 2 },
];

const recentPosts = [
  {
    image: "assets/img/news/pp1.jpg",
    title: "Câblage CFA/CFO dans les bâtiments modernes",
    date: "15 Juin 2025",
  },
  {
    image: "assets/img/news/pp2.jpg",
    title: "Vidéosurveillance et contrôle d'accès entreprise",
    date: "02 Juin 2025",
  },
  {
    image: "assets/img/news/pp3.jpg",
    title: "Pré-câblage informatique structuré",
    date: "20 Mai 2025",
  },
];

const tags = [
  "Électricité",
  "CFA CFO",
  "Sécurité",
  "Réseaux",
  "Automatisme",
  "Maintenance",
  "Maroc",
  "PIOLEC",
];

const page = () => {
  return (
    <NextLayout>
      <section className="blog-wrapper news-wrapper section-padding">
        <div className="container">
          <div className="news-area">
            <div className="row">
              {/* Articles List */}
              <div className="col-12 col-lg-8">
                <div className="blog-posts">
                  {articles.map((article) => (
                    <div className="single-blog-post" key={article.id}>
                      <div
                        className="post-featured-thumb bg-cover"
                        style={{
                          backgroundImage: `url("${article.image}")`,
                        }}
                      ></div>
                      <div className="post-content">
                        <div className="post-meta">
                          <span>
                            <i className="fal fa-tag" />
                            {article.category}
                          </span>
                          <span>
                            <i className="fal fa-calendar-alt" />
                            {article.date}
                          </span>
                        </div>
                        <h2>
                          <Link href="/news-details">{article.title}</Link>
                        </h2>
                        <p>{article.excerpt}</p>
                        <Link
                          href="/news-details"
                          className="theme-btn mt-4 line-height"
                        >
                          <span>
                            LIRE LA SUITE <i className="fas fa-chevron-right" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="page-nav-wrap mt-5 text-center">
                  <ul>
                    <li>
                      <a className="page-numbers" href="#">
                        <i className="fal fa-long-arrow-left" />
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers active" href="#">
                        01
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        02
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <div className="col-12 col-lg-4">
                <div className="main-sidebar">
                  {/* Search */}
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Rechercher</h3>
                    </div>
                    <div className="search_widget">
                      <form action="#">
                        <input type="text" placeholder="Mots-clés..." />
                        <button type="submit">
                          <i className="fal fa-search" />
                        </button>
                      </form>
                    </div>
                  </div>

                  {/* Recent Posts */}
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Articles Récents</h3>
                    </div>
                    <div className="popular-posts">
                      {recentPosts.map((post, index) => (
                        <div className="single-post-item" key={index}>
                          <div
                            className="thumb bg-cover"
                            style={{
                              backgroundImage: `url("${post.image}")`,
                            }}
                          />
                          <div className="post-content">
                            <h5>
                              <Link href="/news-details">{post.title}</Link>
                            </h5>
                            <div className="post-date">
                              <i className="far fa-calendar-alt" />
                              {post.date}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Catégories</h3>
                    </div>
                    <div className="widget_categories">
                      <ul>
                        {categories.map((cat, index) => (
                          <li key={index}>
                            <Link href="news">
                              {cat.label} <span>{String(cat.count).padStart(2, "0")}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Suivez-nous</h3>
                    </div>
                    <div className="social-link">
                      <a
                        href="https://www.facebook.com/piolec/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        href="https://ma.linkedin.com/company/timnstec"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Mots-clés</h3>
                    </div>
                    <div className="tagcloud">
                      {tags.map((tag, index) => (
                        <Link href="news" key={index}>
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};
export default page;
