import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import NotFound from "./pages/NotFound.jsx";
import MorePage from "./pages/MorePage.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/services",
    element: <ServicePage />,
  },
  {
    path: "/projects",
    element: <ProjectPage />,
  },
  {
    path: "/more",
    element: <MorePage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);
