import axios from "axios";
import React from "react";

const mypageAPI = axios.create({
  baseURL: "http://localhost:8000/accounts/mypage",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default mypageAPI;
