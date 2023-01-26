import { useState } from "react";
import axios from "axios";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { formatDate } from "../tools/formatDate";
import { putUserLog } from "../Service/User_Logs/putUserLog";
import { deleteUserLog } from "../Service/User_Logs/deleteUserlog";
export function HistorialLifts({ data, setReload,prop }) {
  const [weight, setWeight] = useState();

  const putData = putUserLog();

  const deleteData = deleteUserLog();

  return (
    <div className="flex flex-col w-auto h-full overflow-auto  bg-neutral-900   shadow-md shadow-neutral-700 rounded-b-md">
      <table className="table-auto text-neutral-50">
        <thead className="bg-neutral-700 border">
          <tr>
            <th className="border-r">ID</th>
            <th className="border-r">Peso</th>
            <th className="border-r">Fecha</th>
            <th className="border-r">Acciones</th>
          </tr>
        </thead>
        <tbody className="text-center border">
          {data.map((p, key) => {
            return (
              <tr key={p.log_id} className="hover:bg-neutral-700">
                <td className="border">{p.log_id}</td>
                <td className="border">
                  <input
                    type={"text"}
                    defaultValue={p.weight}
                    placeholder={p.weight}
                    className="bg-neutral-900 w-10 text-center"
                    onChange={() => {
                      setWeight(event.target.value);
                    }}
                  ></input>
                </td>
                <td className="border">{formatDate(p.date)}</td>
                <td className="border">
                  <div className="flex items-center justify-evenly lg:space-x-10">
                    <button
                      onClick={() => {
                        putData(p.log_id, weight);
                        setReload();
                        prop(true);
                      }}
                    >
                      <BiEdit size={20} />
                    </button>
                    <button
                      onClick={() => {
                        deleteData(p.log_id);
                        setReload();
                        prop(true);
                      }}
                    >
                      <RiDeleteBin2Line size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
