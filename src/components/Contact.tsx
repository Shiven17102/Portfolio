import { motion } from "framer-motion";
import { profile } from "../data/resume";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-panel-2 to-panel border border-line rounded-[22px] p-10 sm:p-14 text-center"
      >
        <div className="text-teal text-[13px] font-semibold mb-3">Contact</div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold">
          Let's build something meaningful.
        </h2>
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <a
            href={`mailto:${profile.email}`}
            className="px-6 py-3.5 rounded-[10px] text-sm font-semibold bg-gradient-to-br from-teal to-blue text-[#06110F] hover:-translate-y-0.5 transition-transform"
          >
            Email Me
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-[10px] text-sm font-semibold border border-line hover:-translate-y-0.5 transition-transform"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-[10px] text-sm font-semibold border border-line hover:-translate-y-0.5 transition-transform"
          >
            LinkedIn
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="px-6 py-3.5 rounded-[10px] text-sm font-semibold border border-line hover:-translate-y-0.5 transition-transform"
          >
            {profile.phone}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
