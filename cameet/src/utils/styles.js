// 버튼, 폰트크기 설정
import styled from "styled-components";
import { COLOR } from "./colors";

export const Title = styled.div`
  font-size: 1.375rem;
  font-weight: 600;
  margin: 2vw auto;
`;
export const SubTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  margin: 0.8vw auto;
`;

// 기본 초록색 버튼컬러
export const DefaultButton = styled.button`
  margin: 1.5vw auto 0 auto;
  /* padding: ; */
  font-size: 1rem;
  font-weight: 450;
  text-align: center;
  text-decoration: none;
  // border-radius: 40px;
  border-radius: 15px;

  color: ${COLOR.white};
  background-color: ${COLOR.mainColor};
  cursor: pointer;
  border: none;
  width: 28%;
  height: 5vh;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0px;
`;

//기본 레이아웃
export const Layout = styled.div`
  margin: 2vw auto;
  max-width: 85%;
  overflow: hidden;
`;

//input 받을 때 형식
export const Input = styled.input`
  margin-bottom: 2vw;
  margin-right: 2vw;
  width: 20vw;
  height: 3vh;
  border: none;
  border-bottom: solid 2px ${COLOR.mainColor};
  &:focus {
    background-color: #dcdcdc;
    transition: ease-in 0.2s;
    outline: none;
  }
`;
