import React, { useState, useCallback } from "react";
import { Title, SubTitle, DefaultButton, Layout } from "../utils/styles";
import Nav from "../components/common/Nav";
// import mypageAPI from "../api/mypageAPI";
import imageInput from "../components/mypage/imageInput";
import styled from "styled-components";
import axios from "axios";

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  text-align: left;
`;

const MyPage = () => {
  const [userEmail, setuserEmail] = useState("");

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    console.log("돼떠");

    axios
      .post("http://localhost:8000/accounts/mypage")
      .then((res) => res.json())
      .then((data) => {
        setuserEmail(data.data.user_email);
      });
  });

  return (
    <>
      <Nav />
      <Layout>
        <Title>내 프로필</Title>
        <imageInput />
        <SubContainer>
          <SubTitle>학교 이메일</SubTitle>
          <SubTitle>이메일(ID)</SubTitle>
          <SubTitle>비밀번호</SubTitle>
          <SubTitle>전화번호</SubTitle>
          <SubTitle>이름</SubTitle>
          <SubTitle>닉네임</SubTitle>
          <SubTitle>관심사</SubTitle>
          <SubTitle>전화번호</SubTitle>
          <SubTitle>MBTI</SubTitle>
        </SubContainer>
      </Layout>
    </>
  );
};

export default MyPage;
