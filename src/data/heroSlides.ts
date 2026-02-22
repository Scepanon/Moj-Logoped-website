export interface HeroSlide {
  id: string;
  title: string;
  highlight: string;
  description: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  // TODO: Replace placeholder paths with real photos from the photoshoot
  image: string;
  alt: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: "podrska-govoru",
    title: "Podrška govoru i jeziku",
    highlight: "za svako dijete",
    description:
      "Moj Logoped je mali logopedski centar u Podgorici gdje djeca uz stručnu i toplu podršku razvijaju svoje komunikacione vještine.",
    ctaPrimary: { label: "Zakažite termin", href: "/kontakt" },
    ctaSecondary: { label: "Naše usluge", href: "/usluge" },
    // TODO: Replace with real hero photo (e.g. warm shot of the center's playroom)
    image: "/images/hero-1.jpg",
    alt: "Dijete se igra u toplom okruženju logopedskog centra",
  },
  {
    id: "individualni-pristup",
    title: "Individualni pristup",
    highlight: "svakom djetetu",
    description:
      "Svaki plan terapije kreiramo na osnovu potreba vašeg djeteta. Kod nas nema šablona — samo pažljiv rad, prilagođen upravo vama.",
    ctaPrimary: { label: "Zakažite termin", href: "/kontakt" },
    ctaSecondary: { label: "O nama", href: "/o-nama" },
    // TODO: Replace with real hero photo (e.g. logoped working one-on-one with a child)
    image: "/images/hero-2.jpg",
    alt: "Logopedinja radi individualno sa djetetom",
  },
  {
    id: "podrska-roditeljima",
    title: "Podrška roditeljima",
    highlight: "kroz savjetovanje",
    description:
      "Vjerujemo da su roditelji ključni partneri u terapijskom procesu. Pružamo vam znanje, smjernice i podršku na svakom koraku.",
    ctaPrimary: { label: "Zakažite termin", href: "/kontakt" },
    ctaSecondary: { label: "Materijali", href: "/materijali" },
    // TODO: Replace with real hero photo (e.g. parent consultation session)
    image: "/images/hero-3.jpg",
    alt: "Savjetovanje roditelja u logopedskom centru",
  },
];
