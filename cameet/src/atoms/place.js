import { atom } from "recoil";
export const place = atom({
  key: "placeatom",
  default: {
    place_name: "",
    latitude: "",
    longitude: "",
  },
});
