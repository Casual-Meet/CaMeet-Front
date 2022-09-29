// 리액트 훅
import React from "react";
import { useRecoilValue } from "recoil";
import { useQuery } from "react-query";
import "animate.css/animate.min.css";
import styled from "styled-components";
// utils
import { Title, SubTitle } from "../utils/styles";
// api
import getMypageInfo from "../api/getMypageInfo";
import getUserInfo from "../api/getUserInfo";
// atom
import { session } from "../atoms/session";

const Info = () => {
  const { access_token: token } = useRecoilValue(session);
  const { data: Data } = useQuery(["userinfo", token], () =>
    getUserInfo(token)
  );
  const { isLoading, error, data } = useQuery(["mypage", token], () =>
    getMypageInfo(token)
  ); // 함수로 빼놓으면 편해요!
  console.log(Data);
  if (isLoading) return <Loader>Loading...</Loader>;
  if (error) return "An error has occurred: " + error.message;
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
const InfoWrapper = styled.div`
  margin: 2vw 2vw;
`;

const Loader = styled.div``;
