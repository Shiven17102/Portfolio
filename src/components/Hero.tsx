import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Scene from "./Scene";
import { profile } from "../data/resume";

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), {
    stiffness: 150,
    damping: 18,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <section
      id="home"
      className="relative min-h-svh flex items-center px-6 sm:px-10 lg:px-20 pt-28 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 opacity-80">
        <Scene />
      </div>

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-[1.3fr_0.8fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-teal text-[13.5px] font-semibold tracking-wide mb-4">
            COMPUTER ENGINEERING GRADUATE · {profile.location.toUpperCase()}
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
            {profile.name.split(" ").slice(0, 1).join(" ")}
            <br />
            {profile.name.split(" ").slice(1).join(" ")}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-muted max-w-[46ch] leading-relaxed">
            {profile.summary}
          </p>
          <div className="flex flex-wrap gap-3.5 mt-9">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-[10px] text-sm font-semibold bg-gradient-to-br from-teal to-blue text-[#06110F] transition-transform hover:-translate-y-0.5"
            >
              View My Work
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3.5 rounded-[10px] text-sm font-semibold border border-line transition-transform hover:-translate-y-0.5"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          style={{ perspective: 900 }}
        >
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY }}
            className="w-full max-w-[340px] mx-auto aspect-square rounded-[24px] border border-line bg-gradient-to-br from-panel-2 to-panel shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] overflow-hidden"
          >
            <img
              src="/photo.jpg"
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
