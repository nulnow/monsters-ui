import type { ITheme } from './theme.interface';
import { commonTheme } from './common.theme';

export const darkTheme: ITheme = {
  ...commonTheme,
  logoColor: '#ffffff',
  bodyColor: '#212121',
  headingColor: '#ffffff',
  subheadingColor: '#ffffff',
  textColor: '#ffffff',
  borderedButtonColor: '#000000',
};
