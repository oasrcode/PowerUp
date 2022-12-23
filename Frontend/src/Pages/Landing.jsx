import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import { UseStatsChart } from "../components/Charts/UserStatsChart";
import { UserAuth } from "../Context/AuthContext";

import { CaloriesCard } from "../components/Cards/CaloriesCard";
import { BodyFat } from "../components/Cards/BodyFatCard";
import { BMICard } from "../components/Cards/BMICard";
import { ProfileCard } from "../components/Cards/ProfileCard";
import { Loading } from "../components/Loading";
import { bmiCalculator } from "../tools/bmiCalculator";
import { formatDate } from "../tools/formatDate";
export function Landing() {
  const { user, getAuth } = UserAuth();
  const [userData, setUserData] = useState();
  const [loading,setLoading]=useState(true)

 

  useEffect(() => {
    if (user.accessToken) {
      getUser()
        .then((res) => {
          setUserData(res.data);
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
      url: "http://localhost:8080/api/users/" + user.email,
      headers: {
        "Access-Control-Allow-Origin": "http://127.0.0.1:8081/",
        "Content-Type": "application/json",
        AuthToken: user.accessToken,
      },
    };
    return axios(config);
  }

  const tiempoTranscurrido = Date.now();
  const hoy = new Date(tiempoTranscurrido);

  return (
    <div className="w-full h-full overflow-auto">
    
      <div className="flex md:flex-row flex-col  md:pl-14 md:pt-10 md:pb-20 space-x-4 items-center justify-between">
        <div className="flex flex-row 2xl:space-x-5 items-center">
          <p className=" text-2xl md:text-5xl text-neutral-900 font-serif text-center">
            Bienvenido<span className="text-red-700">!</span>
          </p>
          <p className="text-2xl md:text-5xl py-2 text-neutral-900 font-bold truncate text-center">
            {userData?.name}
          </p>
        </div>

        <div>
          <p className="hidden md:flex md:pr-10 xl:pr-44 text-red-700 font-semibold">
            {hoy.toDateString()}
          </p>
        </div>
      </div>

      <div className="flex flex-col 2xl:h-3/4 md:flex-row md:pl-10 ">
        <div className="flex flex-col md:w-full md:space-y-40 lg:space-y-4  xl:justify-evenly ">
          <ProfileCard prop={userData} />

          <div className=" flex flex-col h-48 md:h-60 shadow-md shadow-neutral-700 rounded-md">
            <UseStatsChart  />
          </div>
        </div>

        <div className="flex flex-col 2xl:px-32 md:px-10  xl:px-4 w-[90%] mx-auto pt-10 md:pt-0 justify-between md:space-y-2 space-y-10">
          <CaloriesCard prop={userData} />
          <BodyFat prop={userData}/>
          <BMICard prop={userData}/>
        </div>
      </div>
    </div>
  );
}
