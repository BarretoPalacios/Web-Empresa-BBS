import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Razón Social y Descripción */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="logo-icon-white.svg" 
                alt="Web Nova Solutions" 
                className="h-10 w-10"
              />
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3836FE] to-blue-400">
                WebNova Solutions
              </h3>
            </div>
            <p className="text-gray-400">
              Innovación y tecnología para transformar tu negocio. Soluciones digitales a medida para impulsar tu crecimiento.
            </p>
            <p className="text-gray-400 text-sm">
              RUC: 20613267493
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-[#3836FE] transition-colors">Inicio</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-[#3836FE] transition-colors">Servicios</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-[#3836FE] transition-colors">Proyectos</Link></li>
              <li><Link to="/more" className="text-gray-400 hover:text-[#3836FE] transition-colors">Nosotros</Link></li>
            </ul>
          </div>

          {/* Servicios */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Servicios</h4>
            <ul className="space-y-2">
              <li><Link to="/services#automatizacion" className="text-gray-400 hover:text-[#3836FE] transition-colors">Automatización</Link></li>
              <li><Link to="/services#sistemas" className="text-gray-400 hover:text-[#3836FE] transition-colors">Sistemas a Medida</Link></li>
              <li><Link to="/services#mantenimiento" className="text-gray-400 hover:text-[#3836FE] transition-colors">Mantenimiento</Link></li>
              <li><Link to="/services#desarrollo" className="text-gray-400 hover:text-[#3836FE] transition-colors">Desarrollo Web</Link></li>
              <li><Link to="/services#consultoria" className="text-gray-400 hover:text-[#3836FE] transition-colors">Consultoría</Link></li>
            </ul>
          </div>

          {/* Contacto y Redes Sociales */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contacto</h4>
            <div className="space-y-3">
              <a href="mailto:david11barreto11@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-[#3836FE] transition-colors">
                <Mail className="h-5 w-5" />
                <span>david11barreto11@gmail.com</span>
              </a>
              <a href="tel:+51933238447" className="flex items-center gap-3 text-gray-400 hover:text-[#3836FE] transition-colors">
                <Phone className="h-5 w-5" />
                <span>+51 933 238 447</span>
              </a>
            </div>

            <div className="pt-2">
              <h5 className="text-gray-300 mb-3">Síguenos</h5>
              <div className="flex gap-4">
            
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-[#3836FE] transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-[#3836FE] transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://wa.me/51933238447" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-[#25D366] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                  </svg>
                </a>
                <a href='https://www.tiktok.com/@webn0va?_t=ZM-8y5OhbGhrZY&_r=1' target="_blank" rel="noopener noreferrer"  className="bg-gray-800 p-2 rounded-full hover:bg-[#3836FE] transition-colors">
                  <svg className="w-6 h-6 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="white">
  <path d="M41.6 16.2c-2.8-.2-5.3-1.3-7.4-3.1-1.9-1.8-3.1-4.1-3.5-6.7-.1-.6-.2-1.3-.2-2H24v31.7c0 1.9-1.6 3.5-3.5 3.5-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5c.5 0 1 .1 1.5.3v-7c-.5-.1-1-.1-1.5-.1-5.7 0-10.3 4.6-10.3 10.3s4.6 10.3 10.3 10.3 10.3-4.6 10.3-10.3V18.2c2.7 1.6 5.9 2.5 9.3 2.5v-4.5z"/>
</svg>

                </a>
                
              </div>
            </div>
          </div>
        </div>

        {/* Derechos de autor */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Web Nova Solutions. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}