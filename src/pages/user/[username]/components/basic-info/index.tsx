import { Container, ContainerName, Image, Name, Login } from './styles';

type BasicInfoProps = {
  name: string;
  login: string;
  imageSrc: string | null;
};

const BasicInfo: React.FC<BasicInfoProps> = ({ name, login, imageSrc }) => (
  <Container>
    <Image src={imageSrc} alt={name} title={name} />
    <ContainerName>
      <Name>{name}</Name>
      <Login>({login})</Login>
    </ContainerName>
  </Container>
);

export default BasicInfo;
