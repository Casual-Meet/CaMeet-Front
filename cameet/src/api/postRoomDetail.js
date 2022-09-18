import axios from "axios";
import { useRecoilValue } from "recoil";
import { session } from "../atoms/session";
import { BASE_URL } from "./BaseURL";

export default function postRoomDetail(access_token, roomid, userid) {
  console.log(access_token, roomid, userid);
  return axios
    .post(
      `${BASE_URL}/roomdetail/${roomid}`,
      {
        room_id: roomid,
        user_id: userid,
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
