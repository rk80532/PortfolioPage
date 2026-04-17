import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-4 pt-24"
    >
      <RevealOnScroll>
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
              MERN Developer • Frontend Developer • Java & DSA
            </p>

            <h1 className="mb-5 text-4xl font-black leading-tight text-white md:text-6xl">
              Building <span className="text-cyan-400">futuristic</span>,
              <br />
              scalable and <span className="text-fuchsia-400">
                real-world
              </span>{" "}
              web experiences.
            </h1>

            <p className="mb-8 max-w-2xl text-base leading-7 text-gray-300 md:text-lg">
              Hi, I’m Rahul Kumar — a B.Tech CSE student focused on MERN stack,
              frontend engineering, Java, and problem solving. I build clean,
              responsive interfaces and practical projects like AI-driven apps,
              portfolio websites, blog platforms, and algorithm-based systems.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-[0_0_30px_rgba(34,211,238,0.25)] transition hover:-translate-y-1"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-400/40"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Current Focus</p>
                  <h3 className="text-xl font-bold text-white">
                    Full Stack + UI + AI
                  </h3>
                </div>

                <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                  Open to Opportunities
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-sm text-gray-400">Experience</p>
                  <h4 className="mt-2 text-lg font-semibold text-white">
                    MERN & Frontend Training
                  </h4>
                  <p className="mt-2 text-sm text-gray-300">
                    Hands-on learning through projects, GitHub workflow, APIs,
                    and responsive UI.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-sm text-gray-400">Strong Areas</p>
                  <h4 className="mt-2 text-lg font-semibold text-white">
                    React, Tailwind, Java, DSA
                  </h4>
                  <p className="mt-2 text-sm text-gray-300">
                    Focused on modern web apps with clean code and
                    performance-first design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
