export function Profile() {
  const enableInput = false; //false to activate
  const name = "sadasdad";
  return (
    <div className="flex flex-col w-full max-w-full h-full">
      <h2 className="font-semibold text-2xl  text-center pt-10">Mi perfil</h2>
      <div className="flex flex-col  w-full h-auto lg:w-2/5 lg:mx-auto my-auto pl-4 pr-10">
        <div className="flex flex-col space-y-3">
          <label className="font-semibold text-black text-lg">Nombre</label>
          <input
            className="p-3 rounded-md w-full "
            type={"text"}
            placeholder="nombre"
          ></input>
        </div>

        <div className="flex flex-col space-y-3">
          <label className="font-semibold text-black text-lg">Apellido</label>
          <input
            className="p-3 rounded-md w-full"
            type={"text"}
            placeholder="Apellidos"
          ></input>
        </div>

        <div className="flex flex-col space-y-3 w-44">
          <label className="font-semibold text-black text-lg">
            Fecha de nacimiento
          </label>
          <input
            className="p-3 rounded-md w-full"
            type={"date"}
            placeholder="nombre"
          ></input>
        </div>

        <div className="flex flex-col space-y-3 w-44">
          <label className="font-semibold text-black text-lg">Peso</label>
          <input
            className="p-3 rounded-md w-full"
            type={"number"}
            placeholder="peso en kg"
          ></input>
        </div>

        <div className="flex flex-col space-y-3 w-44">
          <label className="font-semibold text-black text-lg">Altura</label>
          <input
            className="p-3 rounded-md w-full"
            type={"number"}
            placeholder="altura en cm"
          ></input>
        </div>

        <div className="flex flex-row justify-end pr-5 gap-4 pt-10">
          <button className="px-8 py-2 bg-slate-200 text-black rounded-md hover:bg-slate-400">
            Altura
          </button>
          <button
            className="px-8 py-2 bg-slate-200 text-black rounded-md disabled:bg-slate-800 disabled:text-gray-200"
            disabled={true}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}
