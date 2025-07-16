import CardServices from "./component/CardServices";
import Navbar from "./component/Navbar";
import Carrusel from "./component/Carrusel";
import WhatsAppButton from "./component/WhatsAppButton";
import "animate.css";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="w-full relative bg-black">
      {/* WhatsApp Floating Button */}
      <WhatsAppButton />

      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Projects Section */}

      <ProjectsSection />
      {/* Team Section */}
      <TeamSection />

      <Footer />
    </div>
  );
}

// Componentes separados para mejor organización


const HeroSection = () => (
  <section className="relative">
    <div className="bg-black mx-auto w-full max-w-[1200px] min-h-[800px] pt-32 lg:pt-0 flex flex-col lg:flex-row justify-center items-center gap-12 px-6 lg:px-12">
      <div className="flex flex-col items-center lg:items-start gap-8 lg:gap-10 text-center lg:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white to-[#3836FE] bg-clip-text text-transparent">
          Deja que la tecnología trabaje por ti...
        </h1>

        <h2 className="text-xl md:text-2xl text-white max-w-[600px]">
          Automatizamos tus procesos repetitivos, reducimos errores y te
          ayudamos a ahorrar tiempo para que te enfoques en lo que realmente
          importa.
        </h2>

        <a
          href="https://wa.me/51933238447?text=Hola,%20vi%20tu%20página%20web%20y%20estoy%20interesado%20en%20tus%20servicios"
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-100 transition-colors"
        >
          ¡Contactar ya!
        </a>
      </div>

      <img
        src="main-hero.svg"
        className="max-w-[500px] w-full drop-shadow-2xl"
        alt="Hero illustration"
      />
    </div>
  </section>
);

const ServicesSection = () => (
  <section className="relative bg-black py-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
          <span className="bg-gradient-to-r from-white to-[#3836FE] bg-clip-text text-transparent">
            Servicios Que&nbsp;
          </span>
          <span className="bg-gradient-to-r from-[#3836FE] to-[#6A35FF] bg-clip-text text-transparent">
            Brindamos
          </span>
        </h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          Soluciones tecnológicas innovadoras diseñadas para impulsar tu negocio
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        <CardServices
          icon="⚡"
          title="Automatizaciones"
          description="Potencia tu negocio con automatizaciones. Olvídate de las tareas repetitivas y céntrate en lo que realmente importa."
          gradient="from-purple-500 to-[#3836FE]"
        />
        <CardServices
          icon="🛠️"
          title="Sistemas a Medida"
          description="Soluciones tecnológicas personalizadas. Diseñamos sistemas adaptados a tus necesidades para optimizar procesos."
          gradient="from-amber-500 to-[#3836FE]"
        />
        <CardServices
          icon="🔧"
          title="Mantenimiento"
          description="Mantenemos tu equipo al máximo rendimiento. Servicio técnico especializado para toda tu infraestructura."
          gradient="from-emerald-500 to-[#3836FE]"
        />
      </div>
    </div>
  </section>
);

const ProjectsSection = () => (
  <section className=" py-20">
    <div className="max-w-7xl mx-auto px-2">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
          <span className="bg-gradient-to-r from-white to-[#3836FE] bg-clip-text text-transparent">
            Nuestros
          </span>
          <span className="bg-gradient-to-r from-[#3836FE] to-[#6A35FF] bg-clip-text text-transparent">
            &nbsp;Proyectos
          </span>
        </h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          Descubre nuestro portafolio de soluciones digitales innovadoras
        </p>
      </div>
      <Carrusel />
    </div>
  </section>
);
const TeamSection = () => (
  <section className="relative bg-black py-24 overflow-hidden">
    {/* Elementos decorativos */}
    <div className="absolute top-0 left-0 w-full h-full opacity-10">
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white/20 blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-white/15 blur-xl"></div>
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-[#3836FE]/10 rounded-full backdrop-blur-sm border border-[#3836FE]/20">
          <svg
            className="w-8 h-8 text-[#3836FE]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-white to-[#3836FE] bg-clip-text text-transparent">
            Nuestro&nbsp;
          </span> 
          <span className="bg-gradient-to-r from-[#3836FE] to-[#8A2BE2] bg-clip-text text-transparent">
             Equipo
          </span>
        </h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          Los talentosos profesionales que hacen posible la magia digital
        </p>
      </div>

      {/* Tarjetas de equipo */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <TeamMember
          img="https://doodleipsum.com/700/avatar-4?i=9ed28606f4304a20665c51f4230a633a"
          name="Wilson David Barreto"
          role="Full Stack Developer"
          github="https://github.com/BarretoPalacios"
        />
        <TeamMember
          img="https://doodleipsum.com/700/avatar-4?i=0dc89625a8d63095bea8a5511a2aab2d"
          name="Luis Ernesto Daza"
          role="Backend Engineer"
          github="https://github.com/LuisErnesto1234"
        />
        <TeamMember
          img="https://doodleipsum.com/700/avatar-4?i=6e4392ed857ee939993024e3a174f183"
          name="Carlos Ostin Rojas"
          role="Backend Specialist"
          github="https://github.com/Rahi-Rojas"
        />
        <TeamMember
          img="https://doodleipsum.com/700/avatar-4?i=6308da9791a4ed11a2c56d2554d02810"
          name="Sebastian Ganoza"
          role="Database Architect"
          github="https://github.com/SebastianGanoza21"
        />
      </div>
    </div>
  </section>
);

const TeamMember = ({ img, name, role, github }) => (
  <div className="group relative h-full bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/20">
    {/* Efecto de gradiente al hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#3836FE]/0 via-[#6A35FF]/0 to-[#8A2BE2]/0 group-hover:via-[#6A35FF]/20 group-hover:to-[#8A2BE2]/20 transition-all duration-500"></div>

    <div className="relative z-10 p-6 flex flex-col items-center h-full">
      {/* Avatar con efecto */}
      <div className="relative mb-6">
        <div className="absolute -inset-2 bg-gradient-to-r from-[#3836FE] to-[#8A2BE2] rounded-full opacity-70 blur-md group-hover:opacity-100 transition-opacity"></div>
        <img
          src={img}
          alt={name}
          className="relative w-32 h-32 object-cover rounded-full border-4 border-white z-10"
        />
      </div>

      {/* Información */}
      <div className="text-center flex-grow">
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-white/70 mb-4">{role}</p>
      </div>

      {/* Botón GitHub */}
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full px-6 py-2 bg-gradient-to-r from-[#3836FE] to-[#6A35FF] text-white font-medium rounded-full text-center hover:from-[#6A35FF] hover:to-[#8A2BE2] transition-all flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.195 22 16.418 22 12.017 22 6.484 17.522 2 12 2z"
          />
        </svg>
        GitHub
      </a>
    </div>
  </div>
);

const WaveSeparator = ({ direction = "down", simple = false }) => {
  const className = direction === "up" ? "rotate-180 -mt-1" : "-mb-1";

  if (simple) {
    return (
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`w-full fill-white ${className}`}
      >
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" />
      </svg>
    );
  }

  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className={`w-full fill-white ${className}`}
    >
      <path
        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
        opacity=".25"
      />
      <path
        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
        opacity=".5"
      />
      <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
    </svg>
  );
};

export default App;
