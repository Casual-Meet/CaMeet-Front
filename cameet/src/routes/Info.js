import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Title, SubTitle, Layout } from "../utils/styles";
import "animate.css/animate.min.css";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { useQuery } from "react-query";
import getUserInfo from "../api/getUserInfo";
import { session } from "../atoms/session";
import { BASE_URL } from "../api/BaseURL";
const InfoWrapper = styled.div`
  margin: 2vw 2vw;
`;

const Loader = styled.div``;

const Info = () => {
  const user = useRecoilValue(session);
  const token = user.access_token;
  const {
    isLoaing: loading,
    error: Error,
    data: Data,
  } = useQuery("userinfo", () =>
    axios
      .get(`${BASE_URL}/userinfo/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        "Content-Type": "application/json",
      })
      .then((res) => res.data)
  );

  const { isLoading, error, data } = useQuery(
    "mypage",
    () =>
      // 함수로 빼놓으면 편해요!
      getUserInfo(token)
  );
  console.log(data)

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  // 시작할 때 1번만 실행

  return (
    <>
      <InfoWrapper>
        <Title>내 정보</Title>
        <div>{data?.user_nickname}님</div>
        <div>
          <span>{data?.user_keyword1}</span>
          <span>{data?.user_keyword2}</span>
        </div> 
        <div>
          <SubTitle>내가 만든 방</SubTitle>
          <div>{data?.user_create_rooms?.room_title}</div>
          <div>{data?.user_create_rooms?.room_interest}</div>
        </div>
        <div>
          <SubTitle>내가 참여하는 방</SubTitle>
          <div>{data?.user_join_rooms?.room_title.room_interest}</div>
        </div>
      </InfoWrapper>
    </>
  );
};

export default Info;
