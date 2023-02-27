import React from "react"

import { ThemeManager } from "../components/styles/ThemeContext"
import Settings from "./Settings"

const OptionsIndex = () => {
  return (
    <ThemeManager>
      <Settings />
    </ThemeManager>
  )
}

export default OptionsIndex
