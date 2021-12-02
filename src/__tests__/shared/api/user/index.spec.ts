import UsersAPI from '@shared/api/user';
import Http from '@utilities/http';
import ReposAPI from '@shared/api/repos';

const mockReposResult = {
  status: 202,
  statusText: 'OK',
  error: false,
  result: [{ name: 'mock', url: 'mock', html_url: 'mock' }],
  message: '',
};

const mockResult = {
  status: 202,
  statusText: 'OK',
  error: false,
  result: {
    login: 'mock',
    avatar_url: 'mock',
    name: 'mock',
    company: 'mock',
    blog: 'mock',
    location: 'mock',
    bio: 'mock',
    twitter_username: 'mock',
    public_repos: 1,
    followers: 1,
    following: 1,
    repos: mockReposResult.result,
  },
  message: '',
};

const mockResultError = {
  status: 0,
  statusText: 'NOT FOUND',
  error: true,
  result: null,
};

jest.mock('@utilities/http', () => ({
  Get: jest.fn(() => mockResult),
}));

jest.mock('@shared/api/repos', () => ({
  GetUserRepos: jest.fn(() => mockReposResult),
}));

describe('Testing Users Api', () => {
  it('should return success data', async () => {
    const result = await UsersAPI.GetUser('mock');
    expect(result).toEqual(mockResult);
  });

  it('should return success data when user not has repos', async () => {
    ReposAPI.GetUserRepos = jest.fn().mockReturnValueOnce({ error: true });
    const expectResult = {
      ...mockResult,
      result: { ...mockResult.result, repos: [] },
    };
    const result = await UsersAPI.GetUser('mock');
    expect(result).toEqual(expectResult);
  });

  it('should return error data', async () => {
    Http.Get = jest.fn().mockReturnValueOnce(mockResultError);
    const result = await UsersAPI.GetUser('mock');
    const expectResult = {
      ...mockResultError,
      message: undefined,
    };
    expect(result).toEqual(expectResult);
  });
});
