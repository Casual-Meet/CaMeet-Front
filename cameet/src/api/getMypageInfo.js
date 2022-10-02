import axios from "axios";
import { BASE_URL } from "./BaseURL";
import postAccessToken from "./postAccessToken";
import Refetch from "./Refetch";
export default function getMypageInfo() {
  const access_token = window.localStorage.getItem("access_token");
  return axios
    .get(`${BASE_URL}/accounts/mypage/`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      "Content-Type": "application/json",
    })
    .then((res) => res.data)
    .catch((err) => {
      if (err.response.status === 401) {
        console.log(401);
        Refetch(() => getMypageInfo);
      }
    });
}
