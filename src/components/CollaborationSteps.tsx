"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Phone, FileSearch, Heart, Target } from "lucide-react";

const steps = [
  {
    id: "javite-se",
    icon: Phone,
    title: "Javite nam se",
    description:
      "Kontaktirajte nas putem telefona, e-pošte ili kontakt forme. Odgovaramo u roku od 24 sata i dogovorimo prvi susret koji vam odgovara.",
  },
  {
    id: "procjena",
    icon: FileSearch,
    title: "Procjena i plan",
    description:
      "Na prvim susretima upoznajemo dijete i porodicu, provodimo procjenu govorno-jezičkog razvoja i kreiramo individualni plan terapije prilagođen vašem djetetu.",
  },
  {
    id: "terapija",
    icon: Heart,
    title: "Terapija i podrška roditeljima",
    description:
      "Redovni susreti se odvijaju u toplom okruženju. Redovno vas obavještavamo o napretku i dajemo savjete za rad kod kuće.",
  },
  {
    id: "progres",
    icon: Target,
    title: "Progres i ciljevi",
    description:
      "Pratimo napredak i prilagođavamo plan kako vaše dijete postepeno postiže ciljeve. Roditelji su uvek u toku i uključeni u proces.",
  },
];

export function CollaborationSteps() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.1,
        delayChildren: reducedMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reducedMotion ? 0 : 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-28 lg:py-32 section-divider-soft bg-gradient-to-b from-primary-50/30 via-bg-cream/80 to-bg-beige/50"
      aria-label="Kako izgleda saradnja"
    >
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-14 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-secondary-900">
            Kako izgleda saradnja
          </h2>
          <p className="mt-4 text-secondary-500 max-w-2xl mx-auto leading-relaxed">
            Od prvog kontakta do redovnih susreta — evo kako zajedno radimo na
            podršci vašem djetetu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: photo in organic blob shape */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="order-2 lg:order-1 flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[380px] aspect-[4/5]">
              {/* Organic blob shape */}
              <div className="absolute inset-0 rounded-[42%_58%_55%_45%_/_60%_40%_60%_40%] overflow-hidden shadow-soft-lg bg-primary-100/30">
                <Image
                  src="/images/homepage/klinac_saradnja.png"
                  alt="Dijete u logopedskoj terapiji"
                  fill
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="object-cover object-center"
                  priority
                />
              </div>
              {/* Soft decorative shadow */}
              <div
                className="absolute -inset-4 rounded-[42%_58%_55%_45%_/_60%_40%_60%_40%] bg-primary-200/20 blur-2xl -z-10"
                aria-hidden
              />
            </div>
          </motion.div>

          {/* Right: 4 steps */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="order-1 lg:order-2 space-y-6 md:space-y-8"
          >
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  variants={itemVariants}
                  className="flex gap-5 md:gap-6 items-start"
                >
                  <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary-500 text-white font-heading font-bold text-lg shrink-0 shadow-soft-sm">
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Icon className="w-5 h-5 text-primary-600 shrink-0" strokeWidth={1.5} aria-hidden />
                      <h3 className="font-heading text-xl font-semibold text-secondary-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-secondary-500 text-[0.95rem] leading-[1.65]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
