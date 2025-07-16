import { useState, useEffect, useRef } from "react";

const FullScreenCarousel = () => {
  const projects = [
    {
      title: "Sitio Web de Sistemas contra Incendios",
      description:
        "Plataforma digital para promoción y venta de sistemas de prevención contra incendios con catálogos interactivos y guías técnicas.",
      tags: ["React Vite", "Tailwind", "Cloudflare"],
      features: [
        "Catálogos interactivos",
        "Guías de instalación",
        "Normativas de seguridad",
      ],
      image: "/imgs/projects/image.png",
    },
    {
      title: "Barbería Valentinos",
      description:
        "Sistema de reservas online para una experiencia de barbería premium con gestión de citas y promociones exclusivas.",
      tags: ["HTML", "Tailwind", "JavaScript"],
      features: ["Reserva online", "Galería de trabajos", "Promociones"],
      image: "/imgs/projects/p4-img.jpg",
    },
    {
      title: "Gestión de Presupuestos",
      description:
        "Dashboard financiero con visualización de datos en tiempo real y alertas personalizadas para mejor control económico.",
      tags: ["React.js", "FastAPI", "MongoDB"],
      features: [
        "Gráficos interactivos",
        "Alertas personalizadas",
        "Sincronización bancaria",
      ],
      image: "/imgs/projects/p6-img.jpg",
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-rotate only when not hovered
  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [currentIndex, isHovered]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const currentProject = projects[currentIndex];

  return (
    <section
      className="relative w-full h-[800px] overflow-hidden rounded-2xl 
              shadow-[0_5px_15px_rgba(56,54,254,0.2),0_15px_35px_rgba(56,54,254,0.25)]"
      ref={carouselRef}
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={currentProject.image}
          alt={currentProject.title}
          className="w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      </div>

      {/* Content Overlay */}
      <div
        className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-16 md:px-24 lg:px-32 xl:px-48 py-20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Project Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {currentProject.tags.map((tag, index) => (
            <span
              key={index}
              className="px-6 py-2 rounded-full bg-white text-black hover:shadow-lg transition-all"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Project Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-4xl">
          {currentProject.title}
        </h2>

        {/* Project Description */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl">
          {currentProject.description}
        </p>

        {/* Features List */}
        <ul className="mb-12 space-y-3">
          {currentProject.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg
                className="w-6 h-6 text-white mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-white text-lg sm:text-xl">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="mt-auto">
          <a
            href="/projects"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#3836FE] rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Ver proyecto completo
            <svg
              className="w-5 h-5 ml-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-all"
          aria-label="Previous project"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-all"
          aria-label="Next project"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index ? "bg-white w-8" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/30 to-transparent"></div>
    </section>
  );
};

export default FullScreenCarousel;
