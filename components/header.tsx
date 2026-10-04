"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { navigation, socialLinks } from "@/lib/portfolio";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { scrollYProgress } = useScroll();
  const progress = useTransform(scrollYProgress, (value) => `scaleX(${value})`);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: 0 },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <motion.div
        className="reading-progress"
        style={{ transform: progress }}
        aria-hidden="true"
      />
      <div className="container-section header-inner">
        <a href="#home" className="brand" aria-label="Higor Wilvert, início">
          <span className="brand-symbol">
            <Image src="/LogoHWBranco.png" alt="" width={29} height={29} />
          </span>
          <span>
            Higor Wilvert
            <span className="brand-caption">Desenvolvedor de software</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "location" : undefined}
            >
              {item.name}
            </a>
          ))}
        </nav>
        <a href="#contact" className="header-contact">
          Vamos conversar
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button
              className="menu-trigger"
              aria-label="Abrir menu de navegação"
            >
              <Menu size={23} />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="menu-overlay" />
            <Dialog.Content
              className="mobile-menu"
              aria-describedby="menu-description"
            >
              <div className="menu-heading">
                <Dialog.Title>Navegação</Dialog.Title>
                <Dialog.Close asChild>
                  <button className="menu-close" aria-label="Fechar menu">
                    <X size={23} />
                  </button>
                </Dialog.Close>
              </div>
              <Dialog.Description id="menu-description" className="sr-only">
                Explore os projetos e a trajetória de Higor Wilvert.
              </Dialog.Description>
              <nav aria-label="Navegação no celular">
                {[
                  { name: "Início", href: "#home" },
                  ...navigation,
                  { name: "Contato", href: "#contact" },
                ].map((item) => (
                  <Dialog.Close asChild key={item.href}>
                    <a href={item.href}>
                      {item.name}
                      <ArrowUpRight size={19} aria-hidden="true" />
                    </a>
                  </Dialog.Close>
                ))}
              </nav>
              <a href={`mailto:${socialLinks.email}`} className="menu-email">
                {socialLinks.email}
              </a>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
