import theme from 'styled-theming';
import { Colors } from './colors';

export const backgroundColor = theme('mode', {
  light: "#fff",
  dark: Colors.Blue,
});

export const linkContainerBackgroundColor = theme('mode', {
  light: "#fff",
  dark: Colors.LinkContainerDarkMode,
});

export const textColor = theme('mode', {
  light: Colors.Blue,
  dark: '#fff'
});

export const secondaryTextColor = theme('mode', {
  light: Colors.SecondaryText,
  dark: Colors.SecondaryTextDarkMode
})

export const buttonBackgroundColor = theme('mode', {
  light: '#fff',
  dark: Colors.Blue,
});

export const buttonTextColor = theme('mode', {
  light: Colors.Blue,
  dark: '#fff'
});