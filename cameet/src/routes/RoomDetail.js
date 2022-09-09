import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import styled from "styled-components";
import getRoomDetail from "../api/getRoomDetail";
import Nav from "../components/common/Nav";
import Terms from "../components/common/Terms";
import { getDays } from "../functions/getDays";

const RoomDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery(["detail", id], () => getRoomDetail(id));
  const day = data && getDays(data.room_date);
  console.log(data);
  return (
    <>
      <Nav />
      <div>
        <Time>
          <div>{data?.room_date}</div>
          <div>{day}요일</div>
          <div>{data?.room_time.substr(0, 5)}</div>
        </Time>
        <div>{data?.room_title}</div>
      </div>
      <hr></hr>
      <Terms></Terms>
    </>
  );
};
const Time = styled.div`
  display: flex;
`;
export default RoomDetail;
