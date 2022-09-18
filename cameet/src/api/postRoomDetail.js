import axios from "axios";
import { BASE_URL } from "./BaseURL";

export default function postRoomDetail(roomid, user_id) {
  console.log(roomid, user_id);
  console.log(`${BASE_URL}/roomdetail/${roomid}`);
  return axios
    .post(`${BASE_URL}/roomdetail/${roomid}`, {
      room_id: roomid,
      user_id: user_id,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
