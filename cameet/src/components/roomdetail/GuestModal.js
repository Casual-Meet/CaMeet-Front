import styled from "styled-components";
import React from "react";
import { DefaultButton } from "../../utils/styles";
import { useRecoilState } from "recoil";
import { modal } from "../../atoms/modal";

const GuestModal = () => {
  const [isClicked, setClicked] = useRecoilState(modal);
  return (
    <ModalContainer onClick={setClicked((prev) => !prev)}>
      <ModalInfo>
        <img src={require(`../../images/profile_tmp.png`)} alt=""></img>
        <Name>철수</Name>
        <Mbti>ENFJ</Mbti>
        <UserKeyword>#경제</UserKeyword>
        <DefaultButton onClick={setClicked((prev) => !prev)}>
          확인
        </DefaultButton>
      </ModalInfo>
    </ModalContainer>
  );
};

export default GuestModal;
const UserKeyword = styled.div`
  background-color: #d9d9d9;
  padding: 10px;
  border-radius: 20px;
  border-width: 1px;
`;
const ModalContainer = styled.div`
  position: absolute;
  z-index: 10000;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalInfo = styled.div`
  width: 300px;
  height: 400px;
  background-color: #ebebeb;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;
const Name = styled.div`
  font-size: 25px;
  margin: 10px;
  font-weight: 600;
`;
const Mbti = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;
