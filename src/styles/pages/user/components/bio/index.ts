import styled from 'styled-components';
import { Box } from '@styles/ui/box';
import SvgCompanyIcon from '@assets/img/company-icon.svg';
import SvgLocationIcon from '@assets/img/location-icon.svg';
import SvgLinkIcon from '@assets/img/link-icon.svg';

const Icon = (theme) => `
  font-size: 0.9em;
  height: 1em;
  width: auto;
  fill: ${theme.colors.text.onPrimary}
`;

export const Wrapper = styled(Box)`
  margin-top: 20px;
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet.min}) {
    flex-direction: row;
    text-align: left;
  }
`;

export const FollowArea = styled(Flex)`
  justify-content: center;
  align-items: center;
  gap: 8px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet.min}) {
    gap: 20px;
  }
`;

export const InfoArea = styled(Flex)`
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  gap: 10px;
  word-break: break-all;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet.min}) {
    gap: 20px;
  }
`;

export const InfoWithIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const BioText = styled.p`
  text-align: center;
  margin-top: 2em;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.text.onPrimary};
`;

export const CompanyIcon = styled(SvgCompanyIcon)`
  ${({ theme }) => Icon(theme)}
`;

export const LocationIcon = styled(SvgLocationIcon)`
  ${({ theme }) => Icon(theme)}
`;

export const LinkIcon = styled(SvgLinkIcon)`
  ${({ theme }) => Icon(theme)}
`;
