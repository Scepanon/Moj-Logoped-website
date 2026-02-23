import { Section } from "@/components/ui/Section";
import { PageHeroPlaceholder } from "@/components/ui/PageHeroPlaceholder";
import { services } from "@/data/services";
import { BookingCTA } from "@/components/BookingCTA";
import { ServiceAccordion } from "@/components/ServiceAccordion";
import { siteConfig } from "@/config/siteConfig";
import { buildPageMetadata } from "@/config/metadata";

export const metadata = buildPageMetadata(siteConfig, {
  title: "Usluge",
  description: `Logopedska terapija za djecu, procjena govorno-jezičkog razvoja, savjetovanje za roditelje i podrška ranom razvoju u centru ${siteConfig.name}.`,
  path: "/usluge",
});

export default function UslugePage() {
  return (
    <>
      <PageHeroPlaceholder
        title="Naše usluge"
        subtitle="Saznajte kako izgleda saradnja sa nama i kako možemo podržati vaše dijete."
        breadcrumbs={[{ label: "Usluge", href: "/usluge" }]}
      />

      {/* Intro */}
      <Section background="cream" narrow dividerTop>
        <p className="text-lg text-secondary-500 leading-relaxed text-center">
          {/* TODO: Replace placeholder intro text */}
          Svaka naša usluga počinje razumijevanjem – slušamo vas, upoznajemo
          vaše dijete i tek onda kreiramo plan podrške. Bez obzira da li vam
          je potrebna procjena, redovna terapija ili savjetovanje, tu smo da
          vam pomognemo na svakom koraku.
        </p>
      </Section>

      {/* Services accordion */}
      <Section background="light" dividerTop>
        <ServiceAccordion services={services} />
      </Section>

      {/* Process */}
      <Section background="white" narrow dividerTop>
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

      <BookingCTA />
    </>
  );
}
