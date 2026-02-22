import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { BookingCTA } from "@/components/BookingCTA";
import { resources } from "@/data/resources";

export const metadata: Metadata = {
  title: "Materijali",
  description:
    "Besplatni materijali i vodiči za roditelje – podsticanje govorno-jezičkog razvoja kod kuće.",
};

export default function MaterijaliPage() {
  const categories = Array.from(new Set(resources.map((r) => r.category)));

  return (
    <>
      <PageHero
        title="Materijali za roditelje"
        subtitle="Korisni vodiči, radni listovi i savjeti koje možete koristiti kod kuće."
        breadcrumbs={[{ label: "Materijali", href: "/materijali" }]}
      />

      {/* Intro */}
      <Section background="cream" narrow dividerTop>
        <p className="text-lg text-secondary-500 leading-relaxed text-center">
          Pripremili smo zbirku besplatnih materijala koji vam mogu pomoći u
          svakodnevnom podsticanju govorno-jezičkog razvoja vašeg djeteta.
          Materijale redovno dopunjujemo novim sadržajima.
        </p>
      </Section>

      {/* Resources by category */}
      <Section background="light" dividerTop>
        {categories.map((category, catIdx) => (
          <div key={category} className={catIdx > 0 ? "mt-16" : ""}>
            <h2 className="font-heading text-xl font-semibold text-secondary-900 mb-7 flex items-center gap-3">
              <span className="w-1 h-7 bg-primary-400 rounded-full" aria-hidden="true" />
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {resources
                .filter((r) => r.category === category)
                .map((resource) => (
                  <Card key={resource.id} className="flex flex-col h-full">
                    <h3 className="font-heading font-semibold text-secondary-900 mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-secondary-500 leading-relaxed flex-1">
                      {resource.description}
                    </p>
                    <div className="mt-5 pt-4 border-t border-secondary-100">
                      {resource.available ? (
                        <a
                          href={resource.href}
                          className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors inline-flex items-center gap-1"
                        >
                          Preuzmi materijal
                          <span aria-hidden="true">↓</span>
                        </a>
                      ) : (
                        <span className="text-sm text-secondary-400 italic">
                          Uskoro dostupno
                        </span>
                      )}
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </Section>

      <BookingCTA />
    </>
  );
}
