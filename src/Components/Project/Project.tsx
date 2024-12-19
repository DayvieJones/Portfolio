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
}

export default function Project({
  projectTitle,
  textContent,
  picturePreview,
  altText,
  githubLink,
  projectLink,
  techStack = {},
}: ProjectInterface) {
  function renderTechStack(techStack: { [key: string]: string }) {
    return Object.keys(techStack).map((key) => (
      <TechStack key={key} content={techStack[key]} />
    ));
  }

  return (
    <div className="flex flex-col bg-slate-600 mt-10 p-3 border rounded-lg border-cyan-500 lg:w-[450px] w-96 lg:hover:scale-105 transition-all">
      <div className="flex items-center gap-3 mb-3 ml-2">
        <h2 className="text-2xl text-nowrap ">{projectTitle}</h2>
        <div className=" w-full h-[1px] bg-cyan-600"></div>
      </div>
      <div
        className="w-full h-52 bg-top bg-center bg-cover rounded-lg lg:hover:scale-110 lg:transition-transform lg:duration-[500ms]"
        style={{ backgroundImage: `url(${picturePreview})` }}
        role="img"
        aria-label={altText}
      ></div>
      <div className="flex flex-wrap gap-2 mt-4 mb-2">
        {"<"}
        {renderTechStack(techStack)}
        {"/>"}
      </div>
      <p className="lg:text-lg">{textContent}</p>
      <div className="flex gap-4 mr-3 mb-1 items-center justify-end">
        <ProjectButton projectButtonLink={projectLink} />
        <CodeButton codeButtonLink={githubLink} />
      </div>
    </div>
  );
}
