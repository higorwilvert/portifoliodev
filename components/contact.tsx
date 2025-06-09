"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Github, Linkedin } from "lucide-react"

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
    value: "GitHub",
    href: "https://github.com/higorwilvert",
  },
  {
    icon: <Linkedin size={24} />,
    label: "LinkedIn",
    value: "LinkedIn",
    href: "https://www.linkedin.com/in/higor-wilvert-a3b382257/",
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-[#111827]">
      <div className="container-section">
        <h2 className="heading-lg text-center mb-16 reveal">Contato</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {contactInfo.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center p-6 bg-[#192339] rounded-xl hover:bg-[#243050] transition-colors reveal"
            >
              <div className="p-3 bg-white/10 rounded-full mb-4">{contact.icon}</div>
              <h3 className="text-sm uppercase tracking-wider text-white/60 mb-1">{contact.label}</h3>
              <p className="text-center">{contact.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
