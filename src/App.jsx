import CardServices from "./component/CardServices";
import Navbar from "./component/Navbar";
import "animate.css";
import Carrusel from "./component/Carrusel"
function App() {
  return (
    // <div className="relative overflow-x-hidden">
    //   <div className="absolute -top-40 -left-40 w-80 h-80 border-solid border-[80px] border-white rounded-full shadow-2xl"></div>
    //   <div className=" absolute top-[450px] -right-40 w-80 h-80 border-solid border-[80px] border-white rounded-full rotate-180 shadow-2xl"></div>

    //   <Navbar />
    //   <div className="bg-[#99CCFF] flex gap-5 flex-wrap justify-evenly items-center p-4 pt-20 h-full min-h-screen dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-900 dark:to-black">
    //     <h1 className=" text-start z-10 font-cherryFont text-9xl text-white drop-shadow-2xl ">
    //       InspyDev <br />
    //       <span className="text-[#003366] dark:text-[#99CCFF]">
    //         Services
    //       </span>
    //       <br />
    //     </h1>
    //     <div className="animate-float z-10  max-w-96 h-auto flex p-4 justify-center items-center rounded-2xl ">
    //       <img className="w-full drop-shadow-xl" src={ImgBaner} alt="" />
    //     </div>
    //   </div>
    //   <div className="bg-[#99CCFF] flex flex-wrap justify-center gap-5  p-4">
    //       <a
    //         href={`https://wa.me/51933238447`}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className="z-10 hover:scale-105 transition-transform shadow-lg bg-gradient-to-b from-sky-400 to-sky-200 dark:bg-gradient-to-t dark:from-gray-900 dark:to-gray-600 flex justify-center gap-4  p-4 rounded-full text-white font-bold text-center"
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width={24}
    //           height={24}
    //           viewBox="0 0 24 24"
    //           fill="none"
    //           stroke="currentColor"
    //           strokeWidth={2}
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
    //         >
    //           <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    //           <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
    //           <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
    //         </svg>
    //         Contactar por WhatsApp
    //       </a>
    //       <br />
    //       <a
    //         href={`mailto:david11barreto11@gmail.com`}
    //         className="hover:scale-105 transition-transform shadow-lg bg-gradient-to-b from-sky-400 to-sky-200 dark:bg-gradient-to-t dark:from-gray-900 dark:to-gray-600 flex justify-center gap-4  p-4 rounded-full text-white font-bold text-center"
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width={24}
    //           height={24}
    //           viewBox="0 0 24 24"
    //           fill="none"
    //           stroke="currentColor"
    //           strokeWidth={2}
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
    //         >
    //           <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    //           <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
    //           <path d="M3 7l9 6l9 -6" />
    //         </svg>
    //         Enviar Correo
    //       </a>
    //       <br />
    //       <a
    //         href={`tel:51933238447`}
    //         className="hover:scale-105 transition-transform shadow-lg bg-gradient-to-b from-sky-400 to-sky-200 dark:bg-gradient-to-t dark:from-gray-900 dark:to-gray-600 flex justify-center gap-4  p-4 rounded-full text-white font-bold text-center"
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width={24}
    //           height={24}
    //           viewBox="0 0 24 24"
    //           fill="none"
    //           stroke="currentColor"
    //           strokeWidth={2}
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           className="icon icon-tabler icons-tabler-outline icon-tabler-phone"
    //         >
    //           <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    //           <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
    //         </svg>
    //         Llamar
    //       </a>
    //     </div>
    //   <div className="bg-[#99CCFF] flex gap-5 items-center flex-wrap justify-evenly h-full min-h-screen dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-900 dark:to-black">
    //     <h1 className="w-full h-40 pt-6 pb-6 text-center z-10 font-cherryFont text-7xl text-[#003366] dark:text-[#99CCFF] drop-shadow-sm ">
    //       Servicios
    //     </h1>
    //     <CardServices
    //       img={servicio1Img}
    //       title={"Sistemas Web"}
    //       info={
    //         "creamos sistemas web completos como ERP, POS, E-COMERCE,etc..."
    //       }
    //     />
    //     <CardServices
    //       img={servicio2Img}
    //       title={"Sitios Web"}
    //       info={
    //         "creamos webs a medida y de acuerdo al rubro de tu empresa o negocio..."
    //       }
    //     />
    //     <CardServices
    //       img={servicio3Img}
    //       title={"Automatizaciones"}
    //       info={
    //         "automatizaciones de tareas repetitivas y manejo de documentos..."
    //       }
    //     />
    //   </div>

    //   <div className="pt-4 pb-4 bg-[#99CCFF] flex gap-5 items-center flex-wrap justify-evenly h-full min-h-screen dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-900 dark:to-black ">
    //     <h1 className="w-full h-40 p-6 text-center z-10 font-cherryFont text-7xl text-[#003366] dark:text-[#99CCFF] drop-shadow-sm ">
    //       Projectos
    //     </h1>
    //     <CardProjects
    //       titulo={"POS system"}
    //       info={
    //         "creamos un sistema de automatizacion de archivos WORD,EXCEL y PDF para una escuela "
    //       }
    //       img={projecto1}
    //       projectname={"system.js"}
    //     />
    //     <CardProjects
    //       titulo={"Automatizacion"}
    //       info={
    //         "creamos un sistema de automatizacion de archivos WORD,EXCEL y PDF para una escuela "
    //       }
    //       img={projecto2}
    //       projectname={"script.py"}
    //     />

    //     <CardProjects
    //       titulo={"Sitio Web Aura.com"}
    //       info={
    //         "creamos un sistema de automatizacion de archivos WORD,EXCEL y PDF para una escuela "
    //       }
    //       img={projecto3}
    //       projectname={"site.html"}
    //     />
    //   </div>

    //   <div className="p-6 bg-[#99CCFF] flex gap-5 items-center flex-wrap justify-evenly h-full min-h-screen dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-900 dark:to-black">
    //     <h1 className="w-full h-40 p-4 text-center z-10 font-cherryFont text-7xl text-[#003366] dark:text-[#99CCFF] drop-shadow-sm ">
    //       Nosotros
    //     </h1>
    //     <p className="font-cherryFont text-4xl w-[30ch] text-[#003366] dark:text-white">
    //       Somos un grupo de 5 Programadores que no saben programar , el grupo lo
    //       conforma Rojas alias
    //       <b className="italic text-[#336699]">"El legeador"</b> , Daza alias
    //       <b className="italic text-[#336699]">"El Profesor"</b> ,Gabino alias
    //       <b className="italic text-[#336699]">"el Heroico"</b> , Sebas alias
    //       <b className="italic text-[#336699]">"el mr Figma"</b>, y yo alias
    //       <b className="italic text-[#336699]">"Bolaños"</b>

    //     </p>
    //     <img
    //       className="animate-float max-w-96 drop-shadow-xl"
    //       src={nosotroimg}
    //       alt="foto de los programadores"
    //     />
    //   </div>

    //   <div className="pt-4 pb-4 bg-[#99CCFF] flex gap-5 items-center flex-wrap justify-evenly h-full min-h-screen dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-900 dark:to-black ">
    //     <h1 className="w-full h-40 p-6 text-center z-10 font-cherryFont text-7xl text-[#003366] dark:text-[#99CCFF] drop-shadow-sm ">
    //       Contacto
    //     </h1>

    //   </div>
    // </div>
    <div className="w-full  bg-[#3836FE] ">
      <Navbar />
      {/* INICIO O HERO IMAGE */}
      <div className="bg-[#3836FE]  m-auto w-full max-w-[1200px] min-h-[800px] pt-32 lg:p-0  flex flex-wrap gap-6 justify-evenly items-center ">
        <div className="h-auto flex  flex-col items-center sm:items-start  gap-10 basis-1/2">
          <h1
            className="text-5xl dynapuff-font  text-white 
          animate__animated animate__rubberBand animate__repeat-1 animate__slower "
          >
            Deja que la tecnología trabaje por ti.
          </h1>

          <h2 className="text-2xl dynapuff-font  text-white">
            Optimizamos tus procesos para maximizar tus resultados.
          </h2>
          <button className="w-fit p-5 rounded-full bg-white text-black font-bold  text-xl">
            ¡Contactar ya!
          </button>
        </div>
        <img src="/public/main-hero.svg" className="max-w-[500px] drop-shadow-2xl " />
      </div>
      {/* SVG SEPARATOR */}
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="rotate-180 -mb-2"
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity=".25"
          className="shape-fill w-full fill-white"
        ></path>
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          opacity=".5"
          className="shape-fill w-full fill-white"
        ></path>
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          className="shape-fill w-full fill-white"
        ></path>
      </svg>
      {/* SERVICOS */}
      <div className="p-6  bg-white w-full min-h-[800px]  flex flex-col justify-center items-center">
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl md:w-1/2 py-4 dynapuff-font text-center text-black">
          Los Servicios Que Brindamos Son Los Siguientes
        </h2>
        <div className=" max-w-[1200px] m-auto  flex flex-wrap gap-6 justify-evenly items-center ">
          <CardServices
            img={"/public/service2.svg"}
            title={"Sistema a Medida"}
            info={
              "Soluciones tecnológicas personalizadas. Diseñamos y desarrollamos sistemas a la medida de tus necesidades, optimizando tus procesos."
            }
          />
          <CardServices
            img={"/public/service3.svg"}
            title={"Automatizaciones"}
            info={
              "Potencia tu negocio con automatizaciones. Olvídate de las tareas repetitivas y céntrate en lo que realmente importa."
            }
          />
          <CardServices
            img={"/public/service4.svg"}
            title={"Redes Sociales"}
            info={"Amplía tu alcance en las redes sociales. Creamos estrategias digitales para atraer nuevos clientes."}
          />
          <CardServices
            img={"/public/service5.svg"}
            title={"Mantenimiento "}
            info={"Mantenemos tu equipo funcionando al máximo. Servicio técnico especializado para computadoras, laptops, impresoras y más."}
          />
        </div>
      </div>
      {/* svg separator */}
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className="shape-fill w-full fill-white"
        ></path>
      </svg>
      {/* PROYECTOS */}
      
      <Carrusel />
      
    </div>
  );
}

export default App;
