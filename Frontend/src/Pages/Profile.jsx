import { useState } from "react";
import { AiOutlineSave, AiOutlineEdit } from "react-icons/ai";

export function Profile() {
  const [enable, setEnable] = useState(true); //false to activate
  
  const [name,setName] = useState();
  const [surname,setSurname] = useState();
  const [date,setDate] = useState();
  const [weight,setweight] = useState();
  const [height,setheight] = useState();
  
  function handleSubmit(e){
    e.preventDefault();
    
    const user={}
    console.log("click")
    setEnable(true);
  }

  return (
    <div className="flex flex-col w-full max-w-full h-full">
      <h2 className="font-semibold text-2xl  text-center pt-10">Mi perfil</h2>
      <div className="flex flex-col  w-full h-auto lg:w-2/5 lg:mx-auto my-auto pl-4 pr-10">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-3">
            <label className="font-semibold text-black text-lg">Nombre</label>
            <input
            id="name"
              className="p-3 rounded-md w-full "
              type={"text"}
              placeholder="nombre"
            ></input>
          </div>

          <div className="flex flex-col space-y-3">
            <label className="font-semibold text-black text-lg">Apellido</label>
            <input
            id="surname"
              className="p-3 rounded-md w-full"
              type={"text"}
              placeholder="Apellidos"
            ></input>
          </div>

          <div className="flex flex-col space-y-3 w-44">
            <label  className="font-semibold text-black text-lg">
              Fecha de nacimiento
            </label>
            <input
            id="date"
              className="p-3 rounded-md w-full"
              type={"date"}
              placeholder="nombre"
            ></input>
          </div>

          <div className="flex flex-col space-y-3 w-44">
            <label  className="font-semibold text-black text-lg">Peso</label>
            <input 
            id="weight"
              className="p-3 rounded-md w-full"
              type={"number"}
              placeholder="peso en kg"
            ></input>
          </div>

          <div className="flex flex-col space-y-3 w-44">
            <label  className="font-semibold text-black text-lg">Altura</label>
            <input
              id="height"
              className="p-3 rounded-md w-full"
              type={"number"}
              placeholder="altura en cm"
            ></input>
          </div>

          <div className="flex flex-row justify-center lg:justify-end lg:pr-5 gap-4 pt-10">
              <input type="button" value="Editar" onClick={()=>setEnable(false)} className="flex flex-row items-center gap-1 px-6 lg:px-10 py-2 bg-slate-200 text-black rounded-md disabled:bg-slate-800 disabled:text-gray-200"/>
            <input type="submit" value="Guardar" disabled={enable}  className="flex flex-row items-center gap-1 px-4 lg:px-8 py-2 bg-slate-200 text-black rounded-md disabled:bg-slate-800 disabled:text-gray-200"/>
          </div>
        </form>
      </div>
    </div>
  );
}
