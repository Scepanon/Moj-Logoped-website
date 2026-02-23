"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  interval?: number;
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export function TestimonialsCarousel({
  testimonials,
  interval = 8000,
}: TestimonialsCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();
  const count = testimonials.length;

  const goTo = useCallback(
    (index: number) => setCurrent(((index % count) + count) % count),
    [count],
  );
  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (paused || count <= 1) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [paused, next, interval, count]);

  const minSwipeDistance = 50;
  const onTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (touchStart == null || touchEnd == null) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) next();
    else if (distance < -minSwipeDistance) prev();
    setTouchStart(null);
    setTouchEnd(null);
  };

  const t = testimonials[current];
  const duration = reducedMotion ? 0 : 0.22;

  return (
    <section
      className="relative py-20 md:py-28 lg:py-32 section-divider-soft bg-bg-cream"
      aria-label="Recenzije roditelja"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-xs font-semibold text-secondary-400 uppercase tracking-widest mb-3">
            Iskustva roditelja
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-secondary-900">
            Šta kažu roditelji
          </h2>
          <p className="mt-4 text-secondary-500 max-w-2xl mx-auto leading-relaxed">
            Iskustva porodica koje su nam se obratile za podršku govorno-jezičkom razvoju.
          </p>
        </div>

        <div
          className="relative max-w-3xl mx-auto"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="group/card bg-white rounded-3xl shadow-soft-lg p-8 md:p-12 lg:p-14 min-h-[320px] flex flex-col justify-center transition-all duration-[220ms] ease-out hover:shadow-soft-lg hover:shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-center"
              >
                <p className="font-heading text-xl md:text-2xl lg:text-3xl text-secondary-700 leading-relaxed">
                  <span className="inline-block text-primary-500 font-bold text-3xl md:text-4xl lg:text-5xl align-top leading-none transition-transform duration-[220ms] ease-out group-hover/card:-translate-y-0.5 motion-reduce:translate-y-0">
                    „
                  </span>
                  {t.quote}
                </p>

                <div className="mt-8 flex flex-col items-center gap-1">
                  <span className="font-heading font-semibold text-secondary-900">
                    {t.name}
                  </span>
                  <span className="text-sm text-secondary-500">
                    {t.childAge} — {t.context}
                  </span>
                  <div className="flex gap-0.5 mt-2" aria-hidden>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <StarIcon key={i} className="w-4 h-4 text-primary-400" />
                    ))}
                  </div>
                </div>

                {t.readMoreHref && (
                  <Link
                    href={t.readMoreHref}
                    className="mt-6 inline-block text-primary-600 hover:text-primary-700 font-medium text-sm underline underline-offset-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 rounded"
                  >
                    Saznajte više
                  </Link>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {count > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 w-10 h-10 rounded-full bg-white shadow-soft-md flex items-center justify-center text-secondary-600 hover:text-primary-600 hover:bg-primary-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2"
                aria-label="Prethodna recenzija"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 w-10 h-10 rounded-full bg-white shadow-soft-md flex items-center justify-center text-secondary-600 hover:text-primary-600 hover:bg-primary-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2"
                aria-label="Sljedeća recenzija"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>

              <div className="flex justify-center gap-2.5 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goTo(i)}
                    className={`rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 ${
                      i === current
                        ? "w-8 h-2.5 bg-primary-500"
                        : "w-2.5 h-2.5 bg-primary-200 hover:bg-primary-300"
                    }`}
                    aria-label={`Recenzija ${i + 1}`}
                    aria-current={i === current ? "true" : undefined}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
