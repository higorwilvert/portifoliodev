"use client"

import { motion } from "framer-motion"
import { Code2, Heart, Users, Zap } from "lucide-react"

const values = [
  {
    icon: Code2,
    title: "Código limpo",
    description: "Soluções legíveis, consistentes e fáceis de evoluir.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Aplicações rápidas, eficientes e preparadas para crescer.",
  },
  {
    icon: Heart,
    title: "Segurança",
    description: "Proteção de dados e boas práticas desde a primeira linha.",
  },
  {
    icon: Users,
    title: "Colaboração",
    description: "Comunicação clara para transformar objetivos em entregas.",
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-forest text-ivory">
      <div className="container-section">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow text-gold">Sobre mim</p>
            <h2 className="heading-lg max-w-md">Um pouco do caminho até aqui.</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg leading-relaxed text-ivory/70"
          >
            <p>
              Hoje trabalho como desenvolvedor Full Stack, principalmente com Node.js, NestJS e React. Minha
              experiência também passa por C++, Qt, SQL Server e aplicações desktop.
            </p>
            <p>
              Ainda tenho bastante para aprender. Gosto de entender o problema, testar ideias e melhorar o que faço
              a cada projeto e a cada entrega.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid border-y border-ivory/15 sm:grid-cols-3">
          {[
            ["2+", "Anos de experiência"],
            ["10+", "Projetos concluídos"],
            ["5+", "Tecnologias principais"],
          ].map(([number, label], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="border-b border-ivory/15 py-8 last:border-b-0 sm:border-b-0 sm:border-r sm:px-8 sm:last:border-r-0 sm:first:pl-0"
            >
              <p className="text-4xl font-semibold text-gold">{number}</p>
              <p className="mt-2 text-sm text-ivory/60">{label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-ivory/15 bg-ivory/15 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.article
              key={value.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-forest p-7 transition-colors hover:bg-fern"
            >
              <value.icon className="h-6 w-6 text-gold" />
              <h3 className="mt-8 text-lg font-semibold">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ivory/60">{value.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
