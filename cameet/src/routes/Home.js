import React from "react";
import Nav from "../components/common/Nav";
import styled from "styled-components";
import infoSlide from "../images/info-slide.png";
import { COLOR } from "../utils/colors";
import { Outlet } from "react-router";
import { useQuery } from "react-query";
import getHomeData from "../api/getHomeData";
import getDates from "../functions/getDates";
import { getDays } from "../functions/getDays";

function Home() {
  const { data, isLoading } = useQuery(["homedata"], getHomeData);
  const dates = getDates();
  console.log(dates);
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
          {dates.map((day) => (
            <DatesBox>
              <Dates>{day.slice(8)}</Dates>
              <Day>{getDays(day)}</Day>
            </DatesBox>
          ))}
        </SelectDate>
        <Outlet />
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
  justify-content: space-evenly;
  width: 200%;
`;
const DatesBox = styled.div`
  padding: 10px;
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
