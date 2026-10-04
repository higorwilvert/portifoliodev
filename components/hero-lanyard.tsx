"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { Hand } from "lucide-react";
import { useInView } from "framer-motion";
import { Component, useEffect, useRef, useState, type ReactNode } from "react";
import { currentRole } from "@/lib/portfolio";

const badgeProfile = {
  name: "Higor Mueller",
  role: currentRole.title,
  detail: `${currentRole.company} • Full Stack`,
  mark: "HW / PORTFOLIO",
};

const DynamicLanyard = dynamic(() => import("./Lanyard"), {
  ssr: false,
  loading: () => <LanyardLoader />,
});

function LanyardLoader() {
  return (
    <div className="badge-loader" role="status">
      <div className="badge-loader-line" />
      <div className="badge-loader-card" />
      <span>Preparando seu crachá…</span>
    </div>
  );
}

function BadgeFallback() {
  return (
    <div className="badge-static">
      <div className="badge-static-header">
        <span>HW / Portfolio</span>
        <span>Full Stack</span>
      </div>
      <div className="badge-static-photo">
        <Image
          src="/euu.jpg"
          alt="Higor Mueller"
          fill
          sizes="246px"
          className="object-cover object-center"
        />
      </div>
      <div className="badge-static-info">
        <h2>{badgeProfile.name}</h2>
        <p>{badgeProfile.role}</p>
        <span>{badgeProfile.detail}</span>
      </div>
    </div>
  );
}

class LanyardBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch(error: Error) {
    console.error("Não foi possível exibir o crachá 3D:", error);
  }
  render() {
    return this.state.failed ? <BadgeFallback /> : this.props.children;
  }
}

export default function HeroLanyard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "100px" });
  const [mode, setMode] = useState<"loading" | "static" | "interactive">(
    "loading",
  );
  const [visible, setVisible] = useState(true);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 767px)");
    const updateSize = () => setCompact(mobile.matches);
    const updateMode = () =>
      setMode(
        preference.matches || !("WebGLRenderingContext" in window)
          ? "static"
          : "interactive",
      );
    const updateVisibility = () => setVisible(!document.hidden);
    updateSize();
    updateMode();
    updateVisibility();
    preference.addEventListener("change", updateMode);
    mobile.addEventListener("change", updateSize);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      preference.removeEventListener("change", updateMode);
      mobile.removeEventListener("change", updateSize);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  return (
    <div ref={ref} className="lanyard-container">
      {mode === "loading" ? (
        <LanyardLoader />
      ) : mode === "static" ? (
        <BadgeFallback />
      ) : (
        <LanyardBoundary>
          <DynamicLanyard
            key={compact ? "mobile" : "desktop"}
            position={compact ? [0, -0.45, 12] : [0, -0.65, 18]}
            gravity={[0, -28, 0]}
            fov={22}
            frontImage="/euu.jpg"
            lanyardImage="/lanyard/band.svg?v=4"
            lanyardWidth={compact ? 0.85 : 1.25}
            cardScale={compact ? 3.2 : 3.8}
            ropeLength={compact ? 0.22 : 0.58}
            anchorPosition={compact ? [0, 2.3, 0] : [0, 3.15, 0]}
            badgeProfile={badgeProfile}
            active={inView && visible}
          />
          <p className="badge-instruction">
            <Hand size={13} aria-hidden="true" />
            <span className="badge-pointer-hint">
              Pode arrastar. O crachá é interativo.
            </span>
            <span className="badge-touch-hint">
              Meu crachá, em movimento.
            </span>
          </p>
        </LanyardBoundary>
      )}
    </div>
  );
}
