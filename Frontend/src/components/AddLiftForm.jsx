import { useState } from "react";
import { UserAuth } from "../Context/AuthContext";
import { postUserLog } from "../Service/User_Logs/postUserLog";
export function AddLiftForm({ setReload, prop }) {
  const { user } = UserAuth();
  const [exercise, setExercise] = useState();
  const [weight, setWeight] = useState();
  const [date, setDate] = useState();
  const postData = postUserLog();

  function HandleSummit(e) {
    e.preventDefault();

    if (user.accessToken) {
      const data = {};
      data.exercise_id = exercise;
      data.firebase_id = user.uid;
      data.weight = weight;
      data.date = date;

      postData(data);
      setReload();

      prop(true);
    }
  }

  return (
    <div className="flex flex-col w-auto h-auto md:h-full  bg-neutral-900   shadow-md shadow-neutral-700 rounded-b-md md:items-center md:justify-center">
      <form onSubmit={HandleSummit}>
        <div className="flex flex-row w-full pl-10 pt-4 space-x-12 items-center">
          <label className="text-neutral-50 text-xl md:text-2xl">
            Ejercicio
          </label>
          <select
            className="text-xl rounded-lg h-10"
            onChange={() => setExercise(event.target.value)}
            required
          >
            <option value={""}>Elige</option>
            <option value={1}>Press de banca</option>
            <option value={2}>Sentadilla</option>
            <option value={3}>Peso Muerto</option>
          </select>
        </div>
        <div className="flex flex-row w-full pl-10 pt-10 space-x-20 items-center">
          <label className="text-neutral-50 text-xl md:text-2xl">Peso</label>
          <input
            type={"number"}
            className="w-24 h-10 text-2xl rounded-lg"
            required
            onChange={() => setWeight(event.target.value)}
          ></input>
        </div>
        <div className="flex flex-row w-full pl-10 pt-10 space-x-16 items-center overflow-auto">
          <label className="text-neutral-50 text-xl md:text-2xl">Fecha</label>
          <input
            type={"date"}
            className="w-44 h-10 text-2xl rounded-lg"
            required
            onChange={() => setDate(event.target.value)}
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
