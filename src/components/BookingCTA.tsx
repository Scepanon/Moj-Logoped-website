"use client";

import { useRef, useState, useEffect } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function BookingCTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reducedMotion = !!useReducedMotion();
  const [hasPulsed, setHasPulsed] = useState(false);

  useEffect(() => {
    if (!isInView || reducedMotion || hasPulsed) return;
    setHasPulsed(true);
  }, [isInView, reducedMotion, hasPulsed]);

  return (
    <section
      ref={ref}
      className="relative cta-wavy-top bg-gradient-to-b from-primary-50/80 via-bg-cream to-bg-beige py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-1 text-center lg:text-left">
            <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
              Spremni za sljedeći korak?
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-secondary-900 leading-snug">
              Spremni ste da zakažete termin?
            </h2>
            <p className="mt-5 text-secondary-600 leading-relaxed text-lg max-w-xl mx-auto lg:mx-0">
              Javite nam se i zajedno ćemo pronaći najbolji način da podržimo
              vaše dijete. Tu smo za vas — bez obzira gdje se nalazite na putu.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.span
                animate={
                  hasPulsed && !reducedMotion
                    ? { scale: [0.98, 1.02, 1] }
                    : {}
                }
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  times: [0, 0.5, 1],
                }}
                className="inline-block"
              >
                <Button
                  href="/kontakt"
                  size="lg"
                  className="w-full sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2"
                >
                  Zakažite termin
                </Button>
              </motion.span>
              <Button
                href="/usluge"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2"
              >
                Saznajte više o uslugama
              </Button>
            </div>
          </div>
          <div className="order-2 w-full max-w-xl mx-auto lg:max-w-none lg:mx-0">
            <div className="rounded-2xl sm:rounded-3xl shadow-soft-sm w-full overflow-hidden transition-all duration-[220ms] ease-out hover:shadow-soft-lg hover:scale-[1.02] hover:-translate-y-0.5 motion-reduce:hover:scale-100 motion-reduce:hover:translate-y-0">
              <PlaceholderImage
                label="Naš tim / Prostor"
                aspect="16:9"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
