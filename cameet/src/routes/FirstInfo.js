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
import { useRecoilValue, useRecoilState } from "recoil";
import { session } from "../atoms/session";
import { useMutation } from "react-query";

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
const StyledLabel = styled.label`
  margin-right: 1vw;
`;
const StyledInput = styled.input`
  appearance: none;
  width: 60px;
  height: 35px;

  border: 1px solid transparent;
  background-color: ${(props) => props.btnColor || "white"};
  // background-image: ${(props) => props.btnImg || "#"};
  border-radius: 20px;
  cursor: pointer;
  //   position: absolute;
  z-index: 1;
  &:checked {
    border: 2px solid ${COLOR.mainColor};
  }
`;
const Span = styled.span`
  position: relative;
  z-index: 2;
  font-size: 12pt;
  font-weight: 400;
  cursor: pointer;
`;
const SpanDom = styled.div`
  text-align: center;
  width: 65px;
  margin: -32px 0px 0px 3px;
`;
const InputDom = styled.div``;

const FirstInfo = () => {
  const user = useRecoilValue(session);
  const token = user.access_token;
  const [mbtis, setMbtis] = useState("");
  const [sessionData, setSessionData] = useRecoilState(session);

  // console.log(user.access_token);
  // console.log(user.refresh_token);
  let navigate = useNavigate();

  const onSubmit = () => {
    console.log(nicknameRef.current.value);
    console.log(nameRef.current.value);
    console.log(mbtis);
    console.log(exciteOneRef.current.value);
    console.log(exciteTwoRef.current.value);
    console.log(emailRef.current.value);

    axios
      .patch(
        "https://cameet.site/accounts/mypage/",
        {
          user_nickname: nicknameRef.current.value,
          user_name: nameRef.current.value,
          user_mbti: mbtis,
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
        setSessionData(res.data);
        window.localStorage.setItem("access_token", res.data.access_token);
        window.localStorage.setItem("refresh_token", res.data.refresh_token);
        console.log(res);
        alert("추가완료!");
        navigate("/mypage");
      });
  };

  const nicknameRef = useRef(null);
  const nameRef = useRef(null);
  const exciteOneRef = useRef(null);
  const exciteTwoRef = useRef(null);
  const emailRef = useRef(null);
  console.log(sessionData);

  const mbtiClick = (id, mbti) => {
    console.log("start");
    console.log(id);
    setMbtis(mbti);
    console.log(mbtis);
  };
  // if(document.getElementById('gender_Male').checked) {
  //   //Male radio button is checked
  // }

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

            <MbtiDom>
              {data.mbtis.map((mbti) => (
                <InputDom key={mbti.id}>
                  <StyledInput
                    type="radio"
                    id={mbti.id}
                    name="radio"
                    btnColor={mbti.color}
                  />
                  <StyledLabel htmlFor={mbti.id} name="radio">
                    <SpanDom>
                      <Span onClick={() => mbtiClick(mbti.id, mbti.mbti)}>
                        {mbti.mbti}
                      </Span>
                    </SpanDom>
                  </StyledLabel>
                </InputDom>
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

export default FirstInfo;
