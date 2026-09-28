import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { projects } from "../data/resume";
import SectionHeading from "./SectionHeading";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), {
    stiffness: 200,
    damping: 20,
  });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={{ rotateX, rotateY, perspective: 900 }}
      className={`bg-gradient-to-br from-panel-2 to-panel border border-line rounded-[18px] p-7 hover:border-teal/40 transition-colors ${
        project.feature ? "sm:col-span-2" : ""
      }`}
    >
      <h3 className="text-xl font-semibold mb-2.5">{project.name}</h3>
      <p className="text-muted text-sm leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1.5 rounded-full border border-line text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 py-28">
      <SectionHeading eyebrow="Projects" title="Things I've built" />
      <div className="grid sm:grid-cols-2 gap-5 mt-12">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
