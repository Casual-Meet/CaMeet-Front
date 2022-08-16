import React, { useState, useCallback } from "react";
import { Input } from "../../utils/styles";
import KakaoLocation from "./KakaoLocation";

const InputForm = () => {
  const [inputText, setInputText] = useState("");
  const [place, setPlace] = useState("");

  const onChangeInputText = useCallback((e) => {
    setInputText(e.target.value);
  }, []);

  //카카오맵 api 검색
  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="장소를 입력하세요"
          value={inputText}
          onChange={onChangeInputText}
        />
        <button type="submit">검색</button>
      </form>
      <KakaoLocation searchPlace={place} />
    </>
  );
};

export default InputForm;
