import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineSave, AiOutlineEdit } from "react-icons/ai";
import axios from "axios";
import { UserAuth } from "../Context/AuthContext";

export function Profile() {
  const [enable, setEnable] = useState(true); //false to activate
  const [userData, setUserData] = useState({});
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [weight, setweight] = useState(0);
  const [height, setheight] = useState(0);

  const { user } = UserAuth();

  useEffect(() => {
    if (user.accessToken) {
      getUser()
        .then((res) => {
          setUserData(res.data);
          setName(res.data.name);
          setDate(res.data.date);
          setweight(res.data.weight);
          setheight(res.data.height)
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
    }
  }, [user]);

  async function getUser() {
    var config = {
      method: "get",
      url: "http://localhost:8080/api/users/" + user.uid,
      headers: {
        "Access-Control-Allow-Origin": "http://127.0.0.1:8081/",
        "Content-Type": "application/json",
        AuthToken: user.accessToken,
      },
    };
    return axios(config);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const data = {};
    data.name = name;
    data.date = date;
    data.weight = weight;
    data.height = height;
  

    var config = {
      method: "put",
      url: "http://localhost:8080/api/users/" + user.uid,
      headers: {
        "Access-Control-Allow-Origin": "http://127.0.0.1:8081/",
        "Content-Type": "application/json",
        AuthToken: user.accessToken,
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
      
      })
      .catch(function (error) {
        console.log(error);
      });

    setEnable(true);
  }

  return (
    <div className="flex flex-col w-full max-w-full h-full">
      <div className="flex flex-col  w-full h-auto lg:w-2/5 lg:mx-auto my-auto pl-4 pr-10 pb-6 md:w-3/4 md:mx-auto">
        <h2 className="font-semibold text-2xl  text-center ">Mi perfil</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-3">
            <label className="font-semibold text-black text-lg pt-2">
              Nombre de usuario
            </label>
            <input
              id="name"
              className="p-3 rounded-md w-full border-2 border-red-700 text-gray-900 disabled:text-gray-400 disabled:bg-slate-100 disabled:border-gray-400 disabled:border-2"
              type={"text"}
              value={name}
              placeholder={"nombre de usuario"}
              onChange={() => setName(event.target.value)}
              disabled={enable}
              required
            ></input>
          </div>

          <div className="flex flex-col space-y-3 w-44">
            <label className="font-semibold text-black text-lg">
              Fecha de nacimiento
            </label>
            <input
              id="date"
              className="p-3 rounded-md w-full border-2 border-red-700 text-gray-900 disabled:text-gray-400 disabled:bg-slate-100 disabled:border-gray-400 disabled:border-2"
              type={"date"}
              value={date}
              onChange={() => setDate(event.target.value)}
              disabled={enable}
              required
            ></input>
          </div>

          <div className="flex flex-col space-y-3 w-44">
            <label className="font-semibold text-black text-lg">
              Peso en kg
            </label>
            <input
              id="weight"
              className="p-3 rounded-md w-full border-2 border-red-700 text-gray-900 disabled:text-gray-400 disabled:bg-slate-100 disabled:border-gray-400 disabled:border-2"
              type={"number"}
              placeholder="peso en kg"
              value={weight}
              onChange={() => setweight(event.target.value)}
              disabled={enable}
              required
            ></input>
          </div>

          <div className="flex flex-col space-y-3 w-44">
            <label className="font-semibold text-black text-lg">
              Altura en cm
            </label>
            <input
              id="height"
              className="p-3 rounded-md w-full border-2 border-red-700 text-gray-900 disabled:text-gray-400 disabled:bg-slate-100 disabled:border-gray-400 disabled:border-2"
              type={"number"}
              placeholder="altura en cm"
              value={height}
              onChange={() => setheight(event.target.value)}
              disabled={enable}
              required
            ></input>
          </div>

          <div className="flex flex-row justify-center lg:justify-end lg:pr-5 gap-4 pt-10">
            <input
              type="button"
              value="Editar"
              onClick={() => setEnable(false)}
              className="flex flex-row items-center gap-1 px-6 lg:px-10 py-2 bg-slate-200 text-black rounded-md disabled:bg-slate-800 disabled:text-gray-200"
            />
            <input
              type="submit"
              value="Guardar"
              disabled={enable}
              className="bg-red-700 text-white px-4 py-2 rounded-md disabled:opacity-10 disabled:text-gray-50  disabled:bg-slate-900"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
