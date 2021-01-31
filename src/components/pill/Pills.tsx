import styled from 'styled-components';
import {fucsiaGlowCss, fucsiaGradientCss} from "../../styles";

export const Pills = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;

  list-style: none;
  padding: 0;
  
  & > * {
    margin-left: 10px;
  }
`;

export const Pill = styled.li`
  font-size: 16px;
  padding: 2px 15px;
  box-sizing: border-box;
  border-radius: 38px;

  color: white;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  
  ${fucsiaGradientCss};
  ${fucsiaGlowCss};
`;
