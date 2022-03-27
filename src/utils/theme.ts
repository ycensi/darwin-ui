import 'styled-components';
import 'styled-system';
import { DefaultTheme } from 'styled-components';

interface Color {
  primary: string;
  background: string;
  foreground: string;
  accent: string;
  warning: string;
  info: string;
  error: string;
  text: string;
  bodyText: string;
}

export interface Theme {
  darkColors?: Color;
  lightColors?: Color;
  space?: Array<number>;
  fontSizes?: Array<number>;
}

const defaultLightColors: Color = {
  primary: '#bd93f9',
  background: '#f8f8f2',
  foreground: '#e4e4e4',
  accent: '#ffb86c',
  warning: '#f1fa8c',
  info: '#8be9fd',
  error: '#ff5555',
  text: '#282a36',
  bodyText: '#868686',
};
const defaultDarkColors: Color = {
  primary: '#bd93f9',
  background: '#282a36',
  foreground: '#000',
  accent: '#ffb86c',
  warning: '#f1fa8c',
  info: '#8be9fd',
  error: '#ff5555',
  text: '#fff',
  bodyText: '#868686',
};

const defaultFontSizes = [12, 14, 16, 20, 32];
const defaultSpace = [0, 10, 20, 30, 40];

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Color;
    space: Array<number>;
    fontSizes: Array<number>;
  }
}

export const useTheme = (mode: 'dark' | 'light'): DefaultTheme => ({
  colors: mode === 'dark' ? defaultDarkColors : defaultLightColors,
  space: defaultSpace,
  fontSizes: defaultFontSizes,
});

export const useCustomTheme = (mode: 'dark' | 'light', theme: Theme) => {
  const darkColors = theme.darkColors ? theme.darkColors : defaultDarkColors;
  const lightColors = theme.lightColors
    ? theme.lightColors
    : defaultLightColors;
  const space = theme.space ? theme.space : defaultSpace;
  const fontSizes = theme.fontSizes ? theme.fontSizes : defaultFontSizes;

  return {
    colors: mode === 'dark' ? darkColors : lightColors,
    space,
    fontSizes,
  };
};
