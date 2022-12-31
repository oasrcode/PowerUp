import { useState } from "react";
import axios from "axios";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { UserAuth } from "../Context/AuthContext";
import { formatDate } from "../tools/formatDate";
export function HistorialLifts({ data }) {
  const { user } = UserAuth();
  const [weight, setWeight] = useState();

  async function editLift(log_id) {
    if (user.accessToken) {
      let token = user.accessToken;

      const data = {
        weight: weight,
      };

      var config = {
        method: "put",
        url: "http://localhost:8080/api/user_logs/" + log_id,
        headers: {
          "Access-Control-Allow-Origin": "http://127.0.0.1:8081/",
          "Content-Type": "application/json",
          AuthToken: token,
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  async function deleteLift(log_id) {
    if (user.accessToken) {
      let token = user.accessToken;

      var config = {
        method: "delete",
        url: "http://localhost:8080/api/user_logs/" + log_id,
        headers: {
          "Access-Control-Allow-Origin": "http://127.0.0.1:8081/",
          "Content-Type": "application/json",
          AuthToken: token,
        },
      };
      axios(config)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <div className="flex flex-col w-auto h-full overflow-auto  bg-neutral-900   shadow-md shadow-neutral-700 rounded-b-md">
      <table className="table-auto text-neutral-50">
        <thead className="bg-neutral-700 border">
          <tr >
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
                        editLift(p.log_id);
                      }}
                    >
                      <BiEdit size={20} />
                    </button>
                    <button onClick={() => deleteLift(p.log_id)}>
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
