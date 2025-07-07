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
    <div className="card  p-4">
      {data.map((entry, i) => (
        <div key={i} className="mb-6 last:mb-0">
          <div
            onClick={() => setActiveIndex(activeIndex === i ? null : i)}
            className="flex grow justify-between items-center p-2 w-full"
          >
            {/* Left column: title + position */}
            <div className="w-60 ">
              <h3 className="text-white  font-bold">{entry.title}</h3>
              <p className="text-gray-400  font-thin">{entry.location}</p>
            </div>

            {/* Right column: fixed-width badge (date or link) */}
            <div className="w-2/5 self-start text-center rounded-full bg-secondary p-1 ">
              {activeIndex === i && entry.projectLink ? (
                <a
                  href={entry.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-light hover:underline"
                >
                  View Project
                </a>
              ) : (
                <span className="text-xs self-end text-light">
                  {entry.date}
                </span>
              )}
            </div>
          </div>
          <div>
            {activeIndex === i && entry.details && (
              <ul className="mt-1 pl-5 list-disc text-sm text-white space-y-1 ">
                {entry.details.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
