import { useEffect, useState } from "react";

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
      { threshold: 0.35 } // 35% sobald der Sektion sichtbar ist
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex ml-2 gap-4 text-slate-300 z-30">
      <div>
        <a
          href="#start"
          className={`border-b-1 transition-colors ${
            activeSection === "start"
              ? "text-cyan-400 font-semibold"
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
              ? "text-cyan-400 font-semibold"
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
              ? "text-cyan-400 font-semibold"
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
              ? "text-cyan-400 font-semibold"
              : "hover:text-slate-100"
          }`}
        >
          <span>Contact</span>
        </a>
      </div>
    </div>
  );
}
