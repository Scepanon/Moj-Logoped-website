import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Politika privatnosti",
  description:
    "Politika privatnosti logopedskog centra Moj Logoped – kako prikupljamo, koristimo i štitimo vaše lične podatke.",
};

export default function PrivatnostPage() {
  return (
    <>
      <PageHero
        title="Politika privatnosti"
        subtitle="Informacije o tome kako prikupljamo, koristimo i štitimo vaše lične podatke."
        breadcrumbs={[{ label: "Politika privatnosti", href: "/privatnost" }]}
      />

      <Section background="white">
        <article className="max-w-3xl mx-auto space-y-8">
          {/* TODO: Have this reviewed by a legal professional and replace with final version */}

          <div>
            <h2 className="font-heading text-xl font-semibold text-secondary-900 mb-3">
              1. Ko smo mi?
            </h2>
            <p className="text-secondary-600 leading-relaxed">
              Logopedski centar &quot;Moj Logoped&quot; (u daljem tekstu: Centar) sa
              sjedištem u Podgorici, Crna Gora, je rukovalac ličnih podataka koji
              odgovara za podatke koje prikupljamo putem ove internet stranice i
              u okviru pružanja naših usluga.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-secondary-900 mb-3">
              2. Koje podatke prikupljamo?
            </h2>
            <p className="text-secondary-600 leading-relaxed mb-3">
              U okviru našeg rada prikupljamo sljedeće kategorije ličnih podataka:
            </p>
            <ul className="space-y-2 text-secondary-600">
              <li className="flex items-start gap-2">
                <span className="text-primary-500 mt-1 shrink-0">•</span>
                <span><strong>Kontakt podaci:</strong> ime i prezime, email adresa, broj telefona – prikupljeni putem kontakt forme ili prilikom zakazivanja termina.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500 mt-1 shrink-0">•</span>
                <span><strong>Podaci o djetetu:</strong> ime, uzrast i osnovne informacije o govorno-jezičkom razvoju – potrebni za pružanje logopedskih usluga.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500 mt-1 shrink-0">•</span>
                <span><strong>Tehnički podaci:</strong> kolačići i anonimni podaci o posjećenosti stranice (ukoliko koristimo analitičke alate).</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-secondary-900 mb-3">
              3. Zašto prikupljamo vaše podatke?
            </h2>
            <p className="text-secondary-600 leading-relaxed mb-3">
              Vaše lične podatke koristimo isključivo u sljedeće svrhe:
            </p>
            <ul className="space-y-2 text-secondary-600">
              <li className="flex items-start gap-2">
                <span className="text-primary-500 mt-1 shrink-0">•</span>
                Zakazivanje i organizacija termina
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500 mt-1 shrink-0">•</span>
                Komunikacija sa vama u vezi sa zakazanim uslugama
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500 mt-1 shrink-0">•</span>
                Pružanje logopedskih usluga i vođenje dokumentacije o tretmanima
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500 mt-1 shrink-0">•</span>
                Poboljšanje korisničkog iskustva na internet stranici
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-secondary-900 mb-3">
              4. Pravni osnov za obradu
            </h2>
            <p className="text-secondary-600 leading-relaxed">
              Podatke obrađujemo na osnovu vašeg pristanka (datog popunjavanjem
              kontakt forme ili zakazivanjem termina), kao i na osnovu legitimnog
              interesa za pružanje usluga koje ste zatražili. Za podatke vezane
              za zdravstveno stanje djeteta, obradu vršimo uz vaš izričit
              pristanak.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-secondary-900 mb-3">
              5. Ko ima pristup vašim podacima?
            </h2>
            <p className="text-secondary-600 leading-relaxed">
              Vaši podaci su dostupni isključivo zaposlenima u Centru koji su
              uključeni u pružanje usluga. Ne dijelimo vaše podatke sa trećim
              licima, osim u slučajevima kada je to zakonom propisano.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-secondary-900 mb-3">
              6. Koliko čuvamo vaše podatke?
            </h2>
            <p className="text-secondary-600 leading-relaxed">
              Kontakt podatke prikupljene putem internet stranice čuvamo do
              okončanja svrhe za koju su prikupljeni. Dokumentaciju o tretmanima
              čuvamo u skladu sa zakonskim obavezama i profesionalnim
              standardima.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-secondary-900 mb-3">
              7. Vaša prava
            </h2>
            <p className="text-secondary-600 leading-relaxed mb-3">
              U skladu sa važećim propisima o zaštiti ličnih podataka, imate
              pravo na:
            </p>
            <ul className="space-y-2 text-secondary-600">
              <li className="flex items-start gap-2">
                <span className="text-primary-500 mt-1 shrink-0">•</span>
                Pristup vašim ličnim podacima
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500 mt-1 shrink-0">•</span>
                Ispravku netačnih podataka
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500 mt-1 shrink-0">•</span>
                Brisanje vaših podataka (pravo na zaborav)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500 mt-1 shrink-0">•</span>
                Ograničenje obrade
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500 mt-1 shrink-0">•</span>
                Povlačenje pristanka u bilo kom trenutku
              </li>
            </ul>
            <p className="text-secondary-600 leading-relaxed mt-3">
              Za ostvarivanje bilo kog od navedenih prava, možete nas
              kontaktirati na{" "}
              <a
                href="mailto:info@mojlogoped.me"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                info@mojlogoped.me
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-secondary-900 mb-3">
              8. Kolačići
            </h2>
            <p className="text-secondary-600 leading-relaxed">
              Ova internet stranica može koristiti kolačiće radi poboljšanja
              korisničkog iskustva i praćenja posjećenosti. Kolačići su mali
              tekstualni fajlovi koji se čuvaju u vašem pretraživaču. Možete
              podesiti svoj pretraživač da odbije kolačiće, ali to može uticati
              na funkcionalnost stranice.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-secondary-900 mb-3">
              9. Izmjene politike privatnosti
            </h2>
            <p className="text-secondary-600 leading-relaxed">
              Zadržavamo pravo da ažuriramo ovu Politiku privatnosti u bilo kom
              trenutku. Sve izmjene biće objavljene na ovoj stranici sa datumom
              poslednjeg ažuriranja.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-secondary-900 mb-3">
              10. Kontakt
            </h2>
            <p className="text-secondary-600 leading-relaxed">
              Za sva pitanja u vezi sa zaštitom vaših ličnih podataka, možete
              nas kontaktirati:
            </p>
            <div className="mt-3 p-4 bg-bg-cream rounded-xl text-sm text-secondary-600 space-y-1">
              <p><strong>Logopedski centar &quot;Moj Logoped&quot;</strong></p>
              {/* TODO: Replace with real address */}
              <p>Aerodromska, 81000 Podgorica</p>
              <p>Email: info@mojlogoped.me</p>
              <p>Telefon: +382 67 322 996</p>
            </div>
          </div>

          <p className="text-sm text-secondary-400 pt-4 border-t border-secondary-100">
            Posljednje ažuriranje: februar 2026.
          </p>
        </article>
      </Section>
    </>
  );
}
