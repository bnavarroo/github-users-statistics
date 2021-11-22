import BasicTemplate from '@shared/templates/basic';
import Search from '@shared/components/search';
import { Container, Logo, Title, SearchWrapper } from '@styles/pages/home';

const Home: React.FC = () => (
  <BasicTemplate>
    <Container>
      <Logo />
      <Title>Informe o username:</Title>
      <SearchWrapper>
        <Search />
      </SearchWrapper>
    </Container>
  </BasicTemplate>
);

export default Home;
