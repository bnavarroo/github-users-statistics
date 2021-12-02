export default abstract class BaseAPI {
  constructor() {
    throw new Error('Não é possível instanciar objetos dessa classe.');
  }

  protected static statusMessages = {
    200: { text: 'Dados encontrado com sucesso!' },
    403: {
      text: 'Requisição não autorizada.',
      description:
        'Existe um limite de requisições por hora para a API Rest do Github. Se você está vendo essa mensagem, provavelmente esse limite foi atingido.',
    },
    404: { text: 'Os dados solicitados não foram encontrados.' },
    500: { text: 'Houve um erro ao buscar os dados.' },
  };
}
