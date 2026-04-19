import SectionHeading from "./SectionHeading";
import GlassCard from "./ui/GlassCard";

const aboutCards = [
  {
    title: "Full Stack Mindset",
    text: "Frontend polish with backend understanding for practical applications.",
  },
  {
    title: "Project Focused",
    text: "Real GitHub-based projects that show development skills clearly.",
  },
  {
    title: "Growth Oriented",
    text: "Consistent learning through MERN, Java, DSA, and hands-on building.",
  },
  {
    title: "Modern UI Vision",
    text: "Strong interest in premium, responsive, and visually polished interfaces.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-20"
    >
      <SectionHeading
        eyebrow="About Me"
        title="Building practical software with design-first thinking"
        subtitle="A strong portfolio should not only show projects, but also show clarity, ambition, and the ability to build useful digital experiences."
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <GlassCard className="p-7 md:p-8">
          <h3 className="text-xl font-semibold text-white">
            Professional Summary
          </h3>
          <p className="mt-4 text-base leading-8 text-zinc-300">
            I am Rahul Kumar, a B.Tech CSE student focused on MERN stack
            development, frontend engineering, Java, and problem-solving. I
            enjoy building clean, responsive interfaces and turning ideas into
            modern web products that feel polished, fast, and recruiter-ready.
          </p>
        </GlassCard>

        <div className="grid gap-6 sm:grid-cols-2">
          {aboutCards.map((item) => (
            <GlassCard key={item.title} className="p-6">
              <div className="mb-4 h-2 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 leading-7 text-zinc-400">{item.text}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
