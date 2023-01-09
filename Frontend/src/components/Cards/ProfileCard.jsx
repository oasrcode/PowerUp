
import { BsCalendarDate } from "react-icons/bs";
import { GiBodyHeight, GiWeight } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { ageCalculator } from "../../tools/ageCalculator";
import { formatDate } from "../../tools/formatDate";
import { UseStatsChart } from "../Charts/UserStatsChart";


export function ProfileCard({userData,lifts}) {
  const navigate = useNavigate();
  
  return (
    <div>
      <div className="flex flex-col text-center md:w-[90%]  md:mx-auto  md:rounded-md bg-gradient-to-b bg-neutral-50">
        <button className="relative self-end px-4 py-1 mt-1 mr-1 lg:px-4 lg:py-2 bg-neutral-900 rounded-md lg:rounded-l-md lg:rounded-tr-md items-center justify-center text-neutral-50 hover:opacity-90 hover:translate-y-[0.5px]" onClick={()=>navigate("/dashboard/profile")}>
          Editar
        </button>

        <p className="text-neutral-900 font-bold text-4xl 2xl:pt-10 pt-4 ">
          {userData?.name}
        </p>

        <p className="text-neutral-900 pt-5 text-lg">{formatDate(userData?.date)}</p>

        <div className="flex flex-row  items-center justify-evenly p-10  space-x-5 md:space-x-10   h-28 border-t-8  border-red-700  bg-neutral-900">
          <div className="flex flex-col space-y-3 ">
            <div className="flex flex-row  gap-4 items-center ">
              <BsCalendarDate className="text-red-700" size={30} />
              <p className="text-xl  text-red-700">Edad</p>
            </div>
            <p className="text-center font-semibold text-2xl  text-neutral-50">
              {ageCalculator(userData?.date)}
              {" años"}
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            <div className="flex flex-row  gap-4 items-center ">
              <GiBodyHeight className="text-red-700" size={30} />
              <p className="text-xl  text-red-700">Altura</p>
            </div>
            <p className="text-center font-semibold text-2xl  text-neutral-50">
              {userData?.height}
              {" cm"}
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            <div className="flex flex-row  gap-4 items-center ">
              <GiWeight className="  text-red-700" size={30} />
              <p className="text-xl  text-red-700">Peso</p>
            </div>
            <p className="text-center font-semibold text-2xl text-neutral-50">
            {userData?.weight}
              {" Kg"}
            </p>
          </div>
        </div>
        <div className="flex h-72    bg-neutral-900 md:rounded-b-md">
          
          <UseStatsChart lifts={lifts}/>
         
        
        </div>
      </div>
    </div>
  );
}
