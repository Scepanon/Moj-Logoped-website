/**
 * Site configuration – swap this for another clinic when reusing the project.
 * All hardcoded clinic-specific values should live here.
 */

export interface SiteConfig {
  /** Clinic/brand name */
  name: string;
  /** Domain without protocol (e.g. mojlogoped.me) */
  domain: string;
  /** Full base URL for sitemap, OG, etc. (e.g. https://mojlogoped.me) */
  baseUrl: string;
  /** Primary contact email (contact form recipient) */
  primaryContactEmail: string;
  /** Full address (short, for footer) */
  address: string;
  /** Full address with country (for contact page) */
  addressFull: string;
  /** Phone number (E.164 or display format) */
  phone: string;
  /** Short working hours string for footer (e.g. "Pon – Pet: 08:00 – 20:00") */
  workingHours: string;
  /** Detailed working hours for contact page */
  workingHoursDetail: Array<{ days: string; hours: string }>;
  /** Optional: Google Maps embed URL */
  mapEmbedUrl?: string;
  /** Optional: directions text for contact page */
  directions?: string;
  /** SEO defaults */
  seo: {
    defaultTitle: string;
    defaultDescription: string;
    keywords: string[];
    siteName: string;
    locale: string;
  };
  /** Short tagline for footer (e.g. "Mali logopedski centar u Podgorici...") */
  tagline: string;
  /** Alt text for logo */
  logoAlt: string;
}

export const siteConfig: SiteConfig = {
  name: "Moj Logoped",
  domain: "mojlogoped.me",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mojlogoped.me",
  primaryContactEmail: "info@mojlogoped.me",
  address: "Aerodromska, 81000 Podgorica",
  addressFull: "Aerodromska, 81000 Podgorica, Crna Gora",
  phone: "+382 67 322 996",
  workingHours: "Pon – Pet: 08:00 – 20:00",
  workingHoursDetail: [
    { days: "Ponedeljak – Petak", hours: "08:00 – 20:00" },
    { days: "Subota", hours: "Zatvoreno" },
    { days: "Nedjelja", hours: "Zatvoreno" },
  ],
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1472.4071820223699!2d19.2806912!3d42.4316861!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134deb2c5d1e3b19%3A0x9ac91240461d19e3!2sMoj%20Logoped!5e0!3m2!1sen!2sfr!4v1771780509409!5m2!1sen!2sfr",
  directions:
    "Nalazimo se u Podgorici, na starom aerodromu, preko puta doma zdravlja. Parking je dostupan u neposrednoj blizini.",
  seo: {
    defaultTitle: "Moj Logoped – Logopedski centar Podgorica",
    defaultDescription:
      "Logopedski centar u Podgorici. Logopedska terapija za djecu, procjena govorno-jezičkog razvoja, savjetovanje za roditelje. Zakažite termin već danas.",
    keywords: [
      "logoped",
      "logoped Podgorica",
      "logopedski centar",
      "govorna terapija",
      "logopedska procjena",
      "razvoj govora",
    ],
    siteName: "Moj Logoped",
    locale: "sr_Latn_ME",
  },
  tagline:
    "Mali logopedski centar u Podgorici posvećen pružanju stručne i tople podrške djeci i porodicama.",
  logoAlt: "Moj Logoped",
};
