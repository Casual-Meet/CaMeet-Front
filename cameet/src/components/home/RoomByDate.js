import React from "react";
import { useParams } from "react-router";

function RoomByDate() {
  const params = useParams();
  const roomDate = params.roomDate;

  return <div> {roomDate} </div>;
}

export default RoomByDate;
