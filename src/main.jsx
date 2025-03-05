import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import NotFound from "./pages/NotFound.jsx";
import MorePage from "./pages/MorePage.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";

// Componente para asegurar que la página se desplace al inicio al cambiar de ruta
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Componente principal que define las rutas
function Root() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Asegura que la página se desplace al inicio al cambiar de ruta */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/more" element={<MorePage />} />
        <Route path="*" element={<NotFound />} /> {/* Ruta comodín para páginas no encontradas */}
      </Routes>
    </BrowserRouter>
  );
}

// Renderizado de la aplicación
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);