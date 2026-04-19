import { Download, Layers3 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/20 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-400/20 bg-white/5 text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
            <Layers3 className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm text-zinc-400">Portfolio</p>
            <h1 className="text-lg font-semibold tracking-wide text-white">
              Rahul Kumar
            </h1>
          </div>
        </div>

        <div className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
          <a href="#about" className="transition hover:text-cyan-300">
            About
          </a>
          <a href="#skills" className="transition hover:text-cyan-300">
            Skills
          </a>
          <a href="#projects" className="transition hover:text-cyan-300">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-cyan-300">
            Contact
          </a>
        </div>

        <a
          href="/Rahul_kumar_Resume.pdf"
          download
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:scale-[1.03] hover:bg-cyan-400/15"
        >
          <Download className="h-4 w-4" />
          Resume
        </a>
      </nav>
    </header>
  );
}
