export type TechItem = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
};

export default function TechStackCard({ items }: { items: TechItem[] }) {
  return (
    <section className="space-y-3">
      <h2 className="ml-3  text-2xl font-semibold text-light">Tech Stack</h2>
      <div className="card w-[310px]">
        {/* Flex-wrap grid of tech items */}
        <div className="flex flex-row flex-wrap gap-y-5 gap-x-2 items-start justify-center ">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center gap-2 bg-secondary rounded-4xl p-3 min-w-[120px] max-w-[40%] h-[76px] "
            >
              <div className=" sm:w-[42px] sm: h-[50px] flex items-center justify-center">
                {item.icon}
              </div>
              <div className="hidden sm:flex flex-col items-start justify-center max-w-2/5">
                <p className="text-light font-bold text-xl  ">{item.title}</p>
                <p className="text-light text-sm ">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
