<<<<<<< HEAD
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
=======
import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a
          href="#home"
          className="text-lg font-bold tracking-wide text-white md:text-xl"
        >
          Rahul<span className="text-cyan-400">.dev</span>
        </a>

        <div
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl text-white md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </div>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-gray-300 transition duration-300 hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
>>>>>>> 48da0e34f03a5bea6819af3b14b5a3d0cd528282
