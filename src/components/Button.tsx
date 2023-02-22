/*global chrome*/

import React from "react"

import { FloatingButton, FloatingButtonText, Icon } from "./styles/styled"

const Button = ({children, icon, text, secondary = false }: ButtonProps) => {
  const openExtensionHandler = () => {
    chrome.runtime.sendMessage({ action: "open-extension" })
  }

  return (
    <FloatingButton
      id="button-popup"
      onClick={openExtensionHandler}
      secondary={secondary}>
      <Icon src={icon} />
      <FloatingButtonText>{text}</FloatingButtonText>
      {children}
    </FloatingButton>
  )
}

interface ButtonProps {
  icon: unknown
  text: string
  secondary?: boolean
  children?: unknown
}

export default Button
