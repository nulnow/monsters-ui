import React from 'react';
import GlobalStyle from "./global-styles";
import styled from "styled-components";

export const FlexRowWithSpaceBetween = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  
  & > * {
    margin-right: 10px;
  }
`;

export const withGlobalStyles = (jsx: any) => {
  return <>
    <GlobalStyle />
    {jsx}
  </>
};
