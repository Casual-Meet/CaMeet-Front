// 버튼, 폰트크기 설정
import styled from "styled-components";
import { COLOR } from "./colors";

export const Title = styled.span`
  font-size: 22px;
  font-weight: 600;
`;
export const SubTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

// 기본 초록색 버튼컬러
export const DefaultButton = styled.button`
  margin: 0;
  /* padding: ; */
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  border-radius: 10px;
  color: ${COLOR.white};
  background-color: ${COLOR.mainColor};
  cursor: pointer;
  width: 300px;
  height: 200px;
`;
