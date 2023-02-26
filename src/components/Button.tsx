/*global chrome*/

import React from "react"

import { FloatingButton, FloatingButtonText, Icon } from "./styles/styled"

const Button = ({ icon, text, secondary = false, action }: ButtonProps) => {
  return (
    <FloatingButton id="button-popup" secondary={secondary} onClick={action}>
      <Icon src={icon} />
      <FloatingButtonText>{text}</FloatingButtonText>
    </FloatingButton>
  )
}

interface ButtonProps {
  icon: unknown
  text?: string
  secondary?: boolean
  action: () => void
}

export default Button
