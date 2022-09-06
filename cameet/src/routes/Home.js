import React from "react";
import Nav from "../components/common/Nav";
import styled from "styled-components";
import infoSlide from "../images/info-slide.png";
import { COLOR } from "../utils/colors";
import homeData from "../db/homeData.json";
import RoomByDate from "../components/home/RoomByDate";
import { Outlet } from "react-router";

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
const SelectDate = styled.ul``;

function Home() {
  const today = new Date();
  const year = ("0" + today.getFullYear()).slice(-2);
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);

  const dateString = year + "-" + month + "-" + day;

  console.log(dateString);
  console.log(homeData.data);

  let dates = [];

  return (
    <>
      <Nav />
      <Container>
        <Notice>
          <p>
            동아리보다 가벼운,
            <br />
            #캐밋입니다.
          </p>
        </Notice>
        <SelectDate></SelectDate>
        <Outlet />
      </Container>
    </>
  );
}

export default Home;
