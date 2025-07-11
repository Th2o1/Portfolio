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
        <div key={i} className="w-full mb-6 last:mb-0 p-2">
          <div
            onClick={() => setActiveIndex(activeIndex === i ? null : i)}
            className="w-full"
          >
            <div className="flex w-full direction-row justify-between items-center">
              <h3 className="text-white  font-bold text-center items-center">
                {entry.title}
              </h3>
              {/* Right column: fixed-width badge (date or link) */}
              <div className="items-start  rounded-full bg-secondary p-2 ">
                {activeIndex === i && entry.projectLink ? (
                  <svg
                    className="w-5 h-5 fill-light
                  transition-transform duration-200 rotate-180"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5 7.5 10 12.5 15 7.5" />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 fill-light
                  transition-transform duration-200"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5 7.5 10 12.5 15 7.5" />
                  </svg>
                )}
              </div>
            </div>

            <div className="w-60 ">
              <p className="text-gray-400  font-thin">{entry.location}</p>
              <p className="text-gray-400 text-xs  font-thin">{entry.date}</p>
            </div>
          </div>
          <div>
            {activeIndex === i && entry.details && (
              <ul className="mt-6 pl-5 list-disc text-sm text-white space-y-1 ">
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
