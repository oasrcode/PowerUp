import { TfiClose } from "react-icons/tfi";
export function MessengeAlert({ message, prop }) {
  return (
    <div className="flex flex-row bg-green-300  z-10 border-2 border-green-700 p-3 absolute top-0 2xl:mt-8 md:w-[40%] left-0 right-0 mx-auto rounded-lg h-14  w-full animate-pulse">
      <p className="font-sans text-green-700 font-semibold text-xl w-full text-center self-center">
        {message ? message : "Perfil Guardado"}
      </p>
      <button className=" w-5 h-5  text-green-700" onClick={() => prop(false)}>
        <TfiClose size={20} />
      </button>
    </div>
  );
}
