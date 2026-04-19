export default function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-[28px] border border-white/10 bg-white/[0.05] backdrop-blur-xl transition duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] ${className}`}
    >
      {children}
    </div>
  );
}
