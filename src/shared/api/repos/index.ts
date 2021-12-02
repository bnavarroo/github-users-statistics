import apiConfig from '@config/api';
import { ResponseApi } from '@core/types/api';
import { UserReposType } from '@core/types/api/repos';
import Http from '@utilities/http';
import BaseAPI from '@shared/api/baseApi';

/**
 * API de repositórios de usuários
 * @description Disponibiliza métodos estáticos para busca de dados dos repositórios do usuários
 */
export default class ReposAPI extends BaseAPI {
  private static baseUrl = `${apiConfig.url}/users/{username}/repos`;

  static async GetUserRepos(
    username: string
  ): Promise<ResponseApi<Array<UserReposType>>> {
    const url = ReposAPI.baseUrl.replace('{username}', username);
    const response = (await Http.Get(url)) as ResponseApi<
      Array<UserReposType>
    > | null;
    const { status, result, error } = response;

    let fmtResult = null;
    if (!error) {
      fmtResult = result.map((repo) => {
        return {
          name: repo.name,
          url: repo.url,
          html_url: repo.html_url,
        };
      });
    }

    return {
      ...response,
      result: fmtResult,
      message: error ? ReposAPI.statusMessages[status] : '',
    };
  }
}
