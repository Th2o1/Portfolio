import { ProfileCard } from "@/component/ProfileCard";
import { AboutBlock } from "@/component/AboutMe";
import ExperienceCard from "@/component/ExperienceCard";
import TechStackCard, { TechItem } from "@/component/TechStackCard";
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
    subtitle: "Programming Language",
  },
  {
    icon: (
      <Image src="/icons/github-actions.svg" alt="GA" width={24} height={24} />
    ),
    title: "GA",
    subtitle: "Test/Deployment Automation",
  },
  {
    icon: <Image src="/icons/docker.svg" alt="Docker" width={24} height={24} />,
    title: "Docker",
    subtitle: "Environment Container",
  },
  {
    icon: <Image src="/icons/git.svg" alt="Git" width={24} height={24} />,
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
    <div className="bg- grid grid-rows-[auto] min-h-screen p-3 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col space-y-8">
        <ProfileCard
          name="Ischia Théo"
          role="Embedded systems & DevOps"
          avatarSrc="/assets/profile/avatar.png"
        />
        <AboutBlock title="About me" content={aboutText} />
        <ExperienceCard />
        <TechStackCard items={techItems} />
      </main>
    </div>
  );
}
