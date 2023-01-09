import axios from "axios";
import { UserAuth } from "../../Context/AuthContext";

const api_url = import.meta.env.VITE_API_URL;

export function deleteUserLog() {
  const { user } = UserAuth();

  async function deleteData(log_id) {
    if (user.accessToken) {
      let token = user.accessToken;

      var config = {
        method: "delete",
        url: api_url + "user_logs/" + log_id,
        headers: {
          "Access-Control-Allow-Origin": "http://127.0.0.1:8081/",
          "Content-Type": "application/json",
          AuthToken: token,
        },
      };

      axios(config)
        .then((res) => {
          console.log(res);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  return deleteData;
}
