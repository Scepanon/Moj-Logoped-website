import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { PageHeroPlaceholder } from "@/components/ui/PageHeroPlaceholder";
import { BookingCTA } from "@/components/BookingCTA";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Usluga nije pronađena" };
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  const breadcrumbs = [
    { label: "Usluge", href: "/usluge" },
    { label: service.title, href: `/usluge/${service.slug}` },
  ];

  return (
    <>
      <PageHeroPlaceholder
        title={service.title}
        subtitle={service.shortDescription}
        breadcrumbs={breadcrumbs}
      />

      {/* Main content */}
      <Section background="white" narrow dividerTop>
        <div className="space-y-10">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-secondary-900 mb-4">
              O ovoj usluzi
            </h2>
            <p className="text-secondary-600 leading-relaxed text-[1.05rem]">
              {service.longDescription}
            </p>
          </div>

          {service.bullets && service.bullets.length > 0 && (
            <div>
              <h2 className="font-heading text-2xl font-semibold text-secondary-900 mb-4">
                Šta uključuje
              </h2>
              <ul className="space-y-3">
                {service.bullets.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-secondary-600 leading-relaxed"
                  >
                    <span className="text-primary-500 mt-0.5 shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {service.expectations && service.expectations.length > 0 && (
            <div>
              <h2 className="font-heading text-2xl font-semibold text-secondary-900 mb-4">
                Šta možete očekivati
              </h2>
              <ul className="space-y-3">
                {service.expectations.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-secondary-600 leading-relaxed"
                  >
                    <span className="text-primary-500 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {service.outcomes && service.outcomes.length > 0 && (
            <div>
              <h2 className="font-heading text-2xl font-semibold text-secondary-900 mb-4">
                Rezultati saradnje
              </h2>
              <ul className="space-y-3">
                {service.outcomes.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-secondary-600 leading-relaxed"
                  >
                    <span className="text-primary-500 shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Section>

      {/* FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <Section background="light" narrow dividerTop>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-secondary-900 mb-10 text-center">
            Često postavljana pitanja
          </h2>
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <Card key={i} hover={false} className="border border-secondary-100">
                <h3 className="font-heading font-semibold text-secondary-900">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm text-secondary-500 leading-relaxed">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </Section>
      )}

      {/* Back to services + CTA */}
      <Section background="white" dividerTop>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/usluge"
            className="text-primary-600 hover:text-primary-700 font-medium transition-colors flex items-center gap-2"
          >
            ← Nazad na sve usluge
          </Link>
          <Button href="/kontakt" size="lg">
            Zakažite termin
          </Button>
        </div>
      </Section>

      <BookingCTA />
    </>
  );
}
