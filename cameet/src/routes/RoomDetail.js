import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import getRoomDetail from "../api/getRoomDetail";
import postRoomDetail from "../api/postRoomDetail";
import { session } from "../atoms/session";
import Nav from "../components/common/Nav";
import Terms from "../components/common/Terms";
import JoinModal from "../components/roomdetail/JoinModal";
import Kakaomap from "../components/roomdetail/Kakaomap";
import { getDays } from "../functions/getDays";
import getMonthandDate from "../functions/getMonthandDate";
import { COLOR } from "../utils/colors";
import { DefaultButton, SubTitle, Title } from "../utils/styles";
const RoomDetail = () => {
  const [Join, setJoin] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useQuery(["detail", id], () => getRoomDetail(id));
  const day = data && getDays(data.room_date);
  const { access_token } = useRecoilValue(session);
  const { mutate } = useMutation(
    () => postRoomDetail(access_token, parseInt(id)),
    {
      onSuccess: (data) => {
        if (data.status === 200) {
          console.log(data);
          setJoin(true);
        }
      },
    }
  );
  const joinRoom = () => {
    if (access_token) {
      mutate();
    } else {
      navigate("/login");
    }
  };
  // access_token없으면 login 페이지로 redirect
  return (
    <>
      {Join ? <JoinModal setJoin={setJoin}></JoinModal> : null}
      {/* setState를 props로 넘겨줬음 */}
      <Nav />
      <RoomData>
        <Time>
          <DateCont>{data && getMonthandDate(data.room_date)}</DateCont>
          <DateCont>{day}요일</DateCont>
          <DateCont>{data?.room_time.substr(0, 5)}</DateCont>
        </Time>
        <div>{data?.room_title}</div>
        <div>호스트 : {}</div>
        <SectionFooter>
          <Interest>#{data?.room_interest}</Interest>
          <HeadCount>최대 인원 {data?.room_headcount}</HeadCount>
        </SectionFooter>
      </RoomData>
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
          <JoinButton onClick={joinRoom}>참여하기</JoinButton>
        </Right>
      </Footer>
    </>
  );
};
const HeadCount = styled.div`
  color: gray;
  font-weight: 600;
`;
const Interest = styled.div`
  margin-right: 100px;
  font-size: 20px;
  font-weight: 600;
`;
const RoomData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 20px;
`;
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
  margin-bottom: 10px;
`;
const DateCont = styled.div`
  margin-right: 10px;
`;
const SectionFooter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
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
