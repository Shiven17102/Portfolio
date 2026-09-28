import { useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 sm:px-10 lg:px-20 py-4.5 backdrop-blur-md bg-bg/55 border-b border-line">
      <div className="font-display font-semibold text-[15px] tracking-wide">
        SHIVEN<span className="text-teal">.</span>MAURYA
      </div>

      <div className="hidden md:flex gap-7 text-[13.5px] text-muted">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} className="hover:text-ink transition-colors">
            {l.label}
          </a>
        ))}
      </div>

      <button
        aria-label="Menu"
        className="md:hidden flex flex-col gap-1"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="w-5 h-0.5 bg-ink" />
        <span className="w-5 h-0.5 bg-ink" />
        <span className="w-5 h-0.5 bg-ink" />
      </button>

      {open && (
        <div className="md:hidden absolute top-14 right-4 left-4 bg-panel border border-line rounded-2xl p-4.5 flex flex-col gap-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-muted hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
