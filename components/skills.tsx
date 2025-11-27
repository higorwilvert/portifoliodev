"use client"

import { motion } from "framer-motion"
import { Code2, Database, Sparkles, Wrench } from "lucide-react"
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
  SiTailwindcss
} from "react-icons/si"

const skills = {
  "Back-End": {
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs />, level: 100 },
      { name: "Sequelize", icon: <SiSequelize />, level: 100 },
      { name: "PostgreSQL", icon: <SiPostgresql />, level: 100 },
      { name: "MySQL", icon: <SiMysql />, level: 100 },
      { name: "Oracle", icon: <SiOracle />, level: 100 },
      { name: "Prisma", icon: <SiPrisma />, level: 100 },
      { name: "Postman", icon: <SiPostman />, level: 100 },
      { name: "REST API", icon: <FaDatabase />, level: 100 },
    ],
  },
  "Front-End": {
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      { name: "React", icon: <SiReact />, level: 90 },
      { name: "Next.js", icon: <SiNextdotjs />, level: 85 },
      { name: "JavaScript", icon: <SiJavascript />, level: 90 },
      { name: "HTML5", icon: <SiHtml5 />, level: 95 },
      { name: "CSS3", icon: <SiCss3 />, level: 90 },
      { name: "TailwindCSS", icon: <SiTailwindcss />, level: 90 },
      { name: "Shadcn", icon: <SiShadcnui />, level: 80 },
      { name: "Swift / SwiftUI", icon: <SiSwift />, level: 75 },
    ],
  },
  "Ferramentas": {
    icon: <Wrench className="w-6 h-6" />,
    skills: [
      { name: "Git", icon: <SiGit />, level: 95 },
      { name: "GitHub", icon: <SiGithub />, level: 95 },
      { name: "Linux", icon: <SiLinux />, level: 90 },
      { name: "Insomnia", icon: <SiInsomnia />, level: 90 },
      { name: "Figma", icon: <SiFigma />, level: 75 },
      { name: "Gimp", icon: <SiGimp />, level: 70 },
    ],
  },
}

export default function SkillsGrid() {
  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-[#111827] to-[#0f172a] text-white relative overflow-hidden">
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
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-blue-500/10 border border-blue-500/30">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">Tecnologias & Ferramentas</span>
          </div>
          <h2 className="heading-lg mb-4 text-white">
            Habilidades Técnicas
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Especializado em Back-End com Node.js e bancos de dados
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, data], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              <div className="bg-[#1a2540] border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/50 hover:bg-[#1f2d4d] transition-all h-full">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-blue-500">
                    {data.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{category}</h3>
                </div>

                {/* Skills List */}
                <ul className="space-y-4">
                  {data.skills.map(({ name, icon, level }, index) => (
                    <motion.li
                      key={name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.2 + index * 0.05 }}
                      className="group/item"
                    >
                      {/* Skill Name and Icon */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl transition-transform hover:scale-110">
                            {icon}
                          </span>
                          <span className="font-medium text-gray-300">
                            {name}
                          </span>
                        </div>
                        <span className="text-xs text-gray-400 font-semibold">{level}%</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + index * 0.05 }}
                          className="h-full bg-blue-500 rounded-full relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                        </motion.div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-sm">
            Sempre aprendendo novas tecnologias e aprimorando minhas habilidades 🚀
          </p>
        </motion.div>
      </div>
    </section>
  )
}
