import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Folder, Settings, Users, X, Menu } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Función para determinar si el enlace está activo
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className="z-[100] fixed top-0 left-0 right-0 mt-4 m-auto backdrop-blur-md bg-[#3836FE]/20 border border-white/10 rounded-full w-full max-w-[1200px] flex items-center justify-between flex-wrap sm:justify-evenly p-4 sm:p-6 shadow-lg">
        {/* Logo de la empresa */}
        <Link to={"/"} className="flex items-center">
          <img 
            src="logo-icon-white.svg" 
            alt="logo de la empresa webnova solutions" 
            className="w-10 h-10"
          />
        </Link>

        {/* Links del navbar - Desktop */}
        <div className="hidden sm:flex justify-center gap-8 w-3/4">
          <Link 
            to={"/"} 
            className={`text-lg capitalize font-medium transition-colors ${isActive('/') ? 'text-white' : 'text-gray-400 hover:text-white'}`}
          >
            Inicio
          </Link>
          <Link
            to={"/projects"}
            className={`text-lg capitalize font-medium transition-colors ${isActive('/projects') ? 'text-white' : 'text-gray-400 hover:text-white'}`}
          >
            Proyectos
          </Link>
          <Link
            to={"/services"}
            className={`text-lg capitalize font-medium transition-colors ${isActive('/services') ? 'text-white' : 'text-gray-400 hover:text-white'}`}
          >
            Servicios
          </Link>
          <Link 
            to={"/more"} 
            className={`text-lg capitalize font-medium transition-colors ${isActive('/more') ? 'text-white' : 'text-gray-400 hover:text-white'}`}
          >
            Nosotros
          </Link>
        </div>

        {/* Botón de menú móvil */}
        <button 
          className="sm:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>

        {/* Menú móvil */}
        <div
          onClick={() => setIsOpen(false)}
          className={`${
            isOpen ? "flex" : "hidden"
          } z-20 fixed inset-0 w-full h-screen bg-black/70 backdrop-blur-sm justify-center items-center`}
        >
          <div 
            className="w-full max-w-xs flex flex-col px-6 py-8 gap-6 rounded-xl bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <Link
              to={"/"}
              className={`flex items-center gap-4 text-2xl font-medium transition-colors ${isActive('/') ? 'text-white' : 'text-[#3836fe]/80 hover:text-white'}`}
            >
              <Home className="w-6 h-6" />
              Inicio
            </Link>
            <Link
              to={"/projects"}
              className={`flex items-center gap-4 text-2xl font-medium transition-colors ${isActive('/projects') ? 'text-white' : 'text-[#3836fe]/80 hover:text-white'}`}
            >
              <Folder className="w-6 h-6" />
              Proyectos
            </Link>
            <Link
              to={"/services"}
              className={`flex items-center gap-4 text-2xl font-medium transition-colors ${isActive('/services') ? 'text-white' : 'text-[#3836fe]/80 hover:text-white'}`}
            >
              <Settings className="w-6 h-6" />
              Servicios
            </Link>
            <Link
              to={"/more"}
              className={`flex items-center gap-4 text-2xl font-medium transition-colors ${isActive('/more') ? 'text-white' : 'text-[#3836fe]/80 hover:text-white'}`}
            >
              <Users className="w-6 h-6" />
              Nosotros
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;