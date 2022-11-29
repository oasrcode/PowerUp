import { MdPerson } from "react-icons/md";
import { GiStrongMan } from "react-icons/gi";
import { BiDumbbell, BiLogOut } from "react-icons/bi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { ImCalculator } from "react-icons/im";
import { GiChart } from "react-icons/gi";
import { useState } from "react";
export function MenuDashboard() {
  const [display, setDisplay] = useState(false);
  return (
    <div
      id="menu"
      className="w-full md:w-1/5 md:h-screen  bg-gray-700  mx-auto md:my-auto  flex flex-row md:flex-col justify-evenly md:justify-between "
    >
      <div className="flex flex-row  w-full h-16 items-center justify-center md:pt-10">
        <BiDumbbell className="text-white" size={40} />
        <h1 className=" flex text-white text-3xl font-bold font-mono text-center">
          Jacked
        </h1>
      </div>

      <div
        className="md:hidden flex items-center pr-1 text-white"
        onClick={() => setDisplay(!display)}
      >
        {display ? <AiOutlineClose size={40} /> : <AiOutlineMenu size={40} />}
      </div>

      <div
        className={
          display
            ? "fixed top-0 left-0 w-[80%] h-full bg-gray-700  duration-200 rounded-r-3xl z-10"
            : "fixed top-0 left-[-100%] w-[80%] h-full bg-gray-700 duration-200 rounded-3xl z-10"
        }
      >
       
        <div className="h-full flex flex-col items-center justify-evenly  ">
          <h1 className="flex text-white text-3xl font-bold font-mono">Menú</h1>
          <div className="flex flex-col w-full  items-center justify-start space-y-10">
            <button className="flex flex-row w-[80%] space-x-6 items-center  text-white  transition duration-300 rounded-3xl text-lg font-sans font-semibold hover:bg-red-100 hover:text-black  ">
              <MdPerson size={50} />
              <p className="">Mi Perfil</p>
            </button>
            <button className="flex flex-row w-[80%] space-x-6 items-center  text-white  transition duration-300 rounded-3xl text-lg font-sans font-semibold hover:bg-red-100 hover:text-black  ">
              <GiStrongMan size={50} />
              <p className="">Levantamientos</p>
            </button>
            <button className="flex flex-row w-[80%] space-x-6 items-center  text-white  transition duration-300 rounded-3xl text-lg font-sans font-semibold hover:bg-red-100 hover:text-black  ">
              <GiChart size={50} />
              <p className="">Progreso</p>
            </button>
            <button className="flex flex-row w-[80%] space-x-6 items-center  text-white  transition duration-300 rounded-3xl text-lg font-sans font-semibold hover:bg-red-100 hover:text-black  ">
              <ImCalculator size={50} />
              <p className="">Calculadora</p>
            </button>
            <button className="flex flex-row w-[80%] space-x-6 items-center  text-white  transition duration-300 rounded-3xl text-lg font-sans font-semibold hover:bg-red-100 hover:text-black  ">
              <BiLogOut size={50} />
              <p className="">Salir</p>
            </button>
          </div>
        </div>
      </div>

        
      <div className="hidden lg:flex flex-row md:flex-col items-center justify-center  md:space-y-10 ">
        <button className="flex flex-row  items-center justify-evenly text-white md:w-[70%] md:p-3 transition duration-300 rounded-3xl text-lg font-sans font-semibold hover:bg-red-100 hover:text-black  ">
          <MdPerson size={50} />
          <p className="hidden 2xl:block">Mi Perfil</p>
        </button>
        <button className="flex flex-row  items-center justify-evenly text-white md:w-[70%] md:p-3 trasitio duration-300 rounded-3xl text-lg font-sans font-semibold hover:bg-red-100 hover:text-black  ">
          <GiStrongMan size={50} />
          <p className="hidden 2xl:block">Levantamientos</p>
        </button>
        <button className="flex flex-row  items-center justify-evenly text-white md:w-[70%] md:p-3 trasitio duration-300 rounded-3xl text-lg font-sans font-semibold hover:bg-red-100 hover:text-black  ">
          <GiChart size={50} />
          <p className="hidden 2xl:block">Progreso</p>
        </button>
        <button className="flex flex-row  items-center justify-evenly text-white md:w-[70%] md:p-3 trasitio duration-300 rounded-3xl text-lg font-sans font-semibold hover:bg-red-100 hover:text-black  ">
          <ImCalculator size={50} />
          <p className="hidden 2xl:block">Calculadora</p>
        </button>
      </div>

      <div className="hidden lg:flex items-center justify-center md:pb-10">
        <button className="flex flex-row items-center justify-evenly text-white md:w-[70%] md:p-3 trasitio duration-300 rounded-3xl text-lg font-sans font-semibold hover:bg-red-100 hover:text-black  ">
          <BiLogOut size={50} />
          <p className="hidden 2xl:block">Salir</p>
        </button>
      </div>
    </div>
  );
}
