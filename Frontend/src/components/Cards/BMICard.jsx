
import bmi from "../../assets/icons/bmi.png";
import { bmiCalculator } from "../../tools/bmiCalculator";
export function BMICard({prop}) {
let value = bmiCalculator(prop?.weight,prop?.height)
  return (
    <div className="flex flex-row items-center justify-center space-x-4 w-full h-48 rounded-md  bg-gradient-to-r from-sky-400 to bg-blue-800 space-y-3 shadow-md shadow-neutral-700">
      <div className=" w-20 md:w-20">
        <img src={bmi} className="object-contain"></img>
      </div>
      <p className="text-neutral-900 font-semibold text-5xl">{value?value:""}</p>
    </div>
  );
}
