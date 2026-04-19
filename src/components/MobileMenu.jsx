const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/95 backdrop-blur-2xl transition-all duration-300 md:hidden ${
        menuOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute right-6 top-6 text-4xl text-white"
        aria-label="Close Menu"
      >
        ×
      </button>

      <div className="flex flex-col items-center gap-6">
        {navItems.map((item, index) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-white transition duration-300 hover:text-cyan-400 ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};
