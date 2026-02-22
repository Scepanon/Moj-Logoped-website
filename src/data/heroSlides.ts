export interface HeroSlide {
  id: string;
  title: string;
  subheading: string;
  ctaPrimary: { label: string; href: string };
  ctaHelper: string;
  ctaSecondary: { label: string; href: string };
  image: string;
  alt: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: "podrska-govoru",
    title: "Podrška govoru i jeziku za djecu u Podgorici",
    subheading:
      "Individualni pristup, topla atmosfera i stručan tim — tu smo da vašem djetetu pomognemo da komunicira sa samopouzdanjem.",
    ctaPrimary: { label: "Zakažite prvi termin", href: "/kontakt" },
    ctaHelper: "Odgovaramo u roku od 24 sata.",
    ctaSecondary: { label: "Naše usluge", href: "/usluge" },
    image: "/images/homepage/slika1.jpg",
    alt: "Dijete u logopedskoj terapiji",
  },
  {
    id: "individualni-pristup",
    title: "Individualni pristup svakom djetetu",
    subheading:
      "Topla atmosfera, stručan tim i plan terapije prilagođen upravo vašem djetetu. Kod nas nema šablona — samo pažljiv rad.",
    ctaPrimary: { label: "Zakažite prvi termin", href: "/kontakt" },
    ctaHelper: "Odgovaramo u roku od 24 sata.",
    ctaSecondary: { label: "Naše usluge", href: "/usluge" },
    image: "/images/homepage/slika2.jpg",
    alt: "Logopedinja radi individualno sa djetetom",
  },
  {
    id: "podrska-roditeljima",
    title: "Podrška roditeljima kroz savjetovanje",
    subheading:
      "Stručan tim, individualni pristup i topla atmosfera. Roditelji su naši partneri — pružamo vam znanje i podršku na svakom koraku.",
    ctaPrimary: { label: "Zakažite prvi termin", href: "/kontakt" },
    ctaHelper: "Odgovaramo u roku od 24 sata.",
    ctaSecondary: { label: "Naše usluge", href: "/usluge" },
    image: "/images/homepage/slika3.jpg",
    alt: "Roditelj i dijete u logopedskom centru",
  },
];
