import React, { useState, useCallback } from "react";
import axios from "axios";
import { Title, SubTitle, Layout } from "../utils/styles";
import "animate.css/animate.min.css";
import styled from "styled-components";

const InfoWrapper = styled.div`
  margin: 2vw 2vw;
`

const Info = () => {
  return (
    <>
      <InfoWrapper>
        <Title>내 정보</Title>
      </InfoWrapper>
    </>
  );
};

export default Info;
