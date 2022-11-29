import { GoFlame } from "react-icons/go";
import { BodyFatChart } from "../BodyFatChart";
import { UseStatsChart } from "../Charts/UserStatsChart";
import { UserWeightChart } from "../Charts/UserWeightChart";
import { MenuDashboard } from "../components/MenuDashboard";

export function oldDash() {
  const valor = 35;
  return (
    <div className="flex flex-col  md:flex-row   bg-gray-900">
      <MenuDashboard />

      <div className="flex flex-col w-full max-w-full h-screen bg-gray-200">
        
         <div id="1" className="hidden md:flex flex-col w-[95%] max-w-full  items-center justify-center mx-auto mt-4 bg-gray-700 rounded-lg">
          <h2 className="text-white text-5xl sm:text-6xl md:text-7xl font-bold ">
            Bienvenido!
          </h2>
          <p className="font-bold text-gray-300 text-xl">
            Mide, controla y crece.
          </p>
        </div>

    
        <div id="2" className="flex flex-col sm:flex-row w-full max-w-full pt-2  rounded-lg space-y-2">
          
          <div id="2.1" className="flex flex-col w-[95%] max-w-full  mx-auto items-center justify-center rounded-lg bg-slate-50">
            <p className="text-black font-semibold font-sans text-2xl pt-4 text-center">
              Nombre{" "}
            </p>
            <p className="text-black font-semibold font-sans text-xl text-center">
              Apellidos del usuario
            </p>
            <div className="flex flex-row w-full max-w-full  h-24  items-center justify-evenly">
              <div className="flex flex-col items-center justify-center">
                <p className="font-bold ">Edad</p>
                <p className="py-1 px-6  bg-slate-400 text-black rounded-lg">
                  24
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-bold">Altura</p>
                <p className="py-1 px-2 bg-slate-400 text-black rounded-lg">
                  180 cm
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-bold">Peso</p>
                <p className="py-1 px-4  bg-slate-400 text-black rounded-lg">
                  74 kg
                </p>
              </div>
            </div>
          </div>

           
          <div id="2.1" className="flex w-[95%] py-4 mx-auto h-48 bg-gray-50 rounded-lg ">
           <UseStatsChart/>
          </div>

        </div>


        <div id="3" className="flex flex-row items-center justify-evenly space-x-2 p-3">

            <div className="flex flex-col w-full items-center justify-center  py-1 bg-red-700 rounded-xl ">
              <GoFlame className="text-yellow-500" size={50} />
              <p className="text-white font-bold text-2xl">2000 cal</p>
            </div>
            <div className="flex flex-col w-full items-center justify-center  py-2 bg-gray-700 rounded-xl ">
              <p className="text-white font-bold text-3xl">IMC <span>17</span></p>
            </div>
            <div className="flex flex-col w-full items-center justify-center  py-3 bg-gray-700 rounded-xl ">
              <p className="text-white font-bold text-2xl">Grasa<span>12</span></p>
            </div>
          
        </div>


        <div id="4" className="flex w-[90%] h-full self-center">
          <UserWeightChart/>
        </div>

       
        {/* <div id="3" className="flex  flex-col  w-full h-screen space-y-5">

        
          <div className="flex flex-row w-full h-auto justify-center ">
            <div className="flex flex-col w-72  h-auto items-center justify-center self-center bg-red-700 mx-10 rounded-xl ">
              <GoFlame className="text-yellow-500" size={100} />
              <p className="text-white font-bold text-2xl">2000 cal</p>
            </div>
            <div className="flex flex-col w-72  h-auto items-center justify-center self-center bg-red-700 mx-10 rounded-xl ">
              <GoFlame className="text-yellow-500" size={100} />
              <p className="text-white font-bold text-2xl">2000 cal</p>
            </div>
            <div className="flex flex-col w-72  h-auto items-center justify-center self-center bg-red-700 mx-10 rounded-xl ">
              <GoFlame className="text-yellow-500" size={100} />
              <p className="text-white font-bold text-2xl">2000 cal</p>
            </div>

          </div>

          <div className="flex overflow-visible flex-col w-full h-96 sm:h-auto pb-5 px-5">
            <UserWeightChart/>
          </div>

       </div>  */}
       

      </div>

    </div>
  );
}
