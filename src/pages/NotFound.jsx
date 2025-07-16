import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Mail } from 'lucide-react';

function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-2xl mx-auto">
        {/* Animación o ilustración */}
        <div className="relative mb-8">
          <div className="text-[#3836FE] text-9xl font-bold">404</div>
          <div className="absolute -inset-4 border-4 border-[#3836FE]/30 rounded-full animate-pulse"></div>
        </div>

        {/* Mensaje principal */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          ¡Ups! Página no encontrada
        </h1>
        
        <p className="text-xl text-gray-400 mb-8">
          La página que estás buscando podría haber sido eliminada, haber cambiado de nombre o no está disponible temporalmente.
        </p>

        {/* Acciones */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/" 
            className="flex items-center gap-2 px-6 py-3 bg-[#3836FE] text-white rounded-lg hover:bg-[#3836FE]/90 transition-all hover:-translate-y-1"
          >
            <Home className="h-5 w-5" />
            Volver al Inicio
          </Link>
          
          <Link 
            to="mailto:david11barreto11@gmail.com" 
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all hover:-translate-y-1"
          >
            <Mail className="h-5 w-5" />
            Contactar Soporte
          </Link>
        </div>

        
      </div>
    </div>
  );
}

export default NotFound;