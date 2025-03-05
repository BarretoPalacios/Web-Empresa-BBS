import { useState } from "react";
import {
  ExternalLink,
  Github,
  Clock,
  LockIcon,
  GitGraphIcon,
} from "lucide-react";
import ProjectModal from "./ProjectModal";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Sitio Web de Sistemas contra Incendios",
    description:
      "El proyecto 'Sitio Web de Sistemas contra Incendios' consiste en el desarrollo de una plataforma digital informativa y funcional dedicada a la promoción, venta y asesoría de sistemas de prevención y protección contra incendios. El sitio incluirá catálogos de productos, guías de instalación, normativas de seguridad, y un apartado de contacto para consultas técnicas. Su objetivo es ser una herramienta clave para profesionales y empresas del sector, ofreciendo soluciones integrales y actualizadas en materia de seguridad contra incendios.",
    thumbnail: "/imgs/projects/image.png",
    duration: "4 Dias",
    technologies: ["React Vite", "Tailwin", "Cloudflare"],
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
      "El proyecto 'Sitio Web de Sistemas contra Incendios' consiste en el desarrollo de una plataforma digital informativa y funcional dedicada a la promoción, venta y asesoría de sistemas de prevención y protección contra incendios. El sitio incluirá catálogos de productos, guías de instalación, normativas de seguridad, y un apartado de contacto para consultas técnicas. Su objetivo es ser una herramienta clave para profesionales y empresas del sector, ofreciendo soluciones integrales y actualizadas en materia de seguridad contra incendios.",
  },
  {
    id: 2,
    title: "Pagina Web Barberia Valentinos",
    description:
      "Barbería Valentinos es tu destino de confianza para un cuidado capilar y de barba de primera calidad. Nuestra página web ofrece una experiencia intuitiva y moderna, donde podrás explorar nuestros servicios, desde cortes clásicos y modernos hasta tratamientos de barba y cuidado facial. Con un diseño elegante y funcional, te permitimos reservar citas en línea de manera rápida y sencilla, conocer a nuestro talentoso equipo de barberos y descubrir promociones exclusivas. En Barbería Valentinos, combinamos tradición y estilo para brindarte un servicio premium. ¡Visítanos y déjanos consentirte!",
    thumbnail: "/imgs/projects/p4-img.jpg",
    duration: "2 Dias",
    technologies: ["HTML", "Tailwin", "JavaScript", "Cloudflare"],
    websiteUrl: "https://valentinobarber.pages.dev/",
    repoUrl: "https://github.com/BarretoPalacios/Landig-Barber",
    isPrivate: false,
    images: ["/imgs/projects/p4-img.jpg", "/imgs/projects/p5-img.jpg"],
    fullDescription:
      "Barbería Valentinos es tu destino de confianza para un cuidado capilar y de barba de primera calidad. Nuestra página web ofrece una experiencia intuitiva y moderna, donde podrás explorar nuestros servicios, desde cortes clásicos y modernos hasta tratamientos de barba y cuidado facial. Con un diseño elegante y funcional, te permitimos reservar citas en línea de manera rápida y sencilla, conocer a nuestro talentoso equipo de barberos y descubrir promociones exclusivas. En Barbería Valentinos, combinamos tradición y estilo para brindarte un servicio premium. ¡Visítanos y déjanos consentirte!",
  },
  {
    id: 3,
    title: "Landing Page para la gestión de presupuestos",
    description:
      "¡Próximamente! Estamos trabajando en una Landing Page de Gestión de Presupuestos que revolucionará la forma en que organizas tus finanzas. Este proyecto, actualmente en construcción, te ofrecerá herramientas intuitivas para crear, monitorear y optimizar tu presupuesto personal o empresarial. Con gráficos claros, alertas personalizadas y consejos prácticos, te ayudaremos a tomar el control de tus finanzas de manera sencilla. ¡Mantente atento! Pronto tendrás acceso a esta plataforma diseñada para simplificar tu vida financiera.",
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
      "¡Próximamente! Estamos trabajando en una Landing Page de Gestión de Presupuestos que revolucionará la forma en que organizas tus finanzas. Este proyecto, actualmente en construcción, te ofrecerá herramientas intuitivas para crear, monitorear y optimizar tu presupuesto personal o empresarial. Con gráficos claros, alertas personalizadas y consejos prácticos, te ayudaremos a tomar el control de tus finanzas de manera sencilla. ¡Mantente atento! Pronto tendrás acceso a esta plataforma diseñada para simplificar tu vida financiera.",
  },
  {
    id: 4,
    title: "Sistema y Pagina Web para La Casa de Salam",
    description:
      "En La Casa de Salam, hemos desarrollado un Sistema de Venta de Productos para Mascotas que lo tiene todo. Nuestra plataforma está diseñada para ofrecer una experiencia de compra fácil y rápida, con una amplia variedad de productos para todo tipo de mascotas: alimentos, accesorios, juguetes, medicamentos y más. Con un diseño intuitivo y seguro, los clientes pueden explorar categorías, filtrar por necesidades específicas y realizar compras en pocos clics. Además, incluimos funcionalidades como recomendaciones personalizadas, envíos rápidos y un sistema de seguimiento de pedidos. La Casa de Salam es la solución perfecta para quienes buscan lo mejor para sus mascotas.",
    thumbnail: "/imgs/projects/p11-img.jpg",
    duration: "1 mes ",
    technologies: ["React.js Vite","Tailwin", "FastAPI","Posgre SQL", "Render"],
    websiteUrl: "https://salam-front.onrender.com/",
    repoUrl: "https://github.com/BarretoPalacios/salam-front",
    isPrivate: false,
    images: [
      "/imgs/projects/p11-img.jpg", "/imgs/projects/p10-img.jpg",
       "/imgs/projects/p9-img.jpg", "/imgs/projects/p8-img.jpg"
    ],
    fullDescription:
      "En La Casa de Salam, hemos desarrollado un Sistema de Venta de Productos para Mascotas que lo tiene todo. Nuestra plataforma está diseñada para ofrecer una experiencia de compra fácil y rápida, con una amplia variedad de productos para todo tipo de mascotas: alimentos, accesorios, juguetes, medicamentos y más. Con un diseño intuitivo y seguro, los clientes pueden explorar categorías, filtrar por necesidades específicas y realizar compras en pocos clics. Además, incluimos funcionalidades como recomendaciones personalizadas, envíos rápidos y un sistema de seguimiento de pedidos. La Casa de Salam es la solución perfecta para quienes buscan lo mejor para sus mascotas.",
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
    <section id="projects" className="py-16 bg-secondary/30 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.thumbnail || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-4">
                  {project.description}
                </p>

                <div className="flex items-center mb-4 text-green-600">
                  <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                  <span className="text-sm text-muted-foreground">
                    {project.duration}
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-[#3836FE] px-2 py-1 bg-primary/10 text-white text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  {project.websiteUrl ? (
                    <a
                      href={project.websiteUrl}
                      className="text-primary hover:text-primary/80 flex items-center text-sm text-blue-600"
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Website
                    </a>
                  ) : (
                    <span className="text-muted-foreground text-sm flex items-center gap-1 text-red-600">
                      <LockIcon size={12} /> Private Project
                    </span>
                  )}

                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      className="text-primary hover:text-primary/80 flex items-center text-sm"
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitGraphIcon className="h-4 w-4 mr-1" />
                      Repository
                    </a>
                  ) : (
                    <span className="text-muted-foreground text-sm flex items-center gap-1 text-red-600">
                      <LockIcon size={12} /> Private Repo
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
