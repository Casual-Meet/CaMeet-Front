import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import styled from "styled-components";
import getRoomDetail from "../api/getRoomDetail";
import Nav from "../components/common/Nav";
import Terms from "../components/common/Terms";
import { getDays } from "../functions/getDays";
import getMonthandDate from "../functions/getMonthandDate";
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
          <DateCont>{data && getMonthandDate(data.room_date)}</DateCont>
          <DateCont>{day}요일</DateCont>
          <DateCont>{data?.room_time.substr(0, 5)}</DateCont>
        </Time>
        <div>{data?.room_title}</div>
        <div>호스트 : {}</div>
        <SectionFooter>
          <div>#{data?.room_interest}</div>
          <div>최대 인원 {data?.room_headcount}</div>
        </SectionFooter>
      </div>
      <hr></hr>
      <Terms></Terms>
    </>
  );
};
const Time = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 20px;
`;
const DateCont = styled.div`
  margin-right: 10px;
`;
const SectionFooter = styled.div`
  display: flex;
`;
export default RoomDetail;
