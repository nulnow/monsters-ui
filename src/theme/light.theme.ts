import type { ITheme } from './theme.interface';
import { commonTheme } from './common.theme';

export const lightTheme: ITheme = {
  ...commonTheme,
  logoColor: '#212121',
  bodyColor: '#ffffff',
  headingColor: '#212121',
  subheadingColor: '#474747',
  textColor: '#474747',
  borderedButtonColor: '#212121',
};
