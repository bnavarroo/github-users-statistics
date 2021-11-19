import apiConfig from '@config/api';
import { ResponseApi } from '@core/types/api';
import Http from '@utilities/http';

/**
 * API de linguagens dos repositórios
 * @description Disponibiliza métodos estáticos para busca de dados de linguagens/recursos de programação do repositório
 */
export default class LanguagesAPI {
  constructor() {
    throw new Error('Não é possível instanciar objetos dessa classe.');
  }

  private static statusMessages = {
    200: 'Sucesso',
    403: 'Não autorizado',
    404: 'Linguagens não encontradas',
    500: 'Erro ao buscar linguagens',
  };

  private static baseUrl = `${apiConfig.url}/repos/{username}/{repo}/languages`;

  static async GetRepoLanguages(
    username: string,
    repo: string
  ): Promise<ResponseApi<object>> {
    const url = LanguagesAPI.baseUrl
      .replace('{username}', username)
      .replace('{repo}', repo);
    const response = (await Http.Get(url)) as ResponseApi<object> | null;
    const { status, error } = response;
    return {
      ...response,
      message: error ? LanguagesAPI.statusMessages[status] : '',
    };
  }
}
