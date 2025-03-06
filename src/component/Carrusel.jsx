import { useState, useEffect, useRef } from 'react';

const Carrusel = () => {
  const projects = [
    {
      "title": "Sitio Web de Sistemas contra Incendios",
      "description": "El proyecto 'Sitio Web de Sistemas contra Incendios' consiste en el desarrollo de una plataforma digital informativa y funcional dedicada a la promoción, venta y asesoría de sistemas de prevención y protección contra incendios. El sitio incluirá catálogos de productos, guías de instalación, normativas de seguridad, y un apartado de contacto para consultas técnicas. Su objetivo es ser una herramienta clave para profesionales y empresas del sector, ofreciendo soluciones integrales y actualizadas en materia de seguridad contra incendios.",
      "tags": ["React Vite", "Tailwin", "Cloudflare"],
      "important": ["Catálogos de Productos", "Guías de Instalación", "Normativas de Seguridad"],
      "image": "/imgs/projects/image.png"
    },
    {
      "title": "Pagina Web Barberia Valentinos",
      "description": "Barbería Valentinos es tu destino de confianza para un cuidado capilar y de barba de primera calidad. Nuestra página web ofrece una experiencia intuitiva y moderna, donde podrás explorar nuestros servicios, desde cortes clásicos y modernos hasta tratamientos de barba y cuidado facial. Con un diseño elegante y funcional, te permitimos reservar citas en línea de manera rápida y sencilla, conocer a nuestro talentoso equipo de barberos y descubrir promociones exclusivas. En Barbería Valentinos, combinamos tradición y estilo para brindarte un servicio premium. ¡Visítanos y déjanos consentirte!",
      "tags": ["HTML", "Tailwin", "JavaScript", "Cloudflare"],
      "important": ["Reserva de Citas", "Diseño Elegante", "Promociones Exclusivas"],
      "image": "/imgs/projects/p4-img.jpg"
    },
    {
      "title": "Landing Page para la gestión de presupuestos",
      "description": "¡Próximamente! Estamos trabajando en una Landing Page de Gestión de Presupuestos que revolucionará la forma en que organizas tus finanzas. Este proyecto, actualmente en construcción, te ofrecerá herramientas intuitivas para crear, monitorear y optimizar tu presupuesto personal o empresarial. Con gráficos claros, alertas personalizadas y consejos prácticos, te ayudaremos a tomar el control de tus finanzas de manera sencilla. ¡Mantente atento! Pronto tendrás acceso a esta plataforma diseñada para simplificar tu vida financiera.",
      "tags": ["React.js Vite", "FastAPI", "MongoDB", "Digital Ocean"],
      "important": ["Gráficos Claros", "Alertas Personalizadas", "Consejos Prácticos"],
      "image": "/imgs/projects/p6-img.jpg"
    },
    {
      "title": "Sistema y Pagina Web para La Casa de Salam",
      "description": "En La Casa de Salam, hemos desarrollado un Sistema de Venta de Productos para Mascotas que lo tiene todo. Nuestra plataforma está diseñada para ofrecer una experiencia de compra fácil y rápida, con una amplia variedad de productos para todo tipo de mascotas: alimentos, accesorios, juguetes, medicamentos y más. Con un diseño intuitivo y seguro, los clientes pueden explorar categorías, filtrar por necesidades específicas y realizar compras en pocos clics. Además, incluimos funcionalidades como recomendaciones personalizadas, envíos rápidos y un sistema de seguimiento de pedidos. La Casa de Salam es la solución perfecta para quienes buscan lo mejor para sus mascotas.",
      "tags": ["React.js Vite", "Tailwin", "FastAPI", "Posgre SQL", "Render"],
      "important": ["Experiencia de Compra Fácil", "Recomendaciones Personalizadas", "Seguimiento de Pedidos"],
      "image": "/imgs/projects/p11-img.jpg"
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