import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import HeroLanyard from "./hero-lanyard";
import TechTags from "./tech-tags";
import { currentRole, socialLinks } from "@/lib/portfolio";

export default function Hero() {
  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <div className="container-section hero-grid">
        <div className="hero-copy">
          <a href="#experience" className="current-position">
            <span className="status-dot" />
            Atualmente na {currentRole.company}
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <p className="hero-intro">Olá, eu sou o Higor.</p>
          <h1 id="hero-title" className="hero-title">
            Código com
            <br />
            propósito.
          </h1>
          <p className="hero-role">
            Desenvolvedor Full Stack, com foco em Back-End.
          </p>
          <p className="hero-description">
            Conecto boas ideias a soluções que funcionam. De APIs a interfaces,
            gosto de entender o problema e construir cada detalhe.
          </p>
          <div className="hero-stack">
            <TechTags technologies={["NestJS", "React", "TypeScript"]} />
          </div>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              Conhecer meus projetos
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a href="#contact" className="text-link">
              Vamos conversar
            </a>
          </div>
          <div className="hero-socials">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={17} aria-hidden="true" />
              GitHub
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={17} aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>
        <div className="badge-stage">
          <div className="badge-orbit" aria-hidden="true" />
          <HeroLanyard />
        </div>
      </div>
      <div className="container-section hero-bottom">
        <span>Higor Wilvert</span>
        <p>Web, desktop e boas ideias em construção.</p>
        <a href="#projects">
          Conheça meu trabalho
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
