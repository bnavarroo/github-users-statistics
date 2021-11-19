import apiConfig from '@config/api';
import { ResponseApi } from '@core/types/api';
import { UserReposType } from '@core/types/api/repos';
import Http from '@utilities/http';

/**
 * API de repositórios de usuários
 * @description Disponibiliza métodos estáticos para busca de dados dos repositórios do usuários
 */
export default class ReposAPI {
  constructor() {
    throw new Error('Não é possível instanciar objetos dessa classe.');
  }

  private static statusMessages = {
    200: { text: 'Repositórios encontrado com sucesso!' },
    403: {
      text: 'Requisição não autorizada.',
      description:
        'Existe um limite de requisições por hora para a API Rest do Github. Se você está vendo essa mensagem, provavelmente esse limite foi atingido.',
    },
    404: { text: 'Os repositórios solicitados não foram encontrados.' },
    500: { text: 'Houve um erro ao buscar o usuário.' },
  };

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
