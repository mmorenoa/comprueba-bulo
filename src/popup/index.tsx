import React from "react"

import { ThemeManager } from "../components/styles/ThemeContext"
import Popup from "./Popup"

const PopupIndex = () => {
  return (
    <ThemeManager>
      <Popup />
    </ThemeManager>
  )
}

export default PopupIndex
