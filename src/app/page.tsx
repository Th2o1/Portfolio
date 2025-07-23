import { ProfileCard } from "@/components/ProfileCard";
import { AboutBlock } from "@/components/AboutMe";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import TechStackCard, { TechItem } from "@/components/TechStackCard";
import Image from "next/image";

// Items in tech stack
const techItems: TechItem[] = [
  {
    icon: (
      <Image
        src="/assets/stack/c-program-icon.svg"
        alt="C"
        width={48}
        height={48}
      />
    ),
    title: "C",
    subtitle: "Language",
  },
  {
    icon: (
      <Image
        src="/assets/stack/c-program-icon.svg"
        alt="GA"
        width={48}
        height={48}
      />
    ),
    title: "GA",
    subtitle: "Automation",
  },
  {
    icon: (
      <Image
        src="/assets/stack/c-program-icon.svg"
        alt="Docker"
        width={48}
        height={48}
      />
    ),
    title: "Docker",
    subtitle: "Environment Container",
  },
  {
    icon: (
      <Image
        src="/assets/stack/c-program-icon.svg"
        alt="Git"
        width={48}
        height={48}
      />
    ),
    title: "Git",
    subtitle: "Version Control",
  },
  {
    icon: (
      <Image
        src="/assets/stack/c-program-icon.svg"
        alt="Git"
        width={48}
        height={48}
      />
    ),
    title: "Git",
    subtitle: "Version Control",
  },
  {
    icon: (
      <Image
        src="/assets/stack/c-program-icon.svg"
        alt="Git"
        width={48}
        height={48}
      />
    ),
    title: "Git",
    subtitle: "Version Control",
  },
  {
    icon: (
      <Image
        src="/assets/stack/c-program-icon.svg"
        alt="Git"
        width={48}
        height={48}
      />
    ),
    title: "Git",
    subtitle: "Version Control",
  },
];
// Text thats going in the about me section
const aboutText = [
  "I’m a lorem ipsum vitae jsp quoi I’m a lorem ipsum vitae jsp quoi",
  "I’m a lorem ipsum vitae jsp quoi",
  "I’m a lorem ipsum vitae jsp quoi",
  "I’m a lorem ipsum vitae jsp quoi",
];

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen max-w-screen-xl mx-auto p-3 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      {/* Row 1: Centered profile card */}
      <div className="flex justify-center">
        <ProfileCard
          name="Ischia Théo"
          role="Embedded systems & DevOps"
          avatarSrc="/assets/profile/avatar.png"
        />
      </div>

      {/* Row 2: Two-column grid (About + TechStack on left, Experience on right) */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left column: About + TechStack stacked */}
        <div className="flex flex-col gap-6">
          <AboutBlock title="About me" content={aboutText} />
          <TechStackCard items={techItems} />
        </div>

        {/* Right column: Experience */}
        <ExperienceCard />
      </main>
      <ProjectCard
        title="Testbed for the D50 card"
        location="SO-CONNECT"
        imageSrc="/assets/projects/avatar.png"
      />
    </div>
  );
}
