import React from "react";
import Navbar from "../component/Navbar";

function ServicePage() {
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
          Los <b className="text-[#3836FE]"> Servicios</b> <br /> Que Ofrecemos
        </h2>
        <img
          src="service1.svg"
          className="max-w-[200px] md:max-w-[350px] drop-shadow-xl hover:scale-105 transition-transform"
        />
      </div>

      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full overflow-hidden"
        fill="white"
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity=".25"
          className="shape-fill"
        ></path>
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          opacity=".5"
          className="shape-fill"
        ></path>
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          className="shape-fill"
        ></path>
      </svg>
      <br />
      <br />

      <div className="p-4 flex flex-col gap-8 ">
        <div
          className="bg-white pt-12 m-auto w-full max-w-[1200px] min-h-[800px] p-6  border
      flex justify-center items-center flex-wrap rounded-2xl"
        >
          <div className=" md:p-8 text-[#3836FE] font-bold flex flex-col gap-2 w-full md:w-1/2">
            <h2 className="text-black w-auto pb-12  md:w-full  text-3xl md:text-5xl  text-center py-2 md:py-10 dynapuff-font drop-shadow-lg  ">
              Servicio de Automatizacion
            </h2>
            <p className="">
              Potencia tu negocio con la implementación de automatizaciones
              inteligentes. Olvídate de las tareas manuales y repetitivas que
              consumen tiempo y recursos, permitiendo que tu equipo se enfoque
              en actividades estratégicas y de alto impacto.
            </p>
            <h3 className="text-2xl text-black">Beneficios clave:</h3>

            <ul className="list-outside space-y-2 text-black">
              <li>
                Ahorro de Tiempo:
                <ul className="list-circle pl-6 space-y-1 text-[#3836fe] ">
                  <li>
                    Automatiza procesos como el envío de correos, la generación
                    de reportes, la facturación y más.
                  </li>
                </ul>
              </li>
              <li>
                Reducción de Errores:
                <ul className="list-circle pl-6 space-y-1 text-[#3836fe]">
                  <li>Minimiza los riesgos asociados con tareas manuales.</li>
                </ul>
              </li>
              <li>
                Mejor Productividad:
                <ul className="list-circle pl-6 space-y-1 text-[#3836fe]">
                  <li>
                    Permite a tus empleados dedicar su tiempo a tareas creativas
                    e innovadoras
                  </li>
                </ul>
              </li>
              <li>
                Reducción de Errores:
                <ul className="list-circle pl-6 space-y-1 text-[#3836fe]">
                  <li>
                    Implementaciones que crecen junto a tu negocio, adaptándose
                    a tus necesidades.
                  </li>
                </ul>
              </li>
              <li>
                Ejemplos:
                <ul className="list-circle pl-6 space-y-1 text-[#3836fe]">
                  <li>Recordatorios automáticos para citas o pagos.</li>
                  <li>Gestión automatizada de inventarios.</li>
                  <li>
                    Flujos de trabajo integrados entre diferentes departamentos.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <img
            src="/service1-page.svg"
            alt=""
            className="w-full md:w-1/2  drop-shadow-xl hover:scale-105 transition-transform"
          />
        </div>

        <div
          className="bg-white pt-12 m-auto w-full max-w-[1200px] min-h-[800px] p-6  border
      flex justify-center items-center flex-wrap rounded-2xl"
        >
          <div className=" md:p-8 text-[#3836FE] font-bold flex flex-col gap-2 w-full md:w-1/2">
            <h2 className="text-black w-auto pb-12  md:w-full  text-3xl md:text-5xl  text-center py-2 md:py-10 dynapuff-font drop-shadow-lg  ">
              Sistema a Medida
            </h2>
            <p className="">
              Ofrecemos soluciones tecnológicas diseñadas exclusivamente para tu
              negocio. Analizamos tus procesos, identificamos puntos de mejora y
              desarrollamos sistemas personalizados que optimizan la eficiencia
              y maximizan los resultados.
            </p>
            <h3 className="text-2xl text-black">Casos de Uso:</h3>

            <ul className="list-outside space-y-2 text-black">
              <li>
                Análisis de Requerimientos:
                <ul className="list-circle pl-6 space-y-1 text-[#3836fe] ">
                  <li>Estudiamos tus necesidades y objetivos.</li>
                </ul>
              </li>
              <li>
                Diseño Personalizado:
                <ul className="list-circle pl-6 space-y-1 text-[#3836fe]">
                  <li>
                    Creamos sistemas únicos, alineados a tus flujos de trabajo.
                  </li>
                </ul>
              </li>
              <li>
                Implementación y Capacitación:
                <ul className="list-circle pl-6 space-y-1 text-[#3836fe]">
                  <li>
                    Instalamos el sistema y entrenamos a tu equipo para su uso
                    eficiente.
                  </li>
                </ul>
              </li>
              <li>
                Soporte Continuo:
                <ul className="list-circle pl-6 space-y-1 text-[#3836fe]">
                  <li>
                    Mantenemos y actualizamos tu solución según sea necesario.
                  </li>
                </ul>
              </li>
              <li>
                Casos de Uso:
                <ul className="list-circle pl-6 space-y-1 text-[#3836fe]">
                  <li>
                    Sistemas de gestión para ventas, inventarios o empleados.
                  </li>
                  <li>
                    Software especializado para tu industria, como ERPs o CRMs.
                  </li>
                  <li>
                    Aplicaciones web o móviles que resuelven problemas
                    específicos.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <img
            src="/servicio2-page.svg"
            alt=""
            className="w-full md:w-1/2 drop-shadow-xl hover:scale-105 transition-transform"
          />
        </div>

        <div
          className="bg-white pt-12 m-auto w-full max-w-[1200px] min-h-[800px] p-6  border
      flex justify-center items-center flex-wrap rounded-2xl"
        >
          <div className=" md:p-8 text-[#3836FE] font-bold flex flex-col gap-2 w-full md:w-1/2">
            <h2 className="text-black w-auto pb-12  md:w-full  text-3xl md:text-5xl  text-center py-2 md:py-10 dynapuff-font drop-shadow-lg  ">
            Mantenimiento
            </h2>
            <p className="">
            Mantén tus equipos tecnológicos funcionando al máximo rendimiento con nuestro servicio de mantenimiento técnico especializado. Nos encargamos de detectar y solucionar problemas antes de que afecten tu productividad.
            </p>
            <h3 className="text-2xl text-black">Casos de Uso:</h3>

            <ul className="list-outside space-y-2 text-black">
              <li>
              Diagnóstico Completo:
                <ul className="list-circle pl-6 space-y-1 text-[#3836fe] ">
                  <li>Revisión exhaustiva de computadoras, laptops, impresoras y más.</li>
                </ul>
              </li>
              <li>
              Reparación Rápida:
                <ul className="list-circle pl-6 space-y-1 text-[#3836fe]">
                  <li>
                  Soluciones inmediatas para minimizar tiempos de inactividad.
                  </li>
                </ul>
              </li>
              <li>
              Optimización del Rendimiento:
                <ul className="list-circle pl-6 space-y-1 text-[#3836fe]">
                  <li>
                  Actualización de software y hardware para garantizar el funcionamiento eficiente.
                  </li>
                </ul>
              </li>
              <li>
              Mantenimiento Preventivo:
                <ul className="list-circle pl-6 space-y-1 text-[#3836fe]">
                  <li>
                  Limpieza y ajustes regulares para evitar fallos futuros.
                  </li>
                </ul>
              </li>
              <li>
              Beneficios del Mantenimiento Regular:
                <ul className="list-circle pl-6 space-y-1 text-[#3836fe]">
                  <li>
                  Prolonga la vida útil de tus equipos.
                  </li>
                  <li>
                  Reduce los costos asociados a reparaciones mayores o reemplazos.
                  </li>
                  <li>
                  Garantiza el rendimiento óptimo en el día a día de tu negocio.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <img
            src="/mante.svg"
            alt=""
            className="w-full md:w-1/2 drop-shadow-xl hover:scale-105 transition-transform"
          />
        </div>
        
      </div>
    </div>
  );
}

export default ServicePage;
