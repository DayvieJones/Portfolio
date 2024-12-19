import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Routes/Error/ErrorPage";
import NoMatch from "./Routes/Error/NoMatch";
import IndexPage from "./Routes/IndexPage/IndexPage";
import Impressum from "./Routes/Impressum/Impressum";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        errorElement: <ErrorPage />,
        children: [
          { path: "", element: <IndexPage /> },
          { path: "Impressum", element: <Impressum /> },
          { path: "*", element: <NoMatch /> },
        ],
      },
    ],
    { basename: "/Portfolio" }
  );

  return <RouterProvider router={router} />;
}

export default App;
