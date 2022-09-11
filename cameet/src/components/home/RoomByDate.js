import React from "react";
import styled from "styled-components";
import { COLOR } from "../../utils/colors";
const RoomByDate = ({ room }) => {
  // room이 가득찼으면
  const fullRoom = room.room_status === 2;
  return (
    <RoomContainer>
      <Time>{room.room_time.substr(0, 5)}</Time>
      <SectionContainer>
        <Title>{room.room_title}</Title>
        <Bottom>
          <Interest>#{room.room_interest}</Interest>
          <Headcount>최대 {room.room_headcount}명</Headcount>
        </Bottom>
      </SectionContainer>
      <ApplyBtn
        style={{
          backgroundColor: fullRoom ? COLOR.red : COLOR.blue,
        }}
      >
        {fullRoom ? "마감" : "신청가능"}
      </ApplyBtn>
    </RoomContainer>
  );
};
const RoomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Time = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const SectionContainer = styled.div`
  width: 100%;
  padding: 20px;
`;
const Title = styled.div`
  font-size: 15px;
  font-weight: bold;
  padding: 10px;
  margin-bottom: 15px;
`;
const Interest = styled.div`
  font-size: 14px;
  background-color: #f7e6dc;
  padding: 10px;
  border-radius: 20px;
`;
const ApplyBtn = styled.div`
  color: ${COLOR.white};
  padding: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
  width: 35%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
const Headcount = styled.div`
  color: #666666;
  margin-left: 20px;
  font-size: 12px;
`;
export default RoomByDate;
