import {  useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="z-10 fixed top-0 left-0 right-0 mt-4 m-auto bg-white rounded-full w-full max-w-[1200px]  flex items-center justify-between flex-wrap  sm:justify-evenly p-6 shadow-lg">
        {/* logo de la empresa */}
        <Link to={"/"} className="">
          <img src="logo-icon-blue.svg" alt="" className="max-w-10" />
        </Link>
        {/* links del navbar  */}
        <div className="hidden sm:flex justify-evenly gap-4 w-3/4 ">
          <a href={"/"} className=" text-white capitalize font-medium">
            Inicio
          </a>
          <a
            href={"/projects"}
            className="text-[#3836fe] capitalize font-medium"
          >
            Projectos
          </a>
          <a
            href={"/services"}
            className="text-[#3836fe] capitalize font-medium"
          >
            Servicios
          </a>
          <a href={"/more"} className="text-[#3836fe] capitalize font-medium">
            Nosotros
          </a>
        </div>
        {/* boton de menu */}
        <button className="sm:hidden" onClick={() => setIsOpen(true)}>
          {isOpen ? (
            <svg
              color="#3836fe"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-x"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          ) : (
            <svg
              color="#3836fe"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          )}
        </button>
        <div
          onClick={() => setIsOpen(false)}
          className={`${
            isOpen ? "flex" : "hidden"
          } z-20 absolute left-0 right-0 overflow-hidden -top-4 bottom-0 w-full h-screen  justify-center items-center bg-black/60 `}
        >
          <div className="w-full max-w-xs flex flex-col px-6 py-10 gap-5 rounded-md bg-white">
            <a
              href={"/"}
              className=" text-[#3836fe] capitalize font-medium text-3xl flex items-center gap-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-pointer"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7.904 17.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l4.907 4.907a1.067 1.067 0 0 0 1.509 0l1.047 -1.047a1.067 1.067 0 0 0 0 -1.509l-4.907 -4.907l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563z" />
              </svg>
              Inicio
            </a>
            <a
              href={"/projects"}
              className="text-[#3836fe] capitalize font-medium text-3xl flex items-center gap-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-pointer"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7.904 17.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l4.907 4.907a1.067 1.067 0 0 0 1.509 0l1.047 -1.047a1.067 1.067 0 0 0 0 -1.509l-4.907 -4.907l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563z" />
              </svg>
              Projects
            </a>
            <a
              href={"/services"}
              className="text-[#3836fe] capitalize font-medium text-3xl flex items-center gap-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-pointer"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7.904 17.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l4.907 4.907a1.067 1.067 0 0 0 1.509 0l1.047 -1.047a1.067 1.067 0 0 0 0 -1.509l-4.907 -4.907l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563z" />
              </svg>
              Services
            </a>
            <a
              href={"/more"}
              className="text-[#3836fe] capitalize font-medium text-3xl flex items-center gap-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-pointer"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7.904 17.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l4.907 4.907a1.067 1.067 0 0 0 1.509 0l1.047 -1.047a1.067 1.067 0 0 0 0 -1.509l-4.907 -4.907l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563z" />
              </svg>
              Nosotros
            </a>
          </div>
        </div>
      </nav>
     
    </>
  );
}

export default Navbar;
