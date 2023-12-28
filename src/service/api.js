import axios from "axios";
import { DOMAIN, TOKEN, TOKEN_BEARER, USER_INFO } from "./config";

export const httpsRegister = axios.create({
    baseURL: DOMAIN,
    headers: {
        TokenCybersoft: TOKEN,

    }
})

const https = axios.create({
    baseURL: DOMAIN,
    headers: {
        TokenCybersoft: TOKEN,

    }
})

https.interceptors.request.use((req) => {
    req.headers = {
        ...req.headers,
        Authorization: "Bearer " + JSON.parse(localStorage.getItem(USER_INFO))?.accessToken,
    }
    return req;
});

export default https;


