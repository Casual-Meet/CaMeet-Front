import { atom } from "recoil";
export const session = atom({
  key: "session",
  default: {
    access_token: window.localStorage.getItem("access_token"),
    refresh_token: window.localStorage.getItem("refresh_token"),
  },
});
