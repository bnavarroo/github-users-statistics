import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: left;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet.min}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ContainerName = styled.div`
  margin-left: 10px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet.min}) {
    margin-left: 0px;
  }
`;

export const Image = styled.img`
  width: 6em;
  max-width: 95%;
  border-radius: 50%;
  border: 4px solid;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet.min}) {
    width: 12em;
  }
`;

export const Name = styled.h1`
  font-size: 1.5em;
  font-weight: 600;
  margin-top: 10px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet.min}) {
    font-size: 2em;
  }
`;
export const Login = styled.h3`
  font-size: 0.85em;
  font-weight: 400;
  margin-top: 5px;
  color: #999;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet.min}) {
    font-size: 1em;
  }
`;
