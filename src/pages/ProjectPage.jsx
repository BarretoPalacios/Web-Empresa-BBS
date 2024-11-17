import Navbar from "../component/Navbar";

function ProjectPage() {
  return (
    <div className="bg-[#3836FE] ">
      <Navbar />
      <a
        href="https://wa.me/51933238447?text=Hola,%20vi%20tu%20página%20web%20y%20estoy%20interesado%20en%20tus%20servicios"
        className="z-30 fixed  bottom-2 right-2 bg-black p-4 rounded-full animate-bounce "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp "
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
          <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
        </svg>
      </a>
      <div className="pt-28  flex justify-center md:justify-evenly items-center w-full bg-white flex-wrap">
        <h2 className="animate__animated animate__rubberBand animate__repeat-1 animate__slower text-4xl sm:text-4xl md:text-5xl  py-2 md:py-10 dynapuff-font text-center text-black  ">
         Nuestros <b className="text-[#3836FE]"> Proyectos</b>  <br /> Recientes
        </h2>
        <img
          src="hero-project.svg"
          className="max-w-[200px] md:max-w-[350px] drop-shadow-xl hover:scale-105 transition-transform"
        />
      </div>

      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full overflow-hidden" fill="white">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
    </svg>

      <div className="bg-[#3836FE]  pt-12 m-auto w-full max-w-[1200px] min-h-[800px] p-6   flex flex-wrap gap-16 justify-evenly items-center">
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
            El Sistema de Convenios es una plataforma integral diseñada para
            gestionar, organizar y facilitar la creación y administración de
            convenios entre diferentes entidades. Este sistema no solo optimiza
            la coordinación entre las partes involucradas, sino que también
            mejora el control de inventario y reduce significativamente los
            errores en los conteos y registros, asegurando transparencia y
            eficiencia en cada proceso.
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
            El Sistema de Control de Agua es una plataforma innovadora diseñada
            para monitorear, gestionar y optimizar el consumo de agua en
            infraestructuras urbanas. Este sistema no solo permite un control
            detallado del uso de agua, sino que también fomenta prácticas
            sostenibles y el ahorro mediante herramientas avanzadas de análisis
            y alertas personalizadas.
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
