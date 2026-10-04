import type { ComponentType } from "react";
import { DiMsqlServer } from "react-icons/di";
import {
  SiCplusplus,
  SiFigma,
  SiGit,
  SiGithub,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiQt,
  SiReact,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Reveal from "./reveal";

type Icon = ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
const categories: {
  title: string;
  description: string;
  items: { name: string; icon: Icon }[];
}[] = [
  {
    title: "Back-End & dados",
    description: "A lógica por trás de tudo.",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "NestJS", icon: SiNestjs },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "SQL Server", icon: DiMsqlServer },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Prisma", icon: SiPrisma },
    ],
  },
  {
    title: "Interfaces & aplicações",
    description: "Onde a experiência acontece.",
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "C++", icon: SiCplusplus },
      { name: "Qt", icon: SiQt },
      { name: "Swift", icon: SiSwift },
    ],
  },
  {
    title: "Ferramentas",
    description: "Do primeiro esboço à entrega.",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Linux", icon: SiLinux },
      { name: "Figma", icon: SiFigma },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding skills-section"
      aria-labelledby="skills-title"
    >
      <div className="container-section">
        <Reveal className="skills-heading">
          <div>
            <p className="section-label">Minha caixa de ferramentas</p>
            <h2 id="skills-title" className="heading-lg">
              A stack muda.
              <br />O cuidado permanece.
            </h2>
          </div>
          <p>
            Escolho as ferramentas a partir do problema. Estas são algumas das
            tecnologias que fazem parte do meu trabalho e dos meus projetos.
          </p>
        </Reveal>
        <div className="skills-rows">
          {categories.map((category) => (
            <Reveal key={category.title}>
              <div className="skill-row">
                <div>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
                <ul className="skill-items">
                  {category.items.map(({ name, icon: TechIcon }) => (
                    <li key={name}>
                      <TechIcon aria-hidden={true} />
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
