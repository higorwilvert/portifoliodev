"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LightRays from "./light-rays";

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
      className="relative min-h-screen flex items-center justify-center pt-8 text-white overflow-hidden"
    >
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#0f1729] to-[#050810]"></div>

      {/* Light Rays Background Effect */}
      <div className="absolute inset-0 opacity-40">
        <LightRays
          raysOrigin="top-center"
          raysColor="#3b82f6"
          raysSpeed={0.4}
          lightSpread={0.8}
          rayLength={2.2}
          followMouse={false}
          mouseInfluence={0}
          noiseAmount={0.1}
          distortion={0.05}
          fadeDistance={0.7}
          saturation={0.9}
          pulsating={false}
        />
      </div>

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0e1a]/50"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Profile Image Section */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Subtle blue ring */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-500/20"></div>
              <div className="relative bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-full p-2">
                <div className="bg-white rounded-full p-1 shadow-2xl transition-transform duration-300 hover:scale-105">
                  <div className="overflow-hidden rounded-full w-[200px] h-[200px] lg:w-[240px] lg:h-[240px]">
                    <Image
                      src="/euu.jpg"
                      alt="Foto de Higor Wilvert"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Animated Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-500/10 border border-blue-500/30"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium">Disponível para novos projetos</span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-blue-400 mb-3 font-medium tracking-wide"
            >
              👋 Prazer, eu sou
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white"
            >
              Higor Wilvert
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              Desenvolvedor <span className="text-blue-400 font-semibold">Full Stack</span> com foco em{" "}
              <span className="text-blue-300 font-semibold">Back-End</span>, criando soluções robustas com{" "}
              <span className="text-blue-200 font-semibold">código limpo</span> e{" "}
              <span className="text-blue-100 font-semibold">alta performance</span>
            </motion.p>

            {/* Tech Stack Icons */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-4 mb-10 flex-wrap"
            >
              {[
                { icon: Code2, label: "Clean Code" },
                { icon: Rocket, label: "Performance" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 hover:border-blue-500/40 transition-all"
                >
                  <item.icon className="w-5 h-5 text-blue-400" />
                  <span className="text-sm text-gray-300">{item.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link
                href="#projects"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white bg-blue-600 hover:bg-blue-500 transition-colors duration-300 font-semibold"
              >
                Ver Projetos
                <Rocket className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white bg-white/10 border border-blue-500/30 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300 font-semibold"
              >
                Entre em Contato
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
