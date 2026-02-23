export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  /** Optional first-person sentence about approach */
  approachQuote?: string;
  photo: string;
}

/** Founder — shown in dedicated section on O nama, not in team grid */
export const founder: TeamMember = {
  id: "dusica",
  name: "Dušica Šćepanović",
  title: "Osnivačica i logoped",
  bio: "Sa više od 13 godina iskustva u radu sa djecom, Dušica je osnovala Moj Logoped sa jasnom vizijom: da svako dijete dobije priliku da razvije svoje komunikacione vještine u toplom i podsticajnom okruženju. Specijalizirala se za individualni rad i ranu intervenciju, uvijek u bliskoj saradnji sa roditeljima. Njena posvećenost djeci i porodicama ogleda se u pristupu koji je stručan, a istovremeno topao i nenametljiv.",
  approachQuote:
    "Vjerujem da svako dijete napreduje kada se osjeća viđeno, shvaćeno i podržano.",
  photo: "/images/team/Dusica.jpg",
};

export const team: TeamMember[] = [
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
  {
    id: "psiholog",
    name: "Psiholog – Ime i Prezime",
    title: "Psiholog",
    bio: "Fokus rada je na podršci djeci i roditeljima u procjeni emocionalnog, kognitivnog i ponašajnog funkcionisanja. U saradnji sa logopedskim timom pruža topao, stručan i nenametljiv pristup koji pomaže porodicama da bolje razumiju potrebe djeteta i planiraju dalji rad.",
    photo: "/images/team/placeholder-5.jpg",
  },
];
