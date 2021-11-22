import {
  Wrapper,
  Title,
  RepoList,
  RepoBox,
  RepoTitle,
  RepoLink,
} from './styles';

type ReposProps = {
  repos: Array<{
    name: string;
    url: string;
    // eslint-disable-next-line camelcase
    html_url: string;
  }>;
};

const Repos: React.FC<ReposProps> = ({ repos }) => (
  <Wrapper>
    <Title>Repositórios Públicos</Title>
    <RepoList>
      {repos.length > 0 ? (
        repos.map((repo) => (
          <RepoBox key={repo.name}>
            <RepoTitle>{repo.name}</RepoTitle>
            <RepoLink
              href={repo.html_url}
              target="_blank"
              rel="noreferrer noopener"
            >
              {repo.html_url}
            </RepoLink>
          </RepoBox>
        ))
      ) : (
        <div>Nenhum repositório encontrado</div>
      )}
    </RepoList>
  </Wrapper>
);

export default Repos;
