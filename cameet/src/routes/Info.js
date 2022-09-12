import React, { useRef, useState } from "react";
import Nav from "../components/common/Nav";
import { Layout, DefaultButton, Input } from "../utils/styles";
import { COLOR } from "../utils/colors";
import styled from "styled-components";
import "../App.css";
import { useNavigate } from "react-router";
import axios from "axios";
import { Mbti } from "../utils/mbti";
import data from "../db/mbti.json";

const InfoDom = styled.div`
  font-size: 15pt;
  font-weight: bold;
`;
//필수입력사항표기를 위한 빨강*부분
const Red = styled.p`
  color: ${COLOR.red};
`;
const Dom = styled.div`
  display: flex;
`;
const AInput = styled(Input)`
  width: 100%;
  margin: 7px 0px;
`;
//텍스트+input부붙
const BoxStyle = styled.div`
  width: 90%;
  margin: 20px 0px;
`;
//메일부분 스타일링
const MailInput = styled(Input)`
  width: 100%;
  margin: 7px 7px 0px 0px;
`;

// const MailButton = styled.button`
//   width: 20%;
//   padding: 6px;
//   background-color: ${COLOR.mainColor};
//   border-radius: 40px;
//   border: 1px solid ${COLOR.mainColor};
//   color: #ffffff;
// `;
const MailDom = styled.div`
  white-space: nowrap;
`;
const MbtiDom = styled.div`
  display: flex;
  overflow: scroll;
`;

const Info = () => {
  const [mbti, setMbti] = useState();

  const mbtiSubmit = (a) => {
    console.log("good");
    setMbti(a);
    console.log(mbti);
  };

  let navigate = useNavigate();
  const mailSubmit = () => {
    axios.post(
      "https://cameet.site/accounts/emailcheck",
      { email: emailRef.current.value },
      { "Content-Type": "application/json" }
    );
  };
  const onSubmit = () => {
    // axios
    //   .post(
    //     "backend-api",
    //     {
    //       nickname: nicknameRef.current.value,
    //       name: nameRef.current.value,
    //       mbti: mbtiRef.current.value,
    //       exciteOne: exciteOneRef.current.value,
    //       exciteTwo: exciteTwoRef.current.value,
    //     },
    //     {
    //       "Content-Type": "application/json",
    //     }
    //   )
    //   .then((res) => {
    //     console.log(res);
    //     alert("추가완료!");
    //     navigate("/");
    //   });
  };

  const nicknameRef = useRef(null);
  const nameRef = useRef(null);
  // const mbtiRef = useRef(null);
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
            <AInput placeholder="닉네임을 입력해주세요" ref={nicknameRef} />
          </BoxStyle>
          <BoxStyle>
            <Dom>
              이름<Red>*</Red>
            </Dom>
            <AInput placeholder="이름을 입력해주세요" ref={nameRef} />
          </BoxStyle>
          <BoxStyle>
            <Dom>
              MBTI<Red>*</Red>
            </Dom>
            {/* <Input placeholder="MBTI를 입력해주세요" ref={mbtiRef} /> */}

            <MbtiDom>
              {data.mbtis.map((mbti) => (
                <Mbti
                  num={mbti.id}
                  color={mbti.color}
                  text={mbti.mbti}
                  key={mbti.id}
                  onClick={() => mbtiSubmit(`${mbti.mbti}`)}
                ></Mbti>
              ))}
            </MbtiDom>
          </BoxStyle>
          {/* 관심사 */}
          <BoxStyle>
            <Dom>
              관심사1<Red>*</Red>
            </Dom>
            <AInput
              placeholder="관심사를 입력해주세요 ex) 철학, 경제, 운동"
              ref={exciteOneRef}
            />
          </BoxStyle>
          <BoxStyle>
            <Dom>
              관심사2<Red>*</Red>
            </Dom>
            <AInput
              placeholder="관심사를 입력해주세요 ex) 철학, 경제, 운동"
              ref={exciteTwoRef}
            />
          </BoxStyle>
          <BoxStyle>
            <Dom>메일인증</Dom>
            <MailDom>
              <MailInput
                placeholder="학교 이메일을 입력해주세요"
                ref={emailRef}
              />
              {/* <MailButton onClick={mailSubmit}>메일인증</MailButton> */}
            </MailDom>
          </BoxStyle>
          <DefaultButton onClick={onSubmit}>저장하기</DefaultButton>
        </InfoDom>
      </Layout>
    </>
  );
};

export default Info;
