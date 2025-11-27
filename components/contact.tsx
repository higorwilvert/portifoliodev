"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone, Send, Sparkles } from "lucide-react"

const contactInfo = [
  {
    icon: <Mail size={24} />,
    label: "Email",
    value: "higorwilvert16@gmail.com",
    href: "mailto:higorwilvert16@gmail.com",
  },
  {
    icon: <Phone size={24} />,
    label: "Telefone",
    value: "+55 (49) 99836-1882",
    href: "tel:+5549998361882",
  },
  {
    icon: <Github size={24} />,
    label: "GitHub",
    value: "@higorwilvert",
    href: "https://github.com/higorwilvert",
  },
  {
    icon: <Linkedin size={24} />,
    label: "LinkedIn",
    value: "Higor Wilvert",
    href: "https://www.linkedin.com/in/higor-wilvert-a3b382257/",
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-[#111827] to-[#0f172a] relative overflow-hidden">
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
            <Send className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">Entre em Contato</span>
          </div>
          <h2 className="heading-lg mb-4 text-white">
            Vamos Trabalhar Juntos
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Estou sempre aberto a novos projetos e oportunidades. Entre em contato!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex flex-col items-center p-6 bg-[#1a2540] border border-blue-500/20 rounded-2xl hover:border-blue-500/50 hover:bg-[#1f2d4d] transition-all h-full">
                {/* Icon with Background */}
                <div className="p-4 bg-blue-500 rounded-2xl mb-4 transition-transform hover:scale-105">
                  <div className="text-white">{contact.icon}</div>
                </div>
                
                {/* Label */}
                <h3 className="text-xs uppercase tracking-wider text-gray-400 mb-2 font-semibold">
                  {contact.label}
                </h3>
                
                {/* Value */}
                <p className="text-center text-white font-medium group-hover:text-blue-400 transition-all">
                  {contact.value}
                </p>

                {/* Hover Arrow */}
                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg 
                    className="w-4 h-4 text-blue-400" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-blue-500/10 rounded-2xl border border-blue-500/30">
            <Sparkles className="w-8 h-8 text-blue-400" />
            <h3 className="text-2xl font-bold">Tem um projeto em mente?</h3>
            <p className="text-gray-400 max-w-md">
              Vamos conversar sobre como posso ajudar a transformar suas ideias em realidade
            </p>
            <a
              href="mailto:higorwilvert16@gmail.com"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white bg-blue-600 hover:bg-blue-500 transition-colors duration-300 font-semibold"
            >
              Enviar Email
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
