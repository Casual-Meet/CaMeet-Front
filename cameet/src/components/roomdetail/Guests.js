import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { guestData } from "../../atoms/guestData";

const Guests = ({ person, setGuestClick }) => {
  const setGuestData = useSetRecoilState(guestData);
  return (
    <GuestContainer
      onClick={() => {
        setGuestClick((prev) => !prev);
        setGuestData({
          apply_id: person.apply_id,
          user_keyword1: person.user_keyword1,
          user_keyword2: person.user_keyword2,
          user_keyword3: person.user_keyword3,
          user_mbti: person.user_mbti,
          user_nickname: person.user_nickname,
        });
      }}
    >
      <img src={require(`../../images/profile_tmp.png`)} alt=""></img>
      <Nickname>{person.user_nickname}</Nickname>
    </GuestContainer>
  );
};
const GuestContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const Nickname = styled.div`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 600;
`;
export default Guests;
