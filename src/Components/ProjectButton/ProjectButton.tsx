interface ProjectButtonInterface {
  className?: string;
  projectButtonLink: string;
  disabled?: boolean;
}

export default function ProjectButton({
  projectButtonLink,
  disabled,
}: ProjectButtonInterface) {
  return (
    <button
      className="mt-5 px-3 py-2 bg-cyan-500  rounded-xl transition-colors hover:bg-cyan-300 hover:text-cyan-950 lg:text-lg"
      disabled={disabled}
    >
      <a
        className="flex  items-center"
        target="_blank"
        href={projectButtonLink}
      >
        <img className="w-4 h-5 mr-2" src={`./link.svg`} alt={`link icon`} />
        Zum Projekt
      </a>
    </button>
  );
}
