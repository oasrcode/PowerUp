import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineSave, AiOutlineEdit } from "react-icons/ai";
import axios from "axios"
import { UserAuth } from "../Context/AuthContext";

export function Profile() {
  const [enable, setEnable] = useState(true); //false to activate

  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [weight, setweight] = useState();
  const [height, setheight] = useState();
 

  const {user} = UserAuth();

  useEffect(()=>{

    getUser();
    
  },[])

  async function getUser() {
    var config = {
      method: "get",
      url: "http://localhost:8080/api/users/"+user.email,
      headers: {
        "Access-Control-Allow-Origin": "http://127.0.0.1:8081/",
        "Content-Type": "application/json",
        AuthToken: user.accessToken,
      },
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      
        setName(response.data.name)
        setDate(response.data.date)
        setweight(response.data.weight)
        setheight(response.data.height)
      
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const data = {}
    data.name=name;
    data.date=date;
    data.weight=weight;
    data.height=height;
    console.log(data)

    var config = {
      method: "put",
      url: "http://localhost:8080/api/users/"+user.email,
      headers: {
        "Access-Control-Allow-Origin": "http://127.0.0.1:8081/",
        "Content-Type": "application/json",
        AuthToken: user.accessToken,
      },
      data:data
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    
    setEnable(true);
  }

  return (
    <div className="flex flex-col w-full max-w-full h-full">
      <h2 className="font-semibold text-2xl  text-center pt-10">Mi perfil</h2>
      <div className="flex flex-col  w-full h-auto lg:w-2/5 lg:mx-auto my-auto pl-4 pr-10 pb-6">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-3">
            <label className="font-semibold text-black text-lg">Nombre</label>
            <input
              id="name"
              className="p-3 rounded-md w-full "
              type={"text"}
              value={name}
              onChange={()=>setName(event.target.value)}
            ></input>
          </div>

          <div className="flex flex-col space-y-3 w-44">
            <label className="font-semibold text-black text-lg">
              Fecha de nacimiento
            </label>
            <input
              id="date"
              className="p-3 rounded-md w-full"
              type={"date"}
              value={date}
              onChange={()=>setDate(event.target.value)}
            ></input>
          </div>

          <div className="flex flex-col space-y-3 w-44">
            <label className="font-semibold text-black text-lg">Peso en kg</label>
            <input
              id="weight"
              className="p-3 rounded-md w-full"
              type={"number"}
              placeholder="peso en kg"
              value={weight}
              onChange={()=>setweight(event.target.value)}
            ></input>
          </div>

          <div className="flex flex-col space-y-3 w-44">
            <label className="font-semibold text-black text-lg">Altura en cm</label>
            <input
              id="height"
              className="p-3 rounded-md w-full"
              type={"number"}
              placeholder="altura en cm"
              value={height}
              onChange={()=>setheight(event.target.value)}
            ></input>
          </div>

          <div className="flex flex-row justify-center lg:justify-end lg:pr-5 gap-4 pt-10">
            <input type="button" value="Editar" onClick={() => setEnable(false)} className="flex flex-row items-center gap-1 px-6 lg:px-10 py-2 bg-slate-200 text-black rounded-md disabled:bg-slate-800 disabled:text-gray-200" />
            <input type="submit" value="Guardar" disabled={enable} className="flex flex-row items-center gap-1 px-4 lg:px-8 py-2 bg-slate-200 text-black rounded-md disabled:bg-slate-800 disabled:text-gray-200" />
          </div>
        </form>
      </div>
    </div>
  );
}
