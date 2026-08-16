"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "higorwilvert16@gmail.com",
    href: "mailto:higorwilvert16@gmail.com",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "+55 (49) 99836-1882",
    href: "tel:+5549998361882",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@higorwilvert",
    href: "https://github.com/higorwilvert",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Higor Wilvert",
    href: "https://www.linkedin.com/in/higor-wilvert-a3b382257/",
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-gold text-navy">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <div>
            <p className="eyebrow text-forest">Vamos trabalhar juntos</p>
            <h2 className="max-w-4xl text-5xl font-semibold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Tem uma ideia? Vamos tirá-la do papel.
            </h2>
          </div>
          <a
            href="mailto:higorwilvert16@gmail.com"
            className="flex h-24 w-24 items-center justify-center rounded-full bg-navy text-ivory transition-transform hover:rotate-6 sm:h-28 sm:w-28"
            aria-label="Enviar um email"
          >
            <ArrowUpRight className="h-9 w-9" />
          </a>
        </motion.div>

        <div className="mt-16 grid border-y border-navy/20 md:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="group border-b border-navy/20 py-7 md:border-r md:px-6 md:[&:nth-child(2n)]:border-r-0 lg:border-b-0 lg:[&:nth-child(2n)]:border-r lg:last:border-r-0 lg:first:pl-0"
            >
              <div className="flex items-center justify-between">
                <contact.icon className="h-5 w-5 text-forest" />
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-navy/55">{contact.label}</p>
              <p className="mt-2 break-words text-sm font-semibold">{contact.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
