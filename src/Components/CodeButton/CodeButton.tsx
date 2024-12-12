interface CodeButtonInterface {
  codeButtonLink: string;
}

export default function CodeButton({ codeButtonLink }: CodeButtonInterface) {
  return (
    <button className="mt-5 border-emerald-500 rounded-xl border-2 px-2 py-1 transition-colors hover:bg-emerald-500">
      <a target="_blank" href={codeButtonLink}>
        Code
      </a>
    </button>
  );
}
