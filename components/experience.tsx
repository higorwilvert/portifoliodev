import { currentRole } from "@/lib/portfolio";
import Reveal from "./reveal";
import TechTags from "./tech-tags";

const experiences = [
  {
    title: currentRole.title,
    company: currentRole.company,
    period: currentRole.period,
    current: true,
    technologies: currentRole.technologies,
    achievements: [currentRole.description],
  },
  {
    title: "Desenvolvedor Full Stack Júnior",
    company: "Epicora",
    period: "Jul 2025 — jul 2026",
    technologies: ["NestJS", "React", "Node.js", "MongoDB"],
    achievements: [
      "Desenvolvimento de APIs REST, interfaces responsivas e integrações entre front-end e back-end.",
      "Autenticação com JWT e testes unitários e de integração.",
    ],
  },
  {
    title: "Desenvolvedor de Software Júnior",
    company: "Gamatec",
    period: "Nov 2024 — jul 2025",
    technologies: ["C++", "Qt", "React", "SQL Server"],
    achievements: [
      "Aplicações de força de vendas multiplataforma e evolução de sistemas web.",
      "Otimização de consultas SQL e colaboração com QA e analistas.",
    ],
  },
  {
    title: "Assistente de Programação",
    company: "Gamatec",
    period: "Ago 2023 — nov 2024",
    technologies: ["C++", "Qt", "SQL Server"],
    achievements: [
      "Aplicações desktop para automação comercial, relatórios e scripts SQL.",
      "Apoio à documentação técnica e aos testes de funcionalidades.",
    ],
  },
  {
    title: "Assistente Administrativo",
    company: "Vértice",
    period: "Jun 2022 — fev 2023",
    technologies: [],
    achievements: [
      "Rotinas financeiras, relatórios e organização documental, com apoio de planilhas e sistemas de gestão.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding experience-section"
      aria-labelledby="experience-title"
    >
      <div className="container-section experience-layout">
        <div className="experience-heading">
          <p className="section-label">Minha trajetória</p>
          <h2 id="experience-title" className="heading-lg">
            Experiência que <br />
            vira repertório.
          </h2>
          <p>
            Cada equipe, cada plataforma e cada desafio deixaram algo no meu
            jeito de construir software.
          </p>
        </div>
        <ol className="timeline">
          {experiences.map((experience) => (
            <li
              key={`${experience.company}-${experience.period}`}
              className={experience.current ? "timeline-current" : ""}
            >
              <Reveal>
                <article>
                  <div className="timeline-meta">
                    <p>{experience.period}</p>
                    {experience.current && (
                      <span className="current-label">
                        <span className="status-dot" />
                        Cargo atual
                      </span>
                    )}
                  </div>
                  <p className="timeline-company">{experience.company}</p>
                  <h3>{experience.title}</h3>
                  {experience.current && (
                    <p className="timeline-start">
                      Desde{" "}
                      <time dateTime={currentRole.startDate}>
                        1º de setembro de 2026
                      </time>
                    </p>
                  )}
                  <div className="timeline-description">
                    {experience.achievements.map((achievement) => (
                      <p key={achievement}>{achievement}</p>
                    ))}
                  </div>
                  {experience.technologies.length > 0 && (
                    <TechTags technologies={experience.technologies} />
                  )}
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
