export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  /** Optional first-person sentence about approach */
  approachQuote?: string;
  photo: string;
}

export const team: TeamMember[] = [
  {
    id: "dusica",
    name: "Dušica Šćepanović",
    title: "Master dipl.logoped i dipl.pedagog, osnivačica centra",
    bio: "Sa višegodišnjim iskustvom u radu sa djecom, Dušica je osnovala centar sa vizijom da svakom djetetu pruži podršku u razvoju komunikacije. Specijalizirala se za individualni rad i ranu intervenciju, uvijek u saradnji sa roditeljima.",
    approachQuote: "Vjerujem da svako dijete zaslužuje priliku da komunicira sa samopouzdanjem.",
    photo: "/images/team/Dusica.jpg",
  },
  {
    id: "ana",
    name: "Ana Jovanović",
    title: "Logopedkinja",
    bio: "Ana se specijalizovala za rad sa najmlađom djecom i ranu intervenciju u govorno-jezičkom razvoju.",
    photo: "/images/team/placeholder-2.jpg",
  },
  {
    id: "marija",
    name: "Marija Nikolić",
    title: "Logopedkinja",
    bio: "Marija ima posebno iskustvo u radu sa djecom sa teškoćama čitanja i pisanja, kao i sa mucanjem.",
    photo: "/images/team/placeholder-3.jpg",
  },
  {
    id: "jelena",
    name: "Jelena Đurović",
    title: "Logopedkinja",
    bio: "Jelena se fokusira na savjetovanje roditelja i podršku porodicama u procesu logopedske terapije.",
    photo: "/images/team/placeholder-4.jpg",
  },
];
