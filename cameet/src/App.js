import "./App.css";
import Home from "./routes/Home";
import LoginPage from "./routes/LoginPage";
import Info from "./routes/Info";
import Landing from "./routes/Landing";
import MyPage from "./routes/MyPage";
import RoomCreate from "./routes/RoomCreate";
import RoomDetail from "./routes/RoomDetail";
import { Routes, Route } from "react-router-dom";
import RoomByDate from "./components/home/RoomByDate";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path=":roomDate" element={<RoomByDate />} />
        </Route>
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/info" element={<Info />} />
        <Route path="/roomcreate" element={<RoomCreate />} />
        <Route path="/roomdetail" element={<RoomDetail />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
