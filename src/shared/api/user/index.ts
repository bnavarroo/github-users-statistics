import apiConfig from '@config/api';
import { ResponseApi } from '@core/types/api';
import { UserType } from '@core/types/api/user';
import Http from '@utilities/http';
import ReposAPI from '@shared/api/repos';

/**
 * API de usuários
 * @description Disponibiliza métodos estáticos para busca de dados de usuários
 */
export default class UsersAPI {
  constructor() {
    throw new Error('Não é possível instanciar objetos dessa classe.');
  }

  private static statusMessages = {
    200: { text: 'Usuário encontrado com sucesso!' },
    403: {
      text: 'Requisição não autorizada.',
      description:
        'Existe um limite de requisições por hora para a API Rest do Github. Se você está vendo essa mensagem, provavelmente esse limite foi atingido.',
    },
    404: {
      text: 'O usuário solicitado não foi encontrado.',
      description: 'Verifique o id do usuário digitado e tente novamente.',
    },
    500: { text: 'Houve um erro ao buscar o usuário.' },
  };

  private static baseUrl = `${apiConfig.url}/users`;

  static async GetUser(username: string): Promise<ResponseApi<UserType>> {
    const url = `${UsersAPI.baseUrl}/${username}`;
    const userResponse = (await Http.Get(url)) as ResponseApi<UserType> | null;
    const { status, result, error } = userResponse;
    const reposResponse = await ReposAPI.GetUserRepos(result.login);

    let fmtResult: UserType = null;
    if (!error) {
      fmtResult = {
        login: result.login,
        avatar_url: result.avatar_url,
        name: result.name,
        company: result.company,
        blog: result.blog,
        location: result.location,
        bio: result.bio,
        twitter_username: result.twitter_username,
        public_repos: result.public_repos,
        followers: result.followers,
        following: result.following,
        repos: reposResponse.result,
      };
    }
    return {
      ...userResponse,
      result: fmtResult,
      message: error ? UsersAPI.statusMessages[status] : '',
    };
  }
}
