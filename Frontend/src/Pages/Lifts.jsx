export function Lifts() {
  return (
    <div className="flex flex-col w-full h-screen  2xl:w-11/12 2xl:h-[80%] 2xl:mx-auto 2xl:my-auto 2xl:rounded-md ">
      <div className="flex flex-row justify-evenly h-full">
        <div className="flex w-2/6">
          <div className="flex flex-col w-full h-full justify-center  ">
            <div className="flex flex-col w-full h-auto bg-dark rounded-2xl ">
            <p className="font-bold font-serif text-2xl text-center  bg-red-200 text-moredark rounded-t-xl rounded-b-3xl  py-8">Registrar Levantamiento</p>
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
                <input type={"number"} className="w-24 h-10 text-2xl rounded-lg" required></input>
              </div>
              <div className="flex flex-row w-full pl-10 pt-10 space-x-10 items-center">
                <label className="text-white text-2xl">Fecha</label>
                <input type={"date"} className="w-44 h-10 text-2xl rounded-lg" required></input>
              </div>
              <button type="submit" className="flex mx-auto bg-gradient-to-b from-red-700 to bg-red-900 my-10 px-10 py-2 rounded-md text-2xl text-white hover:opacity-60" >Guardar</button>
            </form>
            </div>
          </div>
        </div>
        <div className="flex w-3/6 bg-green-200">2</div>
        <div className="flex flex-col w-2/6 ">
          <p className="text-2xl font-bold font-serif mt-[-45] bg-red-700 text-center">Historial</p>
          <div className="flex flex-col w-11/12 mx-auto pt-10 h-full">
            <table class="table-auto border-collapse border border-slate-500 h-[90%]">
              <thead>
                <tr>
                  <th>Peso</th>
                  <th>Fecha</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                  <td>Malcolm Lockyer</td>
                  <td>1961</td>
                </tr>
                <tr>
                  <td>Witchy Woman</td>
                  <td>The Eagles</td>
                  <td>1972</td>
                </tr>
                <tr>
                  <td>Shining Star</td>
                  <td>Earth, Wind, and Fire</td>
                  <td>1975</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
