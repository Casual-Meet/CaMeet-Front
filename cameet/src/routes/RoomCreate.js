// 리액트 훅
import React from "react";
import styled from "styled-components";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
// 컴포넌트
import Nav from "../components/common/Nav";
import Terms from "../components/common/Terms";
import InputForm from "../components/roomcreate/InputForm";
import Headcount from "../components/roomcreate/Headcount";
// api
import postRoomData from "../api/postRoomData";
// util
import { Title, SubTitle, DefaultButton, Layout, Input } from "../utils/styles";
// recoil
import { place } from "../atoms/place";
import { session } from "../atoms/session";
import { useNavigate } from "react-router";

const RoomCreate = () => {
  const navigate = useNavigate();
  const locationData = useRecoilValue(place);
  const { access_token } = useRecoilValue(session);
  const { place_name, longitude, latitude } = locationData;
  const { mutate } = useMutation((createProps) => postRoomData(createProps), {
    onSuccess: (data) => {
      if (data.status === 200) {
        alert("방 생성이 완료되었습니다!");
        navigate("/");
      }
    },
  }); // post
  const { register, watch, handleSubmit } = useForm();
  const onSubmit = () => {
    if (!place_name || !longitude || !latitude) {
      alert("장소를 선택(클릭)해주세요!");
      return;
    }
    const createProps = {
      title: String(watch().title),
      headcount: parseInt(watch().headcount),
      interest: String(watch().roominterest),
      time: `${watch().roomtime}:00.000000`,
      date: `${watch().roomdate}`,
      place: String(place_name),
      latitude: String(latitude),
      longitude: String(longitude),
      access_token: access_token,
    };
    mutate(createProps);
  };
  const onError = (error) => {
    console.log(error);
  };
  return (
    <>
      <Nav />
      <Layout>
        <Title>모임을 시작해보세요</Title>
        <SubTitle>방 제목</SubTitle>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <Input
            {...register("title", { required: true })}
            autoFocus
            placeholder="방 제목을 입력해주세요"
          />
          <SubTitle>관심사</SubTitle>
          <Input
            type="text"
            name="roominterest"
            placeholder="ex. #개발"
            {...register("roominterest", {
              required: true,
            })}
          />
          <SubTitle>모임 날짜/시간</SubTitle>
          <Input
            type="date"
            {...register("roomdate", {
              required: true,
            })}
            min="2021-01-01"
            max="2050-01-01"
          />
          <Input
            type="time"
            {...register("roomtime", {
              required: true,
            })}
          />
          <SubTitle>만남 장소</SubTitle>
          <InputForm />
          <SubTitle>모임 정원</SubTitle>
          {[1, 2, 3, 4, 5].map((number) => (
            <Headcount number={number} key={number} register={register} />
          ))}
          <Terms />
          <DefaultButton type="submit">생성하기</DefaultButton>
        </form>
      </Layout>
    </>
  );
};

export default RoomCreate;

const Wrapper = styled.div`
  margin: 15px auto;
`;
