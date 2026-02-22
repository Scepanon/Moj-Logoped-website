"use client";

import {
  MessageCircle,
  ClipboardList,
  Users,
  Baby,
  BookOpen,
  Mic,
  type LucideIcon,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { Service } from "@/data/services";

const iconMap: Record<string, LucideIcon> = {
  "message-circle": MessageCircle,
  "clipboard-list": ClipboardList,
  users: Users,
  baby: Baby,
  "book-open": BookOpen,
  mic: Mic,
};

interface ServiceCardProps {
  service: Service;
  variant?: "compact" | "full";
}

export function ServiceCard({ service, variant = "compact" }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? MessageCircle;

  return (
    <Card className="h-full flex flex-col transition-all duration-200 ease-out hover:shadow-soft-lg hover:scale-[1.02] focus-within:ring-2 focus-within:ring-primary-300">
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
    </Card>
  );
}
