/*global chrome*/

import React from "react"
import { ThemeProvider } from "styled-components"

import { useTheme } from "./styles/ThemeContext"
import { FloatingButton, FloatingButtonText, Icon } from "./styles/styled"

const Button = ({ icon, text, secondary = false, action }: ButtonProps) => {
  const theme = useTheme()
  return (
    <ThemeProvider theme={{ mode: theme.mode }}>
      <FloatingButton id="button-popup" secondary={secondary} onClick={action}>
        <Icon src={icon} />
        <FloatingButtonText>{text}</FloatingButtonText>
      </FloatingButton>
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
