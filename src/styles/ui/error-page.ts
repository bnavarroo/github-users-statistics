import styled from 'styled-components';
import { ContentPageFlex } from './content-page';

export const Container = styled(ContentPageFlex)`
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet.min}) {
    font-size: 42px;
  }
`;

export const Subtitle = styled.h3`
  font-size: 18px;
  margin-top: 12px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet.min}) {
    font-size: 24px;
  }
`;
