import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <div className="mb-3 inline-flex items-center rounded-full border border-cyan-400/20 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-cyan-300/80 backdrop-blur">
        {eyebrow}
      </div>

      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base leading-7 text-zinc-300 md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
