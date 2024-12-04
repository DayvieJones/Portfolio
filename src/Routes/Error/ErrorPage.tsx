import { ErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: ErrorResponse = useRouteError() as ErrorResponse;
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unespected error has occurred.</p>
      <p>
        <i>{error.status}</i>
      </p>
    </div>
  );
}
