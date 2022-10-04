import axios from "axios";
import { BASE_URL } from "./BaseURL";

export default function getUserInfo(token) {
  return axios
    .get(`${BASE_URL}/userinfo/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      "Content-Type": "application/json",
    })
    .then((res) => res.data);
}
