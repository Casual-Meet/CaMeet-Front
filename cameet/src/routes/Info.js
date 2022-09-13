
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Title, SubTitle, Layout } from "../utils/styles";
import "animate.css/animate.min.css";
import styled from "styled-components";
import getInfoData from "../api/getInfoData";

const InfoWrapper = styled.div`
  margin: 2vw 2vw;
`;

const Loader = styled.div`

`;

const Info = () => 
  const {data, isLoading} =useQuery(["userinfo"], (userid)=>getInfoData)
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
        <Title>내 정보</Title>
        
    </>
  );
};

export default Info;
