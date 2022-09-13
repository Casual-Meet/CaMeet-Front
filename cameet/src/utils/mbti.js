import styled from "styled-components";
import { COLOR } from "./colors";
// 체크박스 스타일링
export const StyledLabel = styled.label`
  margin-right: 1vw;
`;
export const StyledInput = styled.input`
  appearance: none;
  width: 60px;
  height: 35px;

  border: 1px solid transparent;
  background-color: ${(props) => props.btnColor || "white"};
  // background-image: ${(props) => props.btnImg || "#"};
  border-radius: 20px;
  cursor: pointer;
  //   position: absolute;
  z-index: 1;
  &:checked {
    border: 2px solid ${COLOR.mainColor};
  }
`;
export const Span = styled.span`
  position: relative;
  z-index: 2;
  font-size: 12pt;
  font-weight: 400;
  cursor: pointer;
`;
export const SpanDom = styled.div`
  text-align: center;
  width: 65px;
  margin: -32px 0px 0px 3px;
`;

export const InputDom = styled.div``;

export const Mbti = ({ num, color, text }) => {
  return (
    <>
      <InputDom>
        <StyledInput type="radio" id={num} name="radio" btnColor={color} />
        <StyledLabel htmlFor={num} name="radio">
          <SpanDom>
            <Span>{text}</Span>
          </SpanDom>
        </StyledLabel>
      </InputDom>
    </>
  );
};
