import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "L'importance du câblage CFA/CFO dans les bâtiments modernes au Maroc",
  description:
    "Découvrez pourquoi le câblage CFA/CFO est essentiel pour tout bâtiment moderne au Maroc : sécurité, performance et conformité aux normes électriques. Conseils d'experts PIOLEC.",
  path: "/news-details",
  keywords: [
    "câblage CFA CFO Maroc",
    "installation électrique bâtiment",
    "normes électriques Maroc",
    "électricien professionnel Casablanca",
  ],
});

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

const categories = [
  { label: "Installation Électrique CFA/CFO", count: 3 },
  { label: "Systèmes de Sécurité", count: 2 },
  { label: "Réseaux Informatiques", count: 2 },
  { label: "Automatisme Industriel", count: 1 },
  { label: "Maintenance & SAV", count: 2 },
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
              {/* Article Detail */}
              <div className="col-12 col-lg-8">
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details mt-0">
                    <div className="post-content pt-0">
                      <h1 className="mt-0">
                        L&apos;importance du câblage CFA/CFO dans les bâtiments modernes au Maroc
                      </h1>
                      <div className="post-meta mt-3">
                        <span>
                          <i className="fal fa-user" />
                          Équipe PIOLEC
                        </span>
                        <span>
                          <i className="fal fa-tag" />
                          Installation Électrique
                        </span>
                        <span>
                          <i className="fal fa-calendar-alt" />
                          15 Juin 2025
                        </span>
                      </div>

                      <p>
                        Dans tout projet de construction ou de rénovation, l&apos;installation
                        électrique représente l&apos;une des étapes les plus critiques. Le câblage
                        CFA (Courants Faibles et Analogiques) et CFO (Courants Forts) constitue
                        la colonne vertébrale de tout bâtiment moderne, qu&apos;il s&apos;agisse
                        d&apos;un immeuble résidentiel, d&apos;un complexe industriel ou d&apos;un
                        bâtiment commercial. Une installation bien planifiée garantit la sécurité
                        des occupants, la performance des équipements et la conformité aux normes
                        marocaines en vigueur.
                      </p>

                      <p>
                        Au Maroc, les installations électriques sont encadrées par des normes
                        strictes, notamment la norme NM 03-5-226 pour les installations basse
                        tension. Ces réglementations imposent des exigences précises en matière
                        de dimensionnement des câbles, de protection des circuits et de mise à la
                        terre. Le non-respect de ces normes peut entraîner des risques
                        d&apos;incendie, d&apos;électrocution et des pannes coûteuses.
                      </p>

                      <img
                        src="assets/img/news/post-4.jpg"
                        alt="Installation électrique CFA CFO PIOLEC Maroc"
                        className="single-post-image"
                      />

                      <h2>Qu&apos;est-ce que le câblage CFA et CFO ?</h2>

                      <p>
                        Le <strong>câblage CFO (Courants Forts)</strong> regroupe tout ce qui
                        concerne l&apos;alimentation électrique : distribution d&apos;énergie,
                        éclairage, prises de courant, alimentation des machines industrielles et
                        tableaux de distribution. Il requiert une attention particulière aux
                        protections différentielles et aux disjoncteurs adaptés à chaque circuit.
                      </p>

                      <p>
                        Le <strong>câblage CFA (Courants Faibles)</strong>, quant à lui, couvre
                        l&apos;ensemble des systèmes à basse tension : réseaux informatiques,
                        téléphonie, vidéosurveillance, contrôle d&apos;accès, systèmes
                        d&apos;alarme incendie et interphonie. Ces systèmes sont devenus
                        indispensables dans tout bâtiment intelligent.
                      </p>

                      <blockquote>
                        &laquo; Une installation électrique de qualité n&apos;est pas une dépense,
                        c&apos;est un investissement qui protège vos biens, vos équipements et
                        surtout vos équipes. &raquo;
                        <br />
                        <strong>— Équipe technique PIOLEC</strong>
                      </blockquote>

                      <h2>Les étapes d&apos;une installation électrique réussie</h2>
                      <p>
                        Chez PIOLEC, chaque projet électrique suit un processus rigoureux en
                        plusieurs phases :
                      </p>

                      <ul className="checked-list mb-4">
                        <li>
                          <strong>Étude et conception :</strong> Analyse des besoins,
                          dimensionnement des câbles et rédaction des plans d&apos;exécution
                          conformes aux normes marocaines.
                        </li>
                        <li>
                          <strong>Fourniture et installation :</strong> Pose des câbles, tableaux
                          électriques, prises, luminaires et équipements selon les plans validés.
                        </li>
                        <li>
                          <strong>Mise en service et tests :</strong> Vérification des circuits,
                          tests d&apos;isolement, mesures de prise de terre et contrôle de la
                          conformité.
                        </li>
                        <li>
                          <strong>Maintenance préventive :</strong> Suivi régulier des
                          installations pour garantir leur durabilité et leur sécurité dans le
                          temps.
                        </li>
                      </ul>

                      <img
                        className="alignleft"
                        src="assets/img/news/post-10.jpg"
                        alt="Techniciens PIOLEC au travail installation électrique"
                      />

                      <h4>Pourquoi choisir PIOLEC pour vos installations électriques ?</h4>
                      <p>
                        Forte de plusieurs années d&apos;expérience dans le domaine de
                        l&apos;électricité et des systèmes intégrés au Maroc, PIOLEC accompagne
                        ses clients à Casablanca, Agadir et dans toutes les régions du Royaume.
                        Nos équipes d&apos;ingénieurs et techniciens certifiés maîtrisent
                        l&apos;ensemble des domaines : électricité CFA/CFO, automatisme
                        industriel, réseaux informatiques et systèmes de sécurité.
                      </p>
                      <p>
                        Nous mettons un point d&apos;honneur à respecter les délais, les budgets
                        et les normes les plus strictes, afin de vous livrer des installations
                        fiables, sécurisées et durables. Contactez-nous pour un devis gratuit et
                        personnalisé adapté à votre projet.
                      </p>
                    </div>
                  </div>

                  {/* Tags & Share */}
                  <div className="row tag-share-wrap">
                    <div className="col-lg-8 col-12">
                      <h4>Tags de l&apos;article</h4>
                      <div className="tagcloud">
                        <Link href="news">Électricité</Link>
                        <Link href="news">CFA CFO</Link>
                        <Link href="news">Maroc</Link>
                        <Link href="news">Installation</Link>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                      <h4>Partager</h4>
                      <div className="social-share">
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
                  </div>

                  {/* Comment Form */}
                  <div className="comment-form-wrap mt-40">
                    <h3>Laisser un commentaire</h3>
                    <form action="#" className="comment-form">
                      <div className="single-form-input">
                        <textarea placeholder="Votre commentaire..." defaultValue={""} />
                      </div>
                      <div className="single-form-input">
                        <input type="text" placeholder="Votre nom..." />
                      </div>
                      <div className="single-form-input">
                        <input type="email" placeholder="Votre adresse e-mail..." />
                      </div>
                      <button className="theme-btn center" type="submit">
                        <span>
                          <i className="fal fa-comments" />
                          Publier le commentaire
                        </span>
                      </button>
                    </form>
                  </div>
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
                              <Link href="news-details">{post.title}</Link>
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
                              {cat.label}{" "}
                              <span>{String(cat.count).padStart(2, "0")}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Social */}
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
