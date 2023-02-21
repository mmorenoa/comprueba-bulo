/*global chrome*/
import React from "react"
import { FloatingButton, FloatingButtonText, Icon } from "./styles/styled"

const Button = () => {
  const openExtensionHandler = () => {
    chrome.runtime.sendMessage({ action: "open-extension" })
  }

  return (
    <FloatingButton id="button-popup" onClick={openExtensionHandler}>
      <Icon src={chrome.runtime.getURL("local-responses/check.png") } />
      <FloatingButtonText>Verificar texto</FloatingButtonText>
    </FloatingButton>
  )
}
export default Button
