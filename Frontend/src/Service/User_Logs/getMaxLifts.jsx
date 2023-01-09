import axios from "axios";
import { useEffect, useState } from "react";
import { UserAuth } from "../../Context/AuthContext";

const api_url = import.meta.env.VITE_API_URL;

export function getMaxLifts() {
  const { user } = UserAuth();
  const [lifts, setLifts] = useState(null);
  const [errorLifts, setErrorLifts] = useState("");
  const [loadedLifts, setLoadedLifts] = useState(false);

  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    if (user.accessToken) {
      let firebase_id = user.uid;
      let token = user.accessToken;

      let option_BenchPress = {
        method: "get",
        url: api_url + "user_logs/max/" + 1 + "/" + firebase_id,
        headers: {
          "Access-Control-Allow-Origin": "http://127.0.0.1:8081/",
          "Content-Type": "application/json",
          AuthToken: token,
        },
      };

      let option_Squat = {
        method: "get",
        url: api_url + "user_logs/max/" + 2 + "/" + firebase_id,
        headers: {
          "Access-Control-Allow-Origin": "http://127.0.0.1:8081/",
          "Content-Type": "application/json",
          AuthToken: token,
        },
      };

      let option_DeadLift = {
        method: "get",
        url: api_url + "user_logs/max/" + 3 + "/" + firebase_id,
        headers: {
          "Access-Control-Allow-Origin": "http://127.0.0.1:8081/",
          "Content-Type": "application/json",
          AuthToken: token,
        },
      };

      const reqBenchPress = axios(option_BenchPress);
      const reqSquat = axios(option_Squat);
      const reqDeadLift = axios(option_DeadLift);

      axios
        .all([reqBenchPress, reqSquat, reqDeadLift])
        .then(
          axios.spread((...responses) => {
            let data = {
              benchPress: responses[0].data,
              squat: responses[1].data,
              deadlift: responses[2].data,
            };

        
           setLifts(data)
          })
        )
        .catch((err) => {
          setErrorLifts(err);
          console.log(err);
        })
        .finally(() => {
          setLoadedLifts(true);
        });
    }
  };

  return { lifts, errorLifts, loadedLifts };
}
