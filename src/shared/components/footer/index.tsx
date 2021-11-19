import GithubLogo from '@assets/img/github-logo.svg';
import LinkedinLogo from '@assets/img/linkedin-logo.svg';
import {
  Container,
  Wrapper,
  DevelopByText,
  ImagesWrapper,
  ImageContent,
} from './styles';

const Footer: React.FC = () => (
  <Container>
    <Wrapper>
      <DevelopByText>
        Desenvolvido por <b>Bruno Navarro</b>
      </DevelopByText>
      <ImagesWrapper>
        <ImageContent href="https://github.com/bnavarroo" target="_blank">
          <GithubLogo />
          <span>/bnavarroo</span>
        </ImageContent>
        <ImageContent
          href="https://www.linkedin.com/in/bruno-navarro-oliveira/"
          target="_blank"
        >
          <LinkedinLogo />
          <span>/bruno-navarro-oliveira</span>
        </ImageContent>
      </ImagesWrapper>
    </Wrapper>
  </Container>
);

export default Footer;
