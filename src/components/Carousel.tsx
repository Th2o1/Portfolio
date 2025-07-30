"use client";

import { useState } from "react";

export default function Carousel({ slides }: { slides: React.ReactNode[] }) {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const prev = () => setIndex((prev) => (prev - 1 + total) % total);
  const next = () => setIndex((prev) => (prev + 1) % total);

  return (
    <section className="space-y-3">
      <h2 className="mx-auto pl-3  w-full max-w-3xl max-h-1/4 text-2xl font-semibold text-light">
        Project
      </h2>
      <div className="relative  w-full max-w-3xl max-h-[90vh] mx-auto">
        {/* Slides container */}
        <div className="overflow-hidden rounded-xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div key={i} className="min-w-full">
                {slide}
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div className="flex direction-row justify-between p-4 items-center  space-x-4">
          <div className="space-x-4">
            <button
              onClick={prev}
              className=" bg-secondary/50 text-4xl text-light px-3 py-1 rounded-full"
            >
              ←
            </button>
            <button
              onClick={next}
              className="bg-secondary/50 text-4xl text-light px-3 py-1 rounded-full"
            >
              →
            </button>
          </div>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-3 w-8 rounded-full transition-all ${
                  i === index ? "bg-white w-5" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
