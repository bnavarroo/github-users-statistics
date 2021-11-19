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
            <RepoLink href={repo.url} target="_blank">
              {repo.url}
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
