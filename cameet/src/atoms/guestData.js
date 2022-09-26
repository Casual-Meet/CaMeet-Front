import { atom } from "recoil";
export const guestData = atom({
  key: "guestData",
  default: {
    apply_id: 0,
    user_keyword1: "",
    user_keyword2: "",
    user_keyword3: "",
    user_mbti: "",
    user_nickname: "",
  },
});
