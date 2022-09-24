import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Guests = ({ person }) => {
  const [isClicked, setClicked] = useState(false);
  return (
    <GuestContainer
      onClick={() => {
        setClicked((prev) => !prev);
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
