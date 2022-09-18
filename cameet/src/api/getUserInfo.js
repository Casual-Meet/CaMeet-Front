import axios from "axios";
import { BASE_URL } from "./BaseURL";

export default function getUserInfo(access_token) {
  return axios
    .get(`${BASE_URL}/userinfo`, {
      headers: { Authorization: `Bearer ${access_token}` },
    })
    .then((res) => console.log(res));
}
