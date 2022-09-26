// 리액트 훅
import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
// api
import getRoomDetail from "../api/getRoomDetail";
import postRoomDetail from "../api/postRoomDetail";
// 컴포넌트
import Nav from "../components/common/Nav";
import Terms from "../components/common/Terms";
import GuestModal from "../components/roomdetail/GuestModal";
import Guests from "../components/roomdetail/Guests";
import JoinModal from "../components/roomdetail/JoinModal";
import Kakaomap from "../components/roomdetail/Kakaomap";
import Profile from "../components/common/Profile";

// function
import { getDays } from "../functions/getDays";
import getMonthandDate from "../functions/getMonthandDate";
// atom
import { session } from "../atoms/session";
// util
import { COLOR } from "../utils/colors";
import { DefaultButton, Title } from "../utils/styles";
const RoomDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useQuery(["detail", id], () => getRoomDetail(id)); // 방id얻기 및 리액트 쿼리를 통한 데이터 패칭
  const [Join, setJoin] = useState(false); // 방 참가 여부 modal을 위한 state
  const day = data && getDays(data.room_date); //방 정보를 통해 날짜 정보 계산
  const { access_token } = useRecoilValue(session); //소셜 로그인 되어있어야 방 참가 되도록
  const [isGuestClick, setGuestClick] = useState(false); //게스트 모달 띄우기
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
      console.log(access_token);
      navigate("/login");
    }
  };
  console.log(data);
  // access_token없으면 login 페이지로 redirect
  return (
    <>
      {Join ? <JoinModal setJoin={setJoin}></JoinModal> : null}
      {/* setState를 props로 넘겨줬음 */}
      {isGuestClick ? (
        <GuestModal setGuestClick={setGuestClick}></GuestModal>
      ) : null}
      <Nav />
      <RoomData>
        {/* 시간정보 */}
        <Time>
          <DateCont>{data && getMonthandDate(data.room_date)}</DateCont>
          <DateCont>{day}요일</DateCont>
          <DateCont>{data?.room_time.substr(0, 5)}</DateCont>
        </Time>
        {/* 방 이름, 호스트 이름 */}
        <RoomInfo>
          <div>
            <div>{data?.room_title}</div>
            <br></br>
            <div>호스트 : {data?.host.user_nickname}</div>
          </div>
          <Profile />
        </RoomInfo>
        {/*  인원, 흥미 */}
        <RoomInfoFooter>
          <Interest>#{data?.room_interest}</Interest>
          <HeadCount>최대 인원 {data?.room_headcount}</HeadCount>
        </RoomInfoFooter>
      </RoomData>

      <hr></hr>
      {/* 지도 */}
      <Title>만남 장소</Title>
      <Kakaomap
        lat={parseFloat(data?.room_latitude)}
        lon={parseFloat(data?.room_longitude)}
      ></Kakaomap>

      <hr></hr>
      {/* 지원자정보 */}
      <People>
        <Title>지원자</Title>
        <GuestContainer>
          {data?.guest.map((person, index) => (
            <Guests
              person={person}
              key={index}
              setGuestClick={setGuestClick}
            ></Guests>
          ))}
        </GuestContainer>
      </People>
      <hr></hr>
      <CustomTerms>
        <Terms></Terms>
      </CustomTerms>
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
const CustomTerms = styled.div`
  padding-bottom: 180px;
`;
const GuestContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const RoomInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`;
const People = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;
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
  margin-left: 30px;
  margin-right: 30px;
  font-weight: 700;
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
const RoomInfoFooter = styled.div`
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
  z-index: 1000;
  bottom: 0;
  width: 100%;
  height: 130px;
  padding: 15px;
  font-weight: 600;
`;
export default RoomDetail;
