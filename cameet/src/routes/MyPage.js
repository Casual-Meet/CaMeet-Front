import React, { useState, useCallback } from "react";
import { Title, DefaultButton, Layout } from "../utils/styles";
import Nav from "../components/common/Nav";
// import mypageAPI from "../api/mypageAPI";
import imageInput from "../components/mypage/imageInput";
import styled from "styled-components";
import axios from "axios";

const SubContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-start;
  text-align: left;
`;
const SmallTitle = styled.p`
  font-size: 1rem;
  margin: 15.8px 0px;
`;

const Input = styled.input`
  margin: 13px 0px;

  // border: 1px solid transparent;
  // :focus {
  //   outline: none;
  // }
`;
const TextDom = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: left;
`;
const InputDom = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  color: ;
`;

const MyPage = () => {
  const [userEmail, setuserEmail] = useState("");

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    console.log("돼떠");

    // axios
    //   .patch("https://cameet.site/accounts/mypage/")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setuserEmail(data.data.user_email);
    //   });
  });

  return (
    <>
      <Nav />
      <Layout>
        <Title>내 프로필</Title>
        <imageInput />
        <SubContainer>
          <TextDom>
            <SmallTitle>이름</SmallTitle>
            <SmallTitle>닉네임</SmallTitle>
            <SmallTitle>관심사1</SmallTitle>
            <SmallTitle>관심사1</SmallTitle>
            <SmallTitle>MBTI</SmallTitle>
            <SmallTitle>학교 이메일</SmallTitle>
          </TextDom>
          <InputDom>
            <Input type="text" />
            <Input type="text" />
            <Input type="text" />
            <Input type="text" />
            <Input type="text" />
            <Input type="text" />
          </InputDom>
        </SubContainer>
        <DefaultButton>저장하기</DefaultButton>
      </Layout>
    </>
  );
};

export default MyPage;
