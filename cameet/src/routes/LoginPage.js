import React from "react";
import cameetLogo from "../images/cameetlogo.png";
import kakaoLogin from "../images/kakaologin.png";
import googleLogin from "../images/googlelogin.png";
import styled from "styled-components";
import { Layout } from "../utils/styles";
import { COLOR } from "../utils/colors";
import { GoogleLogin } from "react-google-login";

const Dom = styled.div`
  text-align: center;
`;
const LogoDom = styled.div`
  margin-bottom: 3vw;
  text-align: center;
`;
const Logo = styled.img`
  width: 90%;
`;
const Google = styled.img`
  width: 65%;
  margin-top: 1vw;
`;
const KaKao = styled.img`
  width: 63%;
`;
const Font = styled.p`
  color: ${COLOR.gray};
  font-size: 14pt;
`;
const ContentDom = styled.div`
  position: absolute;
  top: 25%;
`;
const LoginPage = () => {
  const googleClick = () => {};
  return (
    <Layout>
      <ContentDom>
        <LogoDom>
          <Logo src={cameetLogo} alt="#" />
          <Font>관심사를 기반으로</Font>
          <Font>캐주얼하게 만난다!</Font>
        </LogoDom>

        <Dom>
          <Google src={googleLogin} alt="#" onClick={googleClick} />
        </Dom>

        <Dom>
          <KaKao src={kakaoLogin} alt="#" />
        </Dom>
      </ContentDom>
    </Layout>
  );
};

export default LoginPage;
