interface TechStackInterface {
  content: string;
}

export default function TechStack({ content }: TechStackInterface) {
  return <p className="px-3 py-1 rounded-xl bg-cyan-700">{content}</p>;
}
