"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  /** Stagger index for sequential delay (0–n), ~50ms per step */
  staggerIndex?: number;
  className?: string;
  /** Disable animation (e.g. when parent handles it) */
  disabled?: boolean;
}

const DURATION = 0.22;
const STAGGER_DELAY = 0.06;

export function ScrollReveal({
  children,
  staggerIndex = 0,
  className = "",
  disabled = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reducedMotion = !!useReducedMotion();

  if (disabled) return <div className={className}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      initial={
        reducedMotion
          ? false
          : { opacity: 0, y: 10 }
      }
      animate={
        isInView
          ? reducedMotion
            ? {}
            : { opacity: 1, y: 0 }
          : {}
      }
      transition={{
        duration: DURATION,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: reducedMotion ? 0 : staggerIndex * STAGGER_DELAY,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
