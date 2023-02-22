import React from "react"

import Button from "./Button"
import { ButtonContainer } from "./styles/styled"

const AnimatedButton = () => (
  <ButtonContainer>
    <Button
      icon={chrome.runtime.getURL("local-responses/check.png")}
      text="Verificar texto">
      {" "}
    </Button>
    <Button
      secondary
      icon={chrome.runtime.getURL("local-responses/block.png")}
      text="Deshabilitar botón"
    />
  </ButtonContainer>
)

export default AnimatedButton
