/* eslint-disable camelcase */
export type ResponseApiErrorMsg = {
  text: string;
  description?: string;
};

export type ResponseApi<T> = {
  status: number;
  statusText: string;
  error: boolean;
  result: T;
  message?: ResponseApiErrorMsg;
};
