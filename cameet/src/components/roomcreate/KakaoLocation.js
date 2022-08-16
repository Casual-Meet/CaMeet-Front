import React, { useEffect } from "react";
import styled from "styled-components";

const MapContainer = styled.div`
  width: 300px;
  height: 300px;
`;

const { kakao } = window;

const KakaoLocation = () => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(
      37.365264512305174,
      127.10676860117488
    );
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return (
    <>
      <MapContainer id="map"></MapContainer>
    </>
  );
};

export default KakaoLocation;
