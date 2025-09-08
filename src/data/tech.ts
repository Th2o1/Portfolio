// Tech list as data (no JSX here)
export type TechDataItem = {
  iconSrc: string; // path to /public asset
  alt: string;
  title: string;
  subtitle: string;
};

export const techData: TechDataItem[] = [
  {
    iconSrc: "/assets/stack/c-program-icon.svg",
    alt: "C",
    title: "C",
    subtitle: "Language",
  },
  {
    iconSrc: "/assets/stack/c-program-icon.svg",
    alt: "GA",
    title: "GA",
    subtitle: "Automation",
  },
  {
    iconSrc: "/assets/stack/c-program-icon.svg",
    alt: "Docker",
    title: "Docker",
    subtitle: "Environment Container",
  },
  {
    iconSrc: "/assets/stack/c-program-icon.svg",
    alt: "Git",
    title: "Git",
    subtitle: "Version Control",
  },
];
