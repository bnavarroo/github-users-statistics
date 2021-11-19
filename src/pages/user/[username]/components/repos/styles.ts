import styled from 'styled-components';
import { Box } from '@styles/ui/box';

export const Wrapper = styled.section`
  display: table;
  width: 100%;
  margin-top: 40px;
`;

export const RepoList = styled.div`
  display: grid;
  grid-template-columns: 100%;
  text-align: center;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  width: 100%;
  justify-content: center;
  align-items: stretch;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet.min}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopSmall.min}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Title = styled.h3`
  font-size: 1.25em;
  font-weight: 600;
  text-align: center;
  margin-bottom: 0.75em;
`;

export const RepoBox = styled(Box)`
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet.min}) {
    justify-self: center;
  }
`;

export const RepoTitle = styled.p`
  font-size: 1.1em;
  font-weight: 600;
`;

export const RepoLink = styled.a`
  display: table;
  width: 100%;
  font-size: 0.85em;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.text.onPrimary};
  word-break: break-all;
`;
