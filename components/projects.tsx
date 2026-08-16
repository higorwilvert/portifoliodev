"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    number: "01",
    title: "Talk Language",
    description: "Uma plataforma gamificada para tornar o aprendizado de idiomas mais leve, claro e envolvente.",
    technologies: ["React", "Node.js"],
    features: ["Cadastro de usuário", "Exercícios de vocabulário", "Progresso monitorado", "Gamificação"],
    image: "/talklanguage.png",
  },
  {
    number: "02",
    title: "Loopin",
    description: "Sistema para organizar assinaturas e gastos fixos com uma experiência simples e insights úteis.",
    technologies: ["Em desenvolvimento"],
    features: ["Controle de assinaturas", "Dashboard", "Filtros de gastos", "Exportação de dados"],
    image: "/loopin.png",
  },
  {
    number: "03",
    title: "Mãozinha",
    description: "Aplicativo para gestão de ONGs com notificações e automações que melhoram a operação diária.",
    technologies: ["Swift", "Node-RED"],
    features: ["Gestão de ONGs", "Notificações", "Automações"],
    image: "/Maozinha.png",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-ivory">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-col justify-between gap-6 border-b border-navy/15 pb-9 md:flex-row md:items-end"
        >
          <div>
            <p className="eyebrow text-fern">Projetos selecionados</p>
            <h2 className="heading-lg max-w-2xl text-navy">Soluções pensadas do problema à entrega.</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-navy/60">
            Uma seleção de produtos que unem lógica, experiência e decisões técnicas bem fundamentadas.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="grid overflow-hidden rounded-3xl border border-navy/15 bg-ivory lg:grid-cols-[1.1fr_0.9fr]"
            >
              <div className={`relative min-h-72 bg-navy ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image
                  src={project.image}
                  alt={`Interface do projeto ${project.title}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>

              <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
                <div>
                  <div className="flex items-center justify-between border-b border-navy/10 pb-5">
                    <span className="text-sm font-bold tracking-[0.18em] text-gold">{project.number}</span>
                    <div className="flex flex-wrap justify-end gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="rounded-full bg-forest/10 px-3 py-1 text-xs font-semibold text-forest">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="mt-8 text-3xl font-semibold tracking-tight text-navy md:text-4xl">{project.title}</h3>
                  <p className="mt-4 leading-relaxed text-navy/65">{project.description}</p>
                </div>

                <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-navy/65">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {feature}
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
