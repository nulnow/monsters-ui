import styled from "styled-components";
import Color from 'color';
import {ITheme, lightTheme} from "../../theme";
import {blueGlowCss} from "../../styles";

const BorderedButtonCommon = styled.button<{ theme: ITheme }>`
  width: 225px;
  height: 35px;
  border: 2px solid ${(props) => props.theme.borderedButtonColor ?? lightTheme.borderedButtonColor};
  border-radius: 20px;
  box-sizing: border-box;

  background-color: white;

  color: ${(props) => props.theme.borderedButtonColor ?? lightTheme.borderedButtonColor};
  font-size: 18px;
  font-weight: 800;

  cursor: pointer;

  &:hover {
    background-color: #fafafa;
  }

  &:focus {
    background-color: #fafafa;
    outline: none;
  }

  &:active {
    background-color: #f6f5f5;
    border-color: ${(props) => Color(props.theme.borderedButtonColor ?? lightTheme.borderedButtonColor).opaquer(0.5).string()};
  }
`;

export const BorderedButton = styled(BorderedButtonCommon)`

`;

export const BorderedButtonText = styled(BorderedButtonCommon)`
  border: none;
`;

const PrimaryButtonCommon = styled.button<{ theme: ITheme }>`
  width: 120px;
  height: 35px;
  border: none;
  border-radius: 30px;
  box-sizing: border-box;

  background-color: ${(props) => props.theme.buttonDefaultBgColor ?? lightTheme.buttonDefaultBgColor};

  color: ${(props) => props.theme.buttonDefaultTextColor ?? lightTheme.buttonDefaultTextColor};
  font-size: 18px;
  font-weight: 700;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => Color(props.theme.buttonDefaultBgColor ?? lightTheme.buttonDefaultBgColor).lighten(0.1).string()};
  }

  &:focus {
    background-color: ${(props) => Color(props.theme.buttonDefaultBgColor ?? lightTheme.buttonDefaultBgColor).lighten(0.1).string()};
    outline: none;
  }

  &:active {
    background-color: ${(props) => Color(props.theme.buttonDefaultBgColor ?? lightTheme.buttonDefaultBgColor).lighten(0.2).string()};
  }
`;

export const PrimaryButton = styled(PrimaryButtonCommon)<{ theme: ITheme, glow?: boolean }>`
  background-color: ${(props) => props.theme.actionColor ?? lightTheme.actionColor};

  color: white;

  ${p => p.glow ? blueGlowCss : ''};

  &:hover {
    background-color: ${(props) => Color(props.theme.actionColor ?? lightTheme.actionColor).lighten(0.1).string()};
  }

  &:focus {
    background-color: ${(props) => Color(props.theme.actionColor ?? lightTheme.actionColor).lighten(0.1).string()};
    outline: none;
  }

  &:active {
    background-color: ${(props) => Color(props.theme.actionColor ?? lightTheme.actionColor).lighten(0.2).string()};
  }
`;

export const ButtonDefaultEmpty = styled(PrimaryButtonCommon)<{ theme: ITheme }>`
  background-color: white;

  color: ${(props) => props.theme.borderedButtonColor ?? lightTheme.borderedButtonColor};

  &:hover {
    background-color: #fafafa;
  }

  &:focus {
    background-color: #fafafa;
    outline: none;
  }

  &:active {
    background-color: #f6f5f5;
    border-color: ${(props) => Color(props.theme.borderedButtonColor ?? lightTheme.borderedButtonColor).opaquer(0.5).string()};
  }
`;

export const LinkButton = styled.button<{ theme: ITheme }>`
  display: inline;
  
  padding: 0;
  box-sizing: border-box;
  border: none;
  
  background-color: transparent;
  
  color: ${p => p.theme.actionColor ?? lightTheme.actionColor};
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 500;
  
  cursor: pointer;
  
  &:active {
    color: red;
  }
  
  &:focus {
    outline: none;
  }
`;
