import { ArrowUpRight, Blocks, Code2, Database } from "lucide-react";
import Reveal from "./reveal";
import { currentRole } from "@/lib/portfolio";

export default function About() {
  return (
    <section
      id="about"
      className="section-padding about-section"
      aria-labelledby="about-title"
    >
      <div className="container-section">
        <Reveal className="about-grid">
          <div>
            <p className="section-label">Um pouco sobre mim</p>
            <h2 id="about-title" className="heading-lg">
              Curiosidade para entender.
              <br />
              Código para resolver.
            </h2>
          </div>
          <div className="about-copy">
            <p>
              Minha trajetória começou no desenvolvimento de aplicações desktop
              com C++, Qt e SQL Server. Com o tempo, passei a construir também
              produtos web com Node.js, NestJS e React.
            </p>
            <p>
              Hoje faço parte da {currentRole.company}. Gosto de trabalhar perto
              do problema, trocar ideias com a equipe e encontrar soluções
              simples de manter e evoluir.
            </p>
            <a className="text-link" href="#experience">
              Minha trajetória
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
        <div className="practice-grid">
          {[
            {
              icon: Database,
              title: "Da regra ao dado",
              description:
                "APIs, integrações e bancos de dados pensados para o mundo real.",
            },
            {
              icon: Blocks,
              title: "Do desktop à web",
              description:
                "Experiência em diferentes plataformas para escolher o que faz sentido.",
            },
            {
              icon: Code2,
              title: "Sempre em evolução",
              description:
                "Aprender, testar e refinar fazem parte de cada projeto.",
            },
          ].map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={index * 60} className="practice-item">
              <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
