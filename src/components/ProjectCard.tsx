"use client";
import Image from "next/image";
import useIsSmallScreen from "../hooks/useIsSmallScreen";

type ProjectCardProps = {
  title: string;
  location: string;
  imageSrc: string;
  icon: React.ReactNode[];
};

export default function ProjectCard({
  title,
  location,
  imageSrc,
  icon,
}: ProjectCardProps) {
  const isSmall = useIsSmallScreen();
  return (
    <div className="card ">
      <Image
        className="w-full rounded-xl"
        src={imageSrc}
        alt={title}
        width={96}
        height={96}
      />
      <div className="flex flex-col items-start p-3">
        <h3 className="text-1xl font-bold text-light">{title}</h3>
        <p className="font-thin text-gray-400">{location}</p>
      </div>
      <div className="flex direction-row items-center p-3 w-full justify-between gap-5">
        <div className="flex gap-5 justify-center bg-secondary rounded-2xl p-3">
          {icon.slice(0, 2).map((i, idx) => (
            <div key={idx} className="w-10 h-10">
              {i}
            </div>
          ))}
          {/* Show more on medium and above */}
          {!isSmall &&
            icon.slice(2).map((i, idx) => (
              <div key={idx + 100} className="w-10 h-10">
                {i}
              </div>
            ))}
        </div>
        <div className="border-4 border-secondary p-2 rounded-xl">
          <svg
            className="w-7 h-7 fill-light
               transition-transform duration-200 rotate-270"
            viewBox="0 0 20 20"
          >
            <path d="M5 7.5 10 12.5 15 7.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}
