// export the middleware

import { AxiosResponse } from "axios";
import axios from "./axios";
import { APIMethodType, APIHeadersReqType } from "./types";

const callAPI = async <D, R, P>(
  method: APIMethodType,
  url: string,
  data: D,
  headers?: APIHeadersReqType,
  params?: P
): Promise<AxiosResponse<R>> => {
  if (method === "get") {
    return axios.get(url, { headers, params });
  }
  return axios({
    method,
    url,
    data,
    headers,
    params,
  });
};

export default callAPI;
