import axios from "axios";
import { useEffect, useState } from "react";
import { UserAuth } from "../../Context/AuthContext";

const api_url = import.meta.env.VITE_API_URL;

export function getAllLiftByExercise() {
  const { user } = UserAuth();
  const [lifts, setLifts] = useState(null);
  const [errorLifts, setErrorLifts] = useState("");
  const [loadedLifts, setLoadedLifts] = useState(false);

  useEffect(() => {
    getLifts();
  }, [user]);

  const getLifts = async (exercise_id) => {
    if (user.accessToken) {
      let firebase_id = user.uid;
      let token = user.accessToken;

      var config = {
        method: "get",
        url:
          api_url+"user_logs/last10/" +
          exercise_id +
          "/" +
          firebase_id,
        headers: {
          "Access-Control-Allow-Origin": "http://127.0.0.1:8081/",
          "Content-Type": "application/json",
          AuthToken: token,
        },
      };

      axios(config)
        .then((res) => {
          setLifts(res.data);
        })
        .catch((err) => {
          setErrorLifts(err.message);
        })
        .finally(() => setLoadedLifts(true));
    }
  };

  return { lifts, errorLifts, loadedLifts,getLifts };
}
