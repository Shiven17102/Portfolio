import { motion } from "framer-motion";
import { about, profile } from "../data/resume";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 py-28">
      <SectionHeading
        eyebrow="About"
        title="Grounded in fundamentals, curious about where they lead"
      />
      <p className="mt-3.5 text-muted max-w-[60ch] leading-relaxed text-[15.5px]">
        B.Tech Computer Engineering graduate from Shah & Anchor Kutchhi Engineering
        College, {profile.location} — with a working range across data, cloud, and
        full-stack development, looking for an entry-level role to apply that range
        and keep growing.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mt-12">
        {about.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-panel border border-line rounded-2xl p-6"
          >
            <h3 className="text-base font-semibold mb-2">{item.title}</h3>
            <p className="text-muted text-sm leading-relaxed">{item.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
