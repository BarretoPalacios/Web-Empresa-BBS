import React from "react";
import Navbar from "../component/Navbar";

function ProjectPage() {
  return (
    <div className="bg-[#3836FE] ">
      <Navbar />

      

      <div className="bg-[#3836FE]  pt-32 m-auto w-full max-w-[1200px] min-h-[800px] p-6   flex flex-wrap gap-16 justify-evenly items-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl md:w-1/2 py-2 md:py-10 dynapuff-font text-center text-white min-w-full ">
          Proyectos Recientes
        </h2>
        
        <div className=" bg-white rounded-2xl w-full flex flex-col justify-center items-center gap-4 py-6 px-8 text-black">
          <h2 className="text-3xl sm:text-4xl md:text-5xl md:w-1/2 py-8 dynapuff-font  text-black min-w-full text-center">
            Sistema de Gestion de Inventario
          </h2>

          <p className="max-w-2xl text-start md:text-center">
            Nuestro sistema de gestión de inventario está diseñado para
            facilitar el conteo, la organización y el control eficiente de
            productos en almacenes o establecimientos. Al reducir los errores
            humanos y automatizar procesos clave, permitimos que las empresas
            ahorren tiempo y recursos mientras mantienen una precisión óptima en
            sus registros de inventario.
          </p>

          <div className="flex gap-2 pt-2">
            <button className=" w-fit p-2 rounded-full bg-[#3836FE] text-white">
              Sitio Web
            </button>
            <button className=" w-fit p-2 rounded-full bg-[#3836FE] text-white">
              47 Dias
            </button>
          </div>
          <hr />

          <img
            src="/imgs/projecto2mk.svg"
            alt=""
            className="w-full md:w-1/2 h-full object-contain p-4 "
          />
        </div>

        <div className=" bg-white rounded-2xl w-full flex flex-col justify-center items-center gap-4 py-6 px-8 text-black">
          <h2 className="text-3xl sm:text-4xl md:text-5xl md:w-1/2 py-8 dynapuff-font  text-black min-w-full text-center">
          Sistema de Convenios
          </h2>

          <p className="max-w-2xl text-start md:text-center">
          El Sistema de Convenios es una plataforma integral diseñada para gestionar, organizar y facilitar la creación y administración de convenios entre diferentes entidades. Este sistema no solo optimiza la coordinación entre las partes involucradas, sino que también mejora el control de inventario y reduce significativamente los errores en los conteos y registros, asegurando transparencia y eficiencia en cada proceso.
          </p>

          <div className="flex gap-2 pt-2">
            <button className=" w-fit p-2 rounded-full bg-[#3836FE] text-white">
              Sitio Web
            </button>
            <button className=" w-fit p-2 rounded-full bg-[#3836FE] text-white">
              47 Dias
            </button>
          </div>
          <hr />

          <img
            src="/imgs/projecto1mk.svg"
            alt=""
            className="w-full md:w-1/2 h-full object-contain p-4 drop-shadow-2xl"
          />
        </div>

        <div className=" bg-white rounded-2xl w-full flex flex-col justify-center items-center gap-4 py-6 px-8 text-black">
          <h2 className="text-3xl sm:text-4xl md:text-5xl md:w-1/2 py-8 dynapuff-font  text-black min-w-full text-center">
          Sistema de Control de Agua
          </h2>

          <p className="max-w-2xl text-start md:text-center">
          El Sistema de Control de Agua es una plataforma innovadora diseñada para monitorear, gestionar y optimizar el consumo de agua en infraestructuras urbanas. Este sistema no solo permite un control detallado del uso de agua, sino que también fomenta prácticas sostenibles y el ahorro mediante herramientas avanzadas de análisis y alertas personalizadas.
          </p>

          <div className="flex gap-2 pt-2">
            <button className=" w-fit p-2 rounded-full bg-[#3836FE] text-white">
              Sitio Web
            </button>
            <button className=" w-fit p-2 rounded-full bg-[#3836FE] text-white">
              47 Dias
            </button>
          </div>
          <hr />

          <img
            src="/imgs/projecto3mk.svg"
            alt=""
            className="w-full md:w-1/2 h-full object-contain p-4 drop-shadow-2xl"
          />
        </div>

       
      </div>
    </div>
  );
}

export default ProjectPage;
