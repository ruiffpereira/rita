export interface Artist {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  image: string;
  instagram?: string;
  worksCount: number;
}

export const artists: Artist[] = [
  {
    id: "rita",
    name: "Rita",
    specialty: "Earstyling & Curadoria de Orelha",
    bio: "Piercer desde 2016 e fundadora da NØVA, ela transforma cada orelha numa expressão pessoal única. O seu foco é o earstyling com peças de ouro e zircónias, que transmitam elegância e delicadeza.",
    image: "/images/artists/rita.jpg",
    instagram: "@ritabodyart",
    worksCount: 0,
  },
  {
    id: "bia",
    name: "Bia",
    specialty: "Perfurações Corporais & Harmonização Auricular",
    bio: "Piercer desde 2023, é apaixonada por todas as formas de expressão através das perfurações corporais. Tem um carinho especial por harmonização de projetos auriculares e é fascinada por joalheria à base de brilhos e cor.",
    image: "/images/artists/bia.jpg",
    instagram: "@piercedbybia",
    worksCount: 0,
  },
  {
    id: "carmen",
    name: "Cármen",
    specialty: "Perfurações Íntimas & Grande Calibre",
    bio: "Piercer desde 2021, acredita que cada piercing é uma oportunidade de celebrar a individualidade de cada um. Especializada em perfurações íntimas e de grande calibre, adora anodizar jóias e modificar agulhas.",
    image: "/images/artists/carmen.jpg",
    instagram: "@piercingsbymaui",
    worksCount: 0,
  },
  {
    id: "raquel",
    name: "Raquel",
    specialty: "Guest Piercer",
    bio: "A primeira guest piercer da NØVA, trazendo a sua arte e energia única ao estúdio. Uma presença especial que enriquece a equipa com a sua visão e talento.",
    image: "/images/artists/raquel.jpg",
    instagram: "@raaquel.piercer",
    worksCount: 0,
  },
];
