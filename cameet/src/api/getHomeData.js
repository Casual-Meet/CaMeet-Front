import axios from "axios";
import divideRoom from "../functions/divideRoom";
import { BASE_URL } from "./BaseURL";
// 홈화면 api
// 받아온 데이터를 날짜별 배열을 가진 객체로 분리
export default function getHomeData() {
  return axios
    .get(`${BASE_URL}`)
    .then((res) => res.data)
    .then((data) => divideRoom(data));
}
