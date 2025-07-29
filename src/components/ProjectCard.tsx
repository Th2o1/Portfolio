import Image from "next/image";

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
  return (
    <div className="card p-4">
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
        <div className="flex gap-5 items-center  bg-secondary rounded-4xl p-5">
          {icon}
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
