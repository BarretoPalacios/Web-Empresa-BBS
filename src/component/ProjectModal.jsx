import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight, ExternalLink, Github, Clock, Calendar, LockIcon } from "lucide-react"

export default function ProjectModal({ project, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Handle keyboard events for navigation and closing
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowLeft") {
        prevImage()
      } else if (e.key === "ArrowRight") {
        nextImage()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "auto"
    }
  }, [onClose])

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    )
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            {project.title}
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-700 text-gray-300 hover:text-white transition-all"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="overflow-y-auto flex-grow">
          {/* Image carousel */}
          <div className="relative group">
            <div className="h-[300px] md:h-[400px] bg-black relative overflow-hidden">
              <img
                src={project.images[currentImageIndex] || "/placeholder.svg"}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                className="w-full h-full object-contain transition-opacity duration-300"
              />

              {/* Navigation arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gray-900/80 text-white hover:bg-gray-800 transition-all opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gray-900/80 text-white hover:bg-gray-800 transition-all opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${index === currentImageIndex ? "bg-purple-500 w-6" : "bg-gray-500 hover:bg-gray-400"}`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Project details */}
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-purple-400 mr-2" />
                <span className="text-gray-300">Duración: {project.duration}</span>
              </div>

              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-300">Completado: 2025</span>
              </div>
            </div>

            <h4 className="text-xl font-semibold mb-4 text-white">Descripción del Proyecto</h4>
            <p className="text-gray-300 mb-8 leading-relaxed">{project.fullDescription}</p>

            <h4 className="text-xl font-semibold mb-4 text-white">Tecnologías Utilizadas</h4>
            <div className="flex flex-wrap gap-3 mb-8">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-white rounded-full border border-purple-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              {project.websiteUrl && (
                <a
                  href={project.websiteUrl}
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Visitar Sitio
                </a>
              )}

              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all border border-gray-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5 mr-2" />
                  Ver Repositorio
                </a>
              )}

              {!project.repoUrl && project.isPrivate && (
                <div className="flex items-center px-6 py-3 bg-gray-800 text-gray-400 rounded-lg border border-gray-700">
                  <LockIcon className="h-5 w-5 mr-2" />
                  <span>Repositorio Privado</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}