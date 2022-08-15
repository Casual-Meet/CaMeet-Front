// 버튼, 폰트크기 설정
import styled from "styled-components";
import { COLOR } from "./colors";

export const Title = styled.div`
  font-size: 1.375rem;
  font-weight: 600;
  margin: 1vw auto;
`;
export const SubTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;

// 기본 초록색 버튼컬러
export const DefaultButton = styled.button`
  margin: 1.5vw auto 0 auto;
  /* padding: ; */
  font-size: 1rem;
  font-weight: 450;
  text-align: center;
  text-decoration: none;
  border-radius: 40px;
  color: ${COLOR.white};
  background-color: ${COLOR.mainColor};
  cursor: pointer;
  border: none;
  width: 8vw;
  height: 5vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

//기본 레이아웃
export const Layout = styled.div`
    margin: 2vw auto;
    max-width: 85%;
`