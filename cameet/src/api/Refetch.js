import postAccessToken from "./postAccessToken";

export default function Refetch(fn) {
  postAccessToken()
    .then((res) => window.localStorage.setItem("access_token", res))
    .then(() => fn());
}
