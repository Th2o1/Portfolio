import Image from "next/image";
import { FaLinkedin, FaEnvelope, FaFileAlt, FaGithub } from "react-icons/fa";

type ProfileCardProps = {
  name: string;
  role: string;
  avatarSrc: string;
};

export function ProfileCard({ name, role, avatarSrc }: ProfileCardProps) {
  return (
    <div className="flex items-center card max-w-[300px]">
      {/* Avatar */}
      <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
        <Image src={avatarSrc} alt={`${name} avatar`} width={96} height={96} />
      </div>
      {/* Text & Icons */}
      <div className="flex-1">
        {/* Name & Role */}
        <h2 className="text-light text-xl font-semibold">{name}</h2>
        <p className="text-gray-400 text-sm">{role}</p>
        {/* Icon Row */}
        <div className="mt-3 flex space-x-4 text-gray-300">
          <a href="#" aria-label="LinkedIn" className="hover:text-white">
            <FaLinkedin size={20} />
          </a>
          <a href="#" aria-label="Email" className="hover:text-white">
            <FaEnvelope size={20} />
          </a>
          <a href="#" aria-label="CV" className="hover:text-white">
            <FaFileAlt size={20} />
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-white">
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
