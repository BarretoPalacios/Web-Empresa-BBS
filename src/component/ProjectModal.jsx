import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight, ExternalLink, Github, Clock, Calendar } from "lucide-react"

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

    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "auto"
    }
  }, [onClose])

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === project.images.length - 1 ? 0 : prevIndex + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? project.images.length - 1 : prevIndex - 1))
  }

  // Close modal when clicking outside the content
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className=" fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={handleBackdropClick}>
      <div
        className="bg-white rounded-lg shadow-xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-border">
          <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="overflow-y-auto flex-grow">
          {/* Image carousel */}
          <div className="relative">
            <div className="h-[300px] md:h-[400px] bg-black relative">
              <img
                src={project.images[currentImageIndex] || "/placeholder.svg"}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
              />

              {/* Navigation arrows */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
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
                    className={`w-2 h-2 rounded-full ${index === currentImageIndex ? "bg-white" : "bg-white/50"}`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Project details */}
          <div className="p-6">
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-primary mr-2" />
                <span className="text-foreground">Duration: {project.duration}</span>
              </div>

              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-primary mr-2" />
                <span className="text-foreground">Completed: 2023</span>
              </div>
            </div>

            <h4 className="text-lg font-semibold mb-3">Project Overview</h4>
            <p className="text-muted-foreground mb-6">{project.fullDescription}</p>

            <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              {project.websiteUrl && (
                <a
                  href={project.websiteUrl}
                  className="flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit Website
                </a>
              )}

              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  className="flex items-center px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 mr-2" />
                  View Repository
                </a>
              )}

              {!project.repoUrl && project.isPrivate && (
                <div className="flex items-center px-4 py-2 bg-muted text-muted-foreground rounded-md">
                  <span>Private Repository</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

