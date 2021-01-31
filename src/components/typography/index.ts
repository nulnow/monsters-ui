import styled from 'styled-components';
import {ITheme, lightTheme} from "../../theme";

const H = styled.h1.attrs((props) => ({
  theme: props.theme ?? lightTheme, // todo seems not to work
}))<{ theme: ITheme }>`
  color: ${(props) => props.theme.headingColor ?? lightTheme.headingColor};
  font-family: Roboto, sans-serif;
`;

const Sub = styled.h1.attrs((props) => ({
  theme: props.theme ?? lightTheme,
}))<{ theme: ITheme }>`
  color: ${(props) => props.theme.subheadingColor ?? lightTheme.subheadingColor};
  font-family: Roboto, sans-serif;
`;

export const H1 = styled(H)`
  font-size: 72px;
`;

export const H2 = styled(H)`
  font-size: 48px;
`;

export const Subheading = styled(Sub)`
  font-size: 36px;
`;
