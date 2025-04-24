import { motion } from "motion/react";
import CodeButton from "../CodeButton/CodeButton";
import ProjectButton from "../ProjectButton/ProjectButton";
import TechStack from "../TechStack/TechStack";

interface ProjectInterface {
  projectTitle: string;
  textContent: string;
  picturePreview: string;
  altText: string;
  githubLink: string;
  projectLink: string;
  techStack?: { [key: string]: string };
  disabled?: boolean;
}

export default function Project({
  projectTitle,
  textContent,
  picturePreview,
  altText,
  githubLink,
  projectLink,
  techStack = {},
  disabled,
}: ProjectInterface) {
  function renderTechStack(techStack: { [key: string]: string }) {
    return Object.keys(techStack).map((key) => (
      <TechStack key={key} content={techStack[key]} />
    ));
  }

  return (
    <motion.div
      className={`flex flex-col bg-slate-600 mt-8 px-4 py-2 border rounded-lg border-cyan-500 transition-all lg:h-[48rem] w-96 lg:w-[450px] lg:hover:scale-105  ${
        disabled ? "blur-sm opacity-90 pointer-events-none select-none" : ""
      }`}
      initial={{ opacity: 0.08 - 500 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 0.8, once: true, ease: "easeOut" },
      }}
    >
      <div className="flex items-center gap-3 mb-3 ml-2">
        <h2 className="text-2xl lg:my-3 text-nowrap ">{projectTitle}</h2>
        <div className=" w-full h-[1px] bg-cyan-600"></div>
      </div>
      <div
        className="w-full h-52 bg-top  bg-cover rounded-lg lg:mb-5 lg:hover:scale-105 lg:transition-transform lg:duration-[500ms] border-2 border-cyan-300"
        style={{ backgroundImage: `url(${picturePreview})` }}
        role="img"
        aria-label={altText}
      ></div>
      <div className="flex flex-wrap gap-2 mt-4 mb-2 lg:mb-5">
        {"<"}
        {renderTechStack(techStack)}
        {"/>"}
      </div>
      <p className="lg:text-lg lg:mb-5">{textContent}</p>
      <div className="flex gap-4 mr-3 mb-1 items-center justify-end">
        <ProjectButton projectButtonLink={projectLink} disabled={disabled} />
        <CodeButton codeButtonLink={githubLink} disabled={disabled} />
      </div>
    </motion.div>
  );
}
