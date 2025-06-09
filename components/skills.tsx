"use client"

import { motion } from "framer-motion"
import { Code, Database, GitBranch, Terminal } from "lucide-react"

const skillCategories = [
  {
    title: "Linguagens",
    icon: <Code size={24} />,
    skills: ["C++", "JavaScript", "Swift"],
  },
  {
    title: "Frameworks",
    icon: <Terminal size={24} />,
    skills: ["Qt", "React", "SwiftUI", "Node.js"],
  },
  {
    title: "Banco de Dados",
    icon: <Database size={24} />,
    skills: ["SQL Server", "PostgreSQL", "MySQL"],
  },
  {
    title: "Outros",
    icon: <GitBranch size={24} />,
    skills: ["Git", "Linux", "Node-RED", "Postman"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#111827]">
      <div className="container-section">
        <h2 className="heading-lg text-center mb-16 reveal">Habilidades Técnicas</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1a2540] rounded-xl p-6 reveal"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-white/10 rounded-lg mr-3">{category.icon}</div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-white/80">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
