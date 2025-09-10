// Carousel projects (icons are paths; we’ll map to <Image/> in the page)
export type ProjectData = {
  slug: string;
  title: string;
  location: string;
  imageSrc: string;
  iconSrcs: string[]; // multiple icons shown in the card header
};

export const projectsData: ProjectData[] = [
  {
    slug: "test",
    title: "Testbed for the D50 card",
    location: "SO-CONNECT",
    imageSrc: "/assets/projects/avatar.png",
    iconSrcs: [
      "/assets/stack/c-program-icon.svg",
      "/assets/stack/c-program-icon.svg",
      "/assets/stack/c-program-icon.svg",
      "/assets/stack/c-program-icon.svg",
      "/assets/stack/c-program-icon.svg",
    ],
  },
  {
    slug: "test",
    title: "Testbed for the D50 card",
    location: "SO-CONNECT",
    imageSrc: "/assets/projects/avatar.png",
    iconSrcs: [
      "/assets/stack/c-program-icon.svg",
      "/assets/stack/c-program-icon.svg",
    ],
  },
  {
    slug: "test",
    title: "Testbed for the D50 card",
    location: "SO-CONNECT",
    imageSrc: "/assets/projects/avatar.png",
    iconSrcs: [
      "/assets/stack/c-program-icon.svg",
      "/assets/stack/c-program-icon.svg",
    ],
  },
  {
    slug: "test",
    title: "Testbed for the D50 card",
    location: "SO-CONNECT",
    imageSrc: "/assets/projects/avatar.png",
    iconSrcs: [
      "/assets/stack/c-program-icon.svg",
      "/assets/stack/c-program-icon.svg",
    ],
  },
];
