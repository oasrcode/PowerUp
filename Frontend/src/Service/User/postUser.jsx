import axios from "axios";
import { useState } from "react";
import { UserAuth } from "../../Context/AuthContext";

const api_url = import.meta.env.VITE_API_URL;

export function postUser() {
  const { user } = UserAuth();
  const [error, setError] = useState("")
  const [loaded, setLoaded] = useState(false);

  async function postData(data) {
    if (user.accessToken) {
      let token = user.accessToken;
      var config = {
        method: "post",
        url: api_url + "users/",
        headers: {
          "Access-Control-Allow-Origin": "http://127.0.0.1:8081/",
          "Content-Type": "application/json",
          AuthToken: token,
        },
        data: data,
      };
      axios(config)
        .catch(function (error) {
          console.log(error);
          setError(error)
        })
        .finally(() => {
          setLoaded(true);
        });
    }
  }

  return (postData);
}
