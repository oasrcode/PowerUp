import { useState } from "react";
import { FcBusinesswoman, FcBusinessman } from "react-icons/fc";
import { UserAuth } from "../Context/AuthContext";
import axios from "axios";
export function DailyCals() {
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [activity, setActivity] = useState();
  const [calories, setCalories] = useState();
  const [result, setResult] = useState(false);

  const{user}=UserAuth();

  function CalculaeCalories() {
    if (gender == "male") {
      /*[66 + (13,7 × peso en kg) ] + [ (5 × altura en cm) ? (6,8 × edad)] × Factor actividad */
      setCalories(
        Math.round((10 * weight + 6.25 * height - 5 * age + 5) * activity)
      );
    }

    if (gender == "female") {
      /* (10 x peso en kg) + (6.25 × altura en cm) - (5 × edad en años) - 161 */
      setCalories(
        Math.round((10 * weight + 6.25 * height - 5 * age - 161) * activity)
      );
    }
  }

  function HandleSummit(e) {
    e.preventDefault();
    CalculaeCalories();
    let data={};

    data.calories=calories


    var config = {
      method: "put",
      url: "http://localhost:8080/api/users/"+user.email,
      headers: {
        "Access-Control-Allow-Origin": "http://127.0.0.1:8081/",
        "Content-Type": "application/json",
        AuthToken: user.accessToken,
      },
      data:data
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="flex flex-col w-full max-w-full h-screen overflow-auto">
      <form onSubmit={HandleSummit}>
        <div className="grid grid-cols-1  lg:grid-cols-2  w-full lg:w-3/5 h-full  mx-auto lg:my-auto lg:mt-20">
          <div className="flex flex-col items-center justify-evenly">
            <p className="flex- font-bold text-2xl text-gray-700">
              ¿Cuál es tu género?
            </p>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:h-44 lg:w-full lg:gap-20">
              <div className="flex flex-col  justify-center items-center">
                <FcBusinessman size={100} />
                <button
                  type={"button"}
                  className="px-8 py-2 rounded-xl bg-slate-200 focus:ring-4 focus:ring-blue-600"
                  onClick={() => setGender("male")}
                >
                  Hombre
                </button>
              </div>

              <div className="flex flex-col justify-center items-center">
                <FcBusinesswoman size={100} />
                <button
                  type={"button"}
                  className="px-8 py-2 rounded-xl bg-slate-200 focus:ring-4 focus:ring-pink-600"
                  onClick={() => setGender("female")}
                >
                  Mujer
                </button>
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
              >
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
              <button
                className="px-10 py-4 text-black text-2xl bg-slate-400 rounded-3xl"
                type={"button"}
                onClick={() => {
                  setResult(true), CalculaeCalories();
                }}
              >
                Calcular
              </button>
            </div>
          </div>
          <div className="block col-span-2">
            {result ? (
              <div className=" flex items-center justify-center gap-4  mb-10  bg-emerald-200 rounded-3xl">
                <p className="font-bold text-2xl text-gray-700">
                  Resultado: {calories} calorias
                </p>
                <button
                  className="px-6 py-2 text-black text-2xl bg-green-100 rounded-3xl"
                  type={"submit"}
                >
                  Guardar
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </form>
    </div>
  );
}
