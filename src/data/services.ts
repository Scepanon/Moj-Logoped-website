export type ServiceIcon =
  | "message-circle"
  | "clipboard-list"
  | "users"
  | "baby"
  | "book-open"
  | "mic"
  | "brain";

export interface Service {
  id: string;
  slug: string;
  title: string;
  /** Optional group for accordion sections (e.g. "Logopedske usluge", "Psihološke usluge") */
  group?: string;
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
    group: "Logopedske usluge",
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
    group: "Logopedske usluge",
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
    group: "Logopedske usluge",
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
    group: "Logopedske usluge",
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
    group: "Logopedske usluge",
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
    group: "Logopedske usluge",
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
  // Psihološke usluge
  {
    id: "psiholoska-eksploracija",
    slug: "psiholoska-eksploracija",
    title: "Psihološka eksploracija – testiranje djece i adolescenata (procjena)",
    group: "Psihološke usluge",
    shortDescription:
      "Sveobuhvatna procjena emocionalnog, kognitivnog i ponašajnog funkcionisanja djece i adolescenata, uz saradnju sa roditeljima i školom.",
    longDescription:
      "Psihološka eksploracija obuhvata sveobuhvatnu procjenu emocionalnog, kognitivnog i ponašajnog funkcionisanja djece i adolescenata. Radimo u bliskoj saradnji sa roditeljima, a po potrebi i sa školom, kako bismo stvorili potpunu sliku o djetetu i njegovim potrebama. Procjena je osnova za planiranje dalje podrške i preporuke.",
    fullDescription:
      "Psihološka eksploracija obuhvata sveobuhvatnu procjenu emocionalnog, kognitivnog i ponašajnog funkcionisanja djece i adolescenata. Radimo u bliskoj saradnji sa roditeljima, a po potrebi i sa školom.",
    icon: "brain",
    outcomes: [
      "Jasna slika o emocionalnom i kognitivnom stanju djeteta",
      "Preporuke prilagođene potrebama",
      "Osnova za planiranje daljeg rada",
    ],
    bullets: [
      "Razgovor sa roditeljima o razvoju i poteškoćama",
      "Standardizovane i projekcijske tehnike",
      "Procjena pažnje, pamćenja i kognitivnih sposobnosti",
      "Pisani izvještaj sa preporukama",
    ],
    expectations: [
      "Razgovor sa roditeljima",
      "Testiranje prilagođeno uzrastu djeteta",
      "Pisani izvještaj",
      "Preporuke za dalji rad",
    ],
  },
  {
    id: "psiholosko-testiranje-dopuna",
    slug: "psiholosko-testiranje-dopuna",
    title: "Psihološko testiranje – dopuna",
    group: "Psihološke usluge",
    shortDescription:
      "Dodatni, ciljani testovi koji dopunjuju osnovnu procjenu – pažnja, pamćenje, sposobnosti – za preciznije planiranje daljeg rada.",
    longDescription:
      "Kada osnovna procjena ukazuje na potrebu za dubljim uvida, nude se dodatni, ciljani testovi. Ovo obuhvata testiranje pažnje, pamćenja, kognitivnih sposobnosti i drugih domena. Rezultati dopunjuju sliku o djetetu i pomažu u kreiranju preciznijeg plana podrške i terapije.",
    fullDescription:
      "Dodatni, ciljani testovi dopunjuju osnovnu procjenu. Testiranje pažnje, pamćenja i kognitivnih sposobnosti pomaže u preciznijem planiranju daljeg rada.",
    icon: "brain",
    outcomes: [
      "Detaljniji uvid u specifične oblasti",
      "Precizniji plan podrške",
      "Bolje razumijevanje potreba djeteta",
    ],
    bullets: [
      "Ciljano testiranje prema potrebi",
      "Procjena pažnje i koncentracije",
      "Procjena pamćenja i učenja",
      "Rezultati uključeni u izvještaj",
    ],
    expectations: [
      "Ciljano testiranje",
      "Rezultati uključeni u izvještaj",
      "Preporuke za dalji rad",
    ],
  },
  {
    id: "psiholosko-savjetovanje",
    slug: "psiholosko-savjetovanje",
    title: "Psihološko savjetovanje",
    group: "Psihološke usluge",
    shortDescription:
      "Siguran prostor za djecu i roditelje – emocije, ponašanje, školske poteškoće, porodične teme. Praktične strategije i podrška.",
    longDescription:
      "Psihološko savjetovanje pruža siguran prostor za djecu i/ili roditelje u vezi sa emocijama, ponašanjem, školskim poteškoćama i porodičnim temama. Fokus je na praktičnim strategijama koje možete primijeniti u svakodnevnom životu. Radimo u toplom, nenametljivom tonu, uvijek uz poštovanje vašeg tempa i potreba.",
    fullDescription:
      "Psihološko savjetovanje pruža siguran prostor za djecu i roditelje. Radimo na emocijama, ponašanju, školskim poteškoćama i porodičnim temama, uz praktične strategije.",
    icon: "brain",
    outcomes: [
      "Bolje razumijevanje emocija i ponašanja",
      "Praktične strategije za svakodnevnicu",
      "Podrška u školskim i porodičnim izazovima",
    ],
    bullets: [
      "Individualne sesije sa djetetom i/ili roditeljima",
      "Razgovor o emocijama, ponašanju i odnosima",
      "Praktične strategije i savjete",
      "Praćenje napretka",
    ],
    expectations: [
      "Individualne sesije",
      "Praktične strategije",
      "Siguran i diskretan prostor",
    ],
  },
  {
    id: "psiholoska-radionica",
    slug: "psiholoska-radionica",
    title: "Radionica za roditelje djece s govorno-jezičkim teškoćama",
    group: "Psihološke usluge",
    shortDescription:
      "Kad dijete ne može riječima – emocije, govor i odnos. Siguran prostor za roditelje djece 5–7 godina. Do 10 učesnika, 180 minuta.",
    longDescription:
      "Radionica za roditelje djece uzrasta 5–7 godina s govorno-jezičkim teškoćama. Naslov: „Kad dijete ne može riječima – emocije, govor i odnos“. Mali broj učesnika (do 10) osigurava siguran prostor za učenje i razmjenu iskustava sa psihologom i logopedom. Učite zašto dijete „ne sluša“ kad je preplavljeno emocijama, kako govoriti bez pritiska, konkretne rečenice i strategije koje pomažu govoru, i da niste sami na ovom putu. Trajanje: 180 minuta. Vodi: psiholog u saradnji sa logopedom po potrebi.",
    fullDescription:
      "Radionica za roditelje djece uzrasta 5–7 godina. Siguran prostor za učenje o emocijama, govoru i odnosu. Do 10 učesnika. Trajanje: 180 minuta. Vodi: psiholog u saradnji sa logopedom po potrebi.",
    icon: "brain",
    outcomes: [
      "Razumijevanje zašto dijete „ne sluša“ kad je preplavljeno",
      "Kako govoriti bez pritiska – konkretne strategije",
      "Osjećaj da niste sami",
    ],
    bullets: [
      "Za roditelje djece 5–7 godina s govorno-jezičkim teškoćama",
      "Mali broj učesnika (do 10)",
      "Trajanje: 180 minuta",
      "Vodi: psiholog (u saradnji sa logopedom po potrebi)",
    ],
    expectations: [
      "Siguran prostor za razmjenu iskustava",
      "Konkretne rečenice i strategije",
      "Praktični savjeti za svakodnevnicu",
    ],
  },
];
