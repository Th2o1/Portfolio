import Image from "next/image";

type ProjectCardProps = {
  title: string;
  location: string;
  imageSrc: string;
};

export default function ProjectCard({
  title,
  location,
  imageSrc,
}: ProjectCardProps) {
  return (
    <div className="card">
      <div>
        <h3>{title}</h3>
        <p>{location}</p>
        <Image src={imageSrc} alt={title} width={96} height={96} />
      </div>
    </div>
  );
}
