import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Java",
    "C",
    "DSA",
    "Git",
    "GitHub",
    "REST APIs",
  ];

  return (
    <section id="about" className="px-4 py-24">
      <RevealOnScroll>
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
              About Me
            </p>
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Developer with strong frontend, MERN and Java foundations.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <p className="leading-7 text-gray-300">
                I’m Rahul Kumar, a B.Tech Computer Science student at BBD
                University. I enjoy building responsive websites, full stack
                applications, and creative portfolio experiences with a modern
                futuristic look.
              </p>

              <p className="mt-4 leading-7 text-gray-300">
                My work combines frontend design, backend logic, Java problem
                solving, and real project implementation. I’ve built projects
                ranging from blog platforms and e-commerce websites to AI-based
                and game-oriented systems.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-sm text-gray-400">Education</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    B.Tech CSE
                  </h3>
                  <p className="mt-2 text-sm text-gray-300">
                    Babu Banarasi Das University, 2022–2026
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-sm text-gray-400">Current Goal</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    Placement Ready
                  </h3>
                  <p className="mt-2 text-sm text-gray-300">
                    Focused on internships, frontend/full stack roles, and
                    building standout projects.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="mb-5 text-2xl font-semibold text-white">
                Tech Stack
              </h3>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
