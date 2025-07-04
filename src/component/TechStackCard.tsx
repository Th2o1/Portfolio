export type TechItem = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
};

export default function TechStackCard({ items }: { items: TechItem[] }) {
  return (
    <section className="space-y-3">
      <h2 className="ml-3  text-2xl font-semibold text-light">Tech Stack</h2>
      <div className="bg-primary rounded-4xl p-6 space-x-6">
        {/* Flex-wrap grid of tech items */}
        <div className="flex flex-row flex-wrap gap-4 max-w-1/5">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-secondary rounded-xl p-3 "
            >
              <div className="w-10 h-10">{item.icon}</div>
              <div>
                <p className="text-light font-bold text-xl">{item.title}</p>
                <p className="text-light text-sm max-w-2/5">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
