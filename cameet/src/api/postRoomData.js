import axios from "axios";
import { BASE_URL } from "./BaseURL";

export default function postRoomData() {
  return axios
    .post(`${BASE_URL}/roomcreate`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    },
    {
        room
    }
    )
    .then((res) => res.data)
    .catch((error) => console.log(error));
}
