import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } // 30% sobald der Sektion sichtbar ist
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      className="flex ml-2 gap-2 sm:gap-4 text-sm sm:text-lg md:gap-6 md:text-lg lg:text-xl lg:gap-8 text-slate-300 z-30"
      style={{ overflow: "hidden", whiteSpace: "nowrap" }}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div>
        <a
          href="#start"
          className={`border-b-1 transition-colors ${
            activeSection === "start"
              ? "text-cyan-400 font-semibold hover:text-cyan-300"
              : "hover:text-slate-100"
          }`}
        >
          <span>Start</span>
        </a>
      </div>
      <div>
        <a
          href="#about"
          className={`border-b-1 transition-colors ${
            activeSection === "about"
              ? "text-cyan-400 font-semibold hover:text-cyan-300"
              : "hover:text-slate-100"
          }`}
        >
          <span>About</span>
        </a>
      </div>
      <div>
        <a
          href="#projects"
          className={`border-b-1 transition-colors ${
            activeSection === "projects"
              ? "text-cyan-400 font-semibold hover:text-cyan-300"
              : "hover:text-slate-100"
          }`}
        >
          <span>Projects</span>
        </a>
      </div>
      <div>
        <a
          href="#contact"
          className={`border-b-1 transition-colors ${
            activeSection === "contact"
              ? "text-cyan-400 font-semibold hover:text-cyan-300"
              : "hover:text-slate-100"
          }`}
        >
          <span>Contact</span>
        </a>
      </div>
    </motion.div>
  );
}
