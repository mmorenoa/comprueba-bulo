import React from "react"
import { ThemeProvider } from "styled-components"

import { useDaltonicModeTheme } from "~src/styles/accesibilityMode/AccesibilityThemeContext"

import { useDarkModeTheme } from "../styles/darkMode/DarkModeThemeContext"
import { FloatingButton, FloatingButtonText, Icon } from "../styles/styled"

const Button = ({ icon, text, secondary = false, action }: ButtonProps) => {
  const darkModeTheme = useDarkModeTheme()
  const daltonicModeTheme = useDaltonicModeTheme()

  return (
    <ThemeProvider theme={darkModeTheme}>
      <ThemeProvider theme={daltonicModeTheme}>
        <FloatingButton
          id="button-popup"
          secondary={secondary}
          onClick={action}>
          <Icon src={icon} />
          {text ? <FloatingButtonText>{text}</FloatingButtonText> : ""}
        </FloatingButton>
      </ThemeProvider>
    </ThemeProvider>
  )
}

interface ButtonProps {
  icon: unknown
  text?: string
  secondary?: boolean
  action: () => void
}

export default Button
