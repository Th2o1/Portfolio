export type TechItem = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
};

export default function TechStackCard({ items }: { items: TechItem[] }) {
  return (
    <section className="space-y-3">
      <h2 className="ml-3 text-2xl font-semibold text-light">Tech Stack</h2>

      <div className="card">
        {/* Two-column grid that collapses to one column on very small screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              /* Each cell stretches to fill its grid column ⇒ all rows have equal width */
              className="flex items-center gap-4 w-full bg-secondary rounded-4xl p-5"
            >
              {/* Icon (fixed size) */}
              <div className="flex-shrink-0 w-[42px] h-[50px] flex items-center justify-center">
                {item.icon}
              </div>

              {/* Text block */}
              <div>
                <p className="text-light font-bold text-xl">{item.title}</p>
                {item.subtitle.split(" ").map((word, i) => (
                  <p key={i} className="text-light text-sm leading-tight">
                    {word}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
