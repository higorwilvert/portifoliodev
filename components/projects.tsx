"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink, Github, Sparkles } from "lucide-react"
import { useRef, useState } from "react"

const projects = [
  {
    title: "Talk Language",
    description:
    "Um sistema para aprendizado de diversas línguas estrangeiras de maneira gamificada",
    technologies: ["React", "Node.js"],
    features: ["Cadastro de usuário", "Exercícios de vocabulário", "Progressos Monitorado", "Gamificação"],
    image: "/talklanguage.png?height=300&width=500",
  },
  {
    title: "Loopin",
    description: "Sistema para gerenciamento assinaturas e gastos fixos com uma interface elegante e com insights úteis.",
    technologies: ["Coming soon"],
    features: ["Controle de assinaturas", "Dashboard", "Filtros de gastos", "Exportação de dados"],
    image: "/loopin.png",
  },
  {
    title: "Mãozinha",
    description: "Aplicativo para gestão de ONGs com sistema de notificações e automações para melhorar a eficiência.",
    technologies: ["Swift", "Node-RED"],
    features: ["Gestão de ONGs", "Notificações", "Automações"],
    image: "/Maozinha.png",
  },
]

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1)
      scrollToProject(currentIndex + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      scrollToProject(currentIndex - 1)
    }
  }

  const scrollToProject = (index: number) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth
      sliderRef.current.scrollTo({
        left: index * slideWidth,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-[#0a0e1a] via-[#0f1729] to-[#050810] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
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
            <span className="text-sm font-medium text-blue-300">Meus Trabalhos</span>
          </div>
          <h2 className="heading-lg mb-4 text-white">
            Projetos em Destaque
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi com paixão e dedicação
          </p>
        </motion.div>

        <div className="relative">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project, index) => (
              <div key={project.title} className="min-w-full snap-center px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group"
                >
                  <div className="bg-[#1a2540] border border-blue-500/20 rounded-2xl overflow-hidden shadow-xl hover:border-blue-500/50 transition-all">
                    {/* Image Container */}
                    <div className="relative aspect-video bg-[#111827] overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      
                      {/* Action Buttons */}
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="p-2 bg-[#1a2540] rounded-lg hover:bg-blue-500 transition-colors border border-blue-500/30">
                          <ExternalLink className="w-5 h-5" />
                        </button>
                        <button className="p-2 bg-[#1a2540] rounded-lg hover:bg-blue-500 transition-colors border border-blue-500/30">
                          <Github className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    <div className="p-6 md:p-8">
                      {/* Title with Badge */}
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-all">
                          {project.title}
                        </h3>
                        <div className="px-3 py-1 rounded-full bg-blue-500 text-xs font-semibold">
                          Featured
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-3 font-semibold">Tecnologias</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span 
                              key={tech} 
                              className="px-4 py-1.5 bg-blue-500/10 rounded-full text-sm border border-blue-500/30 hover:border-blue-500/50 hover:bg-blue-500/20 transition-all"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-3 font-semibold">Funcionalidades</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {project.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute top-1/2 left-0 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all ${
              currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-white/20 hover:scale-110"
            }`}
            aria-label="Projeto anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex === projects.length - 1}
            className={`absolute top-1/2 right-0 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all ${
              currentIndex === projects.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-white/20 hover:scale-110"
            }`}
            aria-label="Próximo projeto"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                scrollToProject(index)
              }}
              className={`transition-all rounded-full ${
                index === currentIndex 
                  ? "w-8 h-3 bg-blue-500" 
                  : "w-3 h-3 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Ir para projeto ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
