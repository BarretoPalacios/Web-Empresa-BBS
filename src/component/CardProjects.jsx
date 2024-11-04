import React from "react";
import { Link } from "react-router-dom";

function CardProjects({ titulo, info, img,projectname }) {
  return (
    <div className=" drop-shadow-md relative hover:scale-105 transition-transform">
        <div className="absolute top-5 left-4 z-10 w-auto p-1 text-xs rounded-full bg-[#003366] text-white dark:bg-[#99CCFF] dark:text-[#003366] ">
            {projectname}
        </div>
      <Link to={"/projects"}>
        <div
          style={{
            clipPath:
              "polygon(0 0, 24% 0, 37% 15%, 100% 15%, 100% 100%, 0 100%)",
          }}
          className="bg-gradient-to-b from-sky-400 to-sky-200 dark:bg-gradient-to-t dark:from-gray-900 dark:to-gray-600 flex flex-col gap-4 max-w-80 w-full min-h-72 rounded-md pt-16 pl-4 pr-4 pb-4"
        >
          <h1 className="font-extrabold text-white text-lg">{titulo}</h1>
          <p className="text-white">{info}</p>

          <img
            className="w-full h-40 object-cover rounded-2xl"
            src={img}
            alt={titulo}
          />
        </div>
      </Link>
    </div>
  );
}

export default CardProjects;
