import { useState } from "react";
import { FcBusinesswoman, FcBusinessman } from "react-icons/fc";
import { AiOutlineSave } from "react-icons/ai";
import { caloriesCalculator } from "../tools/caloriesCalculator";
import { putUser } from "../Service/User/putUser";
import { MessengeAlert } from "../components/MessengeAler";

export function DailyCals() {

  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [activity, setActivity] = useState();
  const [calories, setCalories] = useState();
  const [result, setResult] = useState(false);
  const [messengeSent, setMessengeSent] = useState(false)
  const [error,setError] = useState();
  const putData = putUser();

  function HandleSummit(e) {
    e.preventDefault();
    const cals = caloriesCalculator(gender, weight, height, age, activity);
    setCalories(cals);
    setResult(true);
  }

  function postCalories() {
    let data = {};
    data.calories = calories;
    putData(data).catch((err)=>{
      setError(err.message);
    });
    setMessengeSent(true)
  }

  return (
    <div className="flex flex-col w-full max-w-full h-screen overflow-auto xl:w-11/12  xl:mx-auto xl:my-auto 2xl:pt-20">
      <form onSubmit={HandleSummit}>
        <div className="flex flex-col md:grid md:grid-cols-2 pt-10 xl:pt-5 md:pt-24 lg:pt-5 md:mx-4 2xl:gap-10 md:gap-10">
          <div className="col-span-1 flex flex-col  items-center justify-between">
            <p className="flex font-bold text-2xl text-gray-700">
              ¿Cuál es tu género?
            </p>
            <div
              className="flex flex-row  items-center justify-between space-x-11"
              id="group1"
            >
              <div className="flex flex-col">
                <label
                  className={
                    gender == "male"
                      ? "  bg-sky-100 rounded-xl  border-4 border-blue-600"
                      : " rounded-xl bg-slate-50 border-4 border-neutral-200 opacity-60"
                  }
                  onClick={() => {
                    setGender("male");
                  }}
                >
                  <FcBusinessman size={100} />
                  <p className="text-center">Hombre</p>
                  <input
                    type={"radio"}
                    name="gender"
                    className="opacity-0"
                    value={"male"}
                    required
                  />
                </label>
              </div>

              <div className="flex flex-col justify-center items-center">
                <label
                  className={
                    gender == "female"
                      ? " bg-pink-100 rounded-xl  border-4 border-pink-600"
                      : " rounded-xl border-4 border-neutral-200 bg-slate-50 opacity-60 "
                  }
                  onClick={() => {
                    setGender("female");
                  }}
                >
                  <FcBusinesswoman size={100} />
                  <p className="text-center">Mujer</p>
                  <input
                    type={"radio"}
                    name="gender"
                    className="opacity-0"
                    value={"female"}
                    required
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-evenly ">
            <p className="font-bold text-2xl text-gray-700">
              ¿Cuántos años tienes?
            </p>
            <div className="flex flex-row items-center justify-center  h-44 w-full gap-4 ">
              <input
                type={"number"}
                placeholder="18"
                className=" w-20 h-16 ring-0 outline-none border-b-2 border-black text-center text-3xl"
                onChange={() => setAge(event.target.value)}
                required
              />
              <label className="text-gray-700 text-lg"> años</label>
            </div>
          </div>

          <div className="flex flex-col items-center justify-evenly ">
            <p className="font-bold text-2xl text-gray-700">¿Cuánto mides?</p>
            <div className="flex flex-row items-center justify-center  h-44 w-full gap-4 ">
              <input
                type={"number"}
                placeholder="175"
                className=" w-20 h-16 ring-0 outline-none border-b-2 border-black text-center text-3xl"
                onChange={() => setHeight(event.target.value)}
                required
              />
              <label className="text-gray-700 text-lg">cm</label>
            </div>
          </div>

          <div className="flex flex-col items-center justify-evenly ">
            <p className="font-bold text-2xl text-gray-700">¿Cuánto pesas?</p>
            <div className="flex flex-row items-center justify-center  h-44 w-full gap-4 ">
              <input
                type={"number"}
                placeholder="90"
                className=" w-20 h-16 ring-0 outline-none border-b-2 border-black text-center text-3xl"
                onChange={() => setWeight(event.target.value)}
                required
              />
              <label className="text-gray-700 text-lg">kg</label>
            </div>
          </div>

          <div className="col-span-2">
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="font-bold text-2xl text-gray-700">
                ¿Cómo de activo eres a diario?
              </p>

              <select
                className="w-full px-4 lg:w-1/2 h-10 rounded-lg outline-none underline"
                onChange={() => setActivity(event.target.value)}
                required
              >
                <option value={""}>Elije</option>
                <option value={1.2}>Calorias de mantenimiento</option>
                <option value={1.375}>
                  Ejercicio de 1 a 3 veces por semana
                </option>
                <option value={1.55}>
                  Ejercicio de 3 a 5 veces por semana
                </option>
                <option value={1.725}>
                  Ejercicio de 6 a 7 veces por semana
                </option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <div className=" col-span-3 flex items-center justify-center pt-10">
            <button
              type={"submit"}
              className="px-8 py-2 rounded-xl bg-red-700 text-neutral-50 hover:opacity-60"
            >
              Calcular
            </button>
          </div>

          <div className="block col-span-3 pt-10 xl:pt-5">
            {result ? (
              <div className=" flex flex-col xl:flex-row items-center justify-center md:gap-4  bg-black lg:rounded-3xl xl:w-4/6 2xl:w-3/6 lg:mx-auto">
                <p className="font-bold text-lg md:text-xl text-neutral-50 py-4 text-center">
                  Tus calorias diarías son de {calories}.
                </p>
                <button
                  className="flex flex-row  items-center gap-2 mb-4 xl:mb-0    px-8 py-2 rounded-xl bg-red-700 text-white hover:opacity-60"
                  type={"button"}
                  onClick={() => postCalories()}
                >
                  Guardar
                  <AiOutlineSave size={30} />
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </form>
      {messengeSent?<MessengeAlert message={error?error:"Datos guardados"} prop={setMessengeSent}/>:null}
    </div>
  );
}
