import React, { useRef } from "react";
import Nav from "../components/common/Nav";
import { Layout, DefaultButton } from "../utils/styles";
import { COLOR } from "../utils/colors";
import styled from "styled-components";
import "../App.css";
import { useNavigate } from "react-router";
import axios from "axios";

const InfoDom = styled.div`
  font-size: 15pt;
  font-weight: bold;
`;
const Red = styled.p`
  color: ${COLOR.red};
`;
const Dom = styled.div`
  display: flex;
`;
const Input = styled.input`
  width: 100%;
  border-radius: 0;
  border: 1px solid ${COLOR.gray};
  padding: 10px;
  margin: 7px 0px;
`;
const BoxStyle = styled.div`
  width: 90%;
  margin: 20px 0px;
`;
const MailInput = styled.input`
  width: 77%;
  margin: 7px 7px 0px 0px;

  border-radius: 0;
  border: 1px solid ${COLOR.gray};
  padding: 10px;
`;

const MailButton = styled.button`
  width: 20%;
  padding: 6px;
  background-color: ${COLOR.mainColor};
  border-radius: 40px;
  border: 1px solid ${COLOR.mainColor};
  color: #ffffff;
`;
const MailDom = styled.div`
  white-space: nowrap;
`;
const Info = () => {
  let navigate = useNavigate();
  const onSubmit = () => {
    axios
      .post(
        "?",
        {
          nickname: nicknameRef.current.value,
          name: nameRef.current.value,
          mbti: mbtiRef.current.value,
          exciteOne: exciteOneRef.current.value,
          exciteTwo: exciteTwoRef.current.value,
          email: emailRef.current.value,
        },
        {
          "Content-Type": "application/json",
        }
      )
      .then((res) => {
        console.log(res);
        alert("추가완료!");
        navigate("/");
      });
  };

  const nicknameRef = useRef(null);
  const nameRef = useRef(null);
  const mbtiRef = useRef(null);
  const exciteOneRef = useRef(null);
  const exciteTwoRef = useRef(null);
  const emailRef = useRef(null);

  return (
    <>
      <Nav />
      <Layout>
        <InfoDom>
          서비스 이용 전에 정보를 입력해주세요.
          <BoxStyle>
            <Dom>
              닉네임<Red>*</Red>
            </Dom>
            <Input placeholder="닉네임을 입력해주세요" ref={nicknameRef} />
          </BoxStyle>
          <BoxStyle>
            <Dom>
              이름<Red>*</Red>
            </Dom>
            <Input placeholder="이름을 입력해주세요" ref={nameRef} />
          </BoxStyle>
          <BoxStyle>
            <Dom>MBTI</Dom>
            <Input placeholder="MBTI를 입력해주세요" ref={mbtiRef} />
          </BoxStyle>
          <BoxStyle>
            <Dom>
              관심사1<Red>*</Red>
            </Dom>
            <label></label>
          </BoxStyle>
          <BoxStyle>
            <Dom>
              관심사2<Red>*</Red>
            </Dom>
            <label></label>
          </BoxStyle>
          <BoxStyle>
            <Dom>메일인증</Dom>
            <MailDom>
              <MailInput
                placeholder="학교 이메일을 입력해주세요"
                ref={emailRef}
              />
              <MailButton>메일인증</MailButton>
            </MailDom>
          </BoxStyle>
          <DefaultButton>저장하기</DefaultButton>
          {/* <DefaultButton onClick={onSubmit}>저장하기</DefaultButton> */}
        </InfoDom>
      </Layout>
    </>
  );
};

export default Info;
