"use client";

import { useState } from "react";
import {
  MessageCircle,
  ClipboardList,
  Users,
  Baby,
  BookOpen,
  Mic,
  ChevronDown,
  ChevronRight,
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
};

interface ServiceAccordionProps {
  services: Service[];
}

export function ServiceAccordion({ services }: ServiceAccordionProps) {
  const [expandedId, setExpandedId] = useState<string | null>(() => services[0]?.id ?? null);
  const reducedMotion = useReducedMotion();

  const toggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-4 md:space-y-5" role="list">
      {services.map((service) => {
        const Icon = iconMap[service.icon] ?? MessageCircle;
        const isExpanded = expandedId === service.id;

        return (
          <div
            key={service.id}
            className="rounded-2xl bg-white shadow-soft-sm border border-secondary-100 overflow-hidden transition-shadow duration-200 hover:shadow-soft-md focus-within:ring-2 focus-within:ring-primary-300 focus-within:ring-offset-2"
            role="listitem"
          >
            <button
              type="button"
              onClick={() => toggle(service.id)}
              className="w-full flex items-center gap-4 p-5 md:p-6 lg:p-6 text-left focus:outline-none focus-visible:ring-0"
              aria-expanded={isExpanded}
              aria-controls={`service-content-${service.id}`}
              id={`service-trigger-${service.id}`}
            >
              <span
                className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary-100 text-primary-600 shrink-0"
                aria-hidden
              >
                <Icon className="w-5 h-5" strokeWidth={1.75} />
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading text-lg md:text-xl font-semibold text-secondary-900">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-sm text-secondary-500 line-clamp-1 leading-[1.5]">
                  {service.shortDescription}
                </p>
              </div>
              <span
                className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-secondary-100 text-secondary-600 transition-transform duration-200 ${
                  isExpanded ? "rotate-180" : ""
                } ${reducedMotion ? "transition-none" : ""}`}
                aria-hidden
              >
                <ChevronDown className="w-5 h-5" />
              </span>
            </button>

            <div
              id={`service-content-${service.id}`}
              role="region"
              aria-labelledby={`service-trigger-${service.id}`}
              className={`overflow-hidden transition-all duration-300 ease-out ${
                reducedMotion ? "transition-none" : ""
              }`}
              style={{
                maxHeight: isExpanded ? "500px" : "0",
                opacity: isExpanded ? 1 : 0,
              }}
            >
              <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0 border-t border-secondary-100">
                <div className="pt-5 space-y-4">
                  <p className="text-secondary-600 leading-[1.6] text-[0.95rem]">
                    {service.longDescription}
                  </p>
                  {service.bullets && service.bullets.length > 0 && (
                    <ul className="space-y-2">
                      {service.bullets.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-secondary-600"
                        >
                          <span className="text-primary-500 mt-0.5 shrink-0">
                            •
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link
                    href={`/usluge/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 rounded"
                  >
                    Saznajte više o {service.title.toLowerCase()}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
