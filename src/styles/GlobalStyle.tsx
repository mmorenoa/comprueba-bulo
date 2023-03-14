import { createGlobalStyle } from "styled-components"

import { textColor } from "./darkMode/darkModeThemeColors"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Inter", sans-serif !important;
  }
  svg {
    color: ${textColor};
    cursor: pointer;
  }
`

export default GlobalStyle
