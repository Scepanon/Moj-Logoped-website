export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  // TODO: Replace with actual photo paths
  photo: string;
}

// TODO: Replace with real team member data
export const team: TeamMember[] = [
  {
    id: "dusica",
    name: "Dušica Šćepanovic",
    title: "Master dipl.logoped i dipl.pedagog, osnivačica centra",
    bio: "Sa višegodišnjim iskustvom u radu sa djecom, Dušica je osnovala centar sa vizijom da svakom djetetu pruži podršku u razvoju komunikacije.",
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
