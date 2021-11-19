import styled, { css } from 'styled-components';

type PageContainerProps = {
  $full?: boolean;
};

export const PageContainer = styled.div<PageContainerProps>`
  ${({ theme }) => css`
    width: 100%;
    padding-left: ${theme.paddingX};
    padding-right: ${theme.paddingX};
  `};
  max-width: 100%;
  box-sizing: border-box;
  &:before,
  &:after {
    content: ' ';
    display: table;
  }
  &:after {
    clear: both;
  }
  ${({ theme, $full }) => css`
    ${!$full &&
    `
        width: calc(100% - (${theme.paddingX} * 2));
        margin-left: auto;
        margin-right: auto;
        @media(min-width: ${theme.breakpoints.tablet.min}) {
          max-width: ${theme.breakpoints.tablet.min};
        }
        @media(min-width: ${theme.breakpoints.desktopSmall.min}) {
          max-width: ${theme.breakpoints.desktopSmall.min};
        }
        @media(min-width: ${theme.breakpoints.desktop.min}) {
          max-width: ${theme.breakpoints.desktop.min};
        }
        `}
  `};
`;

export const TemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 99.8vh;
`;
