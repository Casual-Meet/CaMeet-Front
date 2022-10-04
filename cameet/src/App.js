import "./App.css";
import Home from "./routes/Home";
import LoginPage from "./routes/LoginPage";
import Info from "./routes/Info";
import Landing from "./routes/Landing";
import MyPage from "./routes/MyPage";
import RoomCreate from "./routes/RoomCreate";
import RoomDetail from "./routes/RoomDetail";
import { Routes, Route, useNavigate } from "react-router-dom";
import FirstInfo from "./routes/FirstInfo";
import { RecoilRoot } from "recoil";
import postAccessToken from "./api/postAccessToken";
import { useQuery } from "react-query";
import { faTruckMedical } from "@fortawesome/free-solid-svg-icons";

function App() {
  const navigate = useNavigate();
  useQuery(["refresh_token"], postAccessToken, {
    refetchInterval: 60 * 60 * 1000, //1시간마다 refresh하여 access토큰 재발급
    refetchIntervalInBackground: faTruckMedical,
    onError: () => {
      alert("로그인이 필요합니다");
      navigate("/login");
    },
  });
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/info" element={<Info />} />
        <Route path="/roomcreate" element={<RoomCreate />} />
        <Route path="/roomdetail/:id" element={<RoomDetail />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/firstinfo" element={<FirstInfo />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
