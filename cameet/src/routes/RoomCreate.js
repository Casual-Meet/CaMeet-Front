import React, { useState, useCallback } from "react";
import Nav from "../components/common/Nav";
import { Title, SubTitle, DefaultButton, Layout, Input } from "../utils/styles";
import Terms from "../components/common/Terms";
import axios from "axios";
import InputForm from "../components/roomcreate/InputForm";
import { useMutation } from "react-query";
import postRoomData from "../api/postRoomData";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Headcount from "../components/roomcreate/Headcount";

const RoomCreate = () => {
  const { mutate, isLoading, isError, error, isSuccess } =
    useMutation(postRoomData);
  // useMutation의 리턴값을 출력
  console.log(
    `isLoaing : ${isLoading}, isError : ${isError}, error : ${error}, isSuccess : ${isSuccess}`
  );

  const { register, watch, handleSubmit } = useForm();
  const onSubmit = (data) => {
    watch();
    console.log(data);
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
          <div>
            <Input
              {...register("title", { required: true })}
              autoFocus
              placeholder="방 제목을 입력해주세요"
            />
          </div>
          <SubTitle>관심사</SubTitle>
          <div>
            <Input
              type="text"
              name="roominterest"
              placeholder="ex. #개발"
              {...register("roominterest", {
                required: true,
              })}
            />
          </div>
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
