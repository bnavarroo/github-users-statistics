import { ResponseApiErrorMsg } from '@core/types/api';
import { Container, Title, Subtitle } from '@styles/ui/error-page';
import { Message } from '@styles/pages/user/components/error';

const UserErrorMessage: React.FC<ResponseApiErrorMsg> = ({
  text,
  description,
}) => (
  <Container>
    <Title>Ooops...</Title>
    <Subtitle>{text}</Subtitle>
    {description && <Message>{description}</Message>}
  </Container>
);

export default UserErrorMessage;
