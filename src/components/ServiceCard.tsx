"use client";

import { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  ClipboardList,
  Users,
  Baby,
  BookOpen,
  Mic,
  Brain,
  ChevronDown,
  ArrowLeft,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
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

interface ServiceCardProps {
  service: Service;
  variant?: "compact" | "full" | "flip";
}

export function ServiceCard({ service, variant = "compact" }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? MessageCircle;
  const reducedMotion = useReducedMotion();
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleFlip = () => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) return;
    setFlipped((f) => !f);
  };
  const handleMouseEnter = () => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) {
      setFlipped(true);
    }
  };
  const handleMouseLeave = () => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) {
      setFlipped(false);
    }
  };

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const handler = (e: FocusEvent) => {
      if (!el.contains(e.relatedTarget as Node)) setFlipped(false);
    };
    el.addEventListener("focusout", handler);
    return () => el.removeEventListener("focusout", handler);
  }, []);

  if (variant === "flip") {
    const frontText = service.teaser ?? service.shortDescription;
    const backBullets = service.outcomes?.slice(0, 3) ?? service.bullets?.slice(0, 3) ?? [];
    const cardHeight = "min-h-[220px]";

    if (reducedMotion) {
      return (
        <div className={`h-full ${cardHeight} flex flex-col rounded-2xl bg-white shadow-soft-sm p-6 transition-shadow duration-200 hover:shadow-soft-lg`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary-100 text-primary-600 shrink-0">
              <Icon className="w-5 h-5" strokeWidth={1.75} aria-hidden />
            </span>
            <h3 className="font-heading text-lg font-semibold text-secondary-900 leading-snug">{service.title}</h3>
          </div>
          <p className="text-secondary-500 leading-[1.6] text-sm flex-1">{frontText}</p>
          <Link
            href={`/usluge/${service.slug}`}
            className="mt-5 pt-4 border-t border-secondary-100 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
          >
            Saznajte više o {service.title.toLowerCase()}
          </Link>
        </div>
      );
    }

    return (
      <div
        ref={cardRef}
        className={`h-full ${cardHeight} [perspective:1000px]`}
        role="button"
        tabIndex={0}
        onClick={handleFlip}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleFlip();
          }
        }}
        aria-expanded={flipped}
        aria-label={flipped ? `Zatvori karticu ${service.title}` : `Otvori karticu ${service.title}`}
      >
        <div
          className="relative h-full w-full [transform-style:preserve-3d]"
          style={{
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transition: "transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.05s",
          }}
        >
          {/* Front — fixed height, no expansion */}
          <div
            className="absolute inset-0 [backface-visibility:hidden] rounded-2xl bg-white shadow-soft-sm p-6 flex flex-col h-full transition-shadow duration-200 hover:shadow-soft-lg focus-within:ring-2 focus-within:ring-primary-300 focus-within:ring-offset-2"
            style={{ transform: "rotateY(0deg)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary-100 text-primary-600 shrink-0">
                <Icon className="w-5 h-5" strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="font-heading text-lg font-semibold text-secondary-900 leading-snug">
                {service.title}
              </h3>
            </div>
            <p className="text-secondary-500 leading-[1.6] text-sm flex-1 line-clamp-2">
              {frontText}
            </p>
            <div className="mt-5 pt-4 border-t border-secondary-100 flex items-center gap-2 text-primary-600 text-sm font-medium">
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${flipped ? "rotate-180" : ""}`} />
              <span>Detaljnije</span>
            </div>
          </div>

          {/* Back — same fixed height, scroll if overflow */}
          <div
            className="absolute inset-0 [backface-visibility:hidden] rounded-2xl bg-primary-50/80 border border-primary-100 p-6 flex flex-col h-full overflow-hidden"
            style={{ transform: "rotateY(180deg)" }}
          >
            <h3 className="font-heading text-lg font-semibold text-secondary-900 mb-3 shrink-0">
              {service.title}
            </h3>
            <ul className="space-y-2 flex-1 min-h-0 overflow-y-auto overscroll-contain">
              {backBullets.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-secondary-600 leading-[1.5]">
                  <span className="text-primary-500 mt-0.5 shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-primary-100/60 shrink-0 flex flex-col gap-2">
              <Link
                href={`/usluge/${service.slug}`}
                className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Saznajte više o {service.title.toLowerCase()}
              </Link>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setFlipped(false);
                }}
                className="flex items-center gap-1 text-sm text-secondary-500 hover:text-secondary-700 transition-colors w-fit"
                aria-label="Nazad"
              >
                <ArrowLeft className="w-4 h-4" />
                Nazad
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col rounded-2xl bg-white shadow-soft-sm p-6 transition-all duration-200 ease-out hover:shadow-soft-lg hover:scale-[1.02] focus-within:ring-2 focus-within:ring-primary-300">
      <div className="flex items-center gap-3 mb-4">
        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-100 text-primary-600 shrink-0">
          <Icon className="w-5 h-5" strokeWidth={1.75} aria-hidden />
        </span>
        <h3 className="font-heading text-xl font-semibold text-secondary-900">
          {service.title}
        </h3>
      </div>
      <p className="text-secondary-500 leading-relaxed text-sm flex-1">
        {variant === "full" ? service.fullDescription : service.shortDescription}
      </p>
      {service.outcomes && service.outcomes.length > 0 && (
        <ul className="mt-4 space-y-2">
          {service.outcomes.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-secondary-600">
              <span className="text-primary-500 mt-0.5 shrink-0" aria-hidden>•</span>
              {item}
            </li>
          ))}
        </ul>
      )}
      {variant === "full" && service.expectations.length > 0 && (
        <div className="mt-5 pt-5 border-t border-secondary-100">
          <p className="text-sm font-medium text-secondary-700 mb-2">
            Šta možete očekivati:
          </p>
          <ul className="space-y-1.5">
            {service.expectations.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-secondary-500">
                <span className="text-primary-500 mt-0.5 shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
