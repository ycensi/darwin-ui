/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { ThemeProvider as Provider } from 'styled-components';
import { Theme, useCustomTheme, useTheme } from '../theme';

interface ThemeProviderProp {
  children: JSX.Element | JSX.Element[];
  mode: 'dark' | 'light';
  theme?: Theme;
}

export const ThemeProvider = (props: ThemeProviderProp): JSX.Element => {
  const { children, mode, theme } = props;
  const currentTheme = theme ? useCustomTheme(mode, theme) : useTheme(mode);
  return <Provider theme={currentTheme}>{children}</Provider>;
};
