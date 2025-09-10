import { ProfileCard } from "@/components/ProfileCard";
import { AboutBlock } from "@/components/AboutMe";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import TechStackCard, { TechItem } from "@/components/TechStackCard";
import Carousel from "@/components/Carousel";
import Image from "next/image";

// Data imports
import { aboutText } from "../data/about";

import { techData } from "../data/tech";

import { projectsData } from "@/data/projects";

// --- Map data -> UI props ---
const techItems: TechItem[] = techData.map((t) => ({
  // Map icon path -> <Image/> (keeps data clean)
  icon: <Image src={t.iconSrc} alt={t.alt} width={48} height={48} />,
  title: t.title,
  subtitle: t.subtitle,
}));

const SLIDES = projectsData.map((p, idx) => (
  <ProjectCard
    key={idx}
    // Map icon paths -> <Image/> list
    icon={p.iconSrcs.map((src, i) => (
      <Image
        key={`${p.title}-icon-${i}`}
        src={src}
        alt={`${p.title} icon`}
        width={48}
        height={48}
      />
    ))}
    slug={p.slug}
    title={p.title}
    location={p.location}
    imageSrc={p.imageSrc}
  />
));

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

      {/* Projects Carousel */}
      <div className="grid grid-cols-1 gap-6">
        <Carousel slides={SLIDES} />
      </div>
    </div>
  );
}
