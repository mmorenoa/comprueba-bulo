import React from "react"

import { DaltonicModeThemeManager } from "../styles/accesibilityMode/AccesibilityThemeContext"
import { DarkModeThemeManager } from "../styles/darkMode/DarkModeThemeContext"
import Settings from "./Settings"

import "../i18n"

const OptionsIndex = () => {
  return (
    <DarkModeThemeManager>
      <DaltonicModeThemeManager>
        <Settings />
      </DaltonicModeThemeManager>
    </DarkModeThemeManager>
  )
}

export default OptionsIndex
