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
        ></div>

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
