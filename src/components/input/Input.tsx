import styled from 'styled-components';

// todo add theme support
export const Input = styled.input`
  width: 100%;
  height: 32px;
  border: none;
  border-radius: 34px;

  background-color: #f4f4f4;

  color: #515151;
  font-family: Roboto, sans-serif;
  font-size: 18px;
  text-align: center;

  &:focus {
    outline: none;
    background-color: #efefef;
  }

  &::placeholder {
    color: #6F6F6F;
    font-family: Roboto, sans-serif;
    font-size: 18px;
    text-align: center;
  }
`;
