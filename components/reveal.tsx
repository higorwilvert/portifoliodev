"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !window.IntersectionObserver) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    const configure = () => {
      observer?.disconnect();
      if (preference.matches) {
        element.removeAttribute("data-pending");
        return;
      }
      // Server-rendered content stays readable without JavaScript.
      if (element.getBoundingClientRect().top > window.innerHeight)
        element.dataset.pending = "true";
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          element.removeAttribute("data-pending");
          element.dataset.visible = "true";
          observer?.disconnect();
        },
        { threshold: 0.08, rootMargin: "0px 0px -24px 0px" },
      );
      observer.observe(element);
    };
    configure();
    preference.addEventListener("change", configure);
    return () => {
      observer?.disconnect();
      preference.removeEventListener("change", configure);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
