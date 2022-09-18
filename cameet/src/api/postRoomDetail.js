import axios from "axios";
import { BASE_URL } from "./BaseURL";

export default function postRoomDetail(access_token, roomid) {
  return axios.post(
    `${BASE_URL}/roomdetail/${roomid}`,
    {
      room_id: roomid,
    },
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
}
