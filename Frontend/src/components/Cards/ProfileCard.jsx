import { BsCalendarDate } from "react-icons/bs";
import { GiBodyHeight, GiWeight } from "react-icons/gi";
export function ProfileCard() {
  return (
    <div>
      <div className="flex flex-col text-center w-full bg-gradient-to-b md:bg-gradient-to-b rounded-md shadow-md md:shadow-neutral-700 from-neutral-50 to bg-neutral-300 ">
        <button className="relative self-end px-4 py-1 mt-1 mr-1 lg:px-4 lg:py-2 bg-neutral-900 rounded-md lg:rounded-l-md lg:rounded-tr-md items-center justify-center text-neutral-50 hover:opacity-90 hover:translate-y-[0.5px]">
          Editar
        </button>

        <p className="text-black font-bold text-4xl 2xl:pt-10 pt-4">
          {"Chris Bumsted"}
        </p>

        <p className="text-neutral-900 pt-5 text-lg">{"20-02-1987"}</p>

        <div className="flex flex-row  items-center justify-evenly p-10 space-x-10 bg-neutral-900 h-28 border-t-8  border-red-700 rounded-b-md">
          <div className="flex flex-col space-y-3 ">
            <div className="flex flex-row  gap-4 items-center ">
              <BsCalendarDate className="text-red-700" size={30} />
              <p className="text-xl text-red-700">Edad</p>
            </div>
            <p className="text-center font-semibold text-2xl text-neutral-50">
              {24}
              {" años"}
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            <div className="flex flex-row  gap-4 items-center ">
              <GiBodyHeight className="text-red-700" size={30} />
              <p className="text-xl  text-red-700">Altura</p>
            </div>
            <p className="text-center font-semibold text-2xl  text-neutral-50">
              {170}
              {" cm"}
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            <div className="flex flex-row  gap-4 items-center ">
              <GiWeight className="  text-red-700" size={30} />
              <p className="text-xl  text-red-700">Peso</p>
            </div>
            <p className="text-center font-semibold text-2xl text-neutral-50">
              {80}
              {" Kg"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
