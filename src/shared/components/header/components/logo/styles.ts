import styled from 'styled-components';
import GithubLogo from '@assets/img/github-logo.svg';

export const Img = styled(GithubLogo)`
  width: 60px;
  height: auto;
  fill: ${({ theme }) => theme.colors.text.onPrimary};
  @media (min-width: ${({ theme }) => theme.breakpoints.desktopSmall.min}) {
    width: 80px;
  }
`;

export const LinkLogo = styled.a`
  cursor: pointer;
`;
