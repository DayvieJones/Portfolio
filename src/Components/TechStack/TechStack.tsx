interface TechStackInterface {
  content: string;
}

export default function TechStack({ content }: TechStackInterface) {
  const imgPath = content.toLocaleLowerCase();

  return (
    <p className="flex px-3 py-1 items-center rounded-xl bg-cyan-900 transition-colors">
      <img
        className="w-5 h-5 mr-2"
        src={`./${imgPath}-logo.svg`}
        alt={`${content} Logo`}
      />
      {content}
    </p>
  );
}
