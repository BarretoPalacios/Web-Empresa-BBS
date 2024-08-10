import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'

    // if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //   return "dark";
    // }
    // return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const IconTheme = (
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
      className="icon icon-tabler icons-tabler-outline icon-tabler-brightness-down"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M12 5l0 .01" />
      <path d="M17 7l0 .01" />
      <path d="M19 12l0 .01" />
      <path d="M17 17l0 .01" />
      <path d="M12 19l0 .01" />
      <path d="M7 17l0 .01" />
      <path d="M5 12l0 .01" />
      <path d="M7 7l0 .01" />
    </svg>
  );

  return (
    <div className=" z-30 flex items-center justify-center p-3  fixed w-full">
      <div className="flex w-3/4 justify-evenly flex-wrap gap-2 items-center pt-6">
        <Link
          to={"/"}
          className=" text-[#003366] hover:text-slate-950 font-medium dark:text-[#99CCFF] dark:hover:text-white"
        >
          Inicio
        </Link>
        <Link
          to={"/projects"}
          className="text-[#003366] hover:text-slate-950 font-medium dark:text-[#99CCFF] dark:hover:text-white"
        >
          Projects
        </Link>
        <Link
          to={"/services"}
          className="text-[#003366] hover:text-slate-950 font-medium dark:text-[#99CCFF] dark:hover:text-white"
        >
          Services
        </Link>
        <Link
          to={"/more"}
          className="text-[#003366] hover:text-slate-950 font-medium dark:text-[#99CCFF] dark:hover:text-white"
        >
          More
        </Link>
        <button
          onClick={handleTheme}
          className="block w-10 h-10 p-2 bg-white rounded-full "
        >
          {IconTheme}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
