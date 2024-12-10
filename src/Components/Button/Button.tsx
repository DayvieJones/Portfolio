export default function Button() {
  return (
    <div className="">
      <a
        href="#about"
        className="mt-10 lg:mt-12 text-sm lg:text-base font-medium bg-blue-600 hover:bg-blue-500 rounded-lg px-5 py-3 flex items-center justify-center"
      >
        Über mich
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          className="w-5 h-5 ml-2 -mr-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
          />
        </svg>
      </a>
    </div>
  );
}
