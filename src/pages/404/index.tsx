import IThemeProps from '@core/interfaces/theme';
import HeaderTemplate from '@shared/templates/header';
import { Container, Title, Subtitle } from '@styles/ui/error-page';
import { Logo } from '@styles/pages/404';

const Custom404: React.FC<IThemeProps> = ({ theme, toggleTheme }) => (
  <HeaderTemplate theme={theme} toggleTheme={toggleTheme}>
    <Container>
      <Logo src="/not-found-logo.png" alt="Página não encontrada" />
      <div>
        <Title>Ooops...</Title>
        <Subtitle>Parece que essa página não existe.</Subtitle>
      </div>
    </Container>
  </HeaderTemplate>
);

export default Custom404;
