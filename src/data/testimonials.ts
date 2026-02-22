export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  childAge: string;
  context: string;
  readMoreHref?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote:
      "Vidjeli smo i shvatili da je Dušica na prvom mjestu dobar čovjek. Izvrstan logoped, maksimalno posvećen svakom djetetu, pa i našem pristupa s ljubavlju i velikom požrtvovanošću. Relativno se kratko znamo, ali već imamo prve i vidljive rezultate.",
    name: "Porodica Vukotić",
    childAge: "dijete 5 godina",
    context: "Terapija izgovora",
    readMoreHref: "/o-nama",
  },
  {
    id: "testimonial-2",
    quote:
      "Kod Dušice i cijelog tima Moj Logoped smo pronašli toplinu i stručnost koju smo tražili. Naša kćerka je napredovala iz mjeseca u mjesec, a mi smo uvijek bili uključeni u procesu.",
    name: "Porodica Milić",
    childAge: "kćerka 4 godine",
    context: "Rani razvoj govora",
    readMoreHref: "/usluge",
  },
  {
    id: "testimonial-3",
    quote:
      "Preporučujem svima koji traže logopedski centar u Podgorici. Profesionalan pristup, prijatan ambijent i vidljivi rezultati već nakon nekoliko mjeseci.",
    name: "Jelena K.",
    childAge: "sin 6 godina",
    context: "Logopedska procjena i terapija",
    readMoreHref: "/kontakt",
  },
  {
    id: "testimonial-4",
    quote:
      "Najveća zahvalnost timu Moj Logoped. Naš sin je stekao samopouzdanje u komunikaciji, a mi smo naučili kako ga podržati kod kuće.",
    name: "Nikola i Sanja D.",
    childAge: "sin 5 godina",
    context: "Terapija govorno-jezičkog razvoja",
  },
];
