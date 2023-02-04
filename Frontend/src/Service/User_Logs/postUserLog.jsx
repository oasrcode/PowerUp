import axios from "axios";
import { UserAuth } from "../../Context/AuthContext";

const api_url = import.meta.env.VITE_API_URL;

export function postUserLog() {
  const { user } = UserAuth();

  async function postData(data) {
    if (user.accessToken) {
      let token = user.accessToken;

      var config = {
        method: "post",
        url: api_url+"user_logs",
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
        });
    }
  }

  return postData;
}
