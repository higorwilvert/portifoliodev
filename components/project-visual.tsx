"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ProjectVisual({
  image,
  title,
  featured = false,
}: {
  image: string;
  title: string;
  featured?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    ["translateY(16px)", "translateY(-16px)"],
  );

  return (
    <div
      ref={ref}
      className={`project-visual ${featured ? "project-visual-featured" : ""}`}
    >
      <motion.div
        className="project-image-inner"
        style={{ transform: reduce ? "none" : transform }}
      >
        <Image
          src={image}
          alt={`Logo do projeto ${title}`}
          fill
          sizes="(max-width: 767px) 90vw, (max-width: 1023px) 75vw, 55vw"
          className="project-image"
        />
      </motion.div>
    </div>
  );
}
