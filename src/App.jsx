import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ResumeSection from "./components/ResumeSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#05070d] text-white selection:bg-cyan-300 selection:text-black">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_22%),radial-gradient(circle_at_top_right,rgba(217,70,239,0.14),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.12),transparent_24%),linear-gradient(180deg,#05070d_0%,#0b0f1a_45%,#040507_100%)]" />
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-[-8rem] top-40 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ResumeSection />
      <Contact />
      <Footer />
    </div>
  );
}
