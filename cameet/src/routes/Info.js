<<<<<<< HEAD
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Title, SubTitle, Layout } from "../utils/styles";
import "animate.css/animate.min.css";
import styled from "styled-components";

const InfoWrapper = styled.div`
  margin: 2vw 2vw;
`;

const Loader = styled.div`

`;
=======
import React from "react";
import Nav from "../components/common/Nav";
>>>>>>> 1d6764994e30c1ef6dcf6b59c40b0b4c106da5ae

const Info = () => {
  const [makeRoom, setMakeRoom] = useState([]);
  const [goRoom, setGoRoom] = useState([]);
  const [loading, setLoading] = useState(true);
  // 시작할 때 1번만 실행
  useEffect(() => {
    (async () => {
      const response = await fetch("");
      const json = await response.json();

      setLoading(false);
    })();
  }, []);
  console.log(makeRoom);
  return (
    <>
<<<<<<< HEAD
      <InfoWrapper>
        <Title>내 정보</Title>
        {/* {loading ? (
          <Loader>loading</Loader>
        ):()} */}
      </InfoWrapper>
=======
      <Nav />
      <div>info</div>
>>>>>>> 1d6764994e30c1ef6dcf6b59c40b0b4c106da5ae
    </>
  );
};

export default Info;
