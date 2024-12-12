export default function Impressum() {
  return (
    <div className="bg-slate-900 text-white h-screen flex flex-col">
      {/* Zurück-Link */}
      <a href="." className="flex gap-2 m-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          ></path>
        </svg>
        Zurück
      </a>

      {/* Hauptinhalt */}

      {/* Footer */}
      <div className="bg-slate-800 px-6 text-center py-4 text-slate-400 text-sm">
        <a href="./impressum.html" className="mr-4">
          Impressum
        </a>
        <span>© David Johrden 2024</span>
      </div>
    </div>
  );
}
