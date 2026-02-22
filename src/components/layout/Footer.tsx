import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

// TODO: Replace placeholder contact details with real ones
const contactInfo = {
  address: "Ulica Slobode 12, 81000 Podgorica",
  phone: "+382 67 123 456",
  email: "info@mojlogoped.me",
  workingHours: "Pon – Pet: 08:00 – 20:00",
};

const quickLinks = [
  { label: "O nama", href: "/o-nama" },
  { label: "Usluge", href: "/usluge" },
  { label: "Materijali", href: "/materijali" },
  { label: "Blog", href: "/blog" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Politika privatnosti", href: "/privatnost" },
];

export function Footer() {
  return (
    <footer className="bg-secondary-900 text-secondary-300">
      <Container>
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Moj Logoped logo"
                width={40}
                height={40}
                className="w-10 h-10 brightness-110"
              />
              <div>
                <span className="font-heading text-lg font-semibold text-white block">
                  Moj Logoped
                </span>
                <span className="text-xs text-secondary-400">Logopedski centar</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-secondary-400">
              Mali logopedski centar u Podgorici posvećen pružanju stručne i
              tople podrške djeci i porodicama.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading text-white font-semibold mb-4">Brzi linkovi</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-white font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-0.5" aria-hidden="true">📍</span>
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5" aria-hidden="true">📞</span>
                <a href={`tel:${contactInfo.phone}`} className="hover:text-primary-400 transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5" aria-hidden="true">✉️</span>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-primary-400 transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5" aria-hidden="true">🕐</span>
                <span>{contactInfo.workingHours}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter or CTA */}
          <div>
            <h3 className="font-heading text-white font-semibold mb-4">Zakažite termin</h3>
            <p className="text-sm text-secondary-400 mb-4">
              Javite nam se telefonom, emailom ili putem kontakt forme. Tu smo za vas.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center px-5 py-2.5 bg-primary-500 text-white text-sm font-medium rounded-xl hover:bg-primary-600 transition-colors"
            >
              Kontaktirajte nas
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-secondary-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-secondary-500">
          <p>© {new Date().getFullYear()} Moj Logoped. Sva prava zadržana.</p>
          <Link href="/privatnost" className="hover:text-primary-400 transition-colors">
            Politika privatnosti
          </Link>
        </div>
      </Container>
    </footer>
  );
}
