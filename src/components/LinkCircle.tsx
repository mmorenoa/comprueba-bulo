import React from "react"

import { Circle } from "~src/styles/styled"

const LinkCircle = ({ color, to, children }: SettingCirclePRops) => {
  const resizeWindow = () => {
    chrome.runtime.sendMessage({ action: "resize-window-for-options" })
  }

  return (
    <Circle color={color} href={to} onClick={resizeWindow}>
      {children}
    </Circle>
  )
}

interface SettingCirclePRops {
  to: string
  color?: string
  children: unknown
}

export default LinkCircle
