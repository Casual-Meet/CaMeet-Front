import axios from "axios";
import useRefreshToken from "../hooks/useRefreshToken";
import { BASE_URL } from "./BaseURL";

export default function getUserInfo(token) {
  return axios
    .get(`${BASE_URL}/userinfo/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      "Content-Type": "application/json",
    })
    .then((res) => res.data)
    .catch((err) => (err.status === 401 ? useRefreshToken : null));
  // 토큰 만료일 경우 refresh 토큰 사용
}
