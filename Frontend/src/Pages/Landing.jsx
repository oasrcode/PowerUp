import axios from "axios";
import { useState } from "react";
import { UserAuth } from "../Context/AuthContext";
import { CaloriesCard } from "../components/Cards/CaloriesCard";
import { BodyFat } from "../components/Cards/BodyFatCard";
import { BMICard } from "../components/Cards/BMICard";
import { ProfileCard } from "../components/Cards/ProfileCard";
import { getUser } from "../Service/User/getUser";


export function Landing() {
  const { user } = UserAuth();
  const [userData, setUserData] = useState();
  const [benchPress, setBenchPress] = useState();
  const [deadlift, setDeadLift] = useState();
  const [squat, setSquat] = useState();
  const [loading, setLoading] = useState(true);

  const {data,error,loaded,getData} = getUser();


  // const hok = useMemo(()=>{
  //   return data
  // },[data])



  // useEffect(() => {
  //   if (user.accessToken) {
  //     let firebase_id = user.uid;
  //     let token = user.accessToken;
      
  //     // getUser(firebase_id, token)
  //     //   .then((res) => {
  //     //     setUserData(res.data);
  //     //   })
  //     //   .catch((err) => {
  //     //     console.log(err.response.data);
  //     //   });

  //     getData()
     
      

     



  //     let exercise_id = 1;

  //     getMaxLift(exercise_id, firebase_id, token)
  //       .then((res) => {
         
  //         setBenchPress(res.data[0].maxWeight)

  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });

  //       exercise_id = 2;
  //       getMaxLift(exercise_id, firebase_id, token)
  //       .then((res) => {
  //         setSquat(res.data[0].maxWeight)

  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });

  //       exercise_id = 3;

  //       getMaxLift(exercise_id, firebase_id, token)
  //       .then((res) => {
  //         setDeadLift(res.data[0].maxWeight)

         

  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
      
      
  //   }
  // }, [user]);

  // async function getUser(firebase_id, token) {
  //   var config = {
  //     method: "get",
  //     url: "http://localhost:8080/api/users/" + firebase_id,
  //     headers: {
  //       "Access-Control-Allow-Origin": "http://127.0.0.1:8081/",
  //       "Content-Type": "application/json",
  //       AuthToken: token,
  //     },
  //   };
  //   return axios(config);
  // }

  async function getMaxLift(exercise_id, firebase_id, token) {
    var config = {
      method: "get",
      url:
        "http://localhost:8080/api/user_logs/max/" +
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

  // async function getAllLiftByExercise(exercise_id, firebase_id, token) {
  //   var config = {
  //     method: "get",
  //     url:
  //       "http://localhost:8080/api/user_logs/" +
  //       exercise_id +
  //       "/" +
  //       firebase_id,
  //     headers: {
  //       "Access-Control-Allow-Origin": "http://127.0.0.1:8081/",
  //       "Content-Type": "application/json",
  //       AuthToken: token,
  //     },
  //   };
  //   return axios(config);
  // }

  const tiempoTranscurrido = Date.now();
  const hoy = new Date(tiempoTranscurrido);

  return (
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
            {hoy.toDateString()}
          </p>
        </div>
      </div>

      <div className="flex flex-col xl:w-full xl:h-3/4 2xl:w-10/12 2xl:mx-auto 2xl:h-3/4 md:flex-row md:pl-10 xl:pl-5 ">
        <div className="flex flex-col md:w-full md:my-auto md:mx-auto">
          <ProfileCard userData={data} benchPress={benchPress} squat={squat} deadlift={deadlift} />
        </div>

        <div className="flex flex-col 2xl:pl-20 md:px-5  xl:px-4 w-[90%] mx-auto pt-10 md:pt-0  pb-10 md:pb-0 justify-between  gap-4 2xl:gap-0">
          <CaloriesCard prop={data} />
          <BodyFat prop={data} />
          <BMICard prop={data} />
        </div>
      </div>
    </div>
  );
}
