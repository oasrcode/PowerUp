export function Profile() {
  return (
    <div className="flex  overflow-auto flex-col w-full max-w-full ">
      <div className="flex flex-col md:flex-row w-full h-full ">
        <div className="flex flex-col w-[50%] space-y-14">
          <h3 className="font-semibold text-black text-2xl text-center pt-14">
            Datos Personales
          </h3>
          <form>
            <div className="flex flex-row items-center justify-evenly space-x-8 py-10">
              <label className="pl-4">Nombre</label>
              <input
                className="w-96 py-3 rounded-md "
                type={"text"}
               
              ></input>
            </div>
            <div className="flex flex-row items-center justify-evenly space-x-8 py-10">
              <label className="pl-4">Apellidos</label>
              <input
                className="w-96 py-3 rounded-md "
                type={"text"}
               
              ></input>
            </div>
            <div className="flex flex-row items-center pl-10 space-x-10 py-10">
              <label className="pl-4">Edad</label>
              <input
                className="w-26 py-3 rounded-md "
                type={"number"}
                placeholder="Edad"
              ></input>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}
