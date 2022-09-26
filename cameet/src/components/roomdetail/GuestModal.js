import styled from "styled-components";
import React from "react";
import { DefaultButton } from "../../utils/styles";
import { useRecoilValue } from "recoil";
import { guestData } from "../../atoms/guestData";

const GuestModal = ({ setGuestClick }) => {
  const guest = useRecoilValue(guestData);
  return (
    <ModalContainer>
      <ModalInfo>
        <Name>{guest.user_nickname}</Name>
        <Mbti>{guest.user_mbti}</Mbti>
        <UserKeyWords>
          {guest.user_keyword1 && (
            <UserKeyWord>{guest.user_keyword1}</UserKeyWord>
          )}
          {guest.user_keyword2 && (
            <UserKeyWord>{guest.user_keyword2}</UserKeyWord>
          )}
          {guest.user_keyword3 && (
            <UserKeyWord>{guest.user_keyword3}</UserKeyWord>
          )}
        </UserKeyWords>
        <DefaultButton onClick={() => setGuestClick((prev) => !prev)}>
          확인
        </DefaultButton>
      </ModalInfo>
    </ModalContainer>
  );
};

export default GuestModal;
const UserKeyWords = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const UserKeyWord = styled.div`
  background-color: #d9d9d9;
  padding: 12px;
  border-radius: 20px;
  border-width: 1px;
  margin-left: 5px;
  margin-right: 5px;
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
  font-size: 28px;
  margin: 10px;
  font-weight: 600;
`;
const Mbti = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 15px;
`;
