import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logoImg from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { COLOR } from "../utils/colors";

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
const Info = styled(Link)``;
const InfoIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: ${COLOR.black};
`;

function Nav() {
  return (
    <Wrapper>
      <Logo to={"/"}>
        <img src={logoImg} alt="캐밋" />
      </Logo>
      <div>
        <Mypage to={"/mypage"}>
          <MypageIcon icon={faUser} />
        </Mypage>
        <Info to={"/info"}>
          <InfoIcon icon={faBars} />
        </Info>
      </div>
    </Wrapper>
  );
}

export default Nav;
