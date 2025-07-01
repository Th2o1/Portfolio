import { ProfileCard } from "@/component/ProfileCard";
import { AboutBlock } from "@/component/AboutMe";
import ExperienceCard from "@/component/ExperienceCard";

// Text thats going in the about me section
const aboutText = [
  "I’m a lorem ipsum vitae jsp quoi I’m a lorem ipsum vitae jsp quoi",
  "I’m a lorem ipsum vitae jsp quoi",
  "I’m a lorem ipsum vitae jsp quoi",
  "I’m a lorem ipsum vitae jsp quoi",
];

export default function Home() {
  return (
    <div className="grid grid-rows-[auto] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col space-y-8">
        <ProfileCard
          name="Ischia Théo"
          role="Embedded systems & DevOps"
          avatarSrc="/assets/homepage/avatar.png"
        />
        <AboutBlock title="About me" content={aboutText} />
        <ExperienceCard />
      </main>
    </div>
  );
}
