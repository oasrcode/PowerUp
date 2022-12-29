import { useState } from "react";
import { FcBusinesswoman, FcBusinessman } from "react-icons/fc";
import { AiOutlineSave } from "react-icons/ai";
import axios from "axios";
import { UserAuth } from "../Context/AuthContext";
import { BodyFatCalculator } from "../tools/bodyFatCalculator";
export function BodyFat() {
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [height, setHeight] = useState();
  const [neck, setNeck] = useState();
  const [waist, setWaist] = useState();
  const [hip, setHip] = useState();
  const [bodyFat, setBodyfat] = useState();

  const [isWoman, setIswoman] = useState();
  const [result, setResult] = useState(false);

  const { user } = UserAuth();

  function HandleSummit(e) {
    e.preventDefault();
   
    setBodyfat(BodyFatCalculator(waist, neck, height, hip, gender))
    setResult(true);
  }

  function postBodyFat() {
    const data = {};

    data.bodyfat = bodyFat;

    if (user.accessToken) {
      let firebase_id = user.uid;
      let token = user.accessToken;

      var config = {
        method: "put",
        url: "http://localhost:8080/api/users/" + firebase_id,
        headers: {
          "Access-Control-Allow-Origin": "http://127.0.0.1:8081/",
          "Content-Type": "application/json",
          AuthToken: token,
        },
        data: data,
      };
      axios(config)
        .then(function (response) {})
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  return (
    <div className="flex flex-col w-full max-w-full h-screen overflow-auto  2xl:pt-24 xl:pt-5 md:pt-10 xl:w-11/12  xl:mx-auto xl:my-auto ">
      <form onSubmit={HandleSummit}>
        <div className=" flex flex-col md:grid  md:grid-cols-2 lg:grid-cols-3 pt-5 md:mx-4 2xl:gap-14 md:gap-10 md:text-center">
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
                      : " rounded-xl bg-slate-50 border-4 border-neutral-200 opacity-60"
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
                    : " rounded-xl border-4 border-neutral-200 bg-slate-50 opacity-60 "
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

          <div className="col-span-1 flex flex-col items-center justify-between">
            <p className="font-bold text-2xl text-gray-700 text-center">
              ¿Cuántos años tienes?
            </p>
            <div className="flex flex-row items-center justify-center  h-56 w-full gap-4 ">
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

          <div className="col-span-3 md:col-span-1 items-center justify-between ">
            <p className="font-bold text-2xl text-gray-700 text-center">
              ¿Cuánto mides?
            </p>
            <div className="flex flex-row items-center justify-center  h-56 w-full gap-4 ">
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

          <div className="col-span-3">
            <div className="flex flex-col md:flex-row items-center  justify-center  gap-10 ">
              <div className="flex flex-col items-center justify-evenly ">
                <p className="font-bold text-xl text-gray-700">
                  ¿Cuál es el perímetro de tu cuello?
                </p>
                <div className="flex flex-row items-center justify-center  h-44 w-full gap-4 ">
                  <input
                    type={"number"}
                    placeholder="30"
                    className=" w-20 h-16 ring-0 outline-none border-b-2 border-black text-center text-3xl"
                    onChange={() => setNeck(event.target.value)}
                    required
                  />
                  <label className="text-gray-700 text-lg">cm</label>
                </div>
              </div>

              <div className="flex flex-col items-center justify-evenly ">
                <p className="font-bold text-xl text-gray-700">
                  ¿Cuál es el perímetro de tu cintura?
                </p>
                <div className="flex flex-row items-center justify-center  h-44 w-full gap-4 ">
                  <input
                    type={"number"}
                    placeholder="70"
                    className=" w-20 h-16 ring-0 outline-none border-b-2 border-black text-center text-3xl"
                    onChange={() => setWaist(event.target.value)}
                    required
                  />
                  <label className="text-gray-700 text-lg">cm</label>
                </div>
              </div>

              <div className="flex flex-col items-center justify-evenly ">
                {isWoman ? (
                  <div>
                    <p className="font-bold text-xl text-gray-700">
                      ¿Cuál es el perímetro de tu cadera?
                    </p>
                    <div className="flex flex-row items-center justify-center  h-44 w-full gap-4 ">
                      <input
                        type={"number"}
                        placeholder="70"
                        className=" w-20 h-16 ring-0 outline-none border-b-2 border-black text-center text-3xl"
                        onChange={() => setHip(event.target.value)}
                        required
                      />
                      <label className="text-gray-700 text-lg">cm</label>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className=" col-span-3 flex items-center justify-center pt-5">
            <button
              type={"submit"}
              className="px-8 py-2 rounded-xl bg-red-700 text-white hover:bg-black"
            >
              Calcular
            </button>
          </div>

          <div className="block col-span-3 pt-10 xl:pt-5">
            {result ? (
                <div className=" flex flex-col xl:flex-row items-center justify-center md:gap-4  bg-black lg:rounded-3xl xl:w-4/6 2xl:w-3/6 lg:mx-auto">
                <p className="font-bold text-lg md:text-xl text-neutral-50 py-4 text-center">
                  Tu porcentaje de grasa corporal es de {bodyFat} %
                </p>
                <button
                  className="flex flex-row  items-center gap-2 mb-2  xl:mb-0 px-8 py-2 rounded-xl bg-red-700 text-white hover:bg-black"
                  type={"button"}
                  onClick={() => postBodyFat()}
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
