import axios from "axios";
import { UserAuth } from "../../Context/AuthContext";

const api_url = import.meta.env.VITE_API_URL;

export function putUser() {
  const { user } = UserAuth();
  

  async function putData (data) {
    if (user.accessToken) {
      let firebase_id = user.uid;
      let token = user.accessToken;
      var config = {
        method: "put",
        url: api_url+"users/" + firebase_id,
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
        })
    }
  };

  return (putData);
}
