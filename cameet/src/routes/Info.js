import React, { useRef, useState } from "react";
import Nav from "../components/common/Nav";
import { Layout, DefaultButton } from "../utils/styles";
import { COLOR } from "../utils/colors";
import styled from "styled-components";
import "../App.css";
import { useNavigate } from "react-router";
import axios from "axios";
import excite1 from "../images/excite1.png";

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
const Input = styled.input`
  width: 100%;
  border-radius: 0;
  border: 1px solid ${COLOR.gray};
  padding: 10px;
  margin: 7px 0px;
`;
//텍스트+input부붙
const BoxStyle = styled.div`
  width: 90%;
  margin: 20px 0px;
`;
//메일부분 스타일링
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
// 체크박스 스타일링
const StyledLabel = styled.label`
  // display: flex;
  // align-items: center;
  // user-select: none;
  // cursor: pointer;
  // width: 50px;
  // height: 30px;
  // border: 1px solid transparent;
  // // background-color: ${(props) => props.btnColor || "white"};
  // border-radius: 20px;
  // cursor: pointer;
  // font-size: 12pt;
  // font-weight: 400;
  // justify-content: center;
`;
const StyledInput = styled.input`
  appearance: none;
  width: 50px;
  height: 30px;

  border: 1px solid transparent;
  // background-color: ${(props) => props.btnColor || "white"};
  background-image: ${(props) => props.btnImg || "#"};
  border-radius: 20px;
  cursor: pointer;
  position: absolute;
  z-index: 1;
  &:checked {
    border: 2px solid ${COLOR.mainColor};
  }
`;
const Span = styled.span`
  position: relative;
  z-index: 2;
`;

const Info = () => {
  let [exciteOne, setExciteOne] = useState();
  let [exciteTwo, setExciteTwo] = useState();

  const exciteOneSubmit = (excite) => {
    setExciteOne(excite);
    console.log("good");
  };
  const exciteTwoSubmit = (excite) => {
    setExciteTwo(excite);
  };

  let navigate = useNavigate();
  const onSubmit = () => {
    axios
      .post(
        "backend-api",
        {
          nickname: nicknameRef.current.value,
          name: nameRef.current.value,
          mbti: mbtiRef.current.value,
          exciteOne: exciteOne,
          exciteTwo: exciteTwo,
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

            <StyledLabel htmlFor="radioOne1" name="radioOne">
              <StyledInput
                type="radio"
                id="radioOne1"
                name="radioOne"
                // btnColor="pink"
                btnImg={excite1}
                onClick={exciteOneSubmit}
              />
              {/* <Span>#철학</Span> */}
              {/* </StyledLabel>
            <StyledLabel htmlFor="radioOne2" name="radioOne">
              <StyledInput
                type="radio"
                id="radioOne2"
                name="radioOne"
                btnColor="skyblue"
                onClick={exciteOneSubmit}
              /> */}
              {/* <Span>#경제</Span> */}
            </StyledLabel>
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
