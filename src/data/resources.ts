export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  // TODO: Replace with actual download links or page links
  href: string;
  available: boolean;
}

// TODO: Replace with real resources and download links
export const resources: Resource[] = [
  {
    id: "vodic-razvoj-govora",
    title: "Vodič: Razvoj govora od 0 do 6 godina",
    description:
      "Pregledan vodič sa miljokamima govorno-jezičkog razvoja i savjetima za roditelje.",
    category: "Vodiči",
    href: "#",
    available: false,
  },
  {
    id: "liste-prvih-rijeci",
    title: "Liste prvih 50 riječi",
    description:
      "Korisna lista sa primjerima prvih riječi koje djeca tipično nauče, idealna za praćenje rječnika.",
    category: "Radni materijali",
    href: "#",
    available: false,
  },
  {
    id: "aktivnosti-kod-kuce",
    title: "Aktivnosti za podsticanje govora kod kuće",
    description:
      "Zbirka jednostavnih igara i aktivnosti koje možete raditi sa djetetom svaki dan.",
    category: "Savjeti",
    href: "#",
    available: false,
  },
  {
    id: "priprema-za-skolu",
    title: "Govorna priprema za školu",
    description:
      "Šta dijete treba da zna pred polazak u školu i kako mu pomoći u pripremi.",
    category: "Vodiči",
    href: "#",
    available: false,
  },
  {
    id: "kada-logoped",
    title: "Kada posjetiti logopeda – kontrolna lista",
    description:
      "Jednostavna kontrolna lista koja vam pomaže da procijenite da li je vrijeme za konsultaciju.",
    category: "Radni materijali",
    href: "#",
    available: false,
  },
  {
    id: "citanje-djeci",
    title: "Kako čitati djeci – vodič za roditelje",
    description:
      "Savjeti za interaktivno čitanje koje podstiče razvoj govora, jezika i mašte.",
    category: "Savjeti",
    href: "#",
    available: false,
  },
];
