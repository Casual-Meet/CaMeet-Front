// 유의사항
import React from "react";
import { SubTitle } from "../../utils/styles";
import styled from "styled-components";

const Mention = styled.span`
  font-size: 0.75rem;
  font-weight: 200;
  line-height: 1.3;
`;

const Terms = () => {
  return (
    <>
      <SubTitle>이용안내</SubTitle>
      <Mention>
        <ul>
          <li>
            ⚫️ 약속시간 5분 전에 모임장소에 도착해 캐밋모임 멤버들을 찾아보세요.
          </li>
          {/* <li>
           캐밋멤버들에게 각각 주어진 글자들을 모아 인증키워드를 만들고
            인증해주세요.
          </li> */}
          <li> ⚫️ 서로에게 가치있는 만남이 될 수 있게 존중과 매너 부탁드립니다.</li>
        </ul>
      </Mention>
    </>
  );
};

export default Terms;
