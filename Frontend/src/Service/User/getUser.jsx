import axios from "axios";
import { useEffect, useState } from "react";
import { UserAuth } from "../../Context/AuthContext";

const api_url = import.meta.env.VITE_API_URL;

export function getUser() {
  const { user } = UserAuth();
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
   getData();

  

  }, [user]);


  const getData = async () => {
    if (user.accessToken) {
      let firebase_id = user.uid;
      let token = user.accessToken;

      var config = {
        method: "get",
        url: api_url+"users/" + firebase_id,
        headers: {
          "Access-Control-Allow-Origin": "http://127.0.0.1:8081/",
          "Content-Type": "application/json",
          AuthToken: token,
        },
      };
      axios(config)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => setLoaded(true));
    }
  };

  return {data, error, loaded,getData};
}
