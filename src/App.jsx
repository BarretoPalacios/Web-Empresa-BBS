import Navbar from "./component/Navbar";
import ImgBaner from "./assets/image/img4.png";

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="bg-[#99CCFF] flex gap-5 flex-wrap justify-evenly items-center p-4 pt-20 h-full min-h-screen  relative overflow-x-hidden overflow-y-hidden dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-900 dark:to-black">
        <h1 className=" text-start z-10 font-cherryFont text-9xl text-white drop-shadow-2xl ">
          Build <br />
          <span className="text-[#003366] dark:text-[#99CCFF]">Beautifull</span> <br />
          Service
        </h1>
        <div className="animate-float z-10  max-w-96 h-auto flex p-4 justify-center items-center rounded-2xl ">
          <img className="w-full drop-shadow-xl" src={ImgBaner} alt="" />
        </div>

        <div className=" absolute -top-40 -left-40 w-80 h-80 border-solid border-[80px] border-white rounded-full shadow-2xl"></div>
        <div className=" absolute -bottom-40 -right-40 w-80 h-80 border-solid border-[80px] border-white rounded-full rotate-180 shadow-2xl"></div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vero
        quibusdam nemo at ullam ut quis. Corporis accusantium, sequi quia odit a
        nobis adipisci assumenda ut obcaecati, ipsam sapiente distinctio!
      </p>
    </div>
  );
}

export default App;
