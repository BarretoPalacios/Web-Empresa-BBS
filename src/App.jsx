import CardServices from "./component/CardServices";
import Navbar from "./component/Navbar";
import "animate.css";
import Carrusel from "./component/Carrusel";
function App() {
  return (
    <div className="w-full relative bg-[#3836FE] ">
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
      <Navbar />
      {/* INICIO O HERO IMAGE */}
      <div className="bg-[#3836FE]  m-auto w-full max-w-[1200px] min-h-[800px] pt-32 lg:p-0  flex flex-wrap gap-6 justify-evenly items-center ">
        <div className="h-auto flex  flex-col items-center sm:items-start  gap-10 basis-1/2">
          <h1
            className="text-5xl dynapuff-font  text-white 
          animate__animated animate__rubberBand animate__repeat-1 animate__slower "
          >
            Deja que la tecnología trabaje por ti...
          </h1>

          <h2 className="text-2xl dynapuff-font  text-white">
            Optimizamos tus procesos para maximizar tus resultados.
          </h2>
          <a
            href="https://wa.me/51933238447?text=Hola,%20vi%20tu%20página%20web%20y%20estoy%20interesado%20en%20tus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit p-5 rounded-full bg-white text-black font-bold  text-xl"
          >
            ¡Contactar ya!
          </a>
        </div>
        <img src="main-hero.svg" className="max-w-[500px] drop-shadow-2xl " />
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
            img={"service3.svg"}
            title={"Automatizaciones"}
            info={
              "Potencia tu negocio con automatizaciones. Olvídate de las tareas repetitivas y céntrate en lo que realmente importa."
            }
          />
          <CardServices
            img={"service2.svg"}
            title={"Sistema a Medida"}
            info={
              "Soluciones tecnológicas personalizadas. Diseñamos y desarrollamos sistemas a la medida de tus necesidades, optimizando tus procesos."
            }
          />
          <CardServices
            img={"service5.svg"}
            title={"Mantenimiento "}
            info={
              "Mantenemos tu equipo funcionando al máximo. Servicio técnico especializado para computadoras, laptops, impresoras y más."
            }
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
      {/* SVG SEPARATOR */}
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="rotate-180 fill-white -mb-1"
      >
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          className="shape-fill"
        ></path>
      </svg>
      {/* NOSOTROS */}
      <div className="p-6  bg-white w-full min-h-[800px]  flex flex-col justify-center items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl md:w-1/2 py-4 dynapuff-font text-center text-black">
          Nuestro Equipo
        </h2>
        <div className=" max-w-[1200px] m-auto flex flex-wrap gap-6 justify-evenly items-center ">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 shadow-xl rounded-xl w-full sm:w-96 h-auto sm:h-56">
            <img
              src="https://doodleipsum.com/700/avatar-4?i=9ed28606f4304a20665c51f4230a633a"
              // src="https://cdn.prod.website-files.com/64c73d04a946980a4476537e/64cd4d0257f3906c2314e093_roboto.png"
              alt=""
              className="object-cover w-1/2 h-full rounded-xl border"
            />
            <div className="flex flex-col gap-3 justify-between">
              <h5 className="capitalize font-bold text-2xl  text-[#3836FE]">
                wilson david barreto
              </h5>
              <h4 className="capitalize font-bold ">
                Desarrollador web - full stack
              </h4>
              <a
                href="https://github.com/BarretoPalacios"
                target="true"
                className="text-center bg-[#3836FE] text-white font-bold p-2 rounded-lg"
              >
                Github
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 shadow-xl rounded-xl w-full sm:w-96 h-auto sm:h-56">
            <img
              src="https://doodleipsum.com/700/avatar-4?i=0dc89625a8d63095bea8a5511a2aab2d"
              // src="https://cdn.prod.website-files.com/64c73d04a946980a4476537e/64cd4d1949333dd65b97493f_waiting.png"
              alt=""
              className="object-cover w-1/2 h-full rounded-xl border"
            />
            <div className="flex flex-col gap-3 justify-between">
              <h5 className="capitalize font-bold text-2xl  text-[#3836FE]">
                Daza firma luis ernesto
              </h5>
              <h4 className="capitalize font-bold ">
                Desarrollador web - Backend
              </h4>
              <a
                href="https://github.com/LuisErnesto1234"
                target="true"
                className="text-center bg-[#3836FE] text-white font-bold p-2 rounded-lg"
              >
                Github
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 shadow-xl rounded-xl w-full sm:w-96 h-auto sm:h-56">
            <img
              src="https://doodleipsum.com/700/avatar-4?i=6e4392ed857ee939993024e3a174f183"
              // src="https://cdn.prod.website-files.com/64c73d04a946980a4476537e/64cd4b9065d907b296812105_groceries.png"
              alt=""
              className="object-cover w-1/2 h-full rounded-xl border"
            />
            <div className="flex flex-col gap-3 justify-between">
              <h5 className="capitalize font-bold text-2xl  text-[#3836FE]">
                Rojas Rahi Carlos Ostin
              </h5>
              <h4 className="capitalize font-bold ">
                Desarrollador web - Backend
              </h4>
              <a
                href="https://github.com/Rahi-Rojas"
                target="true"
                className="text-center bg-[#3836FE] text-white font-bold p-2 rounded-lg"
              >
                Github
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 shadow-xl rounded-xl w-full sm:w-96 h-auto sm:h-56">
            <img
              src="https://doodleipsum.com/700/avatar-4?i=6308da9791a4ed11a2c56d2554d02810"
              // src="https://cdn.prod.website-files.com/64c73d04a946980a4476537e/64d190d6faa5e45333b85ae6_pacheco.png"
              alt=""
              className="object-cover w-1/2 h-full rounded-xl border"
            />
            <div className="flex flex-col gap-3 justify-between">
              <h5 className="capitalize font-bold text-2xl  text-[#3836FE]">
                Ganoza Sebastian
              </h5>
              <h4 className="capitalize font-bold ">
                Desarrollador web - Databases
              </h4>
              <a
                href="https://github.com/SebastianGanoza21"
                target="true"
                className="text-center bg-[#3836FE] text-white font-bold p-2 rounded-lg"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* SVG SEPARATOR */}
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className=" fill-white"
      >
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          className="shape-fill"
        ></path>
      </svg>
    </div>
  );
}

export default App;
