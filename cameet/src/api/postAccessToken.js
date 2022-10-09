import axios from "axios";
import { BASE_URL } from "./BaseURL";
export default function postAccessToken() {
  return axios
    .post(`${BASE_URL}/api/token/refresh/`, {
      refresh: localStorage.getItem("refresh_token"),
    })
    .then((res) => localStorage.setItem("access_token", res.data.access));
}
