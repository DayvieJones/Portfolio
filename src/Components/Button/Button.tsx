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
// className="mt-10 lg:mt-12 text-sm lg:text-base font-medium bg-blue-600 hover:bg-blue-500 rounded-lg px-5 py-3 flex items-center justify-center"
