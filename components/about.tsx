"use client"

import { motion } from "framer-motion"
import { Award, Code2, Heart, Target, Users, Zap } from "lucide-react"

const stats = [
  { number: "2+", label: "Anos de Experiência", icon: Award },
  { number: "10+", label: "Projetos Concluídos", icon: Target },
  { number: "5+", label: "Tecnologias", icon: Code2 },
]

const values = [
  {
    icon: Code2,
    title: "Código Limpo",
    description: "Escrevo código legível, manutenível e seguindo as melhores práticas da indústria.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Otimização constante para garantir aplicações rápidas e eficientes.",
  },
  {
    icon: Heart,
    title: "Segurança",
    description: "Implementação de práticas seguras e proteção de dados em todas as aplicações.",
  },
  {
    icon: Users,
    title: "Colaboração",
    description: "Trabalho em equipe e comunicação efetiva para entregar os melhores resultados.",
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-[#111827] to-[#0f172a] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>

      <div className="container-section relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4 text-white">
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-[#1a2540] border border-blue-500/20 rounded-2xl p-6 text-center hover:border-blue-500/50 hover:bg-[#1f2d4d] transition-all">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p className="reveal">
              Sou desenvolvedor <span className="text-blue-400 font-semibold">Full Stack</span> com foco em <span className="text-blue-300 font-semibold">Back-End</span>, 
              especializado na criação de aplicações robustas utilizando <span className="text-blue-400 font-semibold">Node.js</span>, 
              bancos de dados e arquiteturas escaláveis.
            </p>

            <p className="reveal stagger-delay-1">
              Tenho como foco principal o desenvolvimento de <span className="text-blue-400 font-semibold">APIs</span> eficientes, 
              otimização de banco de dados e atenção especial à <span className="text-blue-300 font-semibold">segurança</span> e 
              <span className="text-blue-200 font-semibold"> performance</span> das aplicações.
            </p>

            <p className="reveal stagger-delay-2">
              Estou em constante evolução como profissional, com grande interesse em arquitetura de software 
              e na construção de sistemas <span className="text-blue-400 font-semibold">robustos e escaláveis</span>.
            </p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-[#1a2540] border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/50 hover:bg-[#1f2d4d] transition-all h-full">
                <div className="inline-flex p-3 rounded-xl bg-blue-500 mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
