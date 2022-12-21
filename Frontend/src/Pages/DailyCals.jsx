import { useState } from "react";
import { FcBusinesswoman, FcBusinessman } from "react-icons/fc";
import { UserAuth } from "../Context/AuthContext";
import { AiOutlineSave } from "react-icons/ai";
import axios from "axios";
export function DailyCals() {
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [activity, setActivity] = useState();
  const [calories, setCalories] = useState();
  const [result, setResult] = useState(false);
  const [isWoman, setIswoman] = useState();

  const { user } = UserAuth();

  function CalculateCalories() {
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
    CalculateCalories();
    setResult(true);
    let data = {};

    data.calories = calories;

    // var config = {
    //   method: "put",
    //   url: "http://localhost:8080/api/users/" + user.email,
    //   headers: {
    //     "Access-Control-Allow-Origin": "http://127.0.0.1:8081/",
    //     "Content-Type": "application/json",
    //     AuthToken: user.accessToken,
    //   },
    //   data: data,
    // };
    // axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }

  return (
    <div className="flex flex-col w-full max-w-full h-screen overflow-auto">
      <form onSubmit={HandleSummit}>
        <div className="md:grid  md:grid-cols-2 md:pt-24 lg:pt-5 md:mx-4">
          <div className="col-span-1 flex flex-col items-center justify-between">
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
                      : " ounded-xl bg-slate-50"
                  }
                  onClick={() => {
                    setGender("male"), setIswoman(false);
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
                      : " rounded-xl bg-slate-50 "
                  }
                  onClick={() => {
                    setGender("female"), setIswoman(true);
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
              className="px-8 py-2 rounded-xl bg-red-700 text-white hover:bg-black"
            >
              Calcular
            </button>
          </div>

          <div className="block col-span-3 pt-10">
            {result ? (
              <div className=" flex flex-col items-center justify-center gap-4  lg:mb-10  bg-black lg:rounded-3xl lg:w-1/3 lg:mx-auto">
                <p className="font-bold text-xl text-white pt-4 text-center">
                  Tus calorias diarías son de {calories}.
                </p>
                <button
                  className="px-6 py-2 text-white bg-red-700 text-xl rounded-xl mb-4 flex flex-row items-center gap-2"
                  type={"button"}
                >
                  Guardar
                  <AiOutlineSave size={30} />
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </form>
    </div>
  );
}
