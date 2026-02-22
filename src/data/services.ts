export type ServiceIcon =
  | "message-circle"
  | "clipboard-list"
  | "users"
  | "baby"
  | "book-open"
  | "mic";

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: ServiceIcon;
  outcomes: string[];
  expectations: string[];
}

export const services: Service[] = [
  {
    id: "logopedska-terapija",
    title: "Logopedska terapija za djecu",
    shortDescription:
      "Individualni rad sa djetetom usmjeren na prevazilaženje govornih i jezičkih teškoća kroz igru i prilagođene aktivnosti.",
    fullDescription:
      "Logopedska terapija podrazumijeva individualan rad sa djetetom u toplom i podsticajnom okruženju. Svaki tretman prilagođavamo potrebama djeteta, koristeći igru, slikovnice i kreativne aktivnosti kako bismo podstakli razvoj govora i jezika.",
    icon: "message-circle",
    outcomes: [
      "Razvijamo razumijevanje i izražavanje",
      "Pomažemo da dijete lakše komunicira u vrtiću i školi",
      "Podstičemo samopouzdanje u govoru",
    ],
    expectations: [
      "Detaljnu procjenu na početku saradnje",
      "Individualni plan terapije",
      "Redovne povratne informacije za roditelje",
      "Vježbe za rad kod kuće",
    ],
  },
  {
    id: "procjena-razvoja",
    title: "Procjena govorno-jezičkog razvoja",
    shortDescription:
      "Sveobuhvatna procjena govornog i jezičkog razvoja djeteta kao osnova za planiranje podrške.",
    fullDescription:
      "Procjena obuhvata ispitivanje artikulacije, razumijevanja govora, ekspresivnog jezika, fonološke svjesnosti i pragmatičkih vještina. Na osnovu rezultata kreiramo preporuke za dalji rad.",
    icon: "clipboard-list",
    outcomes: [
      "Jasno razumijete razvojni nivo vašeg djeteta",
      "Dobijate preporuke prilagođene potrebama",
      "Planirate sljedeće korake sa stručnjacima",
    ],
    expectations: [
      "Razgovor sa roditeljima o istoriji razvoja",
      "Standardizovane i nestandardizovane testove",
      "Pisani izvještaj sa preporukama",
      "Zakazivanje kontrolnog pregleda",
    ],
  },
  {
    id: "savjetovanje-roditelja",
    title: "Savjetovanje za roditelje",
    shortDescription:
      "Podrška roditeljima u razumijevanju govorno-jezičkog razvoja i načina na koji mogu pomoći svom djetetu.",
    fullDescription:
      "Savjetovanje za roditelje pruža konkretne smjernice kako da u svakodnevnom životu podstičete razvoj govora i jezika svog djeteta. Razgovaramo o očekivanjima, strategijama i načinima podrške.",
    icon: "users",
    outcomes: [
      "Naučite kako podsticati govor u svakodnevnim situacijama",
      "Dobijate praktične savjete za rad kod kuće",
      "Ojačavate saradnju sa logopedom",
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
    title: "Podrška ranom razvoju",
    shortDescription:
      "Stimulacija govorno-jezičkog razvoja kod najmlađe djece, jer rana podrška čini najveću razliku.",
    fullDescription:
      "Rana intervencija je ključna za djecu kod koje se primijete kašnjenja u govorno-jezičkom razvoju. Radimo sa djecom od najranijeg uzrasta, pružajući podršku kroz igru i interakciju.",
    icon: "baby",
    outcomes: [
      "Rano prepoznavanje potencijalnih teškoća",
      "Stimulacija kroz igru i prirodnu interakciju",
      "Uključivanje roditelja od samog početka",
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
    title: "Teškoće čitanja i pisanja",
    shortDescription:
      "Podrška djeci koja se suočavaju sa teškoćama u usvajanju vještina čitanja i pisanja.",
    fullDescription:
      "Pomažemo djeci da prevaziđu teškoće u čitanju i pisanju kroz strukturirane programe koji razvijaju fonološku svjesnost, prepoznavanje slova i razumijevanje teksta.",
    icon: "book-open",
    outcomes: [
      "Razvijamo fonološku svjesnost i prepoznavanje slova",
      "Pomažemo da dijete lakše čita i piše",
      "Saradujemo sa školom i roditeljima",
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
    title: "Terapija mucanja",
    shortDescription:
      "Specijalizovana podrška za djecu i odrasle koji se suočavaju sa mucanjem.",
    fullDescription:
      "Mucanje je govorna teškoća koja zahtijeva specijalizovan pristup. Kroz terapiju radimo na tehnikama fluentnog govora, smanjenju anksioznosti i izgradnji samopouzdanja u komunikaciji.",
    icon: "mic",
    outcomes: [
      "Unapređujemo fluentnost govora",
      "Smanjujemo anksioznost u komunikaciji",
      "Gradimo samopouzdanje u izražavanju",
    ],
    expectations: [
      "Detaljnu analizu govornog obrasca",
      "Tehnike za unapređenje fluentnosti",
      "Podršku u svakodnevnim komunikacionim situacijama",
      "Dugoročno praćenje",
    ],
  },
];
