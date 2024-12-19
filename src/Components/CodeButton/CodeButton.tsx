interface CodeButtonInterface {
  codeButtonLink: string;
}

export default function CodeButton({ codeButtonLink }: CodeButtonInterface) {
  return (
    <button className="mt-5 px-2 py-1 border-emerald-500 rounded-xl border-2  transition-colors hover:bg-emerald-500 lg:text-lg">
      <a className="flex  items-center " target="_blank" href={codeButtonLink}>
        <img
          className="w-4 h-4 mr-2"
          src={`./github-logo.svg`}
          alt={`github icon`}
        />
        Zum Code
      </a>
    </button>
  );
}
