import { motion } from "framer-motion";
import { certifications } from "../data/resume";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 py-28"
    >
      <SectionHeading eyebrow="Certifications" title="Verified learning" />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-3.5 mt-12">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="bg-panel border border-line rounded-[14px] p-5 text-sm"
          >
            {cert.name}
            <div className="text-muted text-xs mt-1.5">{cert.org}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
