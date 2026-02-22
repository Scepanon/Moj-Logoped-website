import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { HeroCarousel } from "@/components/layout/HeroCarousel";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { CollaborationSteps } from "@/components/CollaborationSteps";
import { services } from "@/data/services";
import { heroSlides } from "@/data/heroSlides";
import { testimonials } from "@/data/testimonials";

export default function HomePage() {
  const featuredServices = services.slice(0, 4);

  return (
    <>
      {/* ── Hero Carousel ── */}
      <HeroCarousel slides={heroSlides} />

      {/* ── Services ── */}
      <Section background="white" id="usluge">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-secondary-900">
            Kako možemo pomoći
          </h2>
          <p className="mt-4 text-secondary-500 max-w-2xl mx-auto leading-relaxed">
            Nudimo širok spektar logopedskih usluga prilagođenih potrebama
            svakog djeteta i porodice.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button href="/usluge" variant="outline">
            Pogledajte sve usluge
          </Button>
        </div>
      </Section>

      {/* ── About teaser — distinct tinted block ── */}
      <Section background="cream">
        <div className="bg-white rounded-3xl shadow-soft-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <PlaceholderImage
              label="Prostor"
              aspect="auto"
              className="min-h-[280px] lg:min-h-full rounded-none"
            />
            <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-100 text-xl" aria-hidden="true">💛</span>
                <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">O našem centru</span>
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-secondary-900 leading-snug">
                Toplo okruženje, stručna podrška
              </h2>
              <p className="mt-4 text-secondary-500 leading-relaxed">
                Moj Logoped je osnovan sa idejom da logopedska podrška bude
                pristupačna, stručna i, iznad svega, topla. Vjerujemo da svako
                dijete zaslužuje priliku da komunicira sa samopouzdanjem.
              </p>
              <p className="mt-3 text-secondary-500 leading-relaxed">
                Naš tim čine iskusne logopedinje koje rade individualno sa
                svakim djetetom, u saradnji sa roditeljima, kako bi postigli
                najbolje moguće rezultate.
              </p>
              <div className="mt-7">
                <Button href="/o-nama" variant="secondary">
                  Saznajte više o nama
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Kako izgleda saradnja ── */}
      <CollaborationSteps />

      {/* ── Testimonials carousel ── */}
      <TestimonialsCarousel testimonials={testimonials} />

      {/* ── Final CTA — light, warm, two-column ── */}
      <section className="relative cta-wavy-top bg-gradient-to-b from-primary-50/80 via-bg-cream to-bg-beige py-20 md:py-28 lg:py-32 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: label, heading, paragraph, buttons */}
            <div className="order-2 lg:order-1">
              <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
                Spremni za sljedeći korak?
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-secondary-900 leading-snug">
                Spremni ste da zakažete termin?
              </h2>
              <p className="mt-5 text-secondary-600 leading-relaxed text-lg max-w-xl">
                Javite nam se i zajedno ćemo pronaći najbolji način da podržimo
                vaše dijete. Tu smo za vas — bez obzira gdje se nalazite na putu.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  href="/kontakt"
                  size="lg"
                  className="w-full sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2"
                >
                  Zakažite termin
                </Button>
                <Button
                  href="/usluge"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2"
                >
                  Saznajte više o uslugama
                </Button>
              </div>
            </div>

            {/* Right: placeholder */}
            <div className="order-1 lg:order-2">
              <PlaceholderImage
                label="Naš tim / Prostor"
                aspect="16:9"
                className="rounded-3xl shadow-soft-lg min-h-[260px] md:min-h-[300px]"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
