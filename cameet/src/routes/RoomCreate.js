import React from "react";
import Nav from "../components/common/Nav";
import styled from "styled-components";
import { Title, SubTitle, DefaultButton, Layout } from "../utils/styles";
import Terms from "../components/common/Terms";



const RoomCreate = () => {
  return (
    <>
      <Nav />
      <Layout>
        <Title>모임을 시작해보세요</Title>
        <Terms />
        <DefaultButton>생성하기</DefaultButton>
      </Layout>
    </>
  );
};

export default RoomCreate;
