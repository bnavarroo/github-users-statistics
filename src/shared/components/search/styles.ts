import styled, { css } from 'styled-components';
import SearchIcon from '@assets/img/search-icon.svg';

const resetFormItens = `
  background: none;
  border: none;
  outline: none;
`;

export const Form = styled.form`
  width: 100%;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: stretch;
  padding-bottom: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text.onPrimary};

  input {
    height: 1.2em;
    line-height: 1.2em;
    font-size: 1.2em;
    width: 100%;
    ${({ theme }) => css`
      padding-left: calc(${theme.paddingX} / 2);
      color: ${theme.colors.text.onPrimary};
    `};
    ${resetFormItens}
  }

  button {
    display: flex;
    align-items: center;
    background: none;
    font-size: 1.2em;
    padding: 0 calc(${({ theme }) => theme.paddingX} / 2);
    cursor: pointer;
    ${resetFormItens}
  }
`;

export const Icon = styled(SearchIcon)`
  height: 1.2em;
  width: auto;
  fill: ${({ theme }) => theme.colors.text.onPrimary};
`;

export default SearchBox;
