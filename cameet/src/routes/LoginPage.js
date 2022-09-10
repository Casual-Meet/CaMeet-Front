import React from "react";
import cameetLogo from "../images/cameetlogo.png";
import kakaoLogin from "../images/kakaologin.png";
import googleLogin from "../images/googlelogin.png";
import styled from "styled-components";
import { Layout } from "../utils/styles";

const Dom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const Logo = styled.img`
  width: 80%;
`;
const LoginPage = () => {
  return (
    <Layout>
      <Logo src={cameetLogo} alt="#" />
      <Logo src={kakaoLogin} alt="#" />
      <Logo src={googleLogin} alt="#" />
    </Layout>
  );
};

export default LoginPage;
