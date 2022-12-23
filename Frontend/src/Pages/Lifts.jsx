import { AddLiftForm } from "../components/AddLiftForm";

import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";

export function Lifts() {
  const [bench, setBench] = useState(true);
  const [squat, setSquat] = useState(false);
  const [deadlift, setDeadlift] = useState(false);
  return (
    <div className="flex flex-col w-full h-screen  2xl:w-11/12 2xl:h-[80%] 2xl:mx-auto 2xl:my-auto 2xl:rounded-md ">
      <div className="flex flex-row justify-evenly">
        <div className="flex w-2/6 ">
          <AddLiftForm />
        </div>
        <div className="flex w-3/6 ">
          {/* Componente*/}
          <div className="flex flex-col w-full h-auto  m-2 bg-neutral-900 rounded-md shadow-md shadow-neutral-700">
            <p className="text-neutral-900 text-2xl text-center  p-8 bg-neutral-50 border-b-8  border-red-700 rounded-md font-bold font-serif">
              Progreso de levantamientos
            </p>

            <div className="flex flex-row justify-evenly pt-1 bg-neutral-900">
              <button
                className={
                  bench
                    ? "px-8 py-2 mb-1 bg-red-500 text-neutral-50 rounded-md text-center font-semibold font-serif hover:opacity-60"
                    : "px-8 py-2 mb-1 bg-neutral-50 text-neutral-900 rounded-md text-center font-semibold font-serif hover:opacity-60"
                }
                onClick={() => setBench(!bench)}
              >
                Press de banca
              </button>
              <button className={
                  squat
                    ? "px-8 py-2 mb-1 bg-sky-500 text-neutral-50 rounded-md text-center font-semibold font-serif hover:opacity-60"
                    : "px-8 py-2 mb-1 bg-neutral-50 text-neutral-900 rounded-md text-center font-semibold font-serif hover:opacity-60"
                }
                onClick={()=>setSquat(!squat)}>
                Sentadilla
              </button>
              <button className={
                  deadlift
                    ? "px-8 py-2 mb-1 bg-emerald-500 text-neutral-50 rounded-md text-center font-semibold font-serif hover:opacity-60"
                    : "px-8 py-2 mb-1 bg-neutral-50 text-neutral-900 rounded-md text-center font-semibold font-serif hover:opacity-60"
                }
                onClick={()=>setDeadlift(!deadlift)}>
                Peso Muerto
              </button>
            </div>

            <div className=" w-full h-full bg-neutral-50"></div>
          </div>
          {/* Componente*/}
        </div>
        <div className="flex flex-col w-2/6 ">
          {/* Componente*/}
          <div className="flex flex-col h-auto  m-2 bg-neutral-900 rounded-md shadow-md shadow-neutral-700">
            <p className="text-neutral-900 text-2xl text-center  p-8 bg-neutral-50 border-b-8  border-red-700 rounded-md font-bold font-serif">
              Progreso de levantamientos
            </p>
            <div className="flex flex-row justify-evenly pt-1 bg-neutral-900">
              <table class="w-full table-auto">
                <thead className=" bg-neutral-900 text-neutral-50 font-semibold">
                  <tr className="text-base font-bold text-left ">
                    <th>Peso</th>
                    <th>Fecha</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-900 bg-neutral-300">
                  <tr className=" hover:bg-neutral-500">
                    <td>120</td>
                    <td>11-12-2022</td>
                    <td className="flex flex-row justify-evenly">
                      <button className="flex w-full items-center justify-center">
                        <AiFillDelete
                          size={20}
                          className="text-red-700 hover:text-neutral-50 hover:bg-neutral-600"
                        />
                      </button>
                      <button className="flex w-full items-center justify-center">
                        <FiEdit
                          size={20}
                          className="text-yellow-500  hover:text-neutral-50 hover:bg-neutral-600"
                        />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Componente*/}
        </div>
      </div>
    </div>
  );
}
