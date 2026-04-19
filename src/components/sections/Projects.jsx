import { RevealOnScroll } from "../RevealOnScroll";

const projects = [
  {
    title: "Blog App (MERN)",
    description:
      "A full stack blog platform with authentication, post creation, API integration, and MongoDB-based data handling. Built to strengthen backend, frontend, and authentication workflow understanding.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/rk80532/Blog-App",
  },
  {
    title: "Chess AI Game",
    description:
      "A team project where I contributed on the frontend side. The project combines a Java backend with AI-based chess logic using minimax and alpha-beta pruning to create a smart gameplay experience.",
    tech: ["HTML", "CSS", "JavaScript", "Java", "AI Logic"],
    github: "https://github.com/rk80532/Chess-Ai-game",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern personal developer portfolio created to showcase projects, skills, and experience with a premium futuristic design approach and responsive user interface.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/rk80532/PortfolioPage",
  },
  {
    title: "E-Commerce Website",
    description:
      "A responsive e-commerce frontend project with product sections, user-friendly layout, and clean UI built to improve frontend implementation and design consistency.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/rk80532/Portfolio",
  },
  {
    title: "DoctGPT / MediBot Concept",
    description:
      "An AI doctor assistant project idea focused on health guidance, symptom checking, user interaction, and scalable feature planning for future AI integration.",
    tech: ["React", "Tailwind CSS", "AI Integration", "UI/UX"],
    github: "#",
  },
  {
    title: "Java Car Racing Game",
    description:
      "A Java GUI-based desktop game with structured car movement, obstacle logic, traffic handling, and difficulty progression to improve Java OOP and GUI fundamentals.",
    tech: ["Java", "OOP", "GUI"],
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="px-4 py-24">
      <RevealOnScroll>
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-fuchsia-400">
              Projects
            </p>
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Selected work and practical builds
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
              >
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-gray-300">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-cyan-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-white"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
