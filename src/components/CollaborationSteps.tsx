"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Phone, FileSearch, Heart } from "lucide-react";

const steps = [
  {
    id: "javite-se",
    icon: Phone,
    title: "Javite nam se",
    description:
      "Roditelji nas kontaktiraju putem telefona, e-pošte ili kontakt forme. Odgovaramo u roku od 24 sata i dogovorimo prvi susret.",
  },
  {
    id: "procjena",
    icon: FileSearch,
    title: "Procjena i plan",
    description:
      "Na prvim susretima upoznajemo dijete i porodicu, provodimo procjenu govorno-jezičkog razvoja i kreiramo individualni plan terapije.",
  },
  {
    id: "terapija",
    icon: Heart,
    title: "Terapija i podrška roditeljima",
    description:
      "Redovni susreti se odvijaju u toplom okruženju. Redovno vas obavještavamo o napretku i dajemo savjete za rad kod kuće.",
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
        staggerChildren: reducedMotion ? 0 : 0.12,
        delayChildren: reducedMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reducedMotion ? 0 : 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 lg:py-32 bg-white"
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8"
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className="relative flex flex-col items-center text-center p-6 md:p-8 rounded-2xl bg-bg-cream border border-primary-100/50"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-500 text-white font-heading font-bold text-lg mb-4 shrink-0">
                  {i + 1}
                </span>
                <div className="flex items-center justify-center w-9 h-9 text-primary-600 mb-2" aria-hidden>
                  <Icon className="w-9 h-9" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-secondary-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-secondary-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
