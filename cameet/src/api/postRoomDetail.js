import axios from "axios";
import { BASE_URL } from "./BaseURL";

export default function postRoomDetail(room_id) {
  console.log(room_id);
  console.log(`${BASE_URL}/roomdetail/${room_id}`);
  return axios
    .post(`${BASE_URL}/roomcreate/${room_id}`, {
      room_id: roomid
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
