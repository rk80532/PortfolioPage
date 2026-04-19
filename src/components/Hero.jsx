import { ArrowRight, Download, Sparkles } from "lucide-react";
import GlassCard from "./ui/GlassCard";
import { stats } from "../data/portfolioData";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-16 md:px-10 md:pb-24 md:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm text-cyan-300 backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            MERN Developer • Frontend Developer • Java & DSA
          </div>

          <h1 className="max-w-5xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl xl:text-7xl">
            Crafting
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
              {" "}
              high-impact digital products{" "}
            </span>
            with clean code, bold UI, and modern web experiences.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">
            I’m <span className="font-semibold text-white">Rahul Kumar</span>, a
            B.Tech CSE student focused on MERN stack development, modern
            frontend engineering, responsive UI systems, and practical full
            stack projects.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3 font-semibold text-black transition hover:scale-[1.03]"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="/Rahul_kumar_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition hover:border-cyan-400/30 hover:bg-white/10"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <GlassCard key={item.label} className="p-5">
                <p className="text-2xl font-semibold text-white">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-zinc-400">{item.label}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-10 rounded-[50px] bg-gradient-to-br from-cyan-500/25 via-fuchsia-500/15 to-violet-500/20 blur-3xl" />

          <GlassCard className="relative overflow-hidden border-white/10 p-5 md:p-6">
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/10 to-transparent" />

            <div className="relative rounded-[30px] border border-white/10 bg-black/30 p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cyan-300">
                  Profile Card
                </span>
                <span className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.9)]" />
              </div>

              <div className="relative mx-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black p-3 shadow-[0_25px_80px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.15),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.15),transparent_28%)]" />
                <img
                  src="/rahul-photo.jpg"
                  alt="Rahul Kumar"
                  className="relative h-full w-full rounded-[24px] object-cover"
                />
                <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_28%,transparent_70%,rgba(255,255,255,0.08))]" />
              </div>

              <div className="mt-5 text-center">
                <h2 className="text-2xl font-semibold text-white">
                  Rahul Kumar
                </h2>
                <p className="mt-2 text-sm tracking-[0.22em] text-cyan-300/90">
                  MERN • FRONTEND • JAVA • DSA
                </p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-zinc-400">Location</p>
                  <p className="mt-1 font-medium text-white">Lucknow, India</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-zinc-400">Focus</p>
                  <p className="mt-1 font-medium text-white">Full Stack UI</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
