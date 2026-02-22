"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  center: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

const childVariants = {
  enter: { opacity: 0, y: 24 },
  center: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.3, ease: "easeIn" as const },
  },
};

export function HeroCarousel({ slides, interval = 7000 }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [imgErrors, setImgErrors] = useState<Set<number>>(() => new Set());
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const count = slides.length;

  const goTo = useCallback(
    (index: number) => setCurrent(((index % count) + count) % count),
    [count],
  );
  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (paused || count <= 1) return;
    timerRef.current = setInterval(next, interval);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, next, interval, count]);

  const handleImgError = (idx: number) => {
    setImgErrors((prev) => new Set(prev).add(idx));
  };

  const slide = slides[current];

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
              animate="center"
              exit="exit"
              className="max-w-[700px]"
              role="group"
              aria-roledescription="slide"
              aria-label={`${current + 1} od ${count}`}
            >
              {/* Heading */}
              <motion.h1
                variants={childVariants}
                className="font-heading text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.75rem] font-bold text-white leading-[1.1] tracking-tight"
              >
                {slide.title}{" "}
                <span className="text-primary-400">{slide.highlight}</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={childVariants}
                className="mt-4 sm:mt-5 md:mt-6 text-[0.95rem] sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-[600px]"
              >
                {slide.description}
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={childVariants}
                className="mt-6 sm:mt-7 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <Link
                  href={slide.ctaPrimary.href}
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-primary-500 text-white font-heading font-semibold rounded-xl hover:bg-primary-600 active:bg-primary-700 transition-colors shadow-lg text-base md:text-lg w-full sm:w-auto"
                >
                  {slide.ctaPrimary.label}
                </Link>
                <Link
                  href={slide.ctaSecondary.href}
                  className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-white/40 text-white font-heading font-medium rounded-xl hover:bg-white/10 active:bg-white/20 transition-colors text-base md:text-lg backdrop-blur-sm w-full sm:w-auto"
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
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 hidden sm:flex items-center justify-center w-11 h-11 rounded-full bg-black/20 backdrop-blur-sm text-white/70 hover:bg-black/40 hover:text-white transition-all"
            aria-label="Prethodni slajd"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 hidden sm:flex items-center justify-center w-11 h-11 rounded-full bg-black/20 backdrop-blur-sm text-white/70 hover:bg-black/40 hover:text-white transition-all"
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
