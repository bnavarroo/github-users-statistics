import ReposAPI from '@shared/api/repos';
import Http from '@utilities/http';

const mockResult = {
  status: 202,
  statusText: 'OK',
  error: false,
  result: [{ name: 'mock', url: 'mock', html_url: 'mock' }],
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

describe('Testing Repos Api', () => {
  it('should return success data', async () => {
    const result = await ReposAPI.GetUserRepos('mock');
    expect(result).toEqual(mockResult);
  });

  it('should return error data', async () => {
    Http.Get = jest.fn().mockReturnValueOnce(mockResultError);
    const result = await ReposAPI.GetUserRepos('mock');
    const expectResult = {
      ...mockResultError,
      message: undefined,
    };
    expect(result).toEqual(expectResult);
  });
});
