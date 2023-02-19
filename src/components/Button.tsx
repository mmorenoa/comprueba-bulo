/*global chrome*/
import React from "react"

const Button = () => {
  const openExtensionHandler = () => {
    chrome.runtime.sendMessage({ action: "open-extension" })
  }

  return (
    <div>
      <button id="button-popup" onClick={openExtensionHandler}>Abrir extensión</button>
    </div>
  )
}
export default Button
