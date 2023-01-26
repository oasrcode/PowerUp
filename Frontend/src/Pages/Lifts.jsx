import { useEffect, useReducer } from "react";
import { useState } from "react";
import { FaHistory } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { AddLiftForm } from "../components/AddLiftForm";
import { HistorialLifts } from "../components/HistorialLift";
import { LiftsDisplayGraphs } from "../components/LiftsDisplayGraph";
import { MessengeAlert } from "../components/MessengeAler";
import { getAllLiftByExercise } from "../Service/User_Logs/getAllLiftByExercise";

export function Lifts() {
  const [showTable, setShowTable] = useState(false);

  const [exercise_id, setExercise_ID] = useState(1);

  const [reload, setReload] = useReducer((x) => x + 1, 0);

  const { lifts, getLifts } = getAllLiftByExercise();

  const [messengeSent, setMessengeSent] = useState(false)
  const [error,setError] = useState();

  useEffect(() => {
    getLifts(exercise_id);
  }, [exercise_id, reload]);

  return (
    <div className="flex flex-col lg:flex-row w-full h-screen  2xl:w-11/12  2xl:h-[80%] xl:mx-auto xl:my-auto 2xl:rounded-md  overflow-auto ">
      <div className="flex flex-col lg:w-3/5 lg:h-4/6  m-2">
        <div className="flex border-b-8 border-red-700  bg-neutral-50 h-20 rounded-t-md justify-center items-center">
          <p className="font-bold font-serif text-2xl text-center text-neutral-900">
            Progreso de levantamientos
          </p>
        </div>

        <LiftsDisplayGraphs
          setExercise_ID={setExercise_ID}
          exercise_id={exercise_id}
          data={lifts}
        />
      </div>
      <div className="flex flex-col w-auto h-full  lg:w-2/5  lg:h-4/6   m-2">
      
        <div className="flex flex-row w-full  border-b-8 border-red-700  bg-neutral-50  rounded-t-md justify-center items-center h-20">
        {messengeSent?<MessengeAlert prop={setMessengeSent} message={error?error:"Datos guardados"}/>:null}
          {showTable ? (
            <p className="w-full font-bold font-serif text-2xl text-center text-neutral-900 ">
              Historial
            </p>
          ) : (
            <p className="w-full font-bold font-serif text-2xl text-center text-neutral-900 ">
              Registrar Levantamiento
            </p>
          )}

          <button className="mr-2" onClick={() => setShowTable(!showTable)}>
            {showTable ? (
              <IoMdAddCircleOutline size={20} />
            ) : (
              <FaHistory size={20} />
            )}
          </button>
        </div>

        {showTable ? (
          <HistorialLifts data={lifts} setReload={setReload} prop={setMessengeSent}/>
        ) : (
          <AddLiftForm setReload={setReload} prop={setMessengeSent} />
        )}
        
      </div>

      {messengeSent?<MessengeAlert prop={setMessengeSent} message={error?error:"Datos guardados"}/>:null}
     
    </div>
  );
}
