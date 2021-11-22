import { ResponseApi } from '@core/types/api';
import { HttpMethodEnum } from '@core/enums/http';

export type HttpRequestExecuteType = (
  url: string,
  headers: object
) => Promise<ResponseApi<unknown>>;

export type HttpRequestHeadersType = (method: HttpMethodEnum) => {
  method: HttpMethodEnum;
  headers: Headers;
};
