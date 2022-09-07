import React, { useEffect, useState } from "react";
import Nav from "../components/common/Nav";
import styled from "styled-components";
import infoSlide from "../images/info-slide.png";
import { COLOR } from "../utils/colors";
import { useQuery } from "react-query";
import getHomeData from "../api/getHomeData";
import getDates from "../functions/getDates";
import { getDays } from "../functions/getDays";
import RoomByDate from "../components/home/RoomByDate";
import isToday from "../functions/isToday";
import { Link } from "react-router-dom";

function Home() {
  const { data, isLoading } = useQuery(["homedata"], getHomeData);
  const [dates, setDates] = useState([]);
  // recoil 사용 고민
  const [selectedDate, setSelectedDate] = useState("");
  useEffect(() => {
    const dates = getDates();
    dates.forEach((day) => (isToday(day) ? setSelectedDate(day) : null));
    setDates(dates);
  }, []);

  // 2주일치 날짜 데이터 받아오기
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
                color: selectedDate === day ? COLOR.white : "black",
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
          ? "Loading"
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
      </Container>
    </>
  );
}
const Notice = styled.div`
  background-image: url(${infoSlide});
  background-size: cover;
  width: 100%;
  height: 0;
  padding-top: 50%;
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
