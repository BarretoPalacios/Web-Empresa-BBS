import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Projects from "../component/Projects";
import WhatsAppButton from "../component/WhatsAppButton";

function ProjectPage() {
  return (
   <>
    <div className="  min-h-screen">
      <Navbar />

      {/* Botón de WhatsApp flotante */}
      <WhatsAppButton />

      {/* Hero Section */}

      <div className="pt-28 pb-20 bg-gradient-to-b from-[#3836FE] to-black">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="text-center md:text-left max-w-2xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Nuestros </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                Proyectos
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Descubre las soluciones innovadoras que hemos creado para nuestros
              clientes
            </p>
          </div>
          <img
            src="hero-project.svg"
            className="max-w-xs md:max-w-md drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            alt="Ilustración de proyectos"
          />
        </div>
      </div>

      {/* Contenedor de proyectos */}
      <div className="relative bg-black  px-6">
        <div className="max-w-7xl mx-auto">
          <Projects />
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default ProjectPage;
