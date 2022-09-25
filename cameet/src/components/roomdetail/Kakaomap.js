import React, { useEffect } from "react";
import styled from "styled-components";
import { Layout } from "../../utils/styles";

const MapContainer = styled.div`
  display: flex;
  margin: 2vw 0;
  width: 450px;
  height: 450px;
`;

const { kakao } = window;

const Kakaomap = ({ lat, lon }) => {
  useEffect(() => {
    // 마커를 클릭하면 장소명을 표출할 인포윈도우
    const infoWindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    const container = document.getElementById("map"); //지도를 표시할 div
    const options = {
      center: new kakao.maps.LatLng(lat, lon), //지도의 중심좌표
      level: 3, //지도의 확대레벨
    };
    //지도 생성
    const map = new kakao.maps.Map(container, options);
    //--------내위치
    const locPosition = new kakao.maps.LatLng(lat, lon), //마커가 표시될 위치
      message = '<div style="padding:15px;">만남 장소</div>';
    displayMyMarker(locPosition, message);
    //마커 생성----------
    // 지도에 마커와 인포윈도우를 표시하는 함수입니다
    function displayMyMarker(locPosition, message) {
      // 함수 이름을 구분해줬다, 이래야 마크가 겹치지 않아서 버그가 생기지 않는다, 관련 호출이름도 다 바꿔 줘야한다.

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map,
        position: locPosition,
      });

      var iwContent = message, // 인포윈도우에 표시할 내용
        iwRemoveable = true;

      // 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable,
      });

      // 인포윈도우를 마커위에 표시합니다
      infowindow.open(map, marker);

      // 지도 중심좌표를 접속위치로 변경합니다
      map.setCenter(locPosition);
    }
  }, [lat, lon]);
  return (
    <Layout>
      <MapContainer id="map"></MapContainer>
    </Layout>
  );
};

export default Kakaomap;
