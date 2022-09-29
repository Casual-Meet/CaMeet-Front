
import { useSetRecoilState } from "recoil";
import postAccessToken from "../api/postAccessToken";
import { session } from "../atoms/session";
// 토큰 만료일 경우 refresh 토큰 사용하는 hook
const useRefreshToken = () => {
  const access_token = postAccessToken();
  const setToken = useSetRecoilState(session);
  window.localStorage.setItem("access_token", access_token);
  setToken((prev) => {
    prev.access_token = access_token;
  });
  return;
};

export default useRefreshToken;
