import axios from "axios";
import { BASE_URL } from "./BaseURL";
// 방 상세정보
export default function getRoomDetail(id) {
  return axios.get(`${BASE_URL}roomdetail/${id}`).then((res) => res.data);
}
