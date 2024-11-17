import { useState, useEffect, useRef } from 'react';

const Carrusel = () => {
  const projects = [
    {
      "title": "Sistema de Convenios",
      "description": "Una plataforma para gestionar y facilitar los convenios entre diferentes entidades, optimizando el control de inventario y reduciendo el margen de error en conteos y registros.",
      "tags": ["Sitio Web", "47 Días"],
      "important": ["Agradable", "Optimizaciones de Tiempo", "Diseño Agradable"],
      "image": "/imgs/projecto1.png"
    },
    {
      "title": "Sistema de Gestión de Inventario",
      "description": "Un sistema robusto y adaptable para la administración eficiente de inventarios. Incluye herramientas para el seguimiento de productos, control de existencias y generación de reportes en tiempo real.",
      "tags": ["Design", "30 Días"],
      "important": ["Agradable", "Diseño Agradable", "Optimización de Recursos"],
      "image": "/imgs/projecto2.png"
    },
    {
      "title": "Sistema Control de Agua",
      "description": "Plataforma diseñada para el monitoreo y control del consumo de agua en infraestructuras urbanas. Ofrece alertas y reportes de uso, promoviendo el ahorro y la sostenibilidad.",
      "tags": ["Development", "60 Días"],
      "important": ["Optimizaciones de Tiempo", "Diseño Agradable", "Control de Recursos Naturales"],
      "image": "/imgs/projecto3.jpg"
    }
  ]
  

  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current && touchEndX.current) {
      const difference = touchStartX.current - touchEndX.current;
      if (difference > 70) {
        nextSlide();
      } else if (difference < -70) {
        prevSlide();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentProject = projects[currentIndex];

  return (
   <>
    <h2 className="m-auto w-1/2 md:w-full text-4xl  md:text-5xl py-8 md:py-12 dynapuff-font text-center text-white ">
       Proyectos Recientes
  </h2>
    <div className="w-full max-w-4xl mx-auto px-4 py-8 relative">
      <div 
        className="overflow-hidden shadow-lg rounded-lg"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex flex-col md:flex-row transition-transform duration-300 ease-in-out">
          <div className="w-full md:w-1/2 bg-white" >
            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="w-full h-48 md:h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-6 flex flex-col justify-between bg-white">
            <div>
              <h2 className="text-3xl font-bold mb-2">{currentProject.title}</h2>
              <p className="text-sm text-gray-600 mb-4">
                {currentProject.description}
              </p>
              <div className="flex flex-wrap gap-2 ">
                {currentProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-black  text-white text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
             <h3 className='pt-2 text-xl font-bold mb-2 text-black '>Puntos Importantes</h3>
             <ul className=' list-disc list-inside mb-4'>
              {currentProject.important.map((text,index)=>(
                 <li key={index}>{text}</li>
              ))}
              </ul>
            </div>
            <button className="w-full bg-[#3836FE] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center">
              Ver Detalles
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div></>
  );
};

export default Carrusel;