export type APIMethodType = 'post' | 'put' | 'get' | 'delete' | 'patch';

export type APIHeadersReqType = {
  // Can Add custom headers to the request here
};

export type APIHeadersResType = {
  // Can Add custom headers to the response here
};

export type APIParamsType = {
  /* Can Add custom params here
  Example:
    offset?: number;
    limit?: number;
  */
};

export type APIErrorResType = {
  errorCode: number;
  status: number;
  statusText: string;
};
export type APISuccessResType = {
  status: string;
  message: string;
};