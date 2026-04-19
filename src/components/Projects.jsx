import SectionHeading from "./SectionHeading";
import GlassCard from "./ui/GlassCard";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-20"
    >
      <SectionHeading
        eyebrow="Featured Work"
        title="Projects presented like polished digital products"
        subtitle="Clean cards, better hierarchy, and stronger presentation make your work feel more premium."
      />

      <div className="grid gap-6 xl:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`transition transform hover:-translate-y-2 hover:scale-[1.01] ${
              project.featured ? "xl:col-span-2" : ""
            }`}
          >
            <GlassCard className="h-full p-6 md:p-7">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <div className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cyan-300">
                    {project.featured ? "Featured" : "Project"}
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-300">
                  {project.live ? "Live" : "Coming Soon"}
                </div>
              </div>

              <div className="mb-6 rounded-[26px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6">
                <p className="leading-7 text-zinc-300">{project.desc}</p>
              </div>

              <div className="mb-6 flex flex-wrap gap-3">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-white/10 px-4 py-2 text-white transition hover:bg-white/20"
                >
                  GitHub
                </a>

                <button
                  type="button"
                  className="cursor-not-allowed rounded-lg bg-cyan-400/10 px-4 py-2 text-cyan-200"
                >
                  Live Demo Later
                </button>
              </div>
            </GlassCard>
          </div>
        ))}
      </div>
    </section>
  );
}
