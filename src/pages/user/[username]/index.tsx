import IThemeProps from '@core/interfaces/theme';
import { ResponseApi } from '@core/types/api';
import { UserType } from '@core/types/api/user';
import UsersAPI from '@shared/api/user';
import HeaderTemplate from '@shared/templates/header';
import { Wrapper } from '@styles/pages/user';
import UserErrorMessage from './components/error';
import BasicInfo from './components/basic-info';
import Bio from './components/bio';
import Repos from './components/repos';

interface IUserProps extends IThemeProps {
  userData: ResponseApi<UserType>;
}

const User: React.FC<IUserProps> = ({ theme, toggleTheme, userData }) => {
  const { error, message, result } = userData;
  const {
    avatar_url: avatarUrl,
    name,
    login,
    company,
    blog,
    location,
    bio,
    followers,
    following,
    repos,
  } = result ?? {};
  return (
    <HeaderTemplate
      theme={theme}
      toggleTheme={toggleTheme}
      title={name ?? null}
    >
      {error ? (
        <UserErrorMessage {...message} />
      ) : (
        <Wrapper>
          <BasicInfo name={name} login={login} imageSrc={avatarUrl} />
          <Bio
            company={company}
            blog={blog}
            location={location}
            bio={bio}
            followers={followers}
            following={following}
          />
          <Repos repos={repos} />
        </Wrapper>
      )}
    </HeaderTemplate>
  );
};

export default User;

export async function getServerSideProps(context) {
  const errorMsg = 'Erro ao buscar dados de usuário em UsersAPI.GetUser';
  try {
    const userData = await UsersAPI.GetUser(context.query.username);
    return {
      props: { userData },
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(errorMsg, {
      username: context.query.username,
      error,
    });
    return {
      props: {
        userData: {
          error: true,
          message: {
            text: errorMsg,
          },
        },
      },
    };
  }
}
