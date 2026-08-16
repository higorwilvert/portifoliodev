"use client"

import { motion } from "framer-motion"
import { Code2, Database, Wrench } from "lucide-react"
import type { ComponentType } from "react"
import { FaDatabase } from "react-icons/fa"
import {
  SiCss3,
  SiFigma,
  SiGimp,
  SiGit,
  SiGithub,
  SiHtml5,
  SiInsomnia,
  SiJavascript,
  SiLinux,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOracle,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiSequelize,
  SiShadcnui,
  SiSwift,
  SiTailwindcss,
} from "react-icons/si"

type SkillIcon = ComponentType<{ className?: string }>

const skills: Array<{
  title: string
  description: string
  icon: SkillIcon
  items: Array<{ name: string; icon: SkillIcon }>
}> = [
  {
    title: "Back-End",
    description: "APIs, regras de negócio e dados.",
    icon: Database,
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Sequelize", icon: SiSequelize },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "Oracle", icon: SiOracle },
      { name: "Prisma", icon: SiPrisma },
      { name: "Postman", icon: SiPostman },
      { name: "REST API", icon: FaDatabase },
    ],
  },
  {
    title: "Front-End",
    description: "Interfaces responsivas e acessíveis.",
    icon: Code2,
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "Shadcn", icon: SiShadcnui },
      { name: "Swift", icon: SiSwift },
    ],
  },
  {
    title: "Ferramentas",
    description: "Fluxo, prototipação e qualidade.",
    icon: Wrench,
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Linux", icon: SiLinux },
      { name: "Insomnia", icon: SiInsomnia },
      { name: "Figma", icon: SiFigma },
      { name: "Gimp", icon: SiGimp },
    ],
  },
]

export default function SkillsGrid() {
  return (
    <section id="skills" className="section-padding bg-navy text-ivory">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-8 border-b border-ivory/15 pb-10 lg:grid-cols-2 lg:items-end"
        >
          <div>
            <p className="eyebrow text-gold">Stack & ferramentas</p>
            <h2 className="heading-lg">Tecnologia escolhida com propósito.</h2>
          </div>
          <p className="max-w-lg leading-relaxed text-ivory/60 lg:justify-self-end">
            Minha base técnica combina desenvolvimento Back-End, interfaces modernas e ferramentas que mantêm o fluxo
            de trabalho simples e confiável.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {skills.map((category, categoryIndex) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.08 }}
              className="rounded-3xl border border-ivory/15 p-7 transition-colors hover:border-gold/50"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">{category.title}</h3>
                  <p className="mt-2 text-sm text-ivory/50">{category.description}</p>
                </div>
                <div className="rounded-full bg-gold p-3 text-navy">
                  <category.icon className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-2">
                {category.items.map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 rounded-xl bg-ivory/5 px-3 py-3 text-sm text-ivory/75"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-gold" />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
