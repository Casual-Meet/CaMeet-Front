import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Title, SubTitle, Layout } from "../utils/styles";
import "animate.css/animate.min.css";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { useQuery } from "react-query";
import getUserInfo from "../api/getUserInfo";
import { session } from "../atoms/session";

const InfoWrapper = styled.div`
  margin: 2vw 2vw;
`;

const Loader = styled.div``;

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
  return (
    <>
      <InfoWrapper>
        <Title>내 정보</Title>
      </InfoWrapper>
    </>
  );
};

export default Info;
