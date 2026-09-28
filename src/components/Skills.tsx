import { motion } from "framer-motion";
import { skills } from "../data/resume";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 py-28">
      <SectionHeading eyebrow="Skills" title="Toolkit" />
      <div className="mt-12 flex flex-col gap-7">
        {skills.map((group, gi) => (
          <div key={group.group}>
            <h3 className="text-[13px] text-muted font-semibold mb-3.5 uppercase tracking-wide">
              {group.group}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: gi * 0.05 + i * 0.02 }}
                  whileHover={{ y: -3 }}
                  className="px-4 py-2.5 rounded-[10px] bg-panel border border-line text-[13.5px] hover:border-teal transition-colors"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
