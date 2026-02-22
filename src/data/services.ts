export type ServiceIcon =
  | "message-circle"
  | "clipboard-list"
  | "users"
  | "baby"
  | "book-open"
  | "mic";

export interface Service {
  id: string;
  slug: string;
  title: string;
  /** One-line summary for card front (home page). Falls back to truncated shortDescription if omitted. */
  teaser?: string;
  shortDescription: string;
  longDescription: string;
  fullDescription: string;
  icon: ServiceIcon;
  outcomes: string[];
  expectations: string[];
  bullets: string[];
  faqs?: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    id: "logopedska-terapija",
    slug: "logopedska-terapija",
    title: "Logopedska terapija za djecu",
    teaser: "Individualni rad kroz igru i prilagođene aktivnosti.",
    shortDescription:
      "Individualni rad sa djetetom usmjeren na prevazilaženje govornih i jezičkih teškoća kroz igru i prilagođene aktivnosti.",
    longDescription:
      "Logopedska terapija podrazumijeva individualan rad sa djetetom u toplom i podsticajnom okruženju. Svaki tretman prilagođavamo potrebama djeteta, koristeći igru, slikovnice i kreativne aktivnosti kako bismo podstakli razvoj govora i jezika. Radimo sa djecom različitog uzrasta i različitih potreba — od artikulacije do složenijih jezičkih teškoća.",
    fullDescription:
      "Logopedska terapija podrazumijeva individualan rad sa djetetom u toplom i podsticajnom okruženju. Svaki tretman prilagođavamo potrebama djeteta, koristeći igru, slikovnice i kreativne aktivnosti kako bismo podstakli razvoj govora i jezika.",
    icon: "message-circle",
    outcomes: [
      "Razvijamo razumijevanje i izražavanje",
      "Pomažemo da dijete lakše komunicira u vrtiću i školi",
      "Podstičemo samopouzdanje u govoru",
    ],
    bullets: [
      "Individualni plan terapije prilagođen potrebama djeteta",
      "Korištenje igre i kreativnih aktivnosti",
      "Redovne povratne informacije za roditelje",
      "Vježbe za rad kod kuće",
    ],
    expectations: [
      "Detaljnu procjenu na početku saradnje",
      "Individualni plan terapije",
      "Redovne povratne informacije za roditelje",
      "Vježbe za rad kod kuće",
    ],
    faqs: [
      {
        question: "Koliko često su termini terapije?",
        answer: "Frekvencija zavisi od potreba djeteta. Najčešće je to jedan do dva termina sedmično.",
      },
      {
        question: "Da li roditelji prisustvuju terapijama?",
        answer: "Roditelji su uvijek dobrodošli. Aktivno učešće roditelja značajno doprinosi napretku.",
      },
    ],
  },
  {
    id: "procjena-razvoja",
    slug: "procjena-razvoja",
    title: "Procjena govorno-jezičkog razvoja",
    teaser: "Sveobuhvatna procjena kao osnova za planiranje podrške.",
    shortDescription:
      "Sveobuhvatna procjena govornog i jezičkog razvoja djeteta kao osnova za planiranje podrške.",
    longDescription:
      "Procjena obuhvata ispitivanje artikulacije, razumijevanja govora, ekspresivnog jezika, fonološke svjesnosti i pragmatičkih vještina. Na osnovu rezultata kreiramo preporuke za dalji rad. Procjena se odvija u prijateljskoj atmosferi, uz uključivanje roditelja u proces.",
    fullDescription:
      "Procjena obuhvata ispitivanje artikulacije, razumijevanja govora, ekspresivnog jezika, fonološke svjesnosti i pragmatičkih vještina. Na osnovu rezultata kreiramo preporuke za dalji rad.",
    icon: "clipboard-list",
    outcomes: [
      "Jasno razumijete razvojni nivo vašeg djeteta",
      "Dobijate preporuke prilagođene potrebama",
      "Planirate sljedeće korake sa stručnjacima",
    ],
    bullets: [
      "Razgovor sa roditeljima o istoriji razvoja",
      "Standardizovane i nestandardizovane testove",
      "Pisani izvještaj sa preporukama",
      "Zakazivanje kontrolnog pregleda",
    ],
    expectations: [
      "Razgovor sa roditeljima o istoriji razvoja",
      "Standardizovane i nestandardizovane testove",
      "Pisani izvještaj sa preporukama",
      "Zakazivanje kontrolnog pregleda",
    ],
    faqs: [
      {
        question: "Koliko traje procjena?",
        answer: "Procjena obično traje 60–90 minuta, uključujući razgovor sa roditeljima.",
      },
    ],
  },
  {
    id: "savjetovanje-roditelja",
    slug: "savjetovanje-roditelja",
    title: "Savjetovanje za roditelje",
    teaser: "Podrška roditeljima u razumijevanju govornog razvoja.",
    shortDescription:
      "Podrška roditeljima u razumijevanju govorno-jezičkog razvoja i načina na koji mogu pomoći svom djetetu.",
    longDescription:
      "Savjetovanje za roditelje pruža konkretne smjernice kako da u svakodnevnom životu podstičete razvoj govora i jezika svog djeteta. Razgovaramo o očekivanjima, strategijama i načinima podrške. Roditelji su ključni partneri u terapijskom procesu.",
    fullDescription:
      "Savjetovanje za roditelje pruža konkretne smjernice kako da u svakodnevnom životu podstičete razvoj govora i jezika svog djeteta. Razgovaramo o očekivanjima, strategijama i načinima podrške.",
    icon: "users",
    outcomes: [
      "Naučite kako podsticati govor u svakodnevnim situacijama",
      "Dobijate praktične savjete za rad kod kuće",
      "Ojačavate saradnju sa logopedom",
    ],
    bullets: [
      "Individualnu sesiju sa logopedom",
      "Praktične savjete za svakodnevne situacije",
      "Materijale za rad kod kuće",
      "Mogućnost praćenja napretka",
    ],
    expectations: [
      "Individualnu sesiju sa logopedom",
      "Praktične savjete za svakodnevne situacije",
      "Materijale za rad kod kuće",
      "Mogućnost praćenja napretka",
    ],
  },
  {
    id: "rani-razvoj",
    slug: "rani-razvoj",
    title: "Podrška ranom razvoju",
    teaser: "Stimulacija govora kod najmlađe djece.",
    shortDescription:
      "Stimulacija govorno-jezičkog razvoja kod najmlađe djece, jer rana podrška čini najveću razliku.",
    longDescription:
      "Rana intervencija je ključna za djecu kod koje se primijete kašnjenja u govorno-jezičkom razvoju. Radimo sa djecom od najranijeg uzrasta, pružajući podršku kroz igru i interakciju. Uključujemo roditelje od samog početka kako bi mogli nastaviti rad kod kuće.",
    fullDescription:
      "Rana intervencija je ključna za djecu kod koje se primijete kašnjenja u govorno-jezičkom razvoju. Radimo sa djecom od najranijeg uzrasta, pružajući podršku kroz igru i interakciju.",
    icon: "baby",
    outcomes: [
      "Rano prepoznavanje potencijalnih teškoća",
      "Stimulacija kroz igru i prirodnu interakciju",
      "Uključivanje roditelja od samog početka",
    ],
    bullets: [
      "Procjenu razvojnog nivoa",
      "Program stimulacije prilagođen uzrastu",
      "Uključivanje roditelja u proces",
      "Praćenje napretka kroz redovne kontrole",
    ],
    expectations: [
      "Procjenu razvojnog nivoa",
      "Program stimulacije prilagođen uzrastu",
      "Uključivanje roditelja u proces",
      "Praćenje napretka kroz redovne kontrole",
    ],
  },
  {
    id: "teskoci-citanja-pisanja",
    slug: "teskoci-citanja-pisanja",
    title: "Teškoće čitanja i pisanja",
    shortDescription:
      "Podrška djeci koja se suočavaju sa teškoćama u usvajanju vještina čitanja i pisanja.",
    longDescription:
      "Pomažemo djeci da prevaziđu teškoće u čitanju i pisanju kroz strukturirane programe koji razvijaju fonološku svjesnost, prepoznavanje slova i razumijevanje teksta. Saradujemo sa školom i roditeljima kako bismo osigurali konzistentnu podršku.",
    fullDescription:
      "Pomažemo djeci da prevaziđu teškoće u čitanju i pisanju kroz strukturirane programe koji razvijaju fonološku svjesnost, prepoznavanje slova i razumijevanje teksta.",
    icon: "book-open",
    outcomes: [
      "Razvijamo fonološku svjesnost i prepoznavanje slova",
      "Pomažemo da dijete lakše čita i piše",
      "Saradujemo sa školom i roditeljima",
    ],
    bullets: [
      "Procjenu predčitalačkih i čitalačkih vještina",
      "Individualni program podrške",
      "Korištenje specijalizovanih materijala",
      "Saradnju sa školom i roditeljima",
    ],
    expectations: [
      "Procjenu predčitalačkih i čitalačkih vještina",
      "Individualni program podrške",
      "Korištenje specijalizovanih materijala",
      "Saradnju sa školom i roditeljima",
    ],
  },
  {
    id: "mucanje",
    slug: "mucanje",
    title: "Terapija mucanja",
    shortDescription:
      "Specijalizovana podrška za djecu i odrasle koji se suočavaju sa mucanjem.",
    longDescription:
      "Mucanje je govorna teškoća koja zahtijeva specijalizovan pristup. Kroz terapiju radimo na tehnikama fluentnog govora, smanjenju anksioznosti i izgradnji samopouzdanja u komunikaciji. Pružamo dugoročnu podršku.",
    fullDescription:
      "Mucanje je govorna teškoća koja zahtijeva specijalizovan pristup. Kroz terapiju radimo na tehnikama fluentnog govora, smanjenju anksioznosti i izgradnji samopouzdanja u komunikaciji.",
    icon: "mic",
    outcomes: [
      "Unapređujemo fluentnost govora",
      "Smanjujemo anksioznost u komunikaciji",
      "Gradimo samopouzdanje u izražavanju",
    ],
    bullets: [
      "Detaljnu analizu govornog obrasca",
      "Tehnike za unapređenje fluentnosti",
      "Podršku u svakodnevnim komunikacionim situacijama",
      "Dugoročno praćenje",
    ],
    expectations: [
      "Detaljnu analizu govornog obrasca",
      "Tehnike za unapređenje fluentnosti",
      "Podršku u svakodnevnim komunikacionim situacijama",
      "Dugoročno praćenje",
    ],
  },
];
