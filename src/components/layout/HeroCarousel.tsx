"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { HeroSlide } from "@/data/heroSlides";

interface HeroCarouselProps {
  slides: HeroSlide[];
  interval?: number;
}

const FALLBACK_GRADIENTS = [
  "from-secondary-800 via-secondary-700 to-primary-900",
  "from-secondary-900 via-primary-900 to-secondary-800",
  "from-primary-900 via-secondary-800 to-secondary-900",
];

const stagger = {
  center: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

const childVariants = (reduced: boolean) => ({
  enter: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 20 },
  center: {
    opacity: 1,
    y: 0,
    transition: { duration: reduced ? 0 : 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
  exit: {
    opacity: reduced ? 0 : 0,
    y: reduced ? 0 : -12,
    transition: { duration: reduced ? 0 : 0.2, ease: "easeIn" as const },
  },
});

export function HeroCarousel({ slides, interval = 7000 }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [imgErrors, setImgErrors] = useState<Set<number>>(() => new Set());
  const [mounted, setMounted] = useState(false);
  const reducedMotion = useReducedMotion();

  const count = slides.length;

  const goTo = useCallback(
    (index: number) => setCurrent(((index % count) + count) % count),
    [count],
  );
  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (paused || count <= 1) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [paused, next, interval, count]);

  const handleImgError = (idx: number) => {
    setImgErrors((prev) => new Set(prev).add(idx));
  };

  const slide = slides[current];
  const variants = childVariants(!!reducedMotion);

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Istaknuto"
    >
      {/* ── Background slides (crossfade) ── */}
      {slides.map((s, i) => {
        const isActive = i === current;
        const showImg = !imgErrors.has(i);
        return (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            aria-hidden={!isActive}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${FALLBACK_GRADIENTS[i % FALLBACK_GRADIENTS.length]}`}>
              {showImg && (
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  className="object-cover"
                  priority={i === 0}
                  sizes="100vw"
                  onError={() => handleImgError(i)}
                />
              )}
            </div>
          </div>
        );
      })}

      {/* ── Overlay: gradient + radial vignette ── */}
      <div className="absolute inset-0 z-[11]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="absolute inset-0 hero-vignette" />
      </div>

      {/* ── Text content ── */}
      <div className="relative z-20 flex min-h-screen w-full">
        <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-10 flex flex-col justify-center pt-20 pb-32 sm:pb-28 md:pb-16 md:-mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              variants={stagger}
              initial="enter"
              animate={mounted ? "center" : "enter"}
              exit="exit"
              className="max-w-[700px]"
              role="group"
              aria-roledescription="slide"
              aria-label={`${current + 1} od ${count}`}
            >
              {/* Heading — one strong line */}
              <motion.h1
                variants={variants}
                className="font-heading text-[1.5rem] sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.15] tracking-tight"
              >
                {slide.title}
              </motion.h1>

              {/* Subheading — benefits */}
              <motion.p
                variants={variants}
                className="mt-3 sm:mt-4 md:mt-5 text-[0.9rem] sm:text-base md:text-lg text-white/85 leading-relaxed max-w-[600px]"
              >
                {slide.subheading}
              </motion.p>

              {/* CTAs — stacked full-width on mobile */}
              <motion.div variants={variants} className="mt-5 sm:mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <Link
                    href={slide.ctaPrimary.href}
                    className="inline-flex items-center justify-center px-6 py-3.5 sm:py-3 bg-primary-500 text-white font-heading font-semibold rounded-xl hover:bg-primary-600 active:bg-primary-700 transition-colors shadow-lg text-base w-full sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black/30"
                  >
                    {slide.ctaPrimary.label}
                  </Link>
                  <span className="text-white/70 text-sm text-center sm:text-left">
                    {slide.ctaHelper}
                  </span>
                </div>
                <Link
                  href={slide.ctaSecondary.href}
                  className="inline-flex items-center justify-center px-6 py-3.5 sm:py-3 border-2 border-white/40 text-white font-heading font-medium rounded-xl hover:bg-white/10 active:bg-white/20 transition-colors text-base backdrop-blur-sm w-full sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/30"
                >
                  {slide.ctaSecondary.label}
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Chevron controls ── */}
      {count > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 hidden sm:flex items-center justify-center w-11 h-11 rounded-full bg-black/20 backdrop-blur-sm text-white/70 hover:bg-black/40 hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            aria-label="Prethodni slajd"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 hidden sm:flex items-center justify-center w-11 h-11 rounded-full bg-black/20 backdrop-blur-sm text-white/70 hover:bg-black/40 hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            aria-label="Sljedeći slajd"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </>
      )}

      {/* ── Dot indicators ── */}
      {count > 1 && (
        <div className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 h-2.5 bg-primary-400"
                  : "w-2.5 h-2.5 bg-white/35 hover:bg-white/60"
              }`}
              aria-label={`Idi na slajd ${i + 1}`}
              aria-current={i === current ? "true" : undefined}
            />
          ))}
        </div>
      )}
    </section>
  );
}
