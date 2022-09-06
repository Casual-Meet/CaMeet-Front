import axios from "axios";
import { BASE_URL } from "./BaseURL";
// 홈화면 api
export default function getHomeData() {
  return axios.get(`${BASE_URL}aweek-roomlist/`).then((res) => res.data);
}
