import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

const MapContainer = styled.div`
  margin: 2vw 0;
  width: 450px;
  height: 450px;
`;

const { kakao } = window;
const KakaoLocation = ({ searchPlace }) => {
  const setLocationData = useSetRecoilState();
  console.log(searchPlace);
  useEffect(() => {
    // 마커를 클릭하면 장소명을 표출할 인포윈도우
    const infoWindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    const container = document.getElementById("map"); //지도를 표시할 div
    const options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488), //지도의 중심좌표
      level: 3, //지도의 확대레벨
    };
    //지도 생성
    const map = new kakao.maps.Map(container, options);
    //--------내위치
    if (navigator.geolocation) {
      //geolocation을 이용해서 접속 위치를 얻어옴
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude, //위도
          lon = position.coords.longitude; //경도

        const locPosition = new kakao.maps.LatLng(lat, lon), //마커가 표시될 위치
          message = '<div style="padding:15px;">현 위치</div>';

        displayMyMarker(locPosition, message);
      });
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

      var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),
        message = "현 위치를 불러올 수 없어요.";

      displayMyMarker(locPosition, message); // 함수 이름을 변경함
    }
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
    //키워드 검색-----------
    //장소 검색 객체 생성
    const ps = new kakao.maps.services.Places();

    //키워드 검색 완료 시 호출되는 콜백함수
    const placesSearchCB = (data, status, pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        //검색된 장소 위치를 기준으로 지도 범위를 재설정하기 위해
        //LatLngBounds 객체에 좌표 추가
        const bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        //검색된 장소 위치를 기준으로 지도 범위를 재설정
        map.setBounds(bounds);
      }
    };
    //키워드로 장소 검색
    ps.keywordSearch(searchPlace, placesSearchCB);

    //지도에 마커 표시하는 함수
    const displayMarker = (place, locPosition, message) => {
      const iwContent = message, // 인포윈도우에 표시할 내용
        iwRemoveable = true;

      // 인포윈도우를 생성합니다
      const infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable,
      });

      // 마커를 생성하고 지도에 표시합니다
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, "click", function () {
        setLocationData({
          place_name: place.place_name,
          latitude: place.y,
          longitude: place.x,
        });
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            "</div>"
        );
        infowindow.open(map, marker);
      });
    };
  }, [searchPlace]);
  return (
    <>
      <MapContainer id="map"></MapContainer>
    </>
  );
};

export default KakaoLocation;
