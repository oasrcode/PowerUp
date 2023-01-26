import axios from "axios";
import { useState } from "react";
import { UserAuth } from "../Context/AuthContext";
import { CaloriesCard } from "../components/Cards/CaloriesCard";
import { BodyFat } from "../components/Cards/BodyFatCard";
import { BMICard } from "../components/Cards/BMICard";
import { ProfileCard } from "../components/Cards/ProfileCard";
import { getUser } from "../Service/User/getUser";
import { getMaxLifts } from "../Service/User_Logs/getMaxLifts";
import { useEffect } from "react";
import { Loading } from "../components/Loading";

export function Landing() {
  const { data, error, loaded } = getUser();
  const { lifts } = getMaxLifts();

  const time = Date.now();
  const today = new Date(time);

  

  return (loaded?
    <div className="w-full h-full overflow-auto">
      <div className="flex md:flex-row flex-col  md:pl-14 md:pt-10 xl:pt-5 md:pb-20 md:space-x-4 items-center justify-between">
        <div className="flex flex-row 2xl:space-x-5 2xl:mt-10 items-center justify-center">
          <p className=" text-2xl 2xl:text-5xl md:text-4xl text-neutral-900 font-serif text-center">
            Bienvenido<span className="text-red-700 text-5xl">!</span>
          </p>
          <p className="flex text-2xl 2xl:text-5xl md:text-4xl font-serif  text-neutral-900 font-bold truncate text-center">
            {data?.name}
          </p>
        </div>

        <div>
          <p className="hidden md:flex md:pr-10 2xl:pr-44 text-red-700 font-semibold">
            {today.toDateString()}
          </p>
        </div>
      </div>

      <div className="flex flex-col xl:w-full xl:h-3/4 2xl:w-10/12 2xl:mx-auto 2xl:h-3/4 md:flex-row md:pl-10 xl:pl-5 ">
        <div className="flex flex-col md:w-full md:my-auto md:mx-auto">
          <ProfileCard userData={data} lifts={lifts} />
        </div>

        <div className="flex flex-col 2xl:pl-20 md:px-5  xl:px-4 w-[90%] mx-auto pt-10 md:pt-0  pb-10 md:pb-0 justify-between  gap-4 2xl:gap-0">
          <CaloriesCard prop={data} />
          <BodyFat prop={data} />
          <BMICard prop={data} />
        </div>
      </div>
    </div>:<Loading/>
  );
}
