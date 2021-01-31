import { createGlobalStyle } from 'styled-components';
import {ITheme, lightTheme} from "../theme";

const GlobalStyle = createGlobalStyle<{ theme: ITheme }>`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  *,
  *:after,
  *:before {
    box-sizing: inherit;
  }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    color: #333;
    font-size: 16px;
  }

  body {
    background-color: ${props => props.theme?.bodyColor ?? lightTheme.bodyColor};
    font-family: 'Nexa', Arial, sans-serif;
    font-weight: normal;
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    transition: 0.2s;
  }
  
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyle;
