"use client"

import { motion } from "framer-motion"
import type { ComponentType } from "react"
import { DiMsqlServer } from "react-icons/di"
import { SiCplusplus, SiMongodb, SiNestjs, SiNodedotjs, SiQt, SiReact, SiVite } from "react-icons/si"

type TechIcon = ComponentType<{ className?: string }>

const experiences: Array<{
  title: string
  company: string
  period: string
  technologies: Array<{ name: string; icon: TechIcon }>
  achievements: string[]
}> = [
  {
    title: "Desenvolvedor Full-Stack Junior",
    company: "Epicora",
    period: "07/2025 — 07/2026",
    technologies: [
      { name: "Nest.js", icon: SiNestjs },
      { name: "React", icon: SiReact },
      { name: "Vite", icon: SiVite },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MongoDB", icon: SiMongodb },
    ],
    achievements: [
      "Desenvolvimento de APIs RESTful utilizando Nest.js e Node.js.",
      "Criação de interfaces modernas e responsivas com React e Vite.",
      "Implementação de autenticação e autorização com JWT.",
      "Integração completa entre front-end e back-end.",
      "Criação de testes unitários e de integração para garantir a qualidade do código.",
    ],
  },
  {
    title: "Desenvolvedor de Software Junior",
    company: "Gamatec",
    period: "11/2024 — 07/2025",
    technologies: [
      { name: "Qt", icon: SiQt },
      { name: "C++", icon: SiCplusplus },
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "SQL Server", icon: DiMsqlServer },
    ],
    achievements: [
      "Desenvolvimento de aplicações de força de vendas multiplataforma com C++ e Qt.",
      "Manutenção e criação de funcionalidades em sistemas web utilizando React e Node.js.",
      "Otimização de queries e performance em SQL Server com grande volume de dados.",
      "Colaboração com equipe de QA e analistas para garantir qualidade nas entregas.",
    ],
  },
  {
    title: "Assistente de Programação",
    company: "Gamatec",
    period: "08/2023 — 11/2024",
    technologies: [
      { name: "C++", icon: SiCplusplus },
      { name: "Qt", icon: SiQt },
      { name: "SQL Server", icon: DiMsqlServer },
    ],
    achievements: [
      "Desenvolvimento de aplicações desktop para automação comercial usando C++ e Qt.",
      "Criação de scripts SQL otimizados para consultas e relatórios gerenciais.",
      "Apoio na documentação técnica e nos testes de novas funcionalidades.",
    ],
  },
  {
    title: "Assistente Administrativo",
    company: "Vértice",
    period: "06/2022 — 02/2023",
    technologies: [],
    achievements: [
      "Controle de notas fiscais, contas a pagar e receber e relatórios financeiros.",
      "Otimização de rotinas administrativas com planilhas e sistemas de gestão.",
      "Organização documental e suporte ao setor contábil e financeiro.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-ivory">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 grid gap-6 lg:grid-cols-2 lg:items-end"
        >
          <div>
            <p className="eyebrow text-fern">Experiência</p>
            <h2 className="heading-lg max-w-xl text-navy">Uma trajetória construída na prática.</h2>
          </div>
          <p className="max-w-lg leading-relaxed text-navy/60 lg:justify-self-end">
            Produtos web, aplicações desktop, APIs e bancos de dados: experiências diferentes com o mesmo compromisso
            com qualidade e evolução contínua.
          </p>
        </motion.div>

        <div className="border-t border-navy/15">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.period}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="grid gap-7 border-b border-navy/15 py-10 lg:grid-cols-[0.32fr_0.68fr] lg:gap-14"
            >
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold">{experience.period}</p>
                <p className="mt-3 text-lg font-semibold text-forest">{experience.company}</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-navy md:text-3xl">{experience.title}</h3>

                {experience.technologies.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {experience.technologies.map(({ name, icon: Icon }) => (
                      <span
                        key={name}
                        className="inline-flex items-center gap-2 rounded-full border border-forest/20 px-3 py-1.5 text-xs font-semibold text-forest"
                      >
                        <Icon className="h-4 w-4" />
                        {name}
                      </span>
                    ))}
                  </div>
                )}

                <ul className="mt-7 grid gap-3 md:grid-cols-2">
                  {experience.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start gap-3 text-sm leading-relaxed text-navy/60">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
