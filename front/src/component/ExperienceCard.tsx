// components/TimelineSection.tsx
"use client";

import { useState } from "react";
import Timeline, { Entry } from "@/component/Timeline";

const experience: Entry[] = [
  {
    title: "Intership - Project Manager",
    location: "Hager, Obernai",
    date: "June 2024 - August 2024",
    projectLink: "https://example.com/project1",
    details: [
      "Led team to deliver internal tool",
      "Improved workflow by 30%",
      "Agile methodology",
    ],
  },
  {
    title: "Intership - Embedded Systems Developer",
    location: "SO-CONNECT, Monswiller",
    date: "June 2024 - August 2024",
    projectLink: "https://example.com/project1",
    details: [
      "Led team to deliver internal tool",
      "Improved workflow by 30%",
      "Agile methodology",
    ],
  },
  {
    title: "Intership - Embedded Systems Developer",
    location: "SO-CONNECT, Monswiller",
    date: "June 2024 - August 2024",
    projectLink: "https://example.com/project1",
    details: [
      "Led team to deliver internal tool",
      "Improved workflow by 30%",
      "Agile methodology",
    ],
  },
];

const education: Entry[] = [
  {
    title: "CS Degree",
    location: "University XYZ",
    date: "Sept 2021 - July 2024",
    details: ["Specialized in Embedded Systems", "Graduated with honors"],
  },
  {
    title: "License in Mathematic and Computer Science",
    location: "University XYZ",
    date: "Sept 2021 - July 2024",
    details: ["Specialized in Embedded Systems", "Graduated with honors"],
  },
  {
    title: "Master in science, internet, network and computer science",
    location: "University XYZ",
    date: "Sept 2021 - July 2024",
    details: ["Specialized in Embedded Systems", "Graduated with honors"],
  },
];

export default function ExperienceCard() {
  const [selectedTab, setSelectedTab] = useState<"experience" | "education">(
    "experience",
  );

  return (
    <div className="flex flex-col items-center ">
      {/* Toggle buttons */}
      <div className="flex justify-around sm:justify-center sm:gap-5 px-7 w-full">
        <button
          className={`font-semibold text-lg px-6 py-3 rounded-t-3xl ${selectedTab === "experience" ? "bg-primary text-light" : "bg-secondary text-light"}`}
          onClick={() => setSelectedTab("experience")}
        >
          Experience
        </button>
        <button
          className={`font-semibold text-lg px-6 py-3 rounded-t-3xl ${selectedTab === "education" ? "bg-primary text-light" : "bg-secondary text-light"}`}
          onClick={() => setSelectedTab("education")}
        >
          Education
        </button>
      </div>

      <Timeline data={selectedTab === "experience" ? experience : education} />
    </div>
  );
}
