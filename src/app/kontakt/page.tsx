import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { PageHeroPlaceholder } from "@/components/ui/PageHeroPlaceholder";
import { ContactForm } from "@/components/ContactForm";
import { BookingCTA } from "@/components/BookingCTA";
import { siteConfig } from "@/config/siteConfig";
import { buildPageMetadata } from "@/config/metadata";

export const metadata = buildPageMetadata(siteConfig, {
  title: "Kontakt",
  description: `Zakažite termin u logopedskom centru ${siteConfig.name} u Podgorici. Kontaktirajte nas telefonom, emailom ili putem kontakt forme.`,
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <>
      <PageHeroPlaceholder
        title="Kontakt"
        subtitle="Javite nam se – tu smo za sve vaše nedoumice i pitanja."
        breadcrumbs={[{ label: "Kontakt", href: "/kontakt" }]}
      />

      {/* Form + info side-by-side */}
      <Section background="cream" dividerTop>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Contact form — wider column */}
          <div className="lg:col-span-3">
            <h2 className="font-heading text-2xl font-semibold text-secondary-900 mb-2">
              Pošaljite nam poruku
            </h2>
            <p className="text-secondary-500 mb-8">
              Popunite formu i javićemo vam se u najkraćem mogućem roku. Polja
              označena sa * su obavezna.
            </p>
            <ContactForm />
          </div>

          {/* Contact info sidebar */}
          <div className="lg:col-span-2 space-y-5">
            <Card hover={false} className="bg-bg-cream border border-primary-100/50">
              <h3 className="font-heading font-semibold text-secondary-900 mb-5">
                Kontakt informacije
              </h3>
              <ul className="space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-lg mt-0.5 shrink-0" aria-hidden="true">📍</span>
                  <div>
                    <span className="font-medium text-secondary-700 block mb-0.5">Adresa</span>
                    <span className="text-secondary-500">{siteConfig.addressFull}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg mt-0.5 shrink-0" aria-hidden="true">📞</span>
                  <div>
                    <span className="font-medium text-secondary-700 block mb-0.5">Telefon</span>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg mt-0.5 shrink-0" aria-hidden="true">✉️</span>
                  <div>
                    <span className="font-medium text-secondary-700 block mb-0.5">Email</span>
                    <a
                      href={`mailto:${siteConfig.primaryContactEmail}`}
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      {siteConfig.primaryContactEmail}
                    </a>
                  </div>
                </li>
              </ul>
            </Card>

            <Card hover={false} className="bg-bg-cream border border-primary-100/50">
              <h3 className="font-heading font-semibold text-secondary-900 mb-4">
                Radno vrijeme
              </h3>
              <ul className="space-y-2.5 text-sm">
                {siteConfig.workingHoursDetail.map((wh) => (
                  <li key={wh.days} className="flex justify-between">
                    <span className="text-secondary-700 font-medium">{wh.days}</span>
                    <span className="text-secondary-500">{wh.hours}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card hover={false} className="border border-secondary-100">
              <h3 className="font-heading font-semibold text-secondary-900 mb-2">
                Kako do nas?
              </h3>
              <p className="text-sm text-secondary-500 leading-relaxed">
                {siteConfig.directions ??
                  "Nalazimo se u Podgorici, na starom aerodromu, preko puta doma zdravlja. Parking je dostupan u neposrednoj blizini."}
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Map */}
      <Section background="light" dividerTop>
        <h2 className="font-heading text-2xl font-semibold text-secondary-900 mb-8 text-center">
          Pronađite nas na mapi
        </h2>
        {siteConfig.mapEmbedUrl && (
        <div className="rounded-2xl overflow-hidden shadow-soft-md">
          <iframe
            src={siteConfig.mapEmbedUrl}
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Lokacija logopedskog centra ${siteConfig.name} na mapi`}
          />
        </div>
        )}
      </Section>

      <BookingCTA />
    </>
  );
}
