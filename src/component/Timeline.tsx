// components/Timeline.tsx
"use client";

import { useState } from "react";

export type Entry = {
  title: string;
  location: string;
  date: string;
  details?: string[];
  projectLink?: string;
};

type TimelineProps = {
  data: Entry[];
};

export default function Timeline({ data }: TimelineProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="bg-primary p-6 rounded-4xl w-full max-w-3xl space-y-8">
      {data.map((entry, i) => (
        <div
          key={i}
          onClick={() => setActiveIndex(activeIndex === i ? null : i)}
          className="cursor-pointer"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-white font-mono font-semibold text-lg">
                {entry.title}
              </h3>
              <p className="text-gray-400 font-mono">{entry.location}</p>
            </div>
            <div className="bg-[#374151] text-white text-sm px-4 py-1 rounded-full">
              {entry.projectLink ? (
                <span className="underline">related project</span>
              ) : (
                entry.date
              )}
            </div>
          </div>

          {activeIndex === i && entry.details && (
            <ul className="mt-4 pl-5 list-disc text-sm text-white space-y-1 font-mono">
              {entry.details.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
