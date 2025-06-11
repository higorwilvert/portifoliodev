"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 text-white"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="text-center px-4"
      >
        <motion.div variants={itemVariants} className="mb-6 flex justify-center">
          <div className="bg-[#e8e4e6] rounded-lg shadow-lg p-4 w-[220px] transform transition-transform hover:scale-105 hover:-rotate-2">
            <div className="overflow-hidden rounded-md">
              <Image
                src="/euu.jpg"
                alt="Foto de Higor Wilvert"
                width={300}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="mt-8">
            </p>
          </div>
        </motion.div>

        <motion.p variants={itemVariants} className="text-lg text-white/70 mb-2">
          Prazer, eu sou
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Higor Wilvert
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-3xl mx-auto mb-10"
        >
          Desenvolvedor full stack com foco em performance, usabilidade e código limpo.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link
            href="#projects"
            className="inline-block px-6 py-3 rounded-lg text-white bg-[#1a2540] hover:bg-[#243050] transition-colors"
          >
            Ver projetos
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}