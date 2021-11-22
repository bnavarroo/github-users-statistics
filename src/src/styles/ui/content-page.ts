import styled from 'styled-components';
import getContentMinHeight from '@shared/functions/ui';

export const ContentPage = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  box-sizing: border-box;
  ${({ theme }) => getContentMinHeight(theme, true)}
`;

export const ContentPageFlex = styled(ContentPage)`
  display: flex;
  flex-direction: column;
`;
