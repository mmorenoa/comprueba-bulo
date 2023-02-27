import theme from 'styled-theming';
import { Colors } from './colors';

export const backgroundColor = theme('darkMode', {
  false: "#fff",
  true: Colors.Blue,
});

export const linkContainerBackgroundColor = theme('darkMode', {
  false: "#fff",
  true: Colors.LinkContainerDarkMode,
});

export const textColor = theme('darkMode', {
  false: Colors.Blue,
  true: '#fff'
});

export const secondaryTextColor = theme('darkMode', {
  false: Colors.SecondaryText,
  true: Colors.SecondaryTextDarkMode
})

export const buttonBackgroundColor = theme('darkMode', {
  false: '#fff',
  true: Colors.Blue,
});

export const buttonTextColor = theme('darkMode', {
  false: Colors.Blue,
  true: '#fff'
});