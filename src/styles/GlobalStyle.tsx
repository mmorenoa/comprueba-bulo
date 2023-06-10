import { createGlobalStyle } from "styled-components"

import { backgroundColor, textColor } from "./darkMode/darkModeThemeColors"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Inter", sans-serif !important;
    background-color: ${backgroundColor};
  }
  svg {
    color: ${textColor};
    cursor: pointer;
  }
`

export default GlobalStyle
