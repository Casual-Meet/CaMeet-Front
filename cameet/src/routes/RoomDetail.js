import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import getRoomDetail from "../api/getRoomDetail";
import Nav from "../components/common/Nav";

const RoomDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery(["detail", id], () => getRoomDetail(id));
  console.log(data);
  return (
    <>
      <Nav />
    </>
  );
};

export default RoomDetail;
