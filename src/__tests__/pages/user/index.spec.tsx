import { GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { shallow } from 'enzyme';
import { themes } from '@config/theme';
import User, { getServerSideProps } from '@pages/user/[username]';
import { ResponseApi } from '@core/types/api';
import { UserType } from '@core/types/api/user';
import * as UsersAPIMock from '@shared/api/user';

jest.mock('@shared/api/user');

const getUserDataMock = (error = false): ResponseApi<UserType> => ({
  error,
  message: {
    text: 'mock',
    description: 'mock',
  },
  result: {
    login: 'mock',
    name: 'mock',
    public_repos: 1,
    followers: 1,
    following: 1,
  },
  status: 200,
  statusText: 'mock',
});

describe('Testing User Page', () => {
  const toggleThemeMock = jest.fn();

  it('should render page with userData', () => {
    const wrapper = shallow(
      <User
        userData={getUserDataMock(true)}
        theme={themes.default}
        toggleTheme={toggleThemeMock}
      />
    );
    expect(wrapper.isEmptyRender()).toBeFalsy();
  });

  it('should render page with error', () => {
    const wrapper = shallow(
      <User
        userData={{ ...getUserDataMock(true), error: true, result: null }}
        theme={themes.default}
        toggleTheme={toggleThemeMock}
      />
    );
    expect(wrapper.isEmptyRender()).toBeFalsy();
  });
});

describe('Testing getServerSideProps from User Page', () => {
  const contextMock = {
    query: {
      username: 'mock',
    } as ParsedUrlQuery,
  };

  it('should execute function getServerSideProps returning data', async () => {
    UsersAPIMock.default.GetUser = jest
      .fn()
      .mockReturnValueOnce(getUserDataMock());
    const result = await getServerSideProps(
      contextMock as GetServerSidePropsContext
    );
    const expectResult = { props: { userData: { ...getUserDataMock() } } };
    expect(result).toEqual(expectResult);
  });

  it('should execute function getServerSideProps not returning data', async () => {
    UsersAPIMock.default.GetUser = undefined;
    const result = await getServerSideProps(
      contextMock as GetServerSidePropsContext
    );
    const expectResult = {
      props: {
        userData: {
          error: true,
          message: {
            text: 'Erro ao buscar dados de usuário em UsersAPI.GetUser',
          },
        },
      },
    };
    expect(result).toEqual(expectResult);
  });
});
