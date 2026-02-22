import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Zakažite termin u logopedskom centru Moj Logoped u Podgorici. Kontaktirajte nas telefonom, emailom ili putem kontakt forme.",
};

// TODO: Replace with real contact details and map embed URL
const contactDetails = {
  address: "Aerodromska, 81000 Podgorica, Crna Gora",
  phone: "+382 67 322 996",
  email: "info@mojlogoped.me",
  workingHours: [
    { days: "Ponedeljak – Petak", hours: "08:00 – 20:00" },
    { days: "Subota", hours: "Zatvoreno" },
    { days: "Nedjelja", hours: "Zatvoreno" },
  ],
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1472.4071820223699!2d19.2806912!3d42.4316861!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134deb2c5d1e3b19%3A0x9ac91240461d19e3!2sMoj%20Logoped!5e0!3m2!1sen!2sfr!4v1771780509409!5m2!1sen!2sfr",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        title="Kontakt"
        subtitle="Javite nam se – tu smo za sve vaše nedoumice i pitanja."
        breadcrumbs={[{ label: "Kontakt", href: "/kontakt" }]}
      />

      {/* Form + info side-by-side */}
      <Section background="white">
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
                    <span className="text-secondary-500">{contactDetails.address}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg mt-0.5 shrink-0" aria-hidden="true">📞</span>
                  <div>
                    <span className="font-medium text-secondary-700 block mb-0.5">Telefon</span>
                    <a
                      href={`tel:${contactDetails.phone}`}
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      {contactDetails.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg mt-0.5 shrink-0" aria-hidden="true">✉️</span>
                  <div>
                    <span className="font-medium text-secondary-700 block mb-0.5">Email</span>
                    <a
                      href={`mailto:${contactDetails.email}`}
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      {contactDetails.email}
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
                {contactDetails.workingHours.map((wh) => (
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
                {/* TODO: Replace with real directions */}
                Nalazimo se u Podgorici, na starom aerodromu, preko puta doma zdravlja.
                Parking je dostupan u neposrednoj blizini.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Map */}
      <Section background="light">
        <h2 className="font-heading text-2xl font-semibold text-secondary-900 mb-8 text-center">
          Pronađite nas na mapi
        </h2>
        {/* TODO: Replace with actual Google Maps embed URL */}
        <div className="rounded-2xl overflow-hidden shadow-soft-md">
          <iframe
            src={contactDetails.mapEmbedUrl}
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokacija logopedskog centra Moj Logoped na mapi"
          />
        </div>
      </Section>

      {/* Full-width CTA */}
      <section className="bg-secondary-900 text-white">
        <Container>
          <div className="py-20 md:py-24 text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold leading-snug">
              Kako zakazati termin?
            </h2>
            <p className="mt-5 text-secondary-300 leading-relaxed text-lg">
              Termin možete zakazati telefonskim pozivom, slanjem emaila ili
              popunjavanjem kontakt forme. Javićemo vam se u najkraćem roku.
            </p>
            {/* TODO: Replace with actual phone number */}
            <a
              href="tel:+38267322996"
              className="inline-flex items-center gap-2 mt-8 text-primary-400 hover:text-primary-300 transition-colors font-semibold text-lg"
            >
              📞 +382 67 322 996
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
