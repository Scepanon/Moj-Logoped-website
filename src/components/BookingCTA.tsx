import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function BookingCTA() {
  return (
    <section className="relative cta-wavy-top bg-gradient-to-b from-primary-50/80 via-bg-cream to-bg-beige py-20 md:py-28 lg:py-32 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
  );
}
