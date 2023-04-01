import React from "react"

import { DaltonicModeThemeManager } from "../styles/accesibilityMode/AccesibilityThemeContext"

import { DarkModeThemeManager } from "../styles/darkMode/DarkModeThemeContext"
import { ButtonContainer } from "../styles/styled"
import Button from "./Button"
import { useTranslation } from "react-i18next"
import "../i18n"


const AnimatedButton = () => {
  const openExtensionHandler = () => {
    chrome.runtime.sendMessage({ action: "open-extension" })
  }

  const openOptions = () => {
    chrome.runtime.sendMessage({ action: "open-options" })
  }

  const { t } = useTranslation()

  return (
    <DarkModeThemeManager>
      <DaltonicModeThemeManager>
        <ButtonContainer>
          <Button
            icon={chrome.runtime.getURL("icons/cheque24.png")}
            text={t("verifyText")}
            action={openExtensionHandler}
          />
          <Button
            secondary
            icon={chrome.runtime.getURL("icons/setting.png")}
            action={openOptions}
          />
        </ButtonContainer>
      </DaltonicModeThemeManager>
    </DarkModeThemeManager>
  )
}

export default AnimatedButton
