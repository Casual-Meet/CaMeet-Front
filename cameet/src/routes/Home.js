// 리액트 훅
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
// 컴포넌트
import Nav from "../components/common/Nav";
import RoomByDate from "../components/home/RoomByDate";
import infoSlide from "../images/info-slide.png";
// api
import getHomeData from "../api/getHomeData";
// 함수
import getDates from "../functions/getDates";
import { getDays } from "../functions/getDays";
import isToday from "../functions/isToday";
// 유틸
import { COLOR } from "../utils/colors";

function Home() {
  const { data, isLoading } = useQuery(["homedata"], getHomeData); //방 정보 받아오기
  const [dates, setDates] = useState([]); //날짜정보 받아오기
  const [selectedDate, setSelectedDate] = useState(""); //선택된 날짜 초록색으로 만들기
  useEffect(() => {
    const dates = getDates();
    dates.forEach((day) => (isToday(day) ? setSelectedDate(day) : null));
    setDates(dates);
  }, []); // 2주일치 날짜 데이터 받아오기
  return (
    <>
      <Nav />
      <Container>
        <Notice>
          <p>
            동아리보다 가벼운,
            <br />
            #캐밋
          </p>
        </Notice>
        <SelectDate>
          {dates.map((day, index) => (
            <DatesBox
              key={index}
              style={{
                backgroundColor:
                  selectedDate === day ? COLOR.mainColor : "white",
                color:
                  selectedDate === day
                    ? COLOR.white
                    : getDays(day) === "토"
                    ? COLOR.blue
                    : getDays(day) === "일"
                    ? COLOR.red
                    : "black",
                // 토요일이면 blue, 일요일이면 red, 가독성 조졌다...
              }}
              onClick={() => setSelectedDate(day)}
            >
              <Dates>{day.slice(8)}</Dates>
              <Day>{getDays(day)}</Day>
            </DatesBox>
          ))}
        </SelectDate>
        {/* data없으면 오류나므로 &&처리 */}
        {isLoading
          ? "Loading" //로딩 체크
          : selectedDate &&
            data &&
            data[selectedDate]?.map((room) => (
              <>
                <Link to={`/roomdetail/${room.id}`}>
                  <RoomByDate room={room} key={room.id} />
                </Link>
                <hr></hr>
              </>
            ))}
        {/* 선택된 날짜의 방만 띄워줌 */}
      </Container>
      <Link to={"/roomcreate"}>
        <RoomCreateButton>+</RoomCreateButton>
      </Link>
      {/* roomcreate연결 */}
    </>
  );
}
const RoomCreateButton = styled.button`
  background-color: ${COLOR.mainColor};
  color: ${COLOR.white};
  height: 80px;
  width: 80px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  border-style: none;
  border-radius: 100%;
  font-size: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Notice = styled.div`
  background-image: url(${infoSlide});
  background-size: cover;
  width: 100%;
  height: 150px;
  border-radius: 25px;
  position: relative;
  p {
    color: ${COLOR.white};
    font-size: 25px;
    font-weight: 600;
    position: absolute;
    top: 15%;
    left: 10%;
  }
`;
const Container = styled.div`
  padding: 2vw;
`;
const SelectDate = styled.ul`
  display: flex;
  width: 100%;
  overflow: scroll;
  padding: 10px;
`;
const DatesBox = styled.div`
  padding: 10px;
  margin-right: 20px;
  border-radius: 10px;
  cursor: pointer;
`;
const Dates = styled.div`
  font-size: 24px;
  padding-bottom: 10px;
  font-weight: bold;
`;
const Day = styled.div`
  text-align: center;
  font-size: 10;
`;

export default Home;
