import React from "react"

import { Circle, SettingIconInPopup } from "~src/styles/styled"

const SettingsCircle = ({ color }: SettingCirclePRops) => {
  const openOptions = () => {
    chrome.runtime.sendMessage({ action: "open-options" })
  }

  return (
    <Circle color={color} onClick={openOptions}>
      <SettingIconInPopup src="icons/setting32.png" />
    </Circle>
  )
}

interface SettingCirclePRops {
  color?: string
}

export default SettingsCircle
