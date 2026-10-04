import type { IconType } from "react-icons";
import { DiMsqlServer } from "react-icons/di";
import {
  SiCplusplus,
  SiMongodb,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiQt,
  SiReact,
  SiSwift,
  SiTypescript,
} from "react-icons/si";

const icons: Record<string, IconType> = {
  NestJS: SiNestjs,
  React: SiReact,
  "React Native": SiReact,
  "Node.js": SiNodedotjs,
  TypeScript: SiTypescript,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  "SQL Server": DiMsqlServer,
  "C++": SiCplusplus,
  Qt: SiQt,
  Swift: SiSwift,
};

export default function TechTags({ technologies }: { technologies: string[] }) {
  return (
    <ul className="tech-tags" aria-label="Tecnologias">
      {technologies.map((technology) => {
        const Icon = icons[technology];
        return (
          <li key={technology}>
            {Icon && <Icon aria-hidden="true" />}
            <span>{technology}</span>
          </li>
        );
      })}
    </ul>
  );
}
