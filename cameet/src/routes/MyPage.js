import React, { useRef, useState } from "react";
import { Title, DefaultButton, Layout } from "../utils/styles";
import Nav from "../components/common/Nav";
import { COLOR } from "../utils/colors";
import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { session } from "../atoms/session";
import { useNavigate } from "react-router";
import logoPlus from "../images/imgplus.png";

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
  margin: 12.5px 0px;
  font-size: 1rem;
  color: ${COLOR.grey};

  border: 1px solid transparent;
  :focus {
    outline: none;
  }
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
`;
const EmailDom = styled.div`
  display: flex;
`;
const EmailInput = styled.input`
  width: 70%;
  margin: 12.5px 0px;
  font-size: 1rem;
  color: #4c4c4c;
  border: 1px solid transparent;
  :focus {
    outline: none;
  }
`;
const EmailButton = styled.button`
  width: 30%;
  font-size: 1rem;
  background-color: #07ca4a;
  border-radius: 15px;
  border: 1px solid transparent;
  color: white;
  height: 1.5rem;
  margin: 15px 0px;
  cursor: pointer;
`;
const MbtiInput = styled.input`
  width: 16%;
  margin: 10px 0px 2px 0px;
  padding-left: 10px;
  font-size: 1rem;
  color: #4c4c4c;
  background-color: #f7e5dc;
  border-radius: 20px;
  height: 1.8rem;
  border: 1px solid transparent;
  :focus {
    outline: none;
  }
`;
const BackgroundDom = styled.div`
  display: flex;
  justify-content: center;
`;
const Background = styled.div`
  width: 100px;
  height: 100px;

  margin-top: 2vh;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  vertical-align: middle;
  cursor: pointer;
  position: absolute;
  z-index: 1;
  border-radius: 100px;
`;
const ShowImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  position: absolute;
  z-index: 2;
`;
const Img = styled.label`
  width: 100%;
  height: 100px;
  margin-top: 2vh;
  display: flex;
  justify-content: center;
  vertical-align: middle;
  cursor: pointer;
`;
const PhotoInput = styled.input`
  visibility: hidden;
  width: 100%;
`;
const ImgIcon = styled.img`
  width: 30px;
  height: 30px;
  position: relative;
  top: 75px;
  z-index: 3;
  left: 30px;
`;
const MyPage = () => {
  const user = useRecoilValue(session);
  const token = user.access_token;

  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://cameet.site/accounts/mypage/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        "Content-Type": "application/json",
      })
      .then((response) => {
        console.log(response.data);
        setUserInfo(response.data);
        console.log("success");
      });
  }, []);

  let navigate = useNavigate();
  const onSubmit = () => {
    axios
      .patch(
        "https://cameet.site/accounts/mypage/",
        {
          user_nickname: nicknameRef.current.value,
          user_name: nameRef.current.value,
          user_mbti: mbtiRef.current.value,
          user_keyword1: exciteOneRef.current.value,
          user_keyword2: exciteTwoRef.current.value,
          user_auth_email: emailRef.current.value,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          "Content-Type": "application/json",
        }
      )
      .then((res) => {
        console.log(res);
        alert("추가완료!");
        navigate("/");
      });
  };
  const profileRef = useRef(null);
  const nicknameRef = useRef(null);
  const nameRef = useRef(null);
  const exciteOneRef = useRef(null);
  const exciteTwoRef = useRef(null);
  const mbtiRef = useRef(null);
  const emailRef = useRef(null);
  const [imageSrc, setImageSrc] = useState("");
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
        document.querySelector("#background").style.display = "none";
      };
    });
  };
  return (
    <>
      <Nav />
      <Layout>
        <Title>내 프로필</Title>
        <BackgroundDom>
          <Background id="background" />
        </BackgroundDom>
        <Img htmlFor="file">
          <ImgIcon src={logoPlus} alt="#" />
          {imageSrc && <ShowImg src={imageSrc} id="showimg" alt="#" />}
        </Img>

        <PhotoInput
          type="file"
          name="file"
          id="file"
          ref={profileRef}
          onChange={(e) => {
            encodeFileToBase64(e.target.files[0]);
            console.log(e.target.files[0].name);
          }}
        />
        <SubContainer>
          <TextDom>
            <SmallTitle>이름</SmallTitle>
            <SmallTitle>닉네임</SmallTitle>
            <SmallTitle>관심사1</SmallTitle>
            <SmallTitle>관심사2</SmallTitle>
            <SmallTitle>MBTI</SmallTitle>
            <SmallTitle>학교 이메일</SmallTitle>
          </TextDom>
          <InputDom>
            <Input
              type="text"
              defaultValue={userInfo.user_name}
              ref={nameRef}
            />
            <Input
              type="text"
              defaultValue={userInfo.user_nickname}
              ref={nicknameRef}
            />
            <Input
              type="text"
              defaultValue={userInfo.user_keyword1}
              ref={exciteOneRef}
            />
            <Input
              type="text"
              defaultValue={userInfo.user_keyword2}
              ref={exciteTwoRef}
            />

            <MbtiInput
              type="text"
              defaultValue={userInfo.user_mbti}
              ref={mbtiRef}
            />

            <EmailDom>
              <EmailInput
                type="text"
                defaultValue={userInfo.user_auth_email}
                ref={emailRef}
              />
              <EmailButton onClick={() => alert("준비 중인 기능입니다")}>
                학교인증
              </EmailButton>
            </EmailDom>
          </InputDom>
        </SubContainer>
        <DefaultButton onClick={onSubmit}>저장하기</DefaultButton>
      </Layout>
    </>
  );
};

export default MyPage;
