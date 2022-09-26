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
  const user = useRecoilValue(session);
  const token = user.access_token;
  const { isLoading, error, data, isFetching } = useQuery("userinfo", () =>
    fetch("https://cameet.site/userinfo/").then((res) => {
      console.log(res.data);
    })
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  // 시작할 때 1번만 실행
  // useEffect(() => {
  //   axios
  //   .get("https://cameet.site/userinfo/", {
  //     headers:{
  //       Authorization: `Bearer ${token}`,
  //     },
  //     "Content-Type" : "application/json",
  //   })
  //   .then((res) => {
  //     console.log(res.data);
  //     setUserInfo(res.data);
  //     setSessionData(res.data);
  //     window.localStorage.setItem("access_token", res.data.access_token);
  //     window.localStorage.setItem("refresh_token", res.data.refresh_token);
  //     console.log("돼써");
  //   });
  // }, []);
  // console.log(sessionData);

  return (
    <>
      <InfoWrapper>
        <Title>내 정보</Title>
        <div>{data?.nickname}님</div>
        <div>
          <span>{data?.user_keyword1}</span>
          <span>{data?.user_keyword2}</span>
        </div>
        <div>
          <SubTitle>내가 만든 방</SubTitle>
          <div>{data?.user_create_rooms.room_title}</div>
          <div>{data?.user_create_rooms.room_interest}</div>
        </div>
        <div>
          <SubTitle>내가 참여하는 방</SubTitle>
          <div>{data?.user_join_rooms.room_title.room_interest}</div>
        </div>
      </InfoWrapper>
    </>
  );
};

export default Info;
