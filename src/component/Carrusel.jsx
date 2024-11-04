'use client'

import React, { useState, useEffect, useRef } from 'react';

const Carrusel = () => {
  const projects = [
    {
      title: "Diana.Lu",
      description: "Gestionamos el inventario para la facilidad de conteo y evitar errores Gestionamos el inventario",
      tags: ["Sitio Web", "47 Dias"],
      important:["Agradable","Optimizaciones de Tiempo","Diseño Agradable"],
      image: "https://klart.io/api/pixels/652e2aa429b5d822b1eced5a/image.png"
    },
    {
      title: "Project Two",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      tags: ["Design", "30 Dias"],
      important:["Agradable","Diseño Agradable","Empresa en Crecimiento","Otros datos"],
      image: "https://img.freepik.com/foto-gratis/surfista-valiente-montando-ola_1098-1448.jpg?t=st=1730558498~exp=1730562098~hmac=1eaa81431744cf94a2925b821f5033bc1252ef31273c342f10e03d3670d57a2e&w=740"
    },
    {
      title: "Project Three",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      tags: ["Development", "60 Dias"],
      important:["Optimizaciones de Tiempo","Diseño Agradable"],
      image: "https://img.freepik.com/foto-gratis/imagen-primer-plano-programador-trabajando-su-escritorio-oficina_1098-18707.jpg?t=st=1730558362~exp=1730561962~hmac=31dd3f18fd303d44e9d8671465b7a6a471f24f5290235a5a1059afbb1b51be80&w=740"
    }
  ];

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
      if (difference > 50) {
        nextSlide();
      } else if (difference < -50) {
        prevSlide();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentProject = projects[currentIndex];

  return (
   <>
    <h2 className="text-3xl sm:text-4xl md:text-5xl md:w-1/2 py-4 dynapuff-font text-center text-white min-w-full ">
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
          <div className="w-full md:w-1/2">
            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="w-full h-48 md:h-96 object-cover"
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