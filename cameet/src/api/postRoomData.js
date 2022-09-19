import axios from "axios";
import { BASE_URL } from "./BaseURL";

export default function postRoomData(
  access_token,
  title,
  interest,
  time,
  place,
  latitude,
  longitude,
  headcount
) {
  return axios
    .post(
      `${BASE_URL}/roomcreate`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
      {
        room_title: title,
        room_interest: interest,
        room_time: time,
        room_place: place,
        room_latitude: latitude,
        room_longitude: longitude,
        room_headcount: headcount,
      }
    )
    .then((res) => res.data)
    .catch((error) => console.log(error));
}
