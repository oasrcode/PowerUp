export function AddLiftForm() {
  return (
   
      <div className="flex flex-col w-full h-auto bg-neutral-900  m-2 shadow-md shadow-neutral-700 rounded-md">
        <p className="font-bold font-serif text-2xl text-center border-b-8 border-red-700  bg-neutral-50 text-neutral-900  py-8 rounded-md">
          Registrar Levantamiento
        </p>
        <form>
          <div className="flex flex-row w-full pl-10 pt-4 space-x-10">
            <label className="text-white text-2xl">Ejercicio</label>
            <select className="text-xl rounded-lg h-10" required>
              <option>Elige</option>
              <option>Press de banca</option>
              <option>Sentadilla</option>
              <option>Peso Muerto</option>
            </select>
          </div>
          <div className="flex flex-row w-full pl-10 pt-10 space-x-10 items-center">
            <label className="text-white text-2xl">Peso</label>
            <input
              type={"number"}
              className="w-24 h-10 text-2xl rounded-lg"
              required
            ></input>
          </div>
          <div className="flex flex-row w-full pl-10 pt-10 space-x-10 items-center">
            <label className="text-white text-2xl">Fecha</label>
            <input
              type={"date"}
              className="w-44 h-10 text-2xl rounded-lg"
              required
            ></input>
          </div>
          <button
            type="submit"
            className="flex mx-auto bg-gradient-to-b from-red-700 to bg-red-900 my-10 px-10 py-2 rounded-md text-2xl text-white hover:opacity-60"
          >
            Guardar
          </button>
        </form>
      </div>
  
  );
}
