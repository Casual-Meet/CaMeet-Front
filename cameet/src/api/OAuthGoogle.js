// #1. REACT_APP_SOCIAL_AUTH_GOOGLE_CLIENT_ID < 고정값
// #2. process.env.REACT_APP_GOOGLE_SCOPE < 고정값
// #3. OAUTH2_REDIRECT_URI < 요청을 받아온 값을 처리해줄 함수가 있는 경로를 선언

const OAUTH2_REDIRECT_URI =
  "<https://iridescent-hummingbird-ec4d88.netlify.app/auth/loginsuccess>";

const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_SOCIAL_AUTH_GOOGLE_CLIENT_ID}&response_type=code&redirect_uri=${OAUTH2_REDIRECT_URI}&scope=${process.env.REACT_APP_GOOGLE_SCOPE}`;
console.log(GOOGLE_AUTH_URL);

// const SCOPE = process.env.REACT_APP_GOOGLE_SCOPE
// const CLIENT_URL = process.env.REACT_APP_CLIENT_URL;
// const CLIENT_ID = process.env.REACT_APP_SOCIAL_AUTH_GOOGLE_CLIENT_ID;
