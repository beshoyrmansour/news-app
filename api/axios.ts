import axios from "axios";
import { Platform } from "react-native";

import Env from "../Env";
// import i18n from "@i18next/i18n";

const instance = axios.create({
  // baseURL: Env.BASE_URL,
  baseURL: Env.PACKUP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0",
  },
});

instance.interceptors.request.use(async function (request) {
  return request;
});

instance.interceptors.response.use(
  function (response) {
    // console.log('========= RESPONSE HEADERS =========', response?.headers);
    // console.log('========= RESPONSE DATA =========', response.data);
    return response;
  },
  function (error) {
    const code =
      error.response?.data?.header?.status.code ||
      error?.response?.headers["status.code"];

    console.log("========= ERR RESPONSE URL", error.response.config.url);
    console.log(
      "========= ERR RESPONSE HEADERS =========",
      error.response?.headers
    );
    console.log("========= ERR RESPONSE DATA =========", error.response.data);
    if (error.response) {
      // General error handle should be here
      error.response.data = {
        ...error.response.data,
        status: error.response.data.status,
        statusText: error.response.data.statusText,
        errorCode: code,
      };
    }
    return error.response;
  }
);

export default instance;
