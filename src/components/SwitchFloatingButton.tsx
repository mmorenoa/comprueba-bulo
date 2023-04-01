import { Switch } from "@mui/material"
import React, { useEffect, useState } from "react"

const SwitchFloatingButton = () => {
  const [floatingButton, setfloatingButton] = useState(true)

  useEffect(() => {
    initializeFloatingButton()
  })

  const initializeFloatingButton = () => {
    chrome.storage.local.get("floatingButton", (data) => {
      setfloatingButton(data.floatingButton)
    })
  }

  const toggleFloatingButton = () => {
    if (!floatingButton) {
      chrome.storage.local.set({ floatingButton: true }, () => {
        setfloatingButton(true)
      })
    } else {
      chrome.storage.local.set({ floatingButton: false }, () => {
        setfloatingButton(false)
      })
    }
  }
  return <Switch onChange={toggleFloatingButton} checked={floatingButton} />
}

export default SwitchFloatingButton
