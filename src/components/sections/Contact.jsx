import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Contact form submitted. Connect EmailJS or Formspree to make it live.",
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="px-4 py-24">
      <RevealOnScroll>
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-fuchsia-400">
              Contact
            </p>
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Let’s build something great together
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-gray-300">
              I’m open to internship opportunities, frontend roles, MERN stack
              work, collaborations, and project discussions.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-gray-300">
                <span className="font-semibold text-white">Email:</span>{" "}
                rahul.skn123@gmail.com
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-gray-300">
                <span className="font-semibold text-white">Location:</span>{" "}
                Lucknow, Uttar Pradesh, India
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-gray-300">
                <span className="font-semibold text-white">GitHub:</span>{" "}
                github.com/rk80532
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="mb-4">
              <label className="mb-2 block text-sm text-gray-300">
                Your Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-cyan-400"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-sm text-gray-300">
                Your Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-cyan-400"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-6">
              <label className="mb-2 block text-sm text-gray-300">
                Message
              </label>
              <textarea
                rows="6"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-cyan-400"
                placeholder="Tell me about your project or opportunity"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-[0_0_30px_rgba(34,211,238,0.25)] transition hover:-translate-y-1"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
