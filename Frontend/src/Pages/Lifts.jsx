import { useEffect } from "react";
import { useState } from "react";
import { FaHistory } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { AddLiftForm } from "../components/AddLiftForm";
import { HistorialLifts } from "../components/HistorialLift";
import axios from "axios";
import { LiftsDisplayGraphs } from "../components/LiftsDisplayGraph";
import { UserAuth } from "../Context/AuthContext";

export function Lifts() {
  const [showTable, setShowTable] = useState(false);
  const { user } = UserAuth();
  const [exercise_id, setExercise_ID] = useState(1);
  const [data, setData] = useState();
  useEffect(() => {
    if (user.accessToken) {
      let firebase_id = user.uid;
      let token = user.accessToken;

      getAllLiftByExercise(exercise_id, firebase_id, token)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user, exercise_id]);

  async function getAllLiftByExercise(exercise_id, firebase_id, token) {
    var config = {
      method: "get",
      url:
        "http://localhost:8080/api/user_logs/last10/" +
        exercise_id +
        "/" +
        firebase_id,
      headers: {
        "Access-Control-Allow-Origin": "http://127.0.0.1:8081/",
        "Content-Type": "application/json",
        AuthToken: token,
      },
    };
    return axios(config);
  }

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
          data={data}
        />
      </div>
      <div className="flex flex-col w-auto h-full  lg:w-2/5  lg:h-4/6   m-2">
        <div className="flex flex-row w-full  border-b-8 border-red-700  bg-neutral-50  rounded-t-md justify-center items-center h-20">
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

        {showTable ?<HistorialLifts data={data} /> : <AddLiftForm />  }
      </div>
    </div>
  );
}
