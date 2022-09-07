import axios from "axios";
import { BASE_URL } from "./BaseURL";

export default function getRoomDetail(id) {
  return axios.get(`${BASE_URL}roomdetail/${id}`).then((res) => res.data);
}
