import React from "react";
import logoImg from "../images/cameetlogo.png";
import styled from "styled-components";

const Logo = styled.img`
  width: 100%;
`;
const LoginPage = () => {
  return (
    <>
      <Logo src={logoImg} alt="#" />
    </>
  );
};

export default LoginPage;
