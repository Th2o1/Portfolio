export type TechItem = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
};

export default function TechStackCard({ items }: { items: TechItem[] }) {
  return (
    <section className="space-y-3">
      <h2 className="ml-3  text-2xl font-semibold text-light">Tech Stack</h2>
      <div className="bg-primary rounded-4xl p-3 ">
        {/* Flex-wrap grid of tech items */}
        <div className="flex flex-row flex-wrap gap-y-5 gap-x-2 justify-center ">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 bg-secondary rounded-4xl p-1 w-2/5"
            >
              <div className="w-20 h-20 flex grow-0  items-center justify-center">
                {item.icon}
              </div>
              <div className="grow-1 flex flex-col items-start justify-center">
                <p className="text-light font-bold text-xl max-w-2/5 ">
                  {item.title}
                </p>
                <p className="text-light text-sm max-w-2/5">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
