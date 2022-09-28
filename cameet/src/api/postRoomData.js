import axios from "axios";
import { BASE_URL } from "./BaseURL";

export default function postRoomData(props) {
  return axios.post(
    `${BASE_URL}/roomcreate/`,
    {
      room_title: props.title,
      room_interest: props.interest,
      room_time: props.time,
      room_place: props.place,
      room_headcount: props.headcount,
      room_latitude: props.latitude,
      room_longitude: props.longitude,
      room_date: props.date,
    },
    {
      headers: {
        Authorization: `Bearer ${props.access_token}`,
      },
    }
  );
}
