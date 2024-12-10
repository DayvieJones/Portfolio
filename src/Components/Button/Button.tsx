interface ButtonInterface {
  className?: string;
  buttonContent: string;
  handleOnClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

export default function Button({
  buttonContent,
  handleOnClick,
}: ButtonInterface) {
  return <button className=" m-3 text-m" onClick={handleOnClick}>{buttonContent}</button>;
}
