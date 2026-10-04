import { ArrowUpRight, Check, Github } from "lucide-react";
import Reveal from "./reveal";
import ProjectVisual from "./project-visual";
import TechTags from "./tech-tags";
import { kiwi, socialLinks } from "@/lib/portfolio";

const projects = [
  {
    title: "Talk Language",
    category: "Aprendizado de idiomas",
    description:
      "Uma plataforma gamificada para tornar o aprendizado de idiomas mais leve e envolvente.",
    technologies: ["React", "Node.js"],
    features: ["Exercícios de vocabulário", "Progresso e gamificação"],
    image: "/talklanguage.png",
  },
  {
    title: "Loopin",
    category: "Em desenvolvimento",
    description:
      "Um lugar para organizar assinaturas e gastos fixos, entender suas despesas e planejar os próximos passos.",
    technologies: ["Gestão de assinaturas"],
    features: ["Dashboard de gastos", "Filtros e exportação"],
    image: "/loopin.png",
  },
  {
    title: "Mãozinha",
    category: "Tecnologia para ONGs",
    description:
      "Aplicativo para facilitar a gestão de ONGs, com notificações e automações para o dia a dia.",
    technologies: ["Swift", "Node-RED"],
    features: ["Gestão de organizações", "Notificações e automações"],
    image: "/Maozinha.png",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding projects-section"
      aria-labelledby="projects-title"
    >
      <div className="container-section projects-layout">
        <div className="projects-heading">
          <p className="section-label">Projetos selecionados</p>
          <h2 id="projects-title" className="heading-lg">
            Ideias que <br />
            ganharam vida.
          </h2>
          <p>
            Um pouco do que construo, das decisões que tomo e dos problemas que
            gosto de resolver.
          </p>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Mais no GitHub
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="projects-list">
          <Reveal>
            <article className="project-card featured-project" id="kiwi">
              <ProjectVisual image={kiwi.image} title="Kiwi Play" featured />
              <div className="project-content">
                <div className="project-category">
                  <span>{kiwi.category}</span>
                  <span className="project-featured-label">Em destaque</span>
                </div>
                <h3>Kiwi Play</h3>
                <p>{kiwi.description}</p>
                <TechTags technologies={kiwi.technologies} />
                <ul className="project-features">
                  {[
                    "Parceiros e partidas",
                    "Rating e recomendações",
                    "Aplicações web e mobile",
                  ].map((feature) => (
                    <li key={feature}>
                      <Check size={15} aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="project-links">
                  <a
                    href={kiwi.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Conhecer a Kiwi
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                  {kiwi.repository && (
                    <a
                      href={kiwi.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link"
                    >
                      <Github size={16} aria-hidden="true" />
                      Repositório
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
          {projects.map((project) => (
            <Reveal key={project.title}>
              <article className="project-card">
                <ProjectVisual image={project.image} title={project.title} />
                <div className="project-content">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <TechTags technologies={project.technologies} />
                  <ul className="project-features">
                    {project.features.map((feature) => (
                      <li key={feature}>
                        <Check size={15} aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
