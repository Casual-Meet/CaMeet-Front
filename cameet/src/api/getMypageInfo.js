import axios from "axios";
import { BASE_URL } from "./BaseURL";

export default function getMypageInfo(access_token) {
  return axios
    .get(`${BASE_URL}/accounts/mypage/`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      "Content-Type": "application/json",
    })
    .then((res) => res.data);
}
