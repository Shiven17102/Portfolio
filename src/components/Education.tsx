import { motion } from "framer-motion";
import { education } from "../data/resume";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 py-28">
      <SectionHeading eyebrow="Education" title="Academic background" />

      <div className="mt-12 border-l border-line pl-8 flex flex-col gap-9">
        {education.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative"
          >
            <span className="absolute -left-[38px] top-1 w-2.5 h-2.5 rounded-full bg-teal shadow-[0_0_0_4px_rgba(45,212,191,0.15)]" />
            <div className="text-teal text-[13px] font-semibold">{item.date}</div>
            <div className="text-lg font-semibold mt-1.5">{item.title}</div>
            <div className="text-muted text-sm mt-0.5">{item.sub}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
