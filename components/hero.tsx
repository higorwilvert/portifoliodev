"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container-section text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_fundo_personalizado-8TfKCqvMZMUq5kJJeeB3p1z115qW2e.png"
            alt="Higor Wilvert Logo"
            width={80}
            height={80}
            className="mx-auto"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-white/80 mb-4"
        >
          Olá, eu sou
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="heading-xl mb-6"
        >
          Higor Wilvert
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-3xl mx-auto mb-10"
        >
          Desenvolvedor focado em soluções eficientes e interfaces modernas
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href="#projects" className="btn-primary">
            Ver projetos
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
