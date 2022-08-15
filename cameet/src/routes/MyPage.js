import React, { useState } from "react";
import { Title, SubTitle, DefaultButton, Layout } from "../utils/styles";
import Nav from "../components/common/Nav";
import mypageAPI from "../api/mypageAPI";
import imageInput from '../components/mypage/imageInput';

const MyPage = () => {
  const []
  return (
    <>
      <Nav />
      <Layout>
        <Title>내 프로필</Title>
        <imageInput />
        <SubTitle>학교 이메일</SubTitle>
        <SubTitle>이메일(ID)</SubTitle>
        <SubTitle>비밀번호</SubTitle>
        <SubTitle>전화번호</SubTitle>
        <SubTitle>이름</SubTitle>
        <SubTitle>닉네임</SubTitle>
        <SubTitle>관심사</SubTitle>
        <SubTitle>전화번호</SubTitle>
        <SubTitle>MBTI</SubTitle>
      </Layout>
    </>
  );
};

export default MyPage;
