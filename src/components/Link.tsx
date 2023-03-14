import React, { ReactNode } from "react"

const Link = ({ to, children, close }: SettingCirclePRops) => {
  const action = () => {
    if (!close) {
      chrome.runtime.sendMessage({ action: "resize-window-for-options" })
    } else {
      window.close()
    }
  }

  return (
    <a href={to} onClick={action}>
      {children}
    </a>
  )
}

interface SettingCirclePRops {
  to?: string
  children: ReactNode
  close?: boolean
}

export default Link
