import React from "react";
import cameetLogo from "../images/cameetlogo.png";
import kakaoLogin from "../images/kakaologin.png";
import googleLogin from "../images/googlelogin.png";
import styled from "styled-components";
import { Layout } from "../utils/styles";

const Dom = styled.div`
  text-align: center;
`;
const LogoDom = styled.div`
  margin-top: 20vw;
`;
const Logo = styled.img`
  width: 80%;
`;
const Google = styled.img`
  width: 60%;
  margin-top: 0.7vw;
`;

const KaKao = styled.img`
  width: 60%;
`;

const LoginPage = () => {
  return (
    <Layout>
      <LogoDom>
        <Dom>
          <Logo src={cameetLogo} alt="#" />
          <p>관심사를 기반으로</p>
          <p>캐주얼하게 만난다!</p>
        </Dom>

        <Dom>
          <Google src={googleLogin} alt="#" />
        </Dom>
        <Dom>
          <KaKao src={kakaoLogin} alt="#" />
        </Dom>
      </LogoDom>
    </Layout>
  );
};

export default LoginPage;
