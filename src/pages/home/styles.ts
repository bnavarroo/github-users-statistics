import styled from 'styled-components';
import GithubLogo from '@assets/img/github-logo.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 5%;
`;

export const Logo = styled(GithubLogo)`
  width: 100px;
  height: auto;
  fill: ${({ theme }) => theme.colors.text.onPrimary};
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet.min}) {
    width: 200px;
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  margin-top: 20px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet.min}) {
    font-size: 22px;
  }
`;

export const SearchWrapper = styled.div`
  margin-top: 20px;
  font-size: 16px;
  width: 100%;
  max-width: 600px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet.min}) {
    font-size: 28px;
  }
`;
