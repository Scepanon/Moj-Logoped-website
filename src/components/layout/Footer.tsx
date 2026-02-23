import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/siteConfig";

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
                src="/images/logo_proper_solo.png"
                alt={siteConfig.logoAlt}
                width={44}
                height={44}
                className="w-11 h-11 md:w-12 md:h-12 brightness-110 shrink-0"
              />
              <div>
                <span className="font-heading text-lg font-semibold text-white block">
                  {siteConfig.name}
                </span>
                <span className="text-xs text-secondary-400">Logopedski centar</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-secondary-400">
              {siteConfig.tagline}
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
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5" aria-hidden="true">📞</span>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-primary-400 transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5" aria-hidden="true">✉️</span>
                <a href={`mailto:${siteConfig.primaryContactEmail}`} className="hover:text-primary-400 transition-colors">
                  {siteConfig.primaryContactEmail}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5" aria-hidden="true">🕐</span>
                <span>{siteConfig.workingHours}</span>
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
        <p className="text-center text-sm text-secondary-500 mb-4">
          Tu smo da vas pratimo korak po korak.
        </p>
        <div className="border-t border-secondary-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-secondary-500">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Sva prava zadržana.</p>
          <Link href="/privatnost" className="hover:text-primary-400 transition-colors">
            Politika privatnosti
          </Link>
        </div>
      </Container>
    </footer>
  );
}
