import React from "react"

import Button from "./Button"
import { ButtonContainer } from "./styles/styled"

const AnimatedButton = () => {
  const openExtensionHandler = () => {
    chrome.runtime.sendMessage({ action: "open-extension" })
  }

  const disableFloatingButton = () => {
    chrome.storage.local.set({ floatingButton: "disabled" }, () => {
      document.getElementById("button-container").remove()
      console.log("Botón eliminado")
      console.log("Botón flotante deshabilitado")
    })
  }

  return (
    <ButtonContainer>
      <Button
        icon={chrome.runtime.getURL("local-responses/check.png")}
        text="Verificar texto"
        action={openExtensionHandler}
      />
      <Button
        secondary
        icon={chrome.runtime.getURL("local-responses/block.png")}
        text="Deshabilitar botón"
        action={disableFloatingButton}
      />
    </ButtonContainer>
  )
}

export default AnimatedButton
