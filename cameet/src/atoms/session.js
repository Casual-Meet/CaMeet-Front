import { atom } from "recoil";
export const session = atom({
  key: "session",
  default: {
    access_token: "",
    refresh_token: "",
  },
});
