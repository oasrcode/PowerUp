import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { BsCalendarDate } from "react-icons/bs";
import { GiBodyHeight, GiWeight } from "react-icons/gi";
import { GoFlame } from "react-icons/go";
import { UseStatsChart } from "../components/Charts/UserStatsChart";
import { UserAuth } from "../Context/AuthContext";

export function MiFicha() {
  const { user, getAuth } = UserAuth();

  // var today = new Date();
  // var birthDate = new Date(user.date);
  // var age = today.getFullYear() - birthDate.getFullYear();
  // const [year, month, day] = user.date.split("-");
  // const result = [month, day, year].join("/");
  // user.date = result;

  useEffect(() => {
    console.log("entroo");
  }, []);

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
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // async function checkauth() {
  //   getAuth()
  //     .currentUser.getIdToken(true)
  //     .then(function (idToken) {
  //       console.log(idToken);
  //       var config = {
  //         method: "get",
  //         url: "http://localhost:8080/",
  //         headers: {
  //           "Access-Control-Allow-Origin": "http://127.0.0.1:8081/",
  //           "Content-Type": "application/json",
  //           AuthToken: idToken,
  //         },
  //       };
  //       axios(config)
  //         .then(function (response) {
  //           console.log(JSON.stringify(response.data));
  //         })
  //         .catch(function (error) {
  //           console.log(error);
  //         });
  //     });
  // }

  return (
    <div className=" grid grid-cols-2 w-3/4 max-w-ful h-3/4 mx-auto my-auto">
      <div className=" grid col-span-2 bg-red-300 w-full max-w-full h-full overflow-auto">
        <div className="flex flex-col items-center mt-10">
          <p className="text-gray-900 font-bold text-3xl">
            {"nombre del usuario"}
          </p>

          <p>{"fecha denacimiento"}</p>
        </div>
        <div className="flex flex-row  items-center justify-evenly ">
          <div className="flex flex-col ">
            <div className="flex flex-row  gap-4 items-center ">
              <BsCalendarDate size={20} />
              <p>Edad</p>
            </div>
            <p className="text-center font-semibold">{"edad"}</p>
          </div>
          <div className="flex flex-col">
            <p>Altura</p>
            <p>{"altura"}</p>
          </div>
          <div className="flex flex-col">
            <p>Peso</p>
            <p>{"peso"}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full h-full">
        <UseStatsChart />
      </div>

      <div className="flex flex-col  items-center justify-evenly">
        <div className=" flex flex-col w-full  items-center justify-center  bg-gradient-to-t from-red-500 to-red-700 rounded-lg space-y-3">
          <GoFlame className="text-yellow-500 " size={50} />
          <p className="text-white font-semibold text-2xl">2000 cals</p>
        </div>

        <div className=" flex flex-col w-full  items-center justify-center bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg space-x-10">
          <p className="font-bold text-white text-5xl">IMC</p>
          <p className="font-extrabold text-5xl text-white"> 21</p>
        </div>

        <div className=" flex flex-col w-full items-center justify-center bg-gradient-to-r from-yellow-500 to-amber-600  rounded-lg  space-x-10">
          <p className="font-bold text-white text-5xl">Grasa</p>
          <p className="font-extrabold text-5xl text-white">21%</p>
        </div>
      </div>
      <button
        className="bg-black text-white px-10 py-4"
        onClick={() => getUser()}
      >
        Pruebas
      </button>
    </div>
  );
}
