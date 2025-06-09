"use client"

import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiShadcnui,
  SiNodedotjs,
  SiSequelize,
  SiPostgresql,
  SiMysql,
  SiOracle,
  SiPostman,
  SiGraphql,
  SiFirebase,
  SiGithub,
  SiGit,
  SiFigma,
  SiGimp,
  SiLinux,
  SiInsomnia,
  SiSwift,
  SiPrisma,
} from "react-icons/si"
import { FaDatabase, FaPlug } from "react-icons/fa"

const skills = {
  "Front-End": [
    { name: "React", icon: <SiReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "CSS3", icon: <SiCss3 /> },
    { name: "TailwindCSS", icon: <SiTailwindcss /> },
    { name: "Shadcn", icon: <SiShadcnui /> },
    { name: "Swift / SwiftUI", icon: <SiSwift /> },
  ],
  "Back-End": [
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Sequelize", icon: <SiSequelize /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Oracle", icon: <SiOracle /> },
    { name: "Prisma", icon: <SiPrisma /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "REST API", icon: <FaDatabase /> },
  ],
  "Others": [
    { name: "Gimp", icon: <SiGimp /> },
    { name: "Linux", icon: <SiLinux /> },
    { name: "Git", icon: <SiGit /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Insomnia", icon: <SiInsomnia /> },
    { name: "Figma", icon: <SiFigma /> },
  ],
}

export default function SkillsGrid() {
  return (
    <section id="skills" className="section-padding bg-[#111827] text-white">
      <div className="container-section">
        <h2 className="heading-lg text-center mb-16">Habilidades Técnicas</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, techs]) => (
            <div key={category} className="bg-[#161b22] rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-4">{category}</h3>
              <ul className="space-y-3">
                {techs.map(({ name, icon }) => (
                  <li key={name} className="flex items-center space-x-3">
                    <span className="text-xl">{icon}</span>
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
