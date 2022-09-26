import { atom } from "recoil";
export const place = atom({
  key: "place",
  default: {
    place_name: "",
    latitude: "",
    longitude: "",
  },
});
