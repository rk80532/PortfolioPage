import SectionHeading from "./SectionHeading";
import GlassCard from "./ui/GlassCard";

export default function Contact() {
  const links = [
    {
      title: "Email",
      value: "rahul.skn123@gmail.com",
      href: "mailto:rahul.skn123@gmail.com",
    },
    {
      title: "Phone",
      value: "+91 9889394668",
      href: "tel:+919889394668",
    },
    {
      title: "GitHub",
      value: "github.com/rk80532",
      href: "https://github.com/rk80532",
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/rk80523",
      href: "https://www.linkedin.com/in/rk80523/",
    },
  ];

  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 pb-20 pt-10 md:px-10 md:pb-28 md:pt-20"
    >
      <SectionHeading
        eyebrow="Contact"
        title="Built to look premium, but also practical"
        subtitle="Clear contact actions help recruiters and collaborators connect faster."
      />

      <GlassCard className="p-7">
        <h3 className="text-2xl font-semibold text-white">Get in touch</h3>
        <p className="mt-3 leading-7 text-zinc-400">
          I’m actively building my skills in full stack development and looking
          for opportunities where I can contribute, learn, and grow.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {links.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-[24px] border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/10"
            >
              <h4 className="text-lg font-semibold text-white">{item.title}</h4>
              <p className="mt-2 text-zinc-400">{item.value}</p>
            </a>
          ))}
        </div>
      </GlassCard>
    </section>
  );
}
