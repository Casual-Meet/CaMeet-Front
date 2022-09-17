import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import styled from "styled-components";
import getRoomDetail from "../api/getRoomDetail";
import Nav from "../components/common/Nav";
import Terms from "../components/common/Terms";
import Kakaomap from "../components/roomdetail/Kakaomap";
import { getDays } from "../functions/getDays";
import getMonthandDate from "../functions/getMonthandDate";
import { COLOR } from "../utils/colors";
import { DefaultButton, SubTitle, Title } from "../utils/styles";
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
      <Title>만남 장소</Title>
      <Kakaomap
        lat={parseFloat(data?.room_latitude)}
        lon={parseFloat(data?.room_longitude)}
      ></Kakaomap>
      <hr></hr>
      <Terms></Terms>
      <Footer>
        <Left>
          <DateContainer>
            <DateCont>{data && getMonthandDate(data.room_date)}</DateCont>
            <DateCont>{data?.room_time.substr(0, 5)}</DateCont>
          </DateContainer>
          <div>#{data?.room_interest}</div>
        </Left>
        <Right>
          <JoinButton>참여하기</JoinButton>
        </Right>
      </Footer>
    </>
  );
};
const Left = styled.div`
  flex-basis: 70%;
`;
const Right = styled.div`
  flex-basis: 30%;
`;
const JoinButton = styled(DefaultButton)`
  margin: 0;
  width: 100%;
  font-size: 20px;
  padding: 20px;
  height: 60px;
  box-shadow: 0px 2px 5px 1px #666666;
`;
const DateContainer = styled.div`
  font-size: 20px;
  display: flex;
  margin-bottom: 10px;
`;
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
const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${COLOR.yellow};
  position: fixed;
  width: 100%;
  height: 130px;
  padding: 15px;
  font-weight: 600;
`;
export default RoomDetail;
