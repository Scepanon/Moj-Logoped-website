import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { HeroCarousel } from "@/components/layout/HeroCarousel";
import { ServiceCard } from "@/components/ServiceCard";
import { BlogCard } from "@/components/BlogCard";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blogPosts";
import { heroSlides } from "@/data/heroSlides";

export default function HomePage() {
  const featuredServices = services.slice(0, 4);
  const latestPosts = blogPosts.slice(0, 3);

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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
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
            {/* TODO: Replace PlaceholderImage with actual photo of the center */}
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
              {/* TODO: Replace with real about text */}
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

      {/* ── Early development highlight ── */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* TODO: Replace PlaceholderImage with illustration or photo */}
          <div className="order-2 lg:order-1">
            <PlaceholderImage
              label="Rani razvoj"
              aspect="auto"
              className="min-h-[280px] md:min-h-[340px] rounded-3xl bg-gradient-to-br from-accent-teal-light via-primary-50 to-accent-teal-light"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block text-xs font-semibold text-accent-teal bg-accent-teal-light px-3 py-1.5 rounded-full mb-5 uppercase tracking-wider">
              Rani razvoj
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-secondary-900 leading-snug">
              Značaj pravovremene podrške
            </h2>
            {/* TODO: Replace with real content about early intervention */}
            <p className="mt-5 text-secondary-500 leading-relaxed">
              Prve godine života su ključne za razvoj govora i jezika. Rana
              prepoznavanja i pravovremena podrška mogu napraviti ogromnu
              razliku u komunikacionom razvoju vašeg djeteta.
            </p>
            <p className="mt-3 text-secondary-500 leading-relaxed">
              Ako primjećujete da vaše dijete kasni sa prvim riječima, ne
              razumije jednostavne naloge ili se teško sporazumijeva – nemojte
              čekati. Konsultacija sa logopedom može razjasniti situaciju i
              usmjeriti vas na pravi put.
            </p>
            <Button href="/kontakt" className="mt-7">
              Zakažite konsultaciju
            </Button>
          </div>
        </div>
      </Section>

      {/* ── Resources teaser ── */}
      <Section background="beige">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-secondary-900">
            Besplatni materijali za roditelje
          </h2>
          <p className="mt-5 text-secondary-500 leading-relaxed">
            Pripremili smo korisne vodiče, radne materijale i savjete koji vam
            mogu pomoći u svakodnevnom podsticanju govorno-jezičkog razvoja
            vašeg djeteta.
          </p>
          <Button href="/materijali" variant="outline" className="mt-7">
            Pogledajte materijale
          </Button>
        </div>
      </Section>

      {/* ── Blog teaser ── */}
      <Section background="light">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-secondary-900">
            Članci za roditelje
          </h2>
          <p className="mt-4 text-secondary-500 max-w-2xl mx-auto leading-relaxed">
            Edukativni tekstovi koji vam pomažu da bolje razumijete
            govorno-jezički razvoj i podržite svoje dijete.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button href="/blog" variant="outline">
            Svi članci
          </Button>
        </div>
      </Section>

      {/* ── Final CTA — full-width dark ── */}
      <section className="bg-secondary-900 text-white">
        <Container>
          <div className="py-20 md:py-24 text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-snug">
              Spremni ste da zakažete termin?
            </h2>
            <p className="mt-5 text-secondary-300 leading-relaxed text-lg">
              Javite nam se i zajedno ćemo pronaći najbolji način da podržimo
              vaše dijete. Tu smo za vas.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-5">
              <Button href="/kontakt" size="lg">
                Zakažite termin
              </Button>
              {/* TODO: Replace with actual phone number */}
              <a
                href="tel:+38267123456"
                className="text-primary-400 hover:text-primary-300 transition-colors font-medium"
              >
                ili pozovite: +382 67 123 456
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
