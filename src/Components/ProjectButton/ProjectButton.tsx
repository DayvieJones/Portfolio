interface ProjectButtonInterface {
  className?: string;
  projectButtonLink: string;
}

export default function ProjectButton({
  projectButtonLink,
}: ProjectButtonInterface) {
  return (
    <button className="mt-5 bg-cyan-500 px-2 py-1 rounded-xl transition-colors hover:bg-cyan-300 hover:text-cyan-950">
      <a target="_blank" href={projectButtonLink}>
        Project
      </a>
    </button>
  );
}
