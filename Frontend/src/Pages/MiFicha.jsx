import { BsCalendarDate } from "react-icons/bs";
import { GoFlame } from "react-icons/go";
import { UseStatsChart } from "../components/Charts/UserStatsChart"

export function MiFicha() {
  const user = {};

  user.name = "Carlos";
  user.surname = "Pérez Santana";
  user.date = "1995-03-21";
  user.height = "185";
  user.weight = "80";

  var today = new Date();
  var birthDate = new Date(user.date);
  var age = today.getFullYear() - birthDate.getFullYear();
  const [year, month, day] = user.date.split("-");
  const result = [month, day, year].join("/");
  user.date = result;

  return (
    <div className=" flex flex-col w-full max-w-ful h-screen  lg:flex-row ">
      <div className="bg-red-300 w-full max-w-full h-full overflow-auto">
        <div className="flex flex-col items-center mt-10">
          <p className="text-gray-900 font-bold text-3xl">{user.name}</p>
          <p className="text-gray-900  text-xl">{user.surname}</p>
          <p>{user.date}</p>
        </div>
        <div className="flex flex-row  items-center justify-evenly ">
          <div className="flex flex-col ">
            <div className="flex flex-row  gap-4 items-center ">
              <BsCalendarDate size={20} />
              <p>Edad</p>
            </div>
            <p className="text-center font-semibold">{age}</p>
          </div>
          <div className="flex flex-col">
            <p>Altura</p>
            <p>{user.height}</p>
          </div>
          <div className="flex flex-col">
            <p>Peso</p>
            <p>{user.weight}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full h-full">
        <UseStatsChart/>
      </div>

      <div className="flex flex-row  items-center justify-evenly">
       
        <div className=" flex flex-col  items-center justify-center  bg-gradient-to-t from-red-500 to-red-700 rounded-lg space-y-3">
           <GoFlame className="text-yellow-500 " size={100}/>
            <p className="text-white font-semibold text-2xl">2000 cals</p>
        </div>

        <div className=" flex flex-col  items-center justify-center bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg space-x-10">
            <p className="font-bold text-white text-5xl">IMC</p>
            <p className="font-extrabold text-5xl text-white"> 21</p>
        </div>

        <div className=" flex flex-col items-center justify-center bg-gradient-to-r from-yellow-500 to-amber-600  rounded-lg  space-x-10">
        <p className="font-bold text-white text-5xl">Grasa</p>
        <p className="font-extrabold text-5xl text-white">21%</p>
        </div>

        </div>
        
      
    </div>
  );
}
