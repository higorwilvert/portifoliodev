"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import { Component, type ReactNode } from "react"

const DynamicLanyard = dynamic(() => import("./Lanyard"), {
  ssr: false,
  loading: () => <LanyardLoader />,
})

function LanyardLoader() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-forest" role="status" aria-live="polite">
      <div className="h-24 w-px bg-forest/25" />
      <div className="mt-[-1px] h-28 w-20 animate-pulse rounded-xl border border-forest/20 bg-forest/5" />
      <span className="mt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-forest/55">Carregando crachá 3D</span>
    </div>
  )
}

function BadgeFallback() {
  return (
    <div className="relative mx-auto aspect-[5/7] w-[min(74vw,280px)] overflow-hidden rounded-[1.75rem] border border-navy/15 bg-ivory shadow-[0_24px_70px_rgba(26,39,68,0.16)] lg:w-[300px]">
      <div className="flex h-[11%] items-center justify-between border-b-4 border-gold bg-forest px-5 text-[10px] font-bold uppercase tracking-[0.16em] text-ivory">
        <span>HW / Portfolio</span>
        <span className="text-gold">2026</span>
      </div>
      <div className="relative h-[55%] bg-navy">
        <Image src="/euu.jpg" alt="Higor Wilvert" fill sizes="300px" className="object-cover object-center" priority />
      </div>
      <div className="border-t-4 border-gold px-5 py-5">
        <p className="text-xl font-bold tracking-tight text-navy">HIGOR WILVERT</p>
        <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-forest">Desenvolvedor Full Stack</p>
        <p className="mt-3 text-[11px] text-navy/55">Node.js • React • C++</p>
      </div>
    </div>
  )
}

class LanyardBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  componentDidCatch(error: Error) {
    console.error("Falha ao renderizar o Lanyard 3D:", error)
  }

  render() {
    return this.state.failed ? <BadgeFallback /> : this.props.children
  }
}

export default function HeroLanyard() {
  return (
    <div className="relative flex h-[360px] w-full min-w-0 items-center justify-center overflow-hidden sm:h-[460px] md:h-[540px] lg:h-[590px] xl:h-[630px]">
      <LanyardBoundary>
        <DynamicLanyard
          position={[0, 0.1, 18]}
          gravity={[0, -28, 0]}
          fov={20}
          frontImage="/euu.jpg"
          lanyardImage="/lanyard/band.svg?v=2"
          lanyardWidth={1.25}
          cardScale={3.8}
          ropeLength={0.58}
          anchorPosition={[0, 3.15, 0]}
          badgeProfile={{
            name: "Higor Wilvert",
            role: "Desenvolvedor Full Stack",
            detail: "Node.js • React • C++",
            mark: "HW / PORTFOLIO",
          }}
        />
      </LanyardBoundary>
    </div>
  )
}
