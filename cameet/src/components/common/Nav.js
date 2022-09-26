import React, { useState } from "react";
import styled from "styled-components";
import { Link, Navigate } from "react-router-dom";
import logoImg from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { COLOR } from "../../utils/colors";
import Slider from "react-slider-modal";
import Info from "../../routes/Info";
import { useRecoilValue } from "recoil";
import { session } from "../../atoms/session";

function Nav() {
  const [slideShow, setSlideShow] = useState(false);
  const user = useRecoilValue(session);
  let mypage;
  user.access_token === "" ||
  user.access_token === undefined ||
  user.access_token === "undefined"
    ? (mypage = "/login")
    : (mypage = "/mypage");
  return (
    <Wrapper>
      <Logo to={"/"}>
        <img src={logoImg} alt="캐밋" />
      </Logo>
      <div>
        <Mypage to={mypage}>
          <MypageIcon icon={faUser} />
        </Mypage>

        <InfoIcon
          icon={faBars}
          onClick={() => {
            setSlideShow(!slideShow);
          }}
        />
        {/* slideshow가 false이면 slider를 로드 하지 않아서 fetch하지 않음 */}
        {slideShow ? (
          <Slider
            id="demoID2"
            animation="fade"
            speed="fast"
            closeIcon={(e) => {
              setSlideShow(e);
            }}
            toggle={slideShow}
            sliderStyle={{ width: "80%", height: "100%", top: "0px" }}
            closeModal={() => {
              setSlideShow(false);
            }}
            direction="right"
            render={<Info />}
          />
        ) : null}
      </div>
    </Wrapper>
  );
}

export default Nav;
const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  border-bottom: 1px solid #e6e6e6;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled(Link)``;
const Mypage = styled(Link)``;
const MypageIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  margin-right: 20px;
  color: ${COLOR.black};
`;

const InfoIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: ${COLOR.black};
`;
