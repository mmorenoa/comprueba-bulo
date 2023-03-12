import { createGlobalStyle } from 'styled-components';
import { backgroundColor } from './darkMode/darkModeThemeColors';
 
const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Inter", sans-serif !important;
  }
  svg {
    color: ${backgroundColor};
  }
`;
 
export default GlobalStyle;