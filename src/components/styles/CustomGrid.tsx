import { createTheme } from "@mui/material/styles"

export const customBreakpoints = createTheme({
  breakpoints: {
    values: {
      xs: 200,
      sm: 380,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  }
})