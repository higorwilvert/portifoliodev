"use client"

import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const navItems = [
  { name: "Início", href: "#home" },
  { name: "Sobre", href: "#about" },
  { name: "Projetos", href: "#projects" },
  { name: "Habilidades", href: "#skills" },
  { name: "Experiência", href: "#experience" },
  { name: "Contato", href: "#contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b py-3 transition-all duration-300 ${
        scrolled 
          ? "border-navy/10 bg-ivory/95 shadow-[0_10px_30px_rgba(26,39,68,0.08)] backdrop-blur-lg"
          : "border-navy/10 bg-ivory"
      }`}
    >
      <div className="container-section flex items-center justify-between">
        <Link href="#home" className="flex items-center group">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy transition-transform duration-200 group-hover:-rotate-6">
            <Image
              src="/LogoHWBranco.png"
              alt="Higor Wilvert Logo"
              width={34}
              height={34}
              className="rounded-full"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-navy/70 transition-colors hover:bg-navy/5 hover:text-forest"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="hidden rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-ivory transition-colors hover:bg-fern lg:inline-flex"
        >
          Vamos conversar
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={`rounded-full p-2 transition-colors md:hidden ${
            isMenuOpen 
              ? "bg-navy text-ivory"
              : "text-navy hover:bg-navy/5"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute left-0 right-0 top-full border-b border-navy/10 bg-ivory shadow-xl md:hidden"
        >
          <nav className="flex flex-col px-3 py-3">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-navy/75 transition-colors hover:bg-navy/5 hover:text-forest"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-gold"></div>
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  )
}
