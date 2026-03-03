export interface BodyPart {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const bodyParts: BodyPart[] = [
  {
    id: "orelha",
    name: "Orelha",
    icon: "◎",
    description: "Helix, tragus, conch, daith, lobe e muito mais",
  },
  {
    id: "nariz",
    name: "Nariz",
    icon: "◇",
    description: "Nostril, septum, bridge e high nostril",
  },
  {
    id: "labio",
    name: "Lábio",
    icon: "◈",
    description: "Monroe, medusa, labret e snake bites",
  },
  {
    id: "sobrancelha",
    name: "Sobrancelha",
    icon: "◉",
    description: "Eyebrow e anti-eyebrow surface piercings",
  },
  {
    id: "umbigo",
    name: "Umbigo",
    icon: "⬡",
    description: "Belly button e naval piercings",
  },
  {
    id: "lingua",
    name: "Língua",
    icon: "◆",
    description: "Tongue e snake eyes piercings",
  },
  {
    id: "corporal",
    name: "Corporal",
    icon: "✦",
    description: "Nipple, surface, dermal anchors",
  },
  {
    id: "industrial",
    name: "Industrial",
    icon: "⬟",
    description: "Industrial bars e scaffold piercings",
  },
];
