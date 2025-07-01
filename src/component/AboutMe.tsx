import React from "react";

type AboutBlockProps = {
  title: string;
  content: string[];
};

export function AboutBlock({ title, content }: AboutBlockProps) {
  return (
    <section className="space-y-3">
      {/* Section title */}
      <h2 className="ml-3  text-2xl font-semibold text-light">{title}</h2>

      {/* Content container */}
      <div className="bg-primary rounded-4xl p-6 space-x-6">
        {content.map((line, i) => (
          <p key={i} className="text-light text-base">
            {line}
          </p>
        ))}
      </div>
    </section>
  );
}
