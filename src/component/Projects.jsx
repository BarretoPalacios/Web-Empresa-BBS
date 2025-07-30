import { useState } from "react";
import {
  ExternalLink,

  Clock,
  LockIcon,
  GitGraphIcon,
} from "lucide-react";
import ProjectModal from "./ProjectModal";

// Sample project data
const projects = [
   {
    id: 1,
    title: "Sitio Web para la empresa Transjer Operador Logistico",
    description:
      "Sitio web informativo para la empresa Transjer, especializado en logística y transporte, con servicios de carga y asesoría.",
    thumbnail:  "/imgs/projects/tranjer-1.png",
    duration: "2 Semanas",
    technologies: ["React Vite", "Tailwind", "Cloudflare Pages","Dominios Propios"],
    websiteUrl: "https://transjer.com.pe/",
    repoUrl: "",
    isPrivate: true,
    images: [
      "/imgs/projects/tranjer-1.png",
      "/imgs/projects/tranjer-2.png",
      "/imgs/projects/tranjer-3.png",
      "/imgs/projects/tranjer-4.png",
    ],
    fullDescription:
      "La pagina web de Transjer es una plataforma informativa dedicada a la empresa Transjer, especializada en logística y transporte. El sitio ofrece una visión general de los servicios de carga, asesoría y soluciones logísticas que la empresa proporciona a sus clientes.",
  },
  {
    id: 2,
    title: "Sitio Web para Gimnasio",
    description:
      "Plataforma digital para promocionar y gestionar un gimnasio moderno con información sobre membresías, clases, entrenadores y más.",
    thumbnail: "/imgs/projects/p12-img.jpg",
    duration: "2 Dias",
    technologies: ["React Vite", "Tailwind", "Cloudflare"],
    websiteUrl: "https://powergym.pages.dev/",
    repoUrl: "https://github.com/BarretoPalacios/Power-Gym",
    isPrivate: false,
    images: [
      "/imgs/projects/p12-img.jpg",
      "/imgs/projects/p13-img.jpg",
      "/imgs/projects/p14-img.jpg",
    ],
    fullDescription:
      "El proyecto 'Sitio Web para Gimnasio' es una plataforma digital diseñada para promocionar y gestionar un gimnasio moderno. El sitio incluye información detallada sobre membresías, clases grupales, entrenadores personales, horarios y promociones especiales."
  },
  {
    id: 3,
    title: "Sitio Web de Sistemas contra Incendios",
    description:
      "Plataforma digital informativa dedicada a la promoción y venta de sistemas de prevención y protección contra incendios.",
    thumbnail: "/imgs/projects/image.png",
    duration: "4 Dias",
    technologies: ["React Vite", "Tailwind", "Cloudflare"],
    websiteUrl: "https://sistemacontraincendios.pages.dev/",
    repoUrl: "https://github.com/BarretoPalacios/Proyecto-Web-de-Incendios",
    isPrivate: false,
    images: [
      "/imgs/projects/image.png",
      "/imgs/projects/p1-img.jpg",
      "/imgs/projects/p2-img.jpg",
      "/imgs/projects/p3-img.jpg",
    ],
    fullDescription:
      "Plataforma digital informativa y funcional dedicada a la promoción, venta y asesoría de sistemas de prevención y protección contra incendios.",
  },
  {
    id: 4,
    title: "Pagina Web Barberia Valentinos",
    description:
      "Destino de confianza para un cuidado capilar y de barba de primera calidad con reservas en línea y galería de servicios.",
    thumbnail: "/imgs/projects/p4-img.jpg",
    duration: "2 Dias",
    technologies: ["HTML", "Tailwind", "JavaScript", "Cloudflare"],
    websiteUrl: "https://valentinobarber.pages.dev/",
    repoUrl: "https://github.com/BarretoPalacios/Landig-Barber",
    isPrivate: false,
    images: ["/imgs/projects/p4-img.jpg", "/imgs/projects/p5-img.jpg"],
    fullDescription:
      "Barbería Valentinos es tu destino de confianza para un cuidado capilar y de barba de primera calidad.",
  },
  {
    id: 5,
    title: "Landing Page para la gestión de presupuestos",
    description:
      "¡Próximamente! Plataforma para crear, monitorear y optimizar tu presupuesto personal o empresarial.",
    thumbnail: "/imgs/projects/p6-img.jpg",
    duration: "En Desarrollo",
    technologies: ["React.js Vite", "FastAPI", "MongoDB", "Digital Ocean"],
    websiteUrl: "https://costeando.pages.dev/",
    repoUrl: "",
    isPrivate: false,
    images: [
      "/imgs/projects/p6-img.jpg", "/imgs/projects/p7-img.jpg"
    ],
    fullDescription:
      "Plataforma en construcción para la gestión de presupuestos personales y empresariales.",
  },
  
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gradient-to-br from-[#3836FE] to-black border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1"
              onClick={() => openModal(project)}
            >
              <div className="relative h-48 overflow-hidden group">
                <img
                  src={project.thumbnail || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex items-center mb-4">
                  <Clock className="h-4 w-4 text-purple-400 mr-2" />
                  <span className="text-sm text-gray-400">
                    {project.duration}
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 px-3 py-1 text-white text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                  {project.websiteUrl ? (
                    <a
                      href={project.websiteUrl}
                      className="text-white hover:text-purple-300 flex items-center text-sm bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-4 py-2 rounded-lg transition-all"
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visitar
                    </a>
                  ) : (
                    <span className="text-gray-400 text-sm flex items-center gap-1 bg-gray-800 px-4 py-2 rounded-lg">
                      <LockIcon size={14} /> Proyecto Privado
                    </span>
                  )}

                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      className="text-white hover:text-purple-300 flex items-center text-sm bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-all"
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitGraphIcon className="h-4 w-4 mr-2" />
                      Repositorio
                    </a>
                  ) : (
                    <span className="text-gray-400 text-sm flex items-center gap-1 bg-gray-800 px-4 py-2 rounded-lg">
                      <LockIcon size={14} /> Privado
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
}