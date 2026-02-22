import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { HeroCarousel } from "@/components/layout/HeroCarousel";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { CollaborationSteps } from "@/components/CollaborationSteps";
import { BookingCTA } from "@/components/BookingCTA";
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
      <Section background="white" id="usluge" dividerTop>
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-secondary-900">
            Kako možemo pomoći
          </h2>
          <p className="mt-4 text-secondary-500 max-w-2xl mx-auto leading-relaxed">
            Nudimo širok spektar logopedskih usluga prilagođenih potrebama
            svakog djeteta i porodice.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-7">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} variant="flip" />
          ))}
        </div>
        <div className="text-center mt-16 md:mt-20">
          <Button href="/usluge" variant="outline">
            Pogledajte sve usluge
          </Button>
        </div>
      </Section>

      {/* ── About teaser — distinct tinted block ── */}
      <Section background="cream" dividerTop>
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

      {/* ── Final CTA ── */}
      <BookingCTA />
    </>
  );
}
