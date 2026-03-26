import { motion } from "framer-motion";
import "./App.css";

const pageIntro = {
  hidden: { opacity: 0, filter: "blur(10px)", scale: 0.985 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function App() {
  return (
    <div className="app">
      <div className="bg-grid"></div>
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>

      <motion.header
        className="hero"
        variants={pageIntro}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-badge" variants={heroItem}>
          CYBERSECURITY • INFRASTRUCTURE • AUTOMATION
        </motion.div>

        <motion.h1 variants={heroItem}>
          Pierre-Axel <span>Annonier</span>
        </motion.h1>

        <motion.p className="hero-title" variants={heroItem}>
          Ingénieur cybersécurité • Audit SSI • Infrastructure • Automatisation
        </motion.p>

        <motion.p className="hero-subtitle" variants={heroItem}>
          Je conçois des systèmes plus lisibles, plus sûrs et plus exploitables,
          en reliant sécurité, infrastructure, automatisation et vision produit.
        </motion.p>

        <motion.div className="hero-cta" variants={heroItem}>
          <a href="#projects" className="btn btn-primary">
            Voir mes projets
          </a>

          <a
            href="https://www.linkedin.com/in/pierre-axel-annonier"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            LinkedIn
          </a>
        </motion.div>

        <motion.div className="hero-stats" variants={heroItem}>
          <div className="stat">
            <strong>Cyber</strong>
            <span>Audit, gouvernance, veille, analyse de risques</span>
          </div>
          <div className="stat">
            <strong>Infra</strong>
            <span>M365, support, déploiement, réseaux, structuration SI</span>
          </div>
          <div className="stat">
            <strong>Build</strong>
            <span>Automatisation, API, web, outils utiles et concrets</span>
          </div>
        </motion.div>
      </motion.header>

      <main className="content">
        <motion.section
          className="panel"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="section-kicker">POSITIONNEMENT</div>
          <h2>Un profil hybride, technique et structurant</h2>
          <p>
            Mon point fort, ce n’est pas seulement la cybersécurité. C’est ma capacité
            à comprendre un système dans son ensemble, à identifier les faiblesses,
            puis à proposer une réponse réaliste, documentée et exploitable.
          </p>
          <p>
            J’interviens à la croisée de la sécurité, de l’infrastructure, du support
            avancé, de l’automatisation et du développement orienté usage.
          </p>

          <div className="feature-list">
            <div className="feature-item">Audit sécurité & analyse de risques</div>
            <div className="feature-item">Cartographie et structuration des SI</div>
            <div className="feature-item">Automatisation, intégration d’API, veille</div>
            <div className="feature-item">Développement d’outils concrets et utiles</div>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="section-block"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="section-head">
            <div>
              <div className="section-kicker">PROJETS</div>
              <h2>Projets en cours</h2>
            </div>
          </div>

          <motion.div
            className="projects-dual"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.article
              className="project-featured"
              variants={cardReveal}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <div className="project-label">Veille cyber en direct</div>
              <h3>RootSentinel</h3>
              <p className="project-lead">
                Une plateforme de veille cyber orientée actualité, filtrage intelligent
                et diffusion lisible des informations critiques.
              </p>

              <p>
                RootSentinel répond à un besoin simple : suivre les bons signaux,
                réduire le bruit et rendre l’information immédiatement utile pour la
                veille, la sensibilisation et la prise de recul.
              </p>

              <div className="project-grid">
                <div className="project-card">
                  <h4>Sources</h4>
                  <p>ANSSI, CERT-FR, NIST et flux à forte valeur.</p>
                </div>
                <div className="project-card">
                  <h4>Filtrage</h4>
                  <p>Hiérarchisation et réduction du bruit informationnel.</p>
                </div>
                <div className="project-card">
                  <h4>Diffusion</h4>
                  <p>Actualités claires, veille exploitable et usage pédagogique.</p>
                </div>
              </div>

              <div className="project-actions">
                <a
                  href="https://rootsentinel.fr"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Ouvrir RootSentinel
                </a>
              </div>
            </motion.article>

            <motion.article
              className="project-featured project-specula"
              variants={cardReveal}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <div className="project-label">SIEM avancé modulaire</div>
              <h3>Specula</h3>
              <p className="project-lead">
                Une plateforme pensée pour la corrélation, le scoring, la
                normalisation et l’exploitation centralisée des signaux de sécurité.
              </p>

              <p>
                Specula vise une logique de noyau dur : robuste, extensible et
                durable. Là où RootSentinel traite la veille en direct, Specula
                s’inscrit dans une approche plus profonde d’observabilité et
                d’analyse sécurité.
              </p>

              <div className="project-grid">
                <div className="project-card">
                  <h4>Corrélation</h4>
                  <p>Relier les événements et éviter l’analyse isolée.</p>
                </div>
                <div className="project-card">
                  <h4>Scoring</h4>
                  <p>Prioriser les alertes et guider l’investigation.</p>
                </div>
                <div className="project-card">
                  <h4>Architecture</h4>
                  <p>Noyau, console, modules activables et déploiement maîtrisé.</p>
                </div>
              </div>

              <div className="project-actions">
                <a
                  href="https://github.com/P-axel/specula"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Voir le dépôt Specula
                </a>
              </div>
            </motion.article>
          </motion.div>
        </motion.section>

        <motion.section
          className="section-block"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="section-head section-head-inline">
            <div>
              <div className="section-kicker">PARCOURS</div>
              <h2>Un parcours construit sur le terrain et la structure</h2>
            </div>

            <a
              href="https://www.linkedin.com/in/pierre-axel-annonier"
              target="_blank"
              rel="noreferrer"
              className="inline-linkedin"
            >
              Voir mon LinkedIn
            </a>
          </div>

          <div className="timeline">
            <motion.div
              className="timeline-item"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <span className="timeline-period">Schmidt Groupe</span>
                <h3>Ingénieur Cybersécurité</h3>
                <p>
                  Cartographie SI, schématisation des flux, sécurisation des accès,
                  analyse de vulnérabilités, contribution à la PSSI et amélioration de
                  la cohérence du système d’information.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="timeline-item"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.05 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <span className="timeline-period">ESDI / Schmidt Groupe</span>
                <h3>Support & Déploiement</h3>
                <p>
                  Support technique, maintenance à distance, déploiement et
                  accompagnement d’un parc étendu, avec une compréhension concrète des
                  usages, des contraintes et du terrain.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="section-block"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="section-head">
            <div>
              <div className="section-kicker">COMPÉTENCES</div>
              <h2>Un socle technique cohérent et exploitable</h2>
            </div>
          </div>

          <motion.div
            className="skills-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div
              className="skill-box"
              variants={cardReveal}
              whileHover={{ y: -5, scale: 1.01 }}
            >
              <h3>Cybersécurité</h3>
              <p>Audit SSI, ISO 27001, RGPD, veille, gouvernance, structuration.</p>
            </motion.div>

            <motion.div
              className="skill-box"
              variants={cardReveal}
              whileHover={{ y: -5, scale: 1.01 }}
            >
              <h3>Infrastructure</h3>
              <p>Microsoft 365, Active Directory, Entra ID, réseau, déploiement.</p>
            </motion.div>

            <motion.div
              className="skill-box"
              variants={cardReveal}
              whileHover={{ y: -5, scale: 1.01 }}
            >
              <h3>Développement</h3>
              <p>React, PHP, SQL, API, automatisation, outils orientés usage.</p>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          id="contact"
          className="contact-panel"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div>
            <div className="section-kicker">CONTACT</div>
            <h2>Construisons quelque chose de solide</h2>
            <p>
              Disponible pour échanger autour d’un poste, d’un projet ou d’une
              collaboration orientée cybersécurité, infrastructure et automatisation.
            </p>
          </div>

          <div className="contact-actions">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=annonier.pierreaxel@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              📩 Envoyer un email
            </a>

            <a
              href="https://www.linkedin.com/in/pierre-axel-annonier"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              LinkedIn
            </a>
          </div>
        </motion.section>
      </main>
    </div>
  );
}