import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    @import url("https://fonts.googleapis.com/css2?family=Inter");
    font-family: "Inter", sans-serif;
  }
`;
 
export default GlobalStyle;