import React from "react";
import Nav from "../components/Nav";
import styled from "styled-components";
import infoSlide from "../images/info-slide.png";
import { COLOR } from "../utils/colors";
import homeData from "../db/homeData.json";

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
        <SelectDate></SelectDate>
      </Container>
    </>
  );
}

export default Home;
