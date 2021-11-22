import styled from 'styled-components';
import { ContentPage } from '@styles/ui/content-page';

export const Wrapper = styled(ContentPage)`
  font-size: 16px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet.min}) {
    font-size: 20px;
  }
`;

export default Wrapper;
