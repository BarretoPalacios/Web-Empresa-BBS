function CardServices({ img, title, info }) {
  return (
    <div className="bg-gradient-to-b to-[#3836FE] from-slate-50  flex flex-col gap-4 max-w-64 h-fit  rounded-3xl shadow-md ">
      <div className="flex h-1/2 items-center">
        <img
          className="animate-zoom drop-shadow-xl w-[100%] "
          src={img}
          alt={title}
        />
      </div>
      <div className="flex flex-col gap-6 items-center justify-start p-4 text-center capitalize">
        <h3 className="text-xl text-[#fff] font-bold  dark:text-[#fff]">
          {title}
        </h3>
        <p className="text-sm text-[#fff] font-light dark:text-[#fff] ">
          {info}
        </p>
        {/* <button className="text-sm bg-white text-[#3836FE] font-bold p-2 rounded-full hover:bg-[#99CCFF] ">
          Mas Info
        </button> */}
      </div>
    </div>
  );
}

export default CardServices;
