import React, { useState, useCallback } from "react";
import Nav from "../components/common/Nav";
import styled from "styled-components";
import { Title, SubTitle, DefaultButton, Layout, Input } from "../utils/styles";
import Terms from "../components/common/Terms";
import axios from "axios";
import kakaomap from "../components/roomcreate/kakaomap";

const RoomCreate = () => {
  const [roomTitle, setRoomTitle] = useState("");
  const [roomInterest, setRoomInterest] = useState("");
  const [roomdate, setRoomDate] = useState("");
  const [roomtime, setRoomTime] = useState("");
  // 로딩 상태
  const [loading, setLoading] = useState(false);
  // 중복 제출 방지
  const [disabled, setDisabled] = useState(false);

  const onChangeRoomTitle = useCallback((e) => {
    setRoomTitle(e.target.value);
  }, []);
  const onChangeRoomInterest = useCallback((e) => {
    setRoomInterest(e.target.value);
  }, []);
  const onChangeRoomDate = useCallback((e) => {
    setRoomDate(e.target.value);
  }, []);
  const onChangeRoomTime = useCallback((e) => {
    setRoomTime(e.target.value);
  }, []);

  const onSubmit = useCallback((e) => {
    setDisabled(true);
    e.preventDefault();
    setLoading(true);
    // alert("방이 생성되었습니다.");

    axios
      .post("http://localhost:8000/room/create/", {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => res.json())
      .then((data) => {
        setRoomTitle(data.data.room_title);
        setRoomInterest(data.data.room_interest);
      })
      .catch((error) => {
        setRoomTitle("");
        setRoomInterest("");
      })
      .catch((error) => {
        console.log(error);
      });
    alert("방이 생성되었습니다.");
    setLoading(false);
    setDisabled(true);
  });

  return (
    <>
      <Nav />
      <Layout>
        <Title>모임을 시작해보세요</Title>
        <form onSubmit={onSubmit}>
          <SubTitle>방 제목</SubTitle>
          <div>
            <Input
              type="text"
              name="roomtitle"
              placeholder="방 제목을 입력하세요"
              value={roomTitle}
              onChange={onChangeRoomTitle}
              required
              autoFocus
            />
          </div>
          <SubTitle>관심사</SubTitle>
          <div>
            <Input
              type="text"
              name="roominterest"
              placeholder="ex. #개발"
              value={roomInterest}
              onChange={onChangeRoomInterest}
              required
            />
          </div>
          <SubTitle>모임 날짜/시간</SubTitle>
          <Input
            type="date"
            value={roomdate}
            onChange={onChangeRoomDate}
            min="2021-01-01"
            max="2050-01-01"
            name="date"
          />
          <Input
            type="time"
            value={roomtime}
            onChange={onChangeRoomTime}
            name="time"
          />
          <SubTitle>만남 장소</SubTitle>
          <kakaomap />
          <SubTitle>모임 정원</SubTitle>

          <Terms />
          <DefaultButton type="submit" disabled={disabled}>
            생성하기
          </DefaultButton>
        </form>
      </Layout>
    </>
  );
};

export default RoomCreate;
