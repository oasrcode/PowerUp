import { useNavigate } from "react-router-dom";
import calorias from "../../assets/icons/calorias.png";

export function CaloriesCard({prop}) {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col items-center justify-center w-full h-22 rounded-md  bg-gradient-to-r from-yellow-400 via-red-500 to-red-800 space-y-3 shadow-md shadow-neutral-700">
      <button className="relative self-end m-1 px-4 py-2 bg-black rounded-md items-center justify-center text-neutral-50 hover:opacity-90 hover:translate-y-[0.5px]" onClick={()=>navigate("/dashboard/dailycals")}>
        Calcular
      </button>

      <div className="flex flex-row self-center items-center justify-center">
        <div className="w-28 md:w-28">
          <img src={calorias} className="object-contain"></img>
        </div>
        <p className="text-neutral-900 font-semibold text-4xl">{prop?.calories?prop?.calories:""}</p>
      </div>
    </div>
  );
}
