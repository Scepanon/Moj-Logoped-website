import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { BookingCTA } from "@/components/BookingCTA";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "O nama",
  description:
    "Upoznajte naš tim logopedinja i saznajte više o pristupu rada logopedskog centra Moj Logoped u Podgorici.",
};

// TODO: Replace placeholder FAQ items with real ones
const faqItems = [
  {
    question: "Od kog uzrasta dijete može da dolazi na logopedsku terapiju?",
    answer:
      "Radimo sa djecom od najranijeg uzrasta. Rana intervencija, čak i prije druge godine života, može biti veoma korisna.",
  },
  {
    question: "Koliko često su termini terapije?",
    answer:
      "Frekvencija terapija zavisi od individualnih potreba djeteta. Najčešće su to jedan do dva termina sedmično.",
  },
  {
    question: "Da li roditelji prisustvuju terapijama?",
    answer:
      "Roditelji su uvijek dobrodošli. Aktivno učešće roditelja u terapijskom procesu značajno doprinosi napretku djeteta.",
  },
  {
    question: "Kako izgleda prvi susret?",
    answer:
      "Prvi susret uključuje razgovor sa roditeljima, upoznavanje sa djetetom i početnu procjenu. Na osnovu toga dogovaramo dalji plan rada.",
  },
];

export default function ONamaPage() {
  return (
    <>
      <PageHero
        title="O nama"
        subtitle="Upoznajte naš centar i tim koji stoji iza Moj Logoped."
        breadcrumbs={[{ label: "O nama", href: "/o-nama" }]}
      />

      {/* About narrative */}
      <Section background="white" narrow dividerTop>
        {/* TODO: Replace placeholder copy with real narrative */}
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-secondary-900 mb-6">
          Mali centar, velika posvećenost
        </h2>
        <div className="space-y-5 text-secondary-600 leading-relaxed text-[1.05rem]">
          <p>
            Moj Logoped je logopedski centar u Podgorici posvećen pružanju
            kvalitetne logopedske podrške djeci i njihovim porodicama. Osnovali
            smo ga sa jasnom vizijom – da svako dijete dobije priliku da razvije
            svoje komunikacione vještine u toplom, podsticajnom okruženju.
          </p>
          <p>
            Kao mali centar, ponosimo se činjenicom da možemo posvetiti punu
            pažnju svakom djetetu. Kod nas nema žurbe – svaki termin je prilika
            za kvalitetan rad, prilagođen upravo tom djetetu i toj porodici.
          </p>
          <p>
            Naš tim čine iskusne logopedinje koje dijele zajedničku strast
            prema svom poslu i zajedničku posvećenost svakom djetetu sa kojim
            rade. Vjerujemo u timski rad, transparentnu komunikaciju sa
            roditeljima i individualizovan pristup terapiji.
          </p>
        </div>
      </Section>

      {/* Team section */}
      <Section background="cream" dividerTop>
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-secondary-900">
            Naš tim
          </h2>
          <p className="mt-4 text-secondary-500 max-w-2xl mx-auto leading-relaxed">
            Upoznajte logopedkinje koje svakodnevno rade sa vašom djecom.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {team.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </Section>

      {/* Approach */}
      <Section background="white" dividerTop>
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-secondary-900 mb-10 text-center">
          Naš pristup radu
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
          <Card hover={false} className="text-center bg-primary-50/50 border border-primary-100/60">
            <span className="text-3xl block mb-3" aria-hidden="true">🎯</span>
            <h3 className="font-heading font-semibold text-secondary-900 mb-2">
              Individualizovan rad
            </h3>
            <p className="text-sm text-secondary-500 leading-relaxed">
              Svaki plan terapije kreiramo na osnovu specifičnih potreba i
              mogućnosti djeteta.
            </p>
          </Card>
          <Card hover={false} className="text-center bg-primary-50/50 border border-primary-100/60">
            <span className="text-3xl block mb-3" aria-hidden="true">🤝</span>
            <h3 className="font-heading font-semibold text-secondary-900 mb-2">
              Saradnja sa roditeljima
            </h3>
            <p className="text-sm text-secondary-500 leading-relaxed">
              Roditelji su aktivni partneri u procesu. Redovno dijelimo
              povratne informacije i savjete za rad kod kuće.
            </p>
          </Card>
          <Card hover={false} className="text-center bg-primary-50/50 border border-primary-100/60">
            <span className="text-3xl block mb-3" aria-hidden="true">💛</span>
            <h3 className="font-heading font-semibold text-secondary-900 mb-2">
              Topla atmosfera
            </h3>
            <p className="text-sm text-secondary-500 leading-relaxed">
              Naš prostor je dizajniran da se djeca osjećaju sigurno,
              opušteno i motivisano za rad.
            </p>
          </Card>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="light" narrow dividerTop>
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-secondary-900 mb-10 text-center">
          Često postavljana pitanja
        </h2>
        <div className="space-y-4">
          {faqItems.map((faq, i) => (
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

      <BookingCTA />
    </>
  );
}
