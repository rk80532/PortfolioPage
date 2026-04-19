import SectionHeading from "./SectionHeading";
import GlassCard from "./ui/GlassCard";
import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-20"
    >
      <SectionHeading
        eyebrow="Capabilities"
        title="Core technologies presented with premium visual structure"
        subtitle="Grouped skill blocks help recruiters scan your strengths faster."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {Object.entries(skills).map(([category, items]) => (
          <GlassCard key={category} className="p-6">
            <div className="mb-4 h-2 w-14 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
            <h3 className="mb-5 text-xl font-semibold text-white">
              {category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-400/15 bg-gradient-to-r from-white/10 to-white/5 px-4 py-2 text-sm text-zinc-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
