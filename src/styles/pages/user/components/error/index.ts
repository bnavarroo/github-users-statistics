import styled from 'styled-components';

export const Message = styled.p`
  font-size: 12px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet.min}) {
    font-size: 14px;
  }
`;

export default Message;
