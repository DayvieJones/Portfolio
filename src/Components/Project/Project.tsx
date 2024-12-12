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
}

export default function Project({
  projectTitle,
  textContent,
  picturePreview,
  altText,
  githubLink,
  projectLink,
}: ProjectInterface) {
  return (
    <div className="bg-slate-600 mt-10 rounded-lg p-2 border border-cyan-500">
      <div className="flex items-center gap-3 mb-3 ml-2">
        <h2 className="text-xl ">{projectTitle}</h2>
        <div className=" w-[53%] h-[1px] bg-cyan-600"></div>
      </div>
      <div>
        <img
          className="bg-center bg-no-repeat bg-cover rounded-lg"
          src={picturePreview}
          alt={altText}
        />
        <div className="flex flex-wrap gap-2 mt-4 mb-2">
          {"<"}
          <TechStack content={"HTML"} />
          <TechStack content={"CSS"} />
          {"/>"}
        </div>
        <p>{textContent}</p>
        <div className="flex gap-4 mr-3 mb-1 items-center justify-end">
          <ProjectButton projectButtonLink={projectLink} />
          <CodeButton codeButtonLink={githubLink} />
        </div>
      </div>
    </div>
  );
}
