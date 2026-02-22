import { Card } from "@/components/ui/Card";
import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  variant?: "compact" | "full";
}

export function ServiceCard({ service, variant = "compact" }: ServiceCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <div className="text-3xl mb-4" aria-hidden="true">
        {service.icon}
      </div>
      <h3 className="font-heading text-xl font-semibold text-secondary-900 mb-3">
        {service.title}
      </h3>
      <p className="text-secondary-500 leading-relaxed text-sm flex-1">
        {variant === "full" ? service.fullDescription : service.shortDescription}
      </p>
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
