import axios from "axios";

let TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NCIsIkhldEhhblN0cmluZyI6IjIyLzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNjMzNjAwMDAwMCIsIm5iZiI6MTY4NzcxMjQwMCwiZXhwIjoxNzE2NDgzNjAwfQ.argi0m1LRAePDxZ6Nb4AX25fZ9gclDCUAA5oW84-TsQ";

//   tạo ra 1 axios mới , gắn sẵn headers và base url ~ axios instance

export let https = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn",
  headers: {
    TokenCybersoft: TOKEN,
    Authorization:
      "bearer " + JSON.parse(localStorage.getItem("USER_INFO"))?.accessToken,
  },
});
