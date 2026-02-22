import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Usluge",
  description:
    "Logopedska terapija za djecu, procjena govorno-jezičkog razvoja, savjetovanje za roditelje i podrška ranom razvoju u centru Moj Logoped.",
};

export default function UslugePage() {
  return (
    <>
      <PageHero
        title="Naše usluge"
        subtitle="Saznajte kako izgleda saradnja sa nama i kako možemo podržati vaše dijete."
        breadcrumbs={[{ label: "Usluge", href: "/usluge" }]}
      />

      {/* Intro */}
      <Section background="white" narrow>
        <p className="text-lg text-secondary-500 leading-relaxed text-center">
          {/* TODO: Replace placeholder intro text */}
          Svaka naša usluga počinje razumijevanjem – slušamo vas, upoznajemo
          vaše dijete i tek onda kreiramo plan podrške. Bez obzira da li vam
          je potrebna procjena, redovna terapija ili savjetovanje, tu smo da
          vam pomognemo na svakom koraku.
        </p>
      </Section>

      {/* Services grid */}
      <Section background="light">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} variant="full" />
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section background="white" narrow>
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-secondary-900 mb-10 text-center">
          Kako izgleda proces saradnje?
        </h2>
        <div className="space-y-10">
          {[
            {
              step: "01",
              title: "Zakazivanje i prvi kontakt",
              desc: "Javite nam se telefonom, emailom ili putem kontakt forme. Zakazaćemo termin koji vam odgovara.",
            },
            {
              step: "02",
              title: "Procjena i upoznavanje",
              desc: "Na prvom susretu razgovaramo sa vama, upoznajemo vaše dijete i sprovodimo početnu procjenu govorno-jezičkog razvoja.",
            },
            {
              step: "03",
              title: "Plan terapije",
              desc: "Na osnovu procjene kreiramo individualni plan rada sa jasnim ciljevima i očekivanjima.",
            },
            {
              step: "04",
              title: "Redovna terapija i praćenje",
              desc: "Sprovodimo terapiju, pratimo napredak i redovno komuniciramo sa vama o rezultatima i narednim koracima.",
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-6 items-start">
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center">
                <span className="font-heading font-bold text-primary-700">
                  {item.step}
                </span>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-secondary-900 text-lg">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-secondary-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Full-width CTA */}
      <section className="bg-secondary-900 text-white">
        <Container>
          <div className="py-20 md:py-24 text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold leading-snug">
              Spremni ste da zakažete termin?
            </h2>
            <p className="mt-5 text-secondary-300 leading-relaxed text-lg">
              Kontaktirajte nas i rado ćemo odgovoriti na sva vaša pitanja ili
              zakazati prvi termin.
            </p>
            <Button href="/kontakt" className="mt-8" size="lg">
              Zakažite termin
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
