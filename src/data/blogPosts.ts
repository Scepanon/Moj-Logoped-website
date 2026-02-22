export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  // TODO: Replace with actual content written for the blog
  content: string;
  // TODO: Add real cover images
  coverImage?: string;
}

// TODO: Replace placeholder blog posts with real content
export const blogPosts: BlogPost[] = [
  {
    slug: "kada-potraziti-pomoc-logopeda",
    title: "Kada potražiti pomoć logopeda?",
    excerpt:
      "Mnogi roditelji se pitaju da li razvoj govora njihovog djeteta napreduje kako treba. Saznajte koji su znakovi da je vrijeme za konsultaciju sa logopedom.",
    category: "Savjeti za roditelje",
    date: "2026-01-15",
    content: `
## Kada potražiti pomoć logopeda?

Svako dijete se razvija svojim tempom, ali postoje određeni miljokazi u govorno-jezičkom razvoju koje je važno pratiti. Kao roditelj, vi ste prvi koji primjećujete kako vaše dijete komunicira.

### Znakovi na koje treba obratiti pažnju

**Do 12 mjeseci:**
- Dijete ne reaguje na svoje ime
- Ne koristi gestove (npr. mahanje, pokazivanje)
- Ne proizvodi slogove (ba-ba, ma-ma)

**Do 18 mjeseci:**
- Dijete ne koristi najmanje 5-10 riječi
- Ne razumije jednostavne naloge
- Ne pokazuje interesovanje za komunikaciju

**Do 2 godine:**
- Rječnik manji od 50 riječi
- Ne spaja dvije riječi
- Govor je nerazumljiv za bliske osobe

**Do 3 godine:**
- Govor je uglavnom nerazumljiv za strane osobe
- Ne koristi jednostavne rečenice
- Teškoće u razumijevanju pitanja

### Rana intervencija je ključna

Što ranije prepoznamo teškoće, to su rezultati terapije bolji. Ne čekajte – ako vas nešto brine u vezi sa govorom vašeg djeteta, konsultujte se sa logopedom. Čak i ako se ispostavi da je sve u redu, bolje je provjeriti nego čekati.

### Kako izgleda prva konsultacija?

Prva konsultacija u našem centru podrazumijeva razgovor sa roditeljima o istoriji razvoja djeteta, posmatranje djeteta u igri i interakciji, te početnu procjenu govorno-jezičkih sposobnosti. Na osnovu toga, zajedno sa vama kreiramo plan dalje podrške.
    `,
  },
  {
    slug: "kako-izgleda-logopedska-procjena",
    title: "Kako izgleda logopedska procjena?",
    excerpt:
      "Saznajte šta možete očekivati prilikom logopedske procjene vašeg djeteta i kako se pripremiti za prvi susret.",
    category: "O terapiji",
    date: "2026-01-28",
    content: `
## Kako izgleda logopedska procjena?

Logopedska procjena je prvi i veoma važan korak u razumijevanju govorno-jezičkog razvoja vašeg djeteta. Želimo da se i vi i vaše dijete osjećate ugodno tokom cijelog procesa.

### Prije procjene

Pripremite se tako što ćete razmisliti o sljedećem:
- Kada je vaše dijete progovorilo prve riječi?
- Kako komunicira sa vama i sa drugom djecom?
- Da li postoji nešto što vas posebno brine?

### Tokom procjene

Procjena traje obično 45-60 minuta i uključuje:

1. **Razgovor sa roditeljima** – Prikupljamo informacije o razvoju djeteta, porodičnoj istoriji i vašim zapažanjima.
2. **Posmatranje djeteta** – Kroz igru i interakciju pratimo kako dijete komunicira.
3. **Formalna procjena** – Koristimo standardizovane instrumente prilagođene uzrastu djeteta.
4. **Analiza rezultata** – Na osnovu prikupljenih podataka formiramo sliku o govorno-jezičkom statusu.

### Nakon procjene

Dobićete pisani izvještaj sa rezultatima procjene i preporukama za dalji rad. Zajedno ćemo razgovarati o planu terapije i odgovoriti na sva vaša pitanja.
    `,
  },
  {
    slug: "igre-za-podsticanje-govora",
    title: "Igre za podsticanje govora kod kuće",
    excerpt:
      "Jednostavne i zabavne aktivnosti koje možete raditi sa djetetom kod kuće kako biste podstakli razvoj govora.",
    category: "Savjeti za roditelje",
    date: "2026-02-05",
    content: `
## Igre za podsticanje govora kod kuće

Razvoj govora ne dešava se samo u logopedskom kabinetu – svakodnevne aktivnosti kod kuće su jednako važne. Evo nekoliko ideja koje možete lako primijeniti.

### 1. Čitanje slikovnica

Čitajte djetetu svaki dan. Ne morate strogo pratiti tekst – opisujte slike, postavljajte pitanja i ohrabrujte dijete da pokazuje i imenuje ono što vidi.

### 2. Pjevanje pjesmica

Dječje pjesmice sa pokretima su odličan način za razvoj govora. Ponavljanje melodije i riječi pomaže djeci da usvoje nove riječi i fraze.

### 3. Igra sa lutkom

Koristite lutke ili plišane igračke za „razgovor" sa djetetom. Dajte im glasove i smišljajte priče zajedno.

### 4. Imenovanje tokom svakodnevnih aktivnosti

Dok se oblačite, jedete ili šetate, imenujte predmete i opisujte radnje. „Oblačimo čarape. Ovo su crvene čarape!"

### 5. Igre puhanja

Puhanje balona od sapunice, truba ili puhanje u slamku razvija oralnu motoriku koja je važna za pravilan izgovor glasova.

### Važno je zapamtiti

Neka komunikacija bude prirodna i zabavna. Ne ispravljajte dijete direktno – umjesto toga, ponovite ono što je reklo na ispravan način. Pohvalite svaki pokušaj komunikacije.
    `,
  },
  {
    slug: "razvoj-govora-po-uzrastu",
    title: "Razvoj govora po uzrastu: šta očekivati?",
    excerpt:
      "Pregled tipičnog govorno-jezičkog razvoja od rođenja do polaska u školu. Saznajte šta je očekivano za uzrast vašeg djeteta.",
    category: "Edukacija",
    date: "2026-02-12",
    content: `
## Razvoj govora po uzrastu: šta očekivati?

Razumijevanje tipičnog razvoja govora pomaže roditeljima da prepoznaju kada je dijete na pravom putu, a kada bi mogla biti korisna podrška logopeda.

### 0-6 mjeseci
- Reaguje na zvukove i glasove
- Guče i proizvodi vokalne zvukove
- Počinje da se smije u interakciji

### 6-12 mjeseci
- Brblja (ba-ba, da-da)
- Reaguje na svoje ime
- Razumije „ne" i jednostavne naloge
- Može izgovoriti prvu riječ

### 12-18 mjeseci
- Koristi 5-20 riječi
- Razumije mnogo više nego što govori
- Pokazuje predmete i koristi gestove

### 18-24 mjeseca
- Rječnik raste na 50+ riječi
- Počinje da spaja dvije riječi
- Prati jednostavne naloge

### 2-3 godine
- Koristi rečenice od 2-3 riječi
- Govor razumljiv bliskim osobama
- Postavlja pitanja
- Imenuje predmete na slikama

### 3-4 godine
- Govori u punim rečenicama
- Priča o prošlim događajima
- Govor je uglavnom razumljiv

### 4-5 godina
- Složene rečenice i priče
- Prepoznaje slova i glasove
- Govor je potpuno razumljiv

### Svako dijete je jedinstveno

Ovi miljokazi su okvirni vodiči. Ako vaše dijete ne ispunjava sve navedeno za svoj uzrast, to ne znači nužno da postoji problem, ali je konsultacija sa logopedom uvijek dobra ideja.
    `,
  },
  {
    slug: "saradnja-roditelja-i-logopeda",
    title: "Zašto je saradnja roditelja i logopeda ključna?",
    excerpt:
      "Uspješna logopedska terapija zahtijeva timski rad. Saznajte kako vaša uključenost čini razliku u napretku djeteta.",
    category: "O terapiji",
    date: "2026-02-20",
    content: `
## Zašto je saradnja roditelja i logopeda ključna?

Logopedska terapija nije nešto što se dešava samo u kabinetu. Vaša uključenost kao roditelja je jedan od najvažnijih faktora uspjeha.

### Roditelji kao partneri u terapiji

Vi poznajete svoje dijete najbolje. Vaša zapažanja, podrška i angažman kod kuće čine ogromnu razliku u brzini i kvalitetu napretka.

### Kako možete pomoći?

1. **Redovno dolazite na termine** – Kontinuitet je ključan za napredak.
2. **Radite vježbe kod kuće** – Logoped će vam dati jasne upute šta i kako vježbati.
3. **Komunicirajte sa logopedom** – Dijelite svoja zapažanja i postavljajte pitanja.
4. **Budite strpljivi** – Napredak zahtijeva vrijeme. Slavite i male korake naprijed.
5. **Stvarajte podsticajno okruženje** – Čitajte, razgovarajte i igrajte se sa djetetom.

### Naš pristup saradnji

U našem centru, roditelji su uvijek dobrodošli da prisustvuju terapijama. Redovno organizujemo konsultacije i pružamo materijale za rad kod kuće. Vjerujemo da je otvorena komunikacija osnova svakog uspješnog terapijskog procesa.
    `,
  },
];
