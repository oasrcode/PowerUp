import { useState } from "react";
import { UserWeightChart } from "./Charts/UserWeightChart";
import { UserAuth } from "../Context/AuthContext";

export function LiftsDisplayGraphs({ setExercise_ID, exercise_id, data }) {
  const { user } = UserAuth();
  const [bench, setBench] = useState(true);
  const [squat, setSquat] = useState(false);
  const [deadlift, setDeadlift] = useState(false);
  const [color, setColor] = useState("#b91c1c");

  return (
    <div className="flex flex-col w-full h-full  bg-neutral-900 rounded-b-md shadow-md shadow-neutral-700">
      <div className="flex flex-row justify-evenly pt-1  bg-neutral-900 lg:mt-2 ">
        <button
          className={
            bench
              ? "text-xs px-4 py-2 my-1  bg-red-700 text-neutral-50 rounded-md text-center font-semibold font-serif hover:opacity-60"
              : "text-xs px-4 py-2 my-1 bg-neutral-50 text-neutral-900 rounded-md text-center font-semibold font-serif hover:opacity-60"
          }
          onClick={() => {
            setBench(!bench),
              setExercise_ID(1),
              setColor("#b91c1c"),
              setSquat(false),
              setDeadlift(false);
          }}
        >
          Press de banca
        </button>
        <button
          className={
            squat
              ? "text-xs px-4 py-2 my-1 bg-sky-700 text-neutral-50 rounded-md text-center font-semibold font-serif hover:opacity-60"
              : "text-xs px-4 py-2 my-1 bg-neutral-50 text-neutral-900 rounded-md text-center font-semibold font-serif hover:opacity-60"
          }
          onClick={() => {
            setSquat(!squat),
              setExercise_ID(2),
              setColor("#0369a1"),
              setBench(false),
              setDeadlift(false);
          }}
        >
          Sentadilla
        </button>
        <button
          className={
            deadlift
              ? "text-xs px-4 py-2 my-1 bg-emerald-700 text-neutral-50 rounded-md text-center font-semibold font-serif hover:opacity-60"
              : "text-xs px-4 py-2 my-1 bg-neutral-50 text-neutral-900 rounded-md text-center font-semibold font-serif hover:opacity-60"
          }
          onClick={() => {
            setDeadlift(!deadlift),
              setExercise_ID(3),
              setColor("#15803d"),
              setSquat(false),
              setBench(false);
          }}
        >
          Peso Muerto
        </button>
      </div>

      <div className=" w-11/12 h-80 mb-1 bg-neutral-50 mx-auto  lg:mt-4 overflow-x-auto ">
        <UserWeightChart key={exercise_id} prop={data} color={color} />
      </div>
    </div>
  );
}
