import React, { useEffect } from "react";
import cameetLogo from "../images/cameetlogo.png";
import kakaoLogin from "../images/kakaologin.png";
import googleLogin from "../images/googlelogin.png";
import styled from "styled-components";
import { Layout } from "../utils/styles";
import { COLOR } from "../utils/colors";
import {
  SOCIAL_AUTH_GOOGLE_CLIENT_ID,
  scope,
  OAUTH2_REDIRECT_URI,
} from "../db/secret";
import axios from "axios";
import { useRecoilState } from "recoil";
import { session } from "../atoms/session";
import { useNavigate } from "react-router";
import Nav from "../components/common/Nav";

const LoginPage = () => {
  const navigate = useNavigate();
  const [sessionData, setSessionData] = useRecoilState(session);
  let code = new URL(window.location.href).searchParams.get("code");
  useEffect(() => {
    axios
      .get("https://cameet.site/accounts/google/callback/", {
        params: { code: code },
      })
      .then((res) => {
        let navigationGuide;
        sessionData
          ? (navigationGuide = "/")
          : (navigationGuide = "/firstinfo");
        setSessionData(res.data);
        window.localStorage.setItem("access_token", res.data.access_token);
        window.localStorage.setItem("refresh_token", res.data.refresh_token);
        navigate(navigationGuide);
      });
  }, [code]);
  const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${SOCIAL_AUTH_GOOGLE_CLIENT_ID}&response_type=code&redirect_uri=${OAUTH2_REDIRECT_URI}&scope=${scope}`;
  return (
    <>
      <Nav />
      <Layout>
        <ContentDom>
          <LogoDom>
            <Logo src={cameetLogo} alt="#" />
            <Font>관심사를 기반으로</Font>
            <Font>캐주얼하게 만난다!</Font>
          </LogoDom>
          <Dom>
            <a href={GOOGLE_AUTH_URL}>
              <Google src={googleLogin} alt="#" />
            </a>
          </Dom>
          <Dom>
            <KaKao src={kakaoLogin} alt="#" />
          </Dom>
        </ContentDom>
      </Layout>
    </>
  );
};

export default LoginPage;
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
