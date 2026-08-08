import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.tsx";
import Demos from "./pages/Demos.tsx";
import HowThingsWorks from "./pages/HowThingsWorks.tsx";
import Articles from "./pages/Articles.tsx";
import Main from "./pages/Main.tsx";
import Error from "./pages/Error.tsx";

// Defining routes.
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Main /> },
      { path: "how-it-works", element: <HowThingsWorks /> },
      { path: "cApps", element: <Demos /> },
      { path: "articles", element: <Articles /> },
      { path: "*", element: <Error /> }, // Catch-all route
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
