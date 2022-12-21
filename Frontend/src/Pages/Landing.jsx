import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import { BiBody } from "react-icons/bi";
import { GoFlame } from "react-icons/go";
import { UseStatsChart } from "../components/Charts/UserStatsChart";
import { UserAuth } from "../Context/AuthContext";

import { CaloriesCard } from "../components/Cards/CaloriesCard";
import { BodyFat } from "../components/Cards/BodyFatCard";
import { BMICard } from "../components/Cards/BMICard";
import { ProfileCard } from "../components/Cards/ProfileCard";
export function Landing() {
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
      url: "http://localhost:8080/api/users/" + user.email,
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

  const tiempoTranscurrido = Date.now();
  const hoy = new Date(tiempoTranscurrido);

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
    <div className="w-full h-full overflow-auto">
      <div className="flex md:flex-row flex-col  md:pl-14 md:pt-10 md:pb-20 space-x-4 items-center justify-between">
        <div className="flex flex-row">
          <p className=" text-2xl md:text-5xl text-neutral-900 font-serif text-center">
            Bienvenido<span className="text-red-700">!</span>
          </p>
          <p className="text-2xl md:text-5xl text-neutral-900 font-bold truncate text-center">
            Chris Bumsted
          </p>
        </div>

        <div>
          <p className="hidden md:flex md:pr-10 xl:pr-44 text-red-700 font-semibold">{hoy.toDateString()}</p>
        </div>
      </div>

      <div className="flex flex-col 2xl:h-3/4 md:flex-row md:pl-10 ">
        <div className="flex flex-col md:w-full md:space-y-40 lg:space-y-4  xl:justify-evenly ">
          <ProfileCard />
         
          <div className=" flex flex-col h-48 md:h-60 shadow-md shadow-neutral-700 rounded-md">
            <UseStatsChart />
          </div>

        </div>

        <div className="flex flex-col 2xl:px-32 md:px-10  xl:px-4 w-[90%] mx-auto pt-10 md:pt-0 justify-between md:space-y-2 space-y-10">
          <CaloriesCard />
          <BodyFat />
          <BMICard />
        </div>

      </div>
    </div>
  );
}
