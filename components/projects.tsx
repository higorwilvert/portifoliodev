"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    title: "CRUD de Pets",
    description:
      "Sistema completo para cadastro e gerenciamento de pets com autenticação de usuários e consultas em tempo real.",
    technologies: ["React", "Node.js", "GraphQL"],
    features: ["Cadastro de pets", "Autenticação", "Consultas em tempo real"],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "CRUD de Passagens",
    description: "Aplicação desktop para gerenciamento completo de passagens com integração com banco de dados.",
    technologies: ["C++", "MySQL"],
    features: ["Desktop app", "Operações completas", "Integração com banco"],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Mãozinha App",
    description: "Aplicativo para gestão de ONGs com sistema de notificações e automações para melhorar a eficiência.",
    technologies: ["Swift", "Node-RED"],
    features: ["Gestão de ONGs", "Notificações", "Automações"],
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
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
    <section id="projects" className="section-padding">
      <div className="container-section">
        <h2 className="heading-lg text-center mb-16 reveal">Projetos</h2>

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
                  className="bg-[#1a2540] rounded-xl overflow-hidden shadow-xl"
                >
                  <div className="aspect-video bg-[#111827] overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-white/80 mb-6">{project.description}</p>

                    <div className="mb-6">
                      <h4 className="text-sm uppercase tracking-wider text-white/60 mb-2">Tecnologias</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm uppercase tracking-wider text-white/60 mb-2">Funções</h4>
                      <ul className="list-disc list-inside text-white/80 space-y-1">
                        {project.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute top-1/2 left-4 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-sm ${
              currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-white/20"
            }`}
            aria-label="Projeto anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex === projects.length - 1}
            className={`absolute top-1/2 right-4 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-sm ${
              currentIndex === projects.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-white/20"
            }`}
            aria-label="Próximo projeto"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                scrollToProject(index)
              }}
              className={`w-3 h-3 rounded-full mx-1 ${index === currentIndex ? "bg-white" : "bg-white/30"}`}
              aria-label={`Ir para projeto ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
