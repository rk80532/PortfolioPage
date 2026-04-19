import SectionHeading from "./SectionHeading";
import GlassCard from "./ui/GlassCard";

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-20"
    >
      <SectionHeading
        eyebrow="Resume"
        title="A professional profile ready for hiring teams"
        subtitle="A focused section that lets recruiters access your resume quickly."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <GlassCard className="p-7">
          <h3 className="text-2xl font-semibold text-white">Resume Access</h3>
          <p className="mt-3 leading-7 text-zinc-400">
            View or download my resume to explore my technical background,
            project work, and practical skill set in detail.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="/Rahul_kumar_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3 font-semibold text-black transition hover:scale-[1.03]"
            >
              View Resume
            </a>

            <a
              href="/Rahul_kumar_Resume.pdf"
              download
              className="rounded-full border border-white/10 px-6 py-3 text-white transition hover:bg-white/10"
            >
              Download
            </a>
          </div>
        </GlassCard>

        <GlassCard className="p-7">
          <h3 className="text-2xl font-semibold text-white">Highlights</h3>
          <ul className="mt-4 space-y-3 text-zinc-300">
            <li>• MERN Stack Developer</li>
            <li>• Java and DSA focused</li>
            <li>• Full Stack Blog App</li>
            <li>• Chess AI Team Project</li>
            <li>• Responsive UI and modern frontend design</li>
          </ul>
        </GlassCard>
      </div>
    </section>
  );
}
