import { Link } from "react-router-dom";

export default function Impressum() {
  return (
    <div className="bg-slate-900 text-white h-screen flex flex-col">
      {/* Zurück-Link */}
      <Link
        to={{ pathname: "../", hash: "#start" }}
        preventScrollReset={true}
        viewTransition
        className="flex gap-2 m-4"
      >
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
      </Link>

      {/* Hauptinhalt */}
      <div className="text-center flex-grow">
        <h2 className="text-3xl lg:text-4xl font-bold mt-28">Impressum</h2>

        <h3 className="text-xl lg:text-2xl font-bold mt-8">
          Angaben gemäß § 5 TMG
        </h3>
        <p>David Johrden</p>
        <p>Frankfurter Str. 104</p>
        <p>53480 Troisdorf</p>

        <h3 className="text-xl lg:text-2xl font-bold mt-8">Kontakt</h3>
        <p>Telefon: +49 170 6811630</p>
        <p>E-Mail: david.johrden@gmail.com</p>
      </div>
      {/* Footer */}
      <div className="bg-slate-950 px-6 text-center py-4 text-slate-400 text-sm">
        <Link to="./Impressum" className="mr-4">
          Impressum
        </Link>
        <span>© David Johrden 2025</span>
      </div>
    </div>
  );
}
