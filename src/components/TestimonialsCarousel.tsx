"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  interval?: number;
}

export function TestimonialsCarousel({
  testimonials,
  interval = 8000,
}: TestimonialsCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
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

  const t = testimonials[current];

  return (
    <section
      className="py-20 md:py-28 lg:py-32 bg-bg-cream"
      aria-label="Recenzije roditelja"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-secondary-900">
            Šta kažu roditelji
          </h2>
          <p className="mt-4 text-secondary-500 max-w-2xl mx-auto leading-relaxed">
            Iskustva porodica koje su nam se obratile za podršku govorno-jezičkom razvoju.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-soft-lg p-8 md:p-12 lg:p-14 min-h-[320px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-center"
              >
                {/* Large quote with highlighted opening mark */}
                <p className="font-heading text-xl md:text-2xl lg:text-3xl text-secondary-700 leading-relaxed">
                  <span className="text-primary-500 font-bold text-3xl md:text-4xl lg:text-5xl align-top leading-none">
                    „
                  </span>
                  {t.quote}
                </p>

                {/* Parent name and context */}
                <div className="mt-8 flex flex-col items-center gap-1">
                  <span className="font-heading font-semibold text-secondary-900">
                    {t.name}
                  </span>
                  <span className="text-sm text-secondary-500">
                    {t.childAge} — {t.context}
                  </span>
                </div>

                {/* Read more link */}
                {t.readMoreHref && (
                  <Link
                    href={t.readMoreHref}
                    className="mt-6 inline-block text-primary-600 hover:text-primary-700 font-medium text-sm underline underline-offset-2 transition-colors"
                  >
                    Saznajte više
                  </Link>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          {count > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 w-10 h-10 rounded-full bg-white shadow-soft-md flex items-center justify-center text-secondary-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                aria-label="Prethodna recenzija"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 w-10 h-10 rounded-full bg-white shadow-soft-md flex items-center justify-center text-secondary-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                aria-label="Sljedeća recenzija"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex justify-center gap-2.5 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goTo(i)}
                    className={`rounded-full transition-all duration-300 ${
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
