import { useEffect } from "react";
import { useState } from "react";
import { getUser } from "../Service/User/getUser";
import { putUser } from "../Service/User/putUser";
export function Profile() {
  const [enable, setEnable] = useState(true); //false to activate

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [weight, setweight] = useState("");
  const [height, setheight] = useState("");

  const { data, loaded } = getUser();
  const putData = putUser();

  function fillInputs() {
    setName(data?.name);
    setDate(data?.date);
    setweight(data?.weight);
    setheight(data?.height);
  }
  useEffect(() => {
    fillInputs();
  }, [data]);

  function handleSubmit(e) {
    e.preventDefault();

    const userData = {};
    userData.name = name;
    userData.date = date;
    userData.weight = weight;
    userData.height = height;

    putData(userData);

    setEnable(true);
  }

  return (
    <div className="flex flex-col w-full max-w-full h-full">
      <div className="flex flex-col  w-full h-auto lg:w-2/5 lg:mx-auto my-auto pl-4 pr-10 pb-6 md:w-3/4 md:mx-auto">
        <h2 className="font-semibold text-2xl  text-center ">Mi perfil</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-3">
            <label className="font-semibold text-black text-lg pt-2">
              Nombre de usuario
            </label>
            <input
              id="name"
              className="p-3 rounded-md w-full border-2 border-red-700 text-gray-900 disabled:text-gray-400 disabled:bg-slate-100 disabled:border-gray-400 disabled:border-2"
              type={"text"}
              value={name || ""}
              placeholder={"nombre de usuario"}
              onChange={() => setName(event.target.value)}
              disabled={enable}
              required
            ></input>
          </div>

          <div className="flex flex-col space-y-3 w-44">
            <label className="font-semibold text-black text-lg">
              Fecha de nacimiento
            </label>
            <input
              id="date"
              className="p-3 rounded-md w-full border-2 border-red-700 text-gray-900 disabled:text-gray-400 disabled:bg-slate-100 disabled:border-gray-400 disabled:border-2"
              type={"date"}
              value={date || ""}
              onChange={() => setDate(event.target.value)}
              disabled={enable}
              required
            ></input>
          </div>

          <div className="flex flex-col space-y-3 w-44">
            <label className="font-semibold text-black text-lg">
              Peso en kg
            </label>
            <input
              id="weight"
              className="p-3 rounded-md w-full border-2 border-red-700 text-gray-900 disabled:text-gray-400 disabled:bg-slate-100 disabled:border-gray-400 disabled:border-2"
              type={"number"}
              placeholder="peso en kg"
              value={weight || ""}
              onChange={() => setweight(event.target.value)}
              disabled={enable}
              required
            ></input>
          </div>

          <div className="flex flex-col space-y-3 w-44">
            <label className="font-semibold text-black text-lg">
              Altura en cm
            </label>
            <input
              id="height"
              className="p-3 rounded-md w-full border-2 border-red-700 text-gray-900 disabled:text-gray-400 disabled:bg-slate-100 disabled:border-gray-400 disabled:border-2"
              type={"number"}
              placeholder="altura en cm"
              value={height || ""}
              onChange={() => setheight(event.target.value)}
              disabled={enable}
              required
            ></input>
          </div>

          <div className="flex flex-row justify-center lg:justify-end lg:pr-5 gap-4 pt-10">
            <input
              type="button"
              value="Editar"
              onClick={() => setEnable(false)}
              className="flex flex-row items-center gap-1 px-6 lg:px-10 py-2 bg-slate-200 text-black rounded-md disabled:bg-slate-800 disabled:text-gray-200"
            />
            <input
              type="submit"
              value="Guardar"
              disabled={enable}
              className="bg-red-700 text-white px-4 py-2 rounded-md disabled:opacity-10 disabled:text-gray-50  disabled:bg-slate-900"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
