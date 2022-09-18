import axios from "axios";
import { BASE_URL } from "./BaseURL";

export default function postRoomData() {
    return axios
      .get(`${BASE_URL}`)
      .then((res) => res.data)
      .then((data) => divideRoom(data));
  }