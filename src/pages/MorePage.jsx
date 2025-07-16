import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import WhatsAppButton from "../component/WhatsAppButton";

function MorePage() {
  return (
    <>
    <div className="bg-black min-h-screen">
      <Navbar />
      
      {/* WhatsApp Floating Button */}
      <WhatsAppButton />

      {/* Hero Section */}
      <div className="pt-28 pb-20 bg-gradient-to-b from-[#3836FE] to-black">
        <div className="container mx-auto px-4 flex flex-col items-center gap-8 text-center">
          <img
            src="logo-icon-white.svg"
            className="max-w-[200px] md:max-w-[350px] drop-shadow-xl hover:scale-105 transition-transform duration-300"
            alt="Web Nova Solutions"
          />
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Web <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Nova Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl">
            Innovación y tecnología para transformar tu negocio
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16 space-y-24">
        {/* Historia Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="bg-[#3836FE]/10 rounded-full w-fit px-6 py-2 mb-6">
              <span className="text-[#3836FE] font-semibold">Nuestros Orígenes</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nuestra <span className="text-[#3836FE]">Historia</span>
            </h3>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Nova Solutions RUC:20613267493 nació con la firme convicción de que no solo los adultos pueden lograr grandes cosas. Creemos que todo lo que se necesita es un objetivo que inspire nuestra mente y corazón, y, por supuesto, mucho esfuerzo.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Somos un grupo de jóvenes con una visión a largo plazo, dispuestos a desafiar todo obstáculo que se nos presente. Nuestro propósito es llevar nuestro conocimiento a lugares donde se pueda hacer una diferencia real y brindar soluciones que hagan la vida más fácil a nuestros clientes.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img 
              src="/history.svg" 
              alt="Nuestra Historia"
              className="w-full max-w-md rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Misión Section */}
        <div className="flex flex-col lg:flex-row-reverse gap-12 items-center bg-gradient-to-br from-[#3836FE] to-black rounded-3xl p-8 border border-gray-700">
          <div className="lg:w-1/2">
            <div className="bg-[#3836FE]/10 rounded-full w-fit px-6 py-2 mb-6">
              <span className="text-[#3836FE] font-semibold">Nuestro Propósito</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nuestra <span className="text-[#3836FE]">Misión</span>
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              La misión de Nova Solutions es ofrecer soluciones innovadoras y accesibles que faciliten la vida de nuestros clientes, aprovechando el conocimiento y la pasión de un equipo joven y comprometido con el futuro. Nos esforzamos por transformar desafíos en oportunidades a través de la tecnología, el esfuerzo y el trabajo en equipo.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img 
              src="/mision.svg" 
              alt="Nuestra Misión"
              className="w-full max-w-md rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Visión Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="bg-[#3836FE]/10 rounded-full w-fit px-6 py-2 mb-6">
              <span className="text-[#3836FE] font-semibold">Nuestro Futuro</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nuestra <span className="text-[#3836FE]">Visión</span>
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              La visión de Nova Solutions es convertirnos en una startup tecnológica líder, especializada en la automatización de procesos. Queremos ser reconocidos por desarrollar soluciones innovadoras que optimicen la eficiencia y productividad de las empresas, ayudándolas a enfrentar los desafíos del futuro de manera más ágil y efectiva.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img 
              src="/vision.svg" 
              alt="Nuestra Visión"
              className="w-full max-w-md rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

    
    </div>
    <Footer />
    </>
  );
}

export default MorePage;