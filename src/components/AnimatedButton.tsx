import React from "react"

import Button from "./Button"
import { ThemeManager } from "./styles/ThemeContext"
import { ButtonContainer } from "./styles/styled"

const AnimatedButton = () => {
  const openExtensionHandler = () => {
    chrome.runtime.sendMessage({ action: "open-extension" })
  }

  const openOptions = () => {
    chrome.runtime.sendMessage({ action: "open-options" })
  }

  return (
    <ThemeManager>
      <ButtonContainer>
        <Button
          icon={chrome.runtime.getURL("local-responses/cheque24.png")}
          text="Verificar texto"
          action={openExtensionHandler}
        />
        <Button
          secondary
          icon={chrome.runtime.getURL("local-responses/setting.png")}
          action={openOptions}
        />
      </ButtonContainer>
    </ThemeManager>
  )
}

export default AnimatedButton
