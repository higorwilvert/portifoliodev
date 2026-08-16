"use client"

import FadeContent from "./FadeContent"
import HeroLanyard from "./hero-lanyard"
import SplitText from "./SplitText"
import { ArrowDownRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="overflow-x-clip bg-ivory pt-20">
      <div className="container-section grid grid-cols-[minmax(0,1fr)] items-center gap-0 py-6 sm:gap-4 sm:py-10 md:min-h-[calc(100svh-5rem)] md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-8 lg:py-0">
        <div className="relative z-10 w-full min-w-0 max-w-3xl py-6 sm:py-8 md:py-14">
          <p className="eyebrow !block max-w-full text-fern sm:!inline-flex">Portfólio • 2026</p>

          <SplitText
            text="Desenvolvedor Full Stack com foco em Back-End."
            tag="h1"
            splitType="words"
            textAlign="left"
            delay={75}
            duration={0.72}
            threshold={0.01}
            rootMargin="0px"
            from={{ opacity: 0, y: 18 }}
            to={{ opacity: 1, y: 0 }}
            playOnMount
            className="heading-xl !block w-full min-w-0 max-w-3xl break-words text-navy"
          />

          <FadeContent
            duration={760}
            delay={360}
            threshold={0.01}
            blur={false}
            offsetY={12}
            playOnMount
            className="mt-5 w-full min-w-0 max-w-lg sm:mt-6"
          >
            <p className="text-lg leading-relaxed text-navy/70 sm:text-xl">
              Experiência com Node.js, NestJS e React em projetos web, além de C++, Qt e SQL Server em aplicações
              desktop.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link href="#projects" className="btn-primary group">
                Ver projetos
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </Link>
              <Link href="#contact" className="text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-8 transition-colors hover:text-forest">
                Entrar em contato
              </Link>
            </div>
          </FadeContent>
        </div>

        <HeroLanyard />
      </div>
    </section>
  )
}
