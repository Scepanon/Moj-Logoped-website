"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import {
  MessageCircle,
  ClipboardList,
  Users,
  Baby,
  BookOpen,
  Mic,
  Brain,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";
import type { Service } from "@/data/services";

const iconMap: Record<string, LucideIcon> = {
  "message-circle": MessageCircle,
  "clipboard-list": ClipboardList,
  users: Users,
  baby: Baby,
  "book-open": BookOpen,
  mic: Mic,
  brain: Brain,
};

/** Curated subset for home: 3 logopedske + 1 psihološka */
const FEATURED_CONFIG: Record<
  string,
  { microSubtitle: string; badge?: string; hoverReveal?: string }
> = {
  "logopedska-terapija": {
    microSubtitle: "Govor kroz igru",
    badge: "Najčešće birano",
    hoverReveal: "Individualni plan za svako dijete.",
  },
  "procjena-razvoja": {
    microSubtitle: "Jasan plan dalje",
    hoverReveal: "Sažet izvještaj za roditelje.",
  },
  "teskoci-citanja-pisanja": {
    microSubtitle: "Lakše čitanje i škola",
    hoverReveal: "Saradnja sa školom i porodicom.",
  },
  "psiholoska-eksploracija": {
    microSubtitle: "Dublje razumijevanje djeteta",
    badge: "Novo",
    hoverReveal: "Preporuke za dalji rad.",
  },
};

function getFeaturedServices(): Service[] {
  const slugs = [
    "logopedska-terapija",
    "procjena-razvoja",
    "teskoci-citanja-pisanja",
    "psiholoska-eksploracija",
  ];
  return slugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is Service => s != null);
}

export function HomeServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reducedMotion = !!useReducedMotion();
  const featuredServices = getFeaturedServices();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: reducedMotion
      ? { opacity: 1 }
      : {
          opacity: 1,
          transition: { staggerChildren: 0.1, delayChildren: 0.1 },
        },
  };

  const itemVariants: Variants = {
    hidden: reducedMotion ? {} : { opacity: 0, y: 24 },
    visible: reducedMotion ? {} : { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={ref}
      id="usluge"
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden section-divider-soft"
    >
      {/* Warm gradient background band */}
      <div
        className="absolute inset-0 opacity-[0.6]"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(255, 248, 231, 0.7) 0%, rgba(253, 246, 233, 0.5) 50%, rgba(232, 244, 244, 0.3) 100%)`,
        }}
        aria-hidden
      />

      <Container className="relative z-10">
        {/* Label + heading */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-14 md:mb-16"
        >
          <span className="inline-block text-xs font-semibold text-secondary-400 uppercase tracking-widest mb-3">
            NAŠE USLUGE
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.5rem] font-semibold text-secondary-900">
            Kako možemo pomoći
          </h2>
          <p className="mt-4 text-secondary-500 max-w-2xl mx-auto leading-relaxed text-lg">
            Pogledajte šta nudimo – logopedske i psihološke usluge prilagođene
            potrebama vašeg djeteta i porodice.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-start"
        >
          {featuredServices.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              variants={itemVariants}
              staggerIndex={i}
              reducedMotion={reducedMotion}
            />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-20 md:mt-24 text-center"
        >
          <p className="text-secondary-500 mb-4 text-sm md:text-base">
            Želite vidjeti sve što radimo?
          </p>
          <Button href="/usluge" variant="outline">
            Pogledajte sve usluge
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}

interface ServiceCardProps {
  service: Service;
  variants: Variants;
  staggerIndex: number;
  reducedMotion: boolean;
}

function ServiceCard({ service, variants, staggerIndex, reducedMotion }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? MessageCircle;
  const benefit = service.teaser ?? service.shortDescription;
  const config = FEATURED_CONFIG[service.slug] ?? {};
  const isPsiholoska = service.group === "Psihološke usluge";

  const staggerClass =
    staggerIndex === 0
      ? ""
      : staggerIndex === 1
        ? "md:mt-6"
        : staggerIndex === 2
          ? "md:mt-10"
          : "md:mt-6";

  const iconBgClass = isPsiholoska
    ? "bg-accent-teal-light text-accent-teal-dark"
    : "bg-primary-100 text-primary-600";

  return (
    <motion.div
      variants={variants}
      transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`h-full overflow-visible ${staggerClass}`}
    >
      <Link
        href={`/usluge/${service.slug}`}
        className={`group block h-full rounded-2xl bg-white/95 backdrop-blur-sm p-6 md:p-7 shadow-soft-sm border border-secondary-100/80 transition-all duration-[220ms] ease-out hover:shadow-soft-lg hover:border-primary-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 relative overflow-visible ${
          !reducedMotion ? "hover:scale-[1.02]" : ""
        }`}
      >
        {/* Badges — top-left corner, outside card edge to avoid overlap */}
        {config.badge && (
          <span
            className={`absolute -top-1 -left-1 text-xs font-medium px-2.5 py-1 rounded-full shadow-soft-sm z-10 ${
              config.badge === "Novo"
                ? "bg-accent-teal-light text-accent-teal-dark"
                : "bg-primary-100 text-primary-700"
            }`}
          >
            {config.badge}
          </span>
        )}

        {/* Icon with circular backdrop */}
        <div
          className={`mb-5 flex items-center justify-center w-14 h-14 rounded-2xl shrink-0 transition-all duration-[220ms] ease-out group-hover:shadow-md ${iconBgClass} ${
            !reducedMotion ? "group-hover:-translate-y-0.5" : ""
          }`}
        >
          <Icon className="w-7 h-7" strokeWidth={1.75} aria-hidden />
        </div>

        {/* Title */}
        <h3 className="font-heading text-lg md:text-xl font-semibold text-secondary-900 leading-snug group-hover:text-primary-700 transition-colors">
          {service.title}
        </h3>

        {/* Micro-subtitle */}
        {config.microSubtitle && (
          <p className="mt-1 text-sm text-secondary-500 font-medium">
            {config.microSubtitle}
          </p>
        )}

        {/* 1-line benefit */}
        <p className="mt-3 text-secondary-500 text-sm leading-relaxed line-clamp-2">
          {benefit}
        </p>

        {/* Hover reveal line (desktop only) */}
        {config.hoverReveal && (
          <p className="mt-3 text-xs text-secondary-400 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-[220ms] ease-out hidden md:block">
            {config.hoverReveal}
          </p>
        )}

        {/* Link */}
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary-600 group-hover:text-primary-700 transition-colors">
          Detaljnije
          <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </span>
      </Link>
    </motion.div>
  );
}
