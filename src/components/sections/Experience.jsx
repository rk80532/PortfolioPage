import { RevealOnScroll } from "../RevealOnScroll";

const experienceData = [
  {
    title: "Summer Training – Full Stack Development & DSA",
    period: "2025",
    points: [
      "Completed hands-on training in full stack development with focus on frontend, backend fundamentals, and practical implementation.",
      "Strengthened problem-solving ability through DSA practice and project-based learning.",
      "Worked with modern web development concepts including responsive UI, APIs, and GitHub workflow.",
    ],
  },
  {
    title: "IBM SkillsBuild / Edunet – Web Development Learning",
    period: "Certification / Training",
    points: [
      "Built foundational understanding of modern web development concepts and frontend best practices.",
      "Applied learning through real project work and portfolio improvements.",
    ],
  },
  {
    title: "Frontend Contributor – Chess AI Team Project",
    period: "Academic Project",
    points: [
      "Worked as a frontend developer in a 4-member team project.",
      "Helped design interface flow and project presentation for the AI chess game system.",
      "Collaborated on integrating user-side experience with logic-driven backend ideas.",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="px-4 py-24">
      <RevealOnScroll>
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
              Experience
            </p>
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Training, learning, and hands-on exposure
            </h2>
          </div>

          <div className="space-y-6">
            {experienceData.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-center">
                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  <span className="rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-4 py-1 text-sm text-fuchsia-200">
                    {item.period}
                  </span>
                </div>

                <ul className="space-y-3 text-gray-300">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-7">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
