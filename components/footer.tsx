"use client"

import { motion } from "framer-motion"
import { Code2, Heart } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative py-12 bg-gradient-to-t from-[#0a0a0a] to-[#0f172a] border-t border-white/5">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      
      <div className="container-section relative z-10">
        <div className="flex flex-col items-center gap-6">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-bold text-blue-400 mb-2">
              Higor Wilvert
            </h3>
            <p className="text-gray-400 text-sm">Desenvolvedor Full Stack - Especialista em Back-End</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm"
          >
            {["Início", "Sobre", "Projetos", "Skills", "Contato"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-white transition-colors hover:underline"
              >
                {item}
              </Link>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <p className="text-gray-400 text-sm flex items-center justify-center gap-2 flex-wrap">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span>e</span>
              <Code2 className="w-4 h-4 text-blue-400" />
              <span>por Higor Wilvert</span>
            </p>
            <p className="text-gray-500 text-xs mt-2">
              © {new Date().getFullYear()} Todos os direitos reservados
            </p>
          </motion.div>

          {/* Tech Stack Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 text-xs text-gray-500"
          >
            <span>Construído com</span>
            <span className="px-2 py-1 bg-white/5 rounded border border-white/10">Next.js</span>
            <span className="px-2 py-1 bg-white/5 rounded border border-white/10">TailwindCSS</span>
            <span className="px-2 py-1 bg-white/5 rounded border border-white/10">Framer Motion</span>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
