import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { lightTheme } from './light.theme';
import { darkTheme } from './dark.theme';

const CustomThemeContext = createContext<React.Dispatch<React.SetStateAction<boolean>>>(() => {});

export const useCustomThemeContext = () => useContext(CustomThemeContext);

export const CustomThemeProvider: React.FC = ({ children }) => {
  const [darkThemeIsActive, setDarkThemeIsActive] = useState(false);

  return (
    <CustomThemeContext.Provider value={setDarkThemeIsActive}>
      <ThemeProvider theme={darkThemeIsActive ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </CustomThemeContext.Provider>
  );
};
