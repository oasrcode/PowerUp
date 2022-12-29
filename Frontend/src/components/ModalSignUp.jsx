import { useState } from "react";
import { UserAuth } from "../Context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function ModalSignUp({ prop }) {
  const [date, setDate] = useState("");
  const [weight, setweight] = useState(0);
  const [height, setheight] = useState(0);
  const { user } = UserAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function createUserinDB() {
    const newUser = prop;
    newUser.firebase_id = user?.uid;
    newUser.date = date;
    newUser.weight = weight;
    newUser.height = height;

    console.log(newUser)

    var config = {
      method: "post",
      url: "http://localhost:8080/api/users/",
      headers: {
        "Access-Control-Allow-Origin": "http://127.0.0.1:8081/",
        "Content-Type": "application/json",
      },
      data: prop,
    };

    axios(config).catch(function (err) {
      setError(err.message);
    });
  }

  async function HandleSummit(e) {
    e.preventDefault();

    if (user) {
      createUserinDB().then(()=>{
        navigate("/dashboard/")
      });
    }
  }

  return (
    <div className="flex flex-col w-full h-full justify-evenly">
      <p className="text-center font-bold text-2xl text-white lg:text-black">
        Añade tu información personal
      </p>

      {error ? (
        <div className="flex w-full h-14 bg-red-300 items-center px-4 border-2 border-red-800 font-semibold">
          <p className="text-red-700 z-10 float">{error}</p>
        </div>
      ) : null}

      <form onSubmit={HandleSummit}>
        <div className="flex flex-col space-y-3 w-1/2 mx-5">
          <label className="font-semibold text-neutral-50 lg:text-neutral-900 text-lg">
            Fecha de nacimiento
          </label>
          <input
            id="date"
            className="p-3 rounded-md w-full border-2 border-red-700 text-gray-900 disabled:text-gray-400 disabled:bg-slate-100 disabled:border-gray-400 disabled:border-2"
            type={"date"}
            value={date}
            onChange={() => setDate(event.target.value)}
            required
          ></input>
        </div>

        <div className="flex flex-col space-y-3 w-1/3 mx-5">
          <label className="font-semibold text-neutral-50 lg:text-neutral-900 text-lg">
            Peso en kg
          </label>
          <input
            id="weight"
            className="p-3 rounded-md w-full border-2 border-red-700 text-gray-900 disabled:text-gray-400 disabled:bg-slate-100 disabled:border-gray-400 disabled:border-2"
            type={"number"}
            placeholder="peso en kg"
            value={weight}
            onChange={() => setweight(event.target.value)}
            required
          ></input>
        </div>

        <div className="flex flex-col space-y-3 w-1/3 mx-5">
          <label className="font-semibold text-neutral-50 lg:text-neutral-900 text-lg">
            Altura en cm
          </label>
          <input
            id="height"
            className="p-3 rounded-md w-full border-2 border-red-700 text-gray-900 disabled:text-gray-400 disabled:bg-slate-100 disabled:border-gray-400 disabled:border-2"
            type={"number"}
            placeholder="altura en cm"
            value={height}
            onChange={() => setheight(event.target.value)}
            required
          ></input>
        </div>

        <div className="flex flex-col mt-7">
          <button
            className="p-3 mx-3 rounded-md text-lg font-bold text-gray-50 bg-red-700 hover:opacity-60 shadow-sm shadow-black"
            type={"submit"}
          >
            Finalizar
          </button>
        </div>
      </form>
    </div>
  );
}
