import axios from "axios";
import { BASE_URL } from "./BaseURL";
// 토큰 만료일 경우 refresh 토큰 사용하는 함수
export default function postAccessToken() {
  return axios
    .post(`${BASE_URL}/api/token/refresh/`, {
      refresh: localStorage.getItem("refresh_token"),
    })
    .then((res) => res.data.access);
}
