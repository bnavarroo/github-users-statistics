import styled from 'styled-components';
import { PageContainer } from '@styles/ui/container';

const paddingYColumns = '15px';

export const switchOffColor = '#DDD';

export const switchBoxShadow = '0px 1px 5px rgba(0, 0, 0, 0.6)';

export const switchActiveBoxShadow = '0px 0px 1px 5px rgba(0, 0, 0, 0.2)';

const EndColumn = styled.div`
  padding: ${paddingYColumns} 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet.min}) {
    width: 100%;
    max-width: 200px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopSmall.min}) {
    max-width: 280px;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  border-bottom: 4px solid rgba(0, 0, 0, 0.075);
`;

export const HeaderWrapper = styled(PageContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  &:before,
  &:after {
    display: none !important;
  }
`;

export const SearchColumn = styled(EndColumn)`
  order: 3;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet.min}) {
    order: 1;
  }
`;

export const LogoColumn = styled.div`
  order: 1;
  padding: ${paddingYColumns} 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet.min}) {
    order: 2;
  }
`;

export const ThemeSwitchColumn = styled(EndColumn)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  order: 2;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet.min}) {
    order: 3;
  }
`;

export const ThemeSwitchLabel = styled.div`
  font-size: 12px;
  margin-top: 10px;
`;
