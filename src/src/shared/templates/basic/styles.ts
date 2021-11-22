import styled from 'styled-components';
import { PageContainer } from '@styles/ui/container';
import getContentMinHeight from '@shared/functions/ui';

const TemplatePageWrapper = styled(PageContainer)`
  ${({ theme }) => getContentMinHeight(theme, false)}
`;

export default TemplatePageWrapper;
