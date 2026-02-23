"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { TeamMember } from "@/data/team";

const DURATION = 0.22;
const STAGGER_DELAY = 0.08;

interface FounderSectionProps {
  founder: TeamMember;
}

export function FounderSection({ founder }: FounderSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reducedMotion = !!useReducedMotion();

  return (
    <div ref={ref} className="max-w-4xl mx-auto">
      {/* Outer container: image + text as one cohesive block */}
      <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 overflow-visible">
        {/* Image — left on desktop, full-width above on mobile; always visible (no scroll animation) */}
        <div className="relative w-full md:w-[280px] lg:w-[320px] shrink-0">
          <div className="relative w-full h-[320px] md:h-[440px] rounded-3xl overflow-hidden shadow-soft-lg bg-primary-100/30">
            <Image
              src={founder.photo}
              alt={founder.name}
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* Text card — right on desktop, vertically centered; overlaps image edge slightly */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: DURATION,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: reducedMotion ? 0 : STAGGER_DELAY,
          }}
          className="flex-1 md:flex md:items-center"
        >
          <div className="bg-white rounded-2xl md:rounded-l-2xl md:rounded-r-3xl shadow-soft-lg p-6 md:p-8 lg:p-10 md:min-h-[360px] md:flex md:flex-col md:justify-center text-center md:text-left">
            <h3 className="font-heading text-xl md:text-2xl font-semibold text-secondary-900">
              {founder.name}
            </h3>
            <p className="text-sm text-primary-600 font-medium mt-1">
              {founder.title}
            </p>
            <p className="text-secondary-600 leading-relaxed mt-4 text-[1.05rem]">
              {founder.bio}
            </p>
            {founder.approachQuote && (
              <p className="text-primary-700/90 mt-4 leading-relaxed italic">
                &ldquo;{founder.approachQuote}&rdquo;
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
