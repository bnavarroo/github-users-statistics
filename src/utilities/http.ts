import { HttpRequestHeadersType } from '@core/types/http';
import { ResponseApi } from '@core/types/api';
import { HttpMethodEnum } from '@core/enums/http';

/**
 * Classe para requisições Http
 * @description Disponibiliza método estático para chamadas Http via GET
 */
export default class Http {
  constructor() {
    throw new Error('Não é possível instanciar objetos dessa classe.');
  }

  private static ObjectToUrlParams(object): string {
    let params = '';
    Object.keys(object).forEach((key) => {
      params +=
        params === ''
          ? `?${key}=${encodeURIComponent(object[key])}`
          : `&${key}=${encodeURIComponent(object[key])}`;
    });
    return params;
  }

  private static GetHttpRequestHeaders: HttpRequestHeadersType = (method) => {
    return {
      method,
      headers: new Headers({
        Accept: 'application/json, text/plain, multipart/form-data, */*',
        'Content-Type': 'application/json; charset=UTF-8',
      }),
    };
  };

  private static ExecuteHttpRequest = (
    url: string,
    headers: object
  ): Promise<ResponseApi<unknown>> => {
    return fetch(url, headers).then(async (response) => {
      const { status, statusText } = response;
      const result = await response.json();
      return {
        status,
        statusText,
        error: status !== 200,
        result,
      };
    });
  };

  static Get(url: string, queryParams: object = {}) {
    try {
      const fmtUrl = `${url}${Http.ObjectToUrlParams(queryParams)}`;
      const fmtHeaders = Http.GetHttpRequestHeaders(HttpMethodEnum.Get);
      return Http.ExecuteHttpRequest(fmtUrl, fmtHeaders);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(
        `Um erro foi disparado ao tentar realizar um GET para ${url}`,
        error
      );
      return null;
    }
  }
}
