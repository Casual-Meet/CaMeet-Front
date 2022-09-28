import React from "react";
import styled from "styled-components";
import { DefaultButton } from "../../utils/styles";
import Profile from "../common/Profile";
import { useQuery } from "react-query";
import getMypageInfo from "../../api/getMypageInfo";
const JoinModal = ({ setJoin }) => {
  const { data } = useQuery(["userdata"], getMypageInfo);
  return (
    <JoinModalContainer>
      <JoinModalInfo>
        <Profile />
        <Name>{data?.user_nickname}</Name>
        <Mbti>{data?.user_mbti}</Mbti>
        <Message>참여신청이 완료되었습니다.</Message>
        <DefaultButton onClick={() => setJoin(false)}>확인</DefaultButton>
      </JoinModalInfo>
    </JoinModalContainer>
  );
};
const Message = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
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
const JoinModalContainer = styled.div`
  position: absolute;
  z-index: 10000;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const JoinModalInfo = styled.div`
  width: 300px;
  height: 400px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;

export default JoinModal;
