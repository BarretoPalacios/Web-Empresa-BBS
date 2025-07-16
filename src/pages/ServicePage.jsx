import React from "react";
import Navbar from "../component/Navbar";
import WhatsAppButton from "../component/WhatsAppButton";
import Footer from "../component/Footer";

function ServicePage() {
  return (
   <>
    <div className="bg-black min-h-screen">
      <Navbar />
      
      {/* WhatsApp Floating Button */}
      <WhatsAppButton />

      {/* Hero Section */}
      <div className="pt-28 pb-20 bg-gradient-to-b from-[#3836FE] to-black">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="text-center md:text-left max-w-2xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Nuestros </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Servicios</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Soluciones tecnológicas personalizadas para impulsar tu negocio
            </p>
          </div>
          <img
            src="service1.svg"
            className="max-w-xs md:max-w-md drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            alt="Servicios tecnológicos"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Automation Service */}
        <div className="mb-24">
          <div className="flex flex-col lg:flex-row gap-12 items-center bg-gradient-to-br from-[#3836FE]/50 to-black rounded-3xl p-8 border border-gray-700 shadow-2xl hover:shadow-[#3836FE]/20 transition-shadow">
            <div className="lg:w-1/2">
              <div className="bg-[#3836FE]/10 rounded-full w-fit px-6 py-2 mb-6">
                <span className="text-[#3836FE] font-semibold">Servicio Premium</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Automatización <span className="text-[#3836FE]">Inteligente</span>
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Potencia tu negocio con implementación de automatizaciones que eliminan tareas repetitivas y optimizan tus procesos.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#3836FE] p-2 rounded-full mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Ahorro de Tiempo</h4>
                    <p className="text-gray-400">Automatiza procesos como envío de correos, generación de reportes y facturación</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#3836FE] p-2 rounded-full mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Reducción de Errores</h4>
                    <p className="text-gray-400">Minimiza riesgos asociados con tareas manuales</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#3836FE] p-2 rounded-full mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Mejor Productividad</h4>
                    <p className="text-gray-400">Permite a tu equipo enfocarse en tareas creativas e innovadoras</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <img 
                src="/service1-page.svg" 
                alt="Automatización inteligente"
                className="w-full max-w-md rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Custom Systems Service */}
        <div className="mb-24">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center bg-gradient-to-br from-[#3836FE]/50 to-black rounded-3xl p-8 border border-gray-700 shadow-2xl hover:shadow-[#3836FE]/20 transition-shadow">
            <div className="lg:w-1/2">
              <div className="bg-[#3836FE]/10 rounded-full w-fit px-6 py-2 mb-6">
                <span className="text-[#3836FE] font-semibold">Solución Personalizada</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Sistemas <span className="text-[#3836FE]">a Medida</span>
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Desarrollamos soluciones tecnológicas diseñadas exclusivamente para las necesidades de tu negocio.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#3836FE] p-2 rounded-full mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Análisis de Requerimientos</h4>
                    <p className="text-gray-400">Estudiamos tus necesidades y objetivos específicos</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#3836FE] p-2 rounded-full mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Diseño Personalizado</h4>
                    <p className="text-gray-400">Creamos sistemas únicos alineados a tus flujos de trabajo</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#3836FE] p-2 rounded-full mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Implementación Integral</h4>
                    <p className="text-gray-400">Instalamos el sistema y capacitamos a tu equipo</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <img 
                src="/servicio2-page.svg" 
                alt="Sistemas a medida"
                className="w-full max-w-md rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Maintenance Service */}
        <div>
          <div className="flex flex-col lg:flex-row gap-12 items-center bg-gradient-to-br from-[#3836FE]/50 to-black rounded-3xl p-8 border border-gray-700 shadow-2xl hover:shadow-[#3836FE]/20 transition-shadow">
            <div className="lg:w-1/2">
              <div className="bg-[#3836FE]/10 rounded-full w-fit px-6 py-2 mb-6">
                <span className="text-[#3836FE] font-semibold">Soporte Continuo</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Mantenimiento <span className="text-[#3836FE]">Técnico</span>
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Mantén tus equipos tecnológicos funcionando al máximo rendimiento con nuestro servicio especializado.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#3836FE] p-2 rounded-full mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Diagnóstico Completo</h4>
                    <p className="text-gray-400">Revisión exhaustiva de computadoras, laptops e impresoras</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#3836FE] p-2 rounded-full mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Reparación Rápida</h4>
                    <p className="text-gray-400">Soluciones inmediatas para minimizar tiempos de inactividad</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#3836FE] p-2 rounded-full mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Optimización</h4>
                    <p className="text-gray-400">Actualización de software y hardware para máximo rendimiento</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <img 
                src="/mante.svg" 
                alt="Mantenimiento técnico"
                className="w-full max-w-md rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
   </>
  );
}

export default ServicePage;