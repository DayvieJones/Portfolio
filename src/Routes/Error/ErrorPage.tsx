import { ErrorResponse, Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: ErrorResponse = useRouteError() as ErrorResponse;
  <div>
    <h1></h1>
  </div>;

  return (
    <div className="bg-slate-900 text-white h-screen flex flex-col">
      {/* Hauptinhalt */}
      <div className="text-center flex-grow">
        <h2 className="text-3xl lg:text-4xl font-bold mt-28">Oops!!</h2>

        <h3 className="text-xl lg:text-2xl font-bold mt-8">
          <p>Sorry, an unespected error has occurred.</p>

          <p>
            <i>{error.status}</i>
          </p>
        </h3>
      </div>
      {/* Footer */}
      <footer className="relative bottom-0 py-4 mt-5 w-full bg-slate-950 text-center text-slate-400 text-sm">
        <Link to="/Impressum" className="mr-4">
          Impressum
        </Link>
        <span>© David Johrden 2025</span>
      </footer>
    </div>
  );
}
